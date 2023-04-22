const { gql } = require("apollo-server-express");
const { ObjectId } = require("mongodb");

// Esquema GraphQL
const typeDefs = gql`
  type Persona {
    id: ID!
    nombre: String!
    telefono: String!
    fecha: String!
  }

  type Query {
    personas: [Persona]
    persona(id: ID, nombre: String): Persona
  }

  type Mutation {
    crearPersona(nombre: String!, telefono: String!, fecha: String!): Persona
    actualizarPersona(
      id: ID!
      nombre: String
      telefono: String
      fecha: String
    ): Persona
  }
`;

const resolvers = {
  Query: {
    personas: async (_, __, { db }) => {
      const personas = await db.collection("personas").find().toArray();
      return personas.map((persona) => ({
        ...persona,
        id: persona._id.toString(),
      }));
    },
    persona: async (_, { id, nombre }, { db }) => {
      if (id) {
        return await db.collection("personas").findOne({ _id: ObjectId(id) });
      } else if (nombre) {
        return await db.collection("personas").findOne({ nombre });
      } else {
        return null;
      }
    },
  },
  Mutation: {
    crearPersona: async (_, { nombre, telefono, fecha }, { db }) => {
      const result = await db
        .collection("personas")
        .insertOne({ nombre, telefono, fecha });
      const newPerson = result.ops[0];
      return { ...newPerson, id: newPerson._id.toString() };
    },
    actualizarPersona: async (_, { id, nombre, telefono, fecha }, { db }) => {
      const updateData = {};
      if (nombre) updateData.nombre = nombre;
      if (telefono) updateData.telefono = telefono;
      if (fecha) updateData.fecha = fecha;

      await db
        .collection("personas")
        .updateOne({ _id: ObjectId(id) }, { $set: updateData });
      return await db.collection("personas").findOne({ _id: ObjectId(id) });
    },
  },
};

module.exports = {
  typeDefs,
  resolvers,
};
