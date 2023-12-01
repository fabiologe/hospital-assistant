import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, SystemMessage } from "langchain/schema";
import { StructuredOutputParser } from "langchain/output_parsers";
import { z } from "zod";
import * as dotenv from "dotenv"; 
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import { readFileSync } from 'fs';

const API_KEY= 'bed6f38640b57e662b11cad208212e4f2328d202';  // Replace with your Deepgram API key

// Read the audio file
const audio = fs.readFileSync('C:/Users/Chef/Desktop/00-Projects/javascipt/langchain/französisch.mp3');
const lg_typ ='fr'
fetch(`https://api.deepgram.com/v1/listen?smart_format=true&model=nova-2&language=${lg_typ}`, {
    method: 'POST',
    headers: {
        'Authorization': `Token ${API_KEY}`,
        'Content-Type': 'application/octet-stream'
    },
    body: audio
  })
  .then(response => response.json())
  .then(data => {
    console.log("Data:", data);
    if (data.results)  // check if 'results' exist in the response
        console.log("Transcript:", data.results.channels[0].alternatives[0].transcript);
    else
        console.log("No 'results' in the response.");
    })
  .catch(error => console.log('Error:', error));