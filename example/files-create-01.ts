import { openai } from "../utils/openai";
import fs from "fs"
import path from "path"

async function run() {
  try {
    const response = await openai.createFile(
      fs.createReadStream(path.join(__dirname, '../example-data/chinese-01.jsonl')) as any,
      "fine-tune"
      // "unimportance"
    );
    console.log("result:")
    console.log(response.data)
  } catch (e) {
    console.log(e)
    // @ts-ignore
    console.log(e?.response?.data)
  }
}

run()