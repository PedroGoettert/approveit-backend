import { fastify } from "fastify";

const server = fastify();

server
	.listen({
		port: 3333,
		host: "0.0.0.0",
	})
	.then(() => console.log("Servidor rodando na porta 3333"));
