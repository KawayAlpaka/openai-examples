import { deal_error } from "../utils/deal_error";
import { openai } from "../utils/openai";

async function run() {
  try {
    const response = await openai.createFineTune({
      // training_file: "file-SfUB8icRvRkpWjr4W4Axwj1A",
      training_file: "file-wkO2OyEWISYhP3LxbutCvjH3",
      model: "ada"
      // model: "davinci"
    });
    console.log("result:")
    console.log(response.data)
  } catch (e) {
    deal_error(e)
  }
}

run()