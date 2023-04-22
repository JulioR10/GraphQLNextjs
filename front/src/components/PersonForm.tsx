// components/PersonForm.tsx

import { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREAR_PERSONA_MUTATION = gql`
  mutation CrearPersona($nombre: String!, $telefono: String!, $fecha: String!) {
    crearPersona(nombre: $nombre, telefono: $telefono, fecha: $fecha) {
      id
      nombre
      telefono
      fecha
    }
  }
`;

const PersonForm = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");

  const [crearPersona] = useMutation(CREAR_PERSONA_MUTATION, {
    refetchQueries: ["personas"],
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await crearPersona({ variables: { nombre, telefono, fecha } });
      setNombre("");
      setTelefono("");
      setFecha("");
    } catch (error) {
      console.error("Error al crear persona:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </label>
      <label>
        Teléfono:
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </label>
      <label>
        Fecha:
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </label>
      <button type="submit">Guardar</button>
    </form>
  );
};

export default PersonForm;
