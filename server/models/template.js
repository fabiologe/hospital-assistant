import mongoose from "mongoose";

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
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
  type: {
    type: String,
    enum: ["Document", "Conversation"],
  },
  language: {
    type: String,
  },
  alternatives: {
    nl: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    en: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    fr: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    de: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    id: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    it: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    ja: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    ko: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    pl: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    pt: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    es: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    sv: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    tr: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    uk: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
  },
  mainTemplate: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
});

export const Template = mongoose.model("Template", templateSchema);
