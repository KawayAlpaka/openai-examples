import { deal_error } from "../utils/deal_error";
import { openai } from "../utils/openai";

async function run() {
  try {
    const completion = await openai.createEdit({
      model: "text-davinci-edit-001",
      input: "What day of the wek is it?",
      instruction: "Fix the spelling mistakes",
      // temperature: 0.9
    });
    console.log("result:")
    console.log(completion.data)
  } catch (e) {
    deal_error(e)
  }
}

run()
