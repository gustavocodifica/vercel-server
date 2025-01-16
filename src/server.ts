import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("HTTP server started"));

app.get("/hello-world", async (req, res) => {
  return res.send({
    message: "Hello world",
    success: true,
  });
});
