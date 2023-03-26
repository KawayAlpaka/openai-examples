import { openai } from "../utils/openai";

async function run() {
  try {
    const response = await openai.listFineTunes();
    console.log("result:")
    console.log(response.data.data)
  } catch (e) {
    console.log(e)
  }
}

run()