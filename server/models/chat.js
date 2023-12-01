import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  messages: [],
  translatedMessages: [],
  hospitalLanguage: String,
  patientLanguage: String,
  infoPoints: []
});

export const Chat = mongoose.model("Chat", chatSchema);
