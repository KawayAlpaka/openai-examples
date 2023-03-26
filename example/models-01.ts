import { deal_error } from "../utils/deal_error";
import { openai } from "../utils/openai";

async function run() {
  try {
    const response = await openai.listModels();
    console.log("result:")
    console.log(response.data.data.length, '个models')
    // console.log(completion.data)
    const modelIds = response.data.data.map(m => m.id)
      // .filter(id => id.includes('davinci'))
      // .filter(id => id.includes('davinci'))
    console.log(modelIds)
  } catch (e) {
    deal_error(e)
  }
}

run()