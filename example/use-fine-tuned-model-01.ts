import { deal_error } from "../utils/deal_error";
import { openai } from "../utils/openai";

async function run() {
  try {
    const completion = await openai.createCompletion({
      // model: "text-davinci-003",
      // model: "davinci",
      model: "davinci:ft-yangtuo-2023-03-25-12-37-29",
      prompt: '客户:手机屏幕碎了，能免费换吗?\n 客服:',
      // temperature: 0.9,
      max_tokens: 2000
    });
    console.log("result:")
    console.log(completion.data.choices)
  } catch (e) {
    deal_error(e)
  }
}

run()

// {
//   "id": "cmpl-6yBuT7GfNxlpZs7pyLmuJzRfuOXz4",
//   "object": "text_completion",
//   "created": 1679803481,
//   "model": "davinci:ft-personal-2023-03-26-03-44-27",
//   "choices": [
//       {
//           "text": "99%的面板都有家族性的缺点。 报纸发布假奥运会车祸的新闻，灾难发生，在中国队1米1的体操运动员坐不住了，不要钱不要心思，美国队的汽车刑具店里的刑具，发现新闻是假的，都脱光了，实在不认得自己了。小店员被不速之客揍一顿，说你居然背叛我。 孤胆枪手中文小编会为大家不停翻译近期流行微电影，PS:从舌头变成AV女优就是流程！！！提前看好！\n\n本文为优酷独家版权\n\n优酷·视频在线观看 优酷主播影视聚合网 关注微信公众号 超级人命证 http://www.youku.com/video/173/qn-377556.html Click here to subscribe now!\n\n这个不错有没有！引用： http://zw.youku.com/zw400001/v-VbDeCJhqq7eceSJryvAK8f.html",
//           "index": 0,
//           "logprobs": null,
//           "finish_reason": null
//       }
//   ],
//   "usage": {
//       "prompt_tokens": 42,
//       "completion_tokens": 520,
//       "total_tokens": 562
//   }
// }