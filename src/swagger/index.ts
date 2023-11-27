const PORT = process.env.PORT;

export const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Liga Bazook API Swagger docs",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LigaBazooka",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/*.ts"],
};
