import { openai } from "../utils/openai";

async function run() {
  try {
    const response = await openai.createImage({
      // prompt: "Fat huskies running on the grass"
      prompt: "肥肥的哈士奇在草地上奔跑"
    });
    console.log("result:")
    console.log(response.data)

  } catch (e) {
    console.log(e)
  }
}

run()



// // Fat huskies running on the grass
// {
//   created: 1679732378,
//   data: [
//     {
//       url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZYroTzDZyLIgmp41QddVHCQn/user-CE0T5M3ULNYXWuqHZKz4aXc5/img-sNLzOlbB9kgFN7lMzJA9SKgk.png?st=2023-03-25T07%3A19%3A38Z&se=2023-03-25T09%3A19%3A38Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-24T22%3A32%3A47Z&ske=2023-03-25T22%3A32%3A47Z&sks=b&skv=2021-08-06&sig=cgMyOk5mDQwiP/l4ES3ncUGYzPphEASsVwxfQ4MSp24%3D'
//     }
//   ]
// }

// // 肥肥的哈士奇在草地上奔跑
// {
//   created: 1679732452,
//   data: [
//     {
//       url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZYroTzDZyLIgmp41QddVHCQn/user-CE0T5M3ULNYXWuqHZKz4aXc5/img-MpNNFAOZqKPH5uvN367FXZE8.png?st=2023-03-25T07%3A20%3A52Z&se=2023-03-25T09%3A20%3A52Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-24T22%3A34%3A38Z&ske=2023-03-25T22%3A34%3A38Z&sks=b&skv=2021-08-06&sig=IEKuGIkBfm94BcJPyLb1yfuM2k0SjuY0pWFclrFHCKw%3D'
//     }
//   ]
// }