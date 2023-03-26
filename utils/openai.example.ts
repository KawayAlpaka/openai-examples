import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "", // key
});

export const openai = new OpenAIApi(configuration);