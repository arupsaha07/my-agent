import { Mistral } from '@mistralai/mistralai';
import dotenv from "dotenv";

dotenv.config();

const mistralApiKey = process.env.MISTRAL_API_KEY;

export function createMistralClient() {
    return new Mistral({
        apiKey: mistralApiKey
    })
}