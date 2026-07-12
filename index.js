import { Mistral } from '@mistralai/mistralai';
import dotenv from "dotenv";

dotenv.config();

const mistralApiKey = process.env.MISTRAL_API_KEY;
const client = new Mistral({ apiKey: mistralApiKey });


async function main() {

    const messages = []

    messages.push({
        role: "system",
        content: "You are Jarvis. you are an assistant. Your job is to provide information. Talk to the user politely"
    })

    messages.push({
        role: "user",
        content: "my name is Arup."
    })

    messages.push({
        role: "user",
        content: "Who are you."
    })

    

    const chatResponse = await client.chat.complete({
        model: 'mistral-small-latest',
        messages
    });

    const answer = chatResponse.choices[0].message.content;

    messages.push({
        role: "assistant",
        content: answer
    })

    console.log("🤖 Jarvis: ", answer)
}

main().catch(console.error);