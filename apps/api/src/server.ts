import fastify from "fastify";
import { User } from "@monorepo/schemas";
import cors from "@fastify/cors";

const server = fastify();

server.register(cors);

server.get("/", async (request, reply) => {
  const user: User = {
    username: "dierkens.dev",
  };

  return { user };
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
