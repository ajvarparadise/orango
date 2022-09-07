import { serve } from "https://deno.land/std@0.154.0/http/mod.ts";
import { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";
import { GraphQLHTTP } from "https://deno.land/x/gql@1.1.2/mod.ts";
import { type GQLRequest } from "https://deno.land/x/gql@1.1.2/types.ts";
import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => `Hello World!`,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = GraphQLHTTP({ schema, graphiql: true });

serve((req: GQLRequest) => app(req), { port: 3000 });
