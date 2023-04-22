// import { useQuery, gql } from "@apollo/client";

// const PERSONAS_QUERY = gql`
//   query {
//     personas {
//       id
//       nombre
//       telefono
//       fecha
//     }
//   }
// `;

// export default function Home() {
//   const { loading, error, data } = useQuery(PERSONAS_QUERY);

//   if (loading) return <p>Cargando...</p>;
//   if (error) return <p>Error :</p>;

//   return (
//     <div>
//       <h1>Lista de personas</h1>
//       <ul>
//         {data.personas.map((persona: any) => (
//           <li key={persona.id}>
//             {persona.nombre} - {persona.telefono} - {persona.fecha}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// pages/index.tsx

import PersonList from "../components/PersonList";

const Index = () => {
  return (
    <div>
      <h1>Agenda</h1>
      <PersonList />
    </div>
  );
};

export default Index;
