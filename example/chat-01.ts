import { deal_error } from "../utils/deal_error";
import { openai } from "../utils/openai";

async function run() {
  try {
    const completion = await openai.createChatCompletion({
      // model: "text-davinci-003",
      model: "gpt-3.5-turbo",
      // prompt: generatePrompt(animal),
      messages: [
        {
          role: "system",
          content: "你是聪明的人工智能，和我聊天吧"
        },
        {
          role: "user",
          content: "今天是星期几?"
        }
      ],
      temperature: 0.9,
      max_tokens: 4000
    });
    console.log("result:")
    console.log(completion.data)
    console.log(completion.data.choices)
  } catch (e) {
    deal_error(e)
  }
}

run()