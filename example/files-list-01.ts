import { openai } from "../utils/openai";

async function run() {
  try {
    const response = await openai.listFiles();
    console.log("result:")
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}

run()