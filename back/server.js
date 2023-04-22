require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { MongoClient } = require("mongodb");
const { typeDefs, resolvers } = require("./schema");

// Conexión a MongoDB
const MONGODB_URI = process.env.MONGODB_URI;

async function connectDB() {
  const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
  await client.connect();
  const db = client.db();
  return db;
}

async function main() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { db: await connectDB() },
  });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Servidor listo en http://localhost:4000${server.graphqlPath}`
    )
  );
}

main().catch(console.error);
