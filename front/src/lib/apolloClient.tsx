import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

// const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

// let client: ApolloClient<NormalizedCacheObject> | undefined = undefined;

// export const getSSRClient = () => {
//   if (!client || window === undefined) {
//     client = new ApolloClient({
//       uri: "http://localhost:4000/graphql",
//       cache: new InMemoryCache(),
//     });
//   }
//   return client;
// };

// export const CSRClient = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

// let client: ApolloClient<NormalizedCacheObject> | undefined = undefined;

// const getClient = () => {
//   if (window === undefined) {
//     return new ApolloClient({
//       uri: "http://localhost:4000/graphql",
//       cache: new InMemoryCache(),
//     });
//   } else {
//     return CSRClient;
//   }
// };

// const CSRClient = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache(),
// });

// export default getClient;

let client: ApolloClient<NormalizedCacheObject> | undefined = undefined;

const getClient = () => {
  if (typeof window !== "undefined") {
    // Si window no es undefined, estamos en el lado del cliente
    if (!client) {
      // Si el cliente aún no se ha creado, crea una nueva instancia
      client = new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache(),
      });
    }
    return client;
  } else {
    // Si window es undefined, estamos en el lado del servidor
    return new ApolloClient({
      uri: "http://localhost:4000/graphql",
      cache: new InMemoryCache(),
    });
  }
};

export default getClient;
