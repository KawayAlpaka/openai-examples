import { openai } from "../utils/openai";

async function run() {
  try {
    // const completion = await openai.retrieveModel('text-davinci-003');
    const response = await openai.retrieveModel('gpt-4');
    console.log("result:")
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}

run()