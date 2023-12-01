import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["x", "y", "z"],
    required: true,
  },
  description: String,
  infoPoints: [
    {
      key: String,
      name: String,
      description: String,
    },
  ],
  infoPointTranslations: {},
  /* 
  de: [{ name: String, description: String }],
  fr: ...
  */
});

export const Template = mongoose.model("Template", templateSchema);
