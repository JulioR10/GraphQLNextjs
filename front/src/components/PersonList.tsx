// // components/PersonList.tsx

// import { useQuery, useMutation, gql } from "@apollo/client";
// import { useState } from "react";
// import PersonForm from "./PersonForm";

// const PERSONAS_QUERY = gql`
//   query Personas {
//     personas {
//       id
//       nombre
//       telefono
//       fecha
//     }
//   }
// `;

// const CREAR_PERSONA_MUTATION = gql`
//   mutation CrearPersona($nombre: String!, $telefono: String!, $fecha: String!) {
//     crearPersona(nombre: $nombre, telefono: $telefono, fecha: $fecha) {
//       id
//       nombre
//       telefono
//       fecha
//     }
//   }
// `;

// const PersonList = () => {
//   const { loading, error, data } = useQuery(PERSONAS_QUERY);
//   const [crearPersona] = useMutation(CREAR_PERSONA_MUTATION);

//   const [nombre, setNombre] = useState("");
//   const [telefono, setTelefono] = useState("");
//   const [fecha, setFecha] = useState("");

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     await crearPersona({ variables: { nombre, telefono, fecha } });
//     setNombre("");
//     setTelefono("");
//     setFecha("");
//   };

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <h2>Lista de personas</h2>
//       <ul>
//         {data.personas.map((persona: any) => (
//           <li key={persona.id}>
//             <a href={`/personas/${persona.nombre}`}>{persona.nombre}</a>
//           </li>
//         ))}
//       </ul>
//       <h2>Crear nueva persona</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Nombre:
//           <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
//         </label>
//         <label>
//           Teléfono:
//           <input
//             value={telefono}
//             onChange={(e) => setTelefono(e.target.value)}
//           />
//         </label>
//         <label>
//           Fecha:
//           <input value={fecha} onChange={(e) => setFecha(e.target.value)} />
//         </label>
//         <button type="submit">Guardar</button>
//       </form>
//     </div>
//   );
// };

// export default PersonList;

// components/PersonList.tsx

import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import PersonForm from "./PersonForm";

const PERSONAS_QUERY = gql`
  query {
    personas {
      id
      nombre
      telefono
      fecha
    }
  }
`;

const PersonList = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(PERSONAS_QUERY);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.personas || data.personas.length === 0) {
    return (
      <div>
        <h2>No hay personas en la base de datos.</h2>
        <p>Por favor, introduce una persona a continuación:</p>
        <PersonForm />
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de personas</h2>
      <ul>
        {data.personas.map((person: any) => (
          <li
            key={person.id}
            onClick={() => router.push(`/personas/${person.nombre}`)}
          >
            {person.nombre}
          </li>
        ))}
      </ul>
      <PersonForm />
    </div>
  );
};

export default PersonList;
