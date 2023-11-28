import { model, Schema, Types } from "mongoose";

const modelSchema = {
  _id: { type: Types.ObjectId },
  name: { type: String },
  description: { type: String },
  image: { type: String },
  battles: { type: Array },
};

const customSchema = new Schema(modelSchema, {
  collection: "mcs",
  timestamps: true,
});

export const customModel = model("Mcs", customSchema);
