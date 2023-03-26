import { deal_error } from "./utils/deal_error";
import { openai } from "./utils/openai";
// 你是一个数学家，帮我计算下面的内容:
// 你是以为历史学家，回答我下面的问题。
// 1989年6月4日，在北京发生了什么?
const prompt = `
  今天是星期几?
`

// const prompt =  `Suggest three names for an animal that is a superhero.

// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: Horse
// Names:`

async function run() {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.8,
      max_tokens: 2000,
      suffix: "haha-suffix",
      // n: 2,
      // best_of: 2,
      // logit_bias: {
      //   "42468": -100
      // },
      // stream: false
    });
    console.log("result:")
    console.log(completion.data)
  } catch (e) {
    deal_error(e)
  }

}

run()

