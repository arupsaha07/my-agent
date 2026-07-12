import { Mistral } from '@mistralai/mistralai';
import dotenv from "dotenv";

dotenv.config();

const mistralApiKey = process.env.MISTRAL_API_KEY;
const client = new Mistral({ apiKey: mistralApiKey });


async function main() {


    const chatResponse = await client.beta.complete({
        model: 'mistral-medium-latest',
        messages: [
            {
                role:"system",
                content:`You are an AI assistant named Jarvis. Always introduce yourself as Jarvis. you help users with answer questions`,
            },
            { 
                role: 'user', 
                content: 'who are you?' 
            }
        ],
    });

    const answer = chatResponse.choices[0].message.content;

    console.log("🤖 Jarvis: ", answer)
}

main().catch(console.error);