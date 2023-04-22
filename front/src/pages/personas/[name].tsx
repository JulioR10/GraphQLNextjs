// pages/personas/[name].tsx

import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const PERSONA_QUERY = gql`
  query Persona($nombre: String!) {
    persona(nombre: $nombre) {
      id
      nombre
      telefono
      fecha
    }
  }
`;

const PersonDetail = () => {
  const router = useRouter();
  const { name } = router.query;

  const { loading, error, data } = useQuery(PERSONA_QUERY, {
    variables: { nombre: name },
  });

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data.persona) {
    return <p>No se encontró ninguna persona con el nombre "{name}".</p>;
  }

  const { nombre, telefono, fecha } = data.persona;

  return (
    <div>
      <h2>Detalles de la persona</h2>
      <p>Nombre: {nombre}</p>
      <p>Teléfono: {telefono}</p>
      <p>Fecha: {fecha}</p>
    </div>
  );
};

export default PersonDetail;
