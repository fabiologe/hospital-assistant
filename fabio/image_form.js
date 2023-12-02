import axios from 'axios';
import fs from 'fs';
import { StructuredOutputParser} from 'langchain/output_parsers';
import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessage } from "langchain/schema";

const imagePath = './fabio/fomular_scan.jpg'; // Replace with the path to your image
const API_KEY =  "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"
export const generateimageToJson  = async({imagePath, API_KEY}) => {
    try{
        // Read the image file and convert it to base64
        const image = fs.readFileSync(imagePath, { encoding: 'base64' })
        const chat = new ChatOpenAI({
            openAIApiKey: API_KEY,
            modelName: "gpt-4-vision-preview", 
            maxTokens:2000,
            data: image,
        })
        const parser = StructuredOutputParser.fromZodSchema(
            z.object({
                answer: z.string().describe("Save the document data inside an fitting JSON string")
            })
        )
        const formatInstructions = parser.getFormatInstructions({
            instruction: (`Try to understand how the data is stored and what information is displayed. 
            Store the logic and data inside an JSON-string`)
        })
        const systemPrompt = new SystemMessage(
            `You are an AI language model trained to understand and process hospital documents for patient and staff.
             The data from the document should be stored as str inside and JSON file. If you aren't sure what the document includs, 
             write ask the user to submit an photo again
             Your instructions : ${formatInstructions}`
        )
        const res = await chat.invoke([systemPrompt, image])
        const data = await parser.parse(res.content)
        return data, console.log(data)
        
    }
    catch (err) {
        console.log(err);
    }
}
// Example usage of the function


generateimageToJson({imagePath, API_KEY})
    .then(result => console.log('Analysis Result:', result))
    .catch(error => console.error('Error:', error))
