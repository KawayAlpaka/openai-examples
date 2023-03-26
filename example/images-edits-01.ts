import { openai } from "../utils/openai";
import fs from "fs"
import path from "path"

// // node没跑通，curl跑通了

// // 这个api的作用是编辑图片中蒙版的内容，使图片符合描述

// curl https://api.openai.com/v1/images/edits -H "Authorization: Bearer KEY" -F image="@pretty_girl_01.png" -F mask="@pretty_girl_01_mask.png" -F prompt="A girl in a red skirt" -F n=1 -F size="1024x1024"

// {
//   "created": 1679743232,
//   "data": [
//     {
//       "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZYroTzDZyLIgmp41QddVHCQn/user-CE0T5M3ULNYXWuqHZKz4aXc5/img-nF4tIWAV3BsuBfQA4MUE09NN.png?st=2023-03-25T10%3A20%3A32Z&se=2023-03-25T12%3A20%3A32Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-24T22%3A32%3A55Z&ske=2023-03-25T22%3A32%3A55Z&sks=b&skv=2021-08-06&sig=JUjAQ%2BE69Ga4aoYBhAc4qd72xfz9zNec7UD76RJLNfE%3D"
//     }
//   ]
// }

// curl https://api.openai.com/v1/images/edits -H "Authorization: Bearer KEY" -F image="@pretty_girl_01.png" -F mask="@pretty_girl_01_mask.png" -F prompt="A girl in a red hat" -F n=1 -F size="1024x1024"

// {
//   "created": 1679743329,
//   "data": [
//     {
//       "url": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-ZYroTzDZyLIgmp41QddVHCQn/user-CE0T5M3ULNYXWuqHZKz4aXc5/img-fevB8TDxD0RN38jVisoE3BGG.png?st=2023-03-25T10%3A22%3A09Z&se=2023-03-25T12%3A22%3A09Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-24T22%3A36%3A18Z&ske=2023-03-25T22%3A36%3A18Z&sks=b&skv=2021-08-06&sig=D80zi1XeSdjIyNTDkQdYP1FmIMqSWiEKXOX4MX5Ukhc%3D"
//     }
//   ]
// }






async function run() {
  try {
    // const imagePath = path.join(__dirname, "../example-data/pretty_gril_01.png")
    // const image = fs.createReadStream(imagePath)
    // console.log('image:', image)
    // // const image = new File([toArrayBuffer(buffer)], 'image.png')
    // const completion = await openai.createImageEdit(image as any, "Edit the characters in the picture to be thinner");
    // console.log("result:")
    // console.log(completion.data)

    const response = await openai.createImageEdit(
      fs.createReadStream(path.join(__dirname, "../example-data/sunlit_lounge.png")) as any,
      "A sunlit indoor lounge area with a pool containing a flamingo",
      fs.createReadStream(path.join(__dirname, "../example-data/mask.png")) as any,
      1,
      "1024x1024"
    );
    console.log("result:")
    console.log(response.data)

  } catch (e) {
    console.log(e)
  }
}

// function toArrayBuffer(buffer) {
//   const arrayBuffer = new ArrayBuffer(buffer.length);
//   const view = new Uint8Array(arrayBuffer);
//   for (let i = 0; i < buffer.length; ++i) {
//     view[i] = buffer[i];
//   }
//   return arrayBuffer;
// }

run()