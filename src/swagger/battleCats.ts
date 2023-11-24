const getBattleCat = {
  tags: ["Battle Cats"],
  description: "Get Battle Cat",
  operationId: "getBattleCat",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Battle Cat ID",
      required: true,
      schema: {
        type: "string",
      },
    },
  ],
};

const battleCatResponse = {
  _id: {
    type: "string",
    example: "5f9d7a3b9d7a3b9d7a3b9d7a",
  },
  name: {
    type: "string",
    example: "Chili Parker",
  },
  description: {
    type: "string",
    example: "The best battle cat ever",
  },
};
