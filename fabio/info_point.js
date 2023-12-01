import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";

export const generateInfoTerminalResponse = async ({ userLanguage, userQuery }) => {
    try {
      
      // Define schema for info terminal
      const parser = StructuredOutputParser.fromZodSchema(
        z.object({
          answer: z.string().describe("Answer in user's language corresponding to his query."),
        })
      );

      // Format instructions for the model (replace this with your own model's instructions)
      const formatInstructions = parser.getFormatInstructions({
          instruction: (`Try to understand if its an visitor, patient or workpersonal.
                      If you aren't sure on what the user needs, you can ask him/her for more details.`),}
          
      );
      // Instantiate the chat model
      const chat = new ChatOpenAI({
        modelName: "gpt-4", // Replace this with your own text analysis AI model
        maxTokens: 2560, // You can adjust this value according to your needs
      });
      const floorpath = new ChatOpenAI({
          modelName: "gpt-vision",
          maxTokens: 2560,
      })
      
  
      // Create a system message with instructions for the AI model
      const systemPrompt = new SystemMessage(
        `You are an AI language model trained to assist in a hospital setting as receptionist. 
         The user query is in '${userLanguage}' language and is '${userQuery}'.
         Your instructions: ${formatInstructions}. You are installed inside an tablet at the main entrance of the hospital`
      );
  
      // Create a human message content (based on user's query)
      const userMessage = new HumanMessage({ 
        content: [{ type: "text", text: userQuery }]
      });
  
      // Invoke the model with system and user messages as argument
      const res = await chat.invoke([systemPrompt, userMessage]);
  
      // Parse the response using the parser and retrieve data
      const data = await parser.parse(res.content);
      console.log(data);
      return data;
    
    } 
    catch (err) {
        console.log(err);
  }
};