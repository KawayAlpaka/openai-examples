import { deal_error } from "../utils/deal_error";
import { openai } from "../utils/openai";
import fs from "fs/promises"
import path from "path"
import { ChatCompletionRequestMessage } from "openai";
import { readLine } from "../utils/read-line";

// 这个示例实现了具有记忆功能的chat

const _temp_data_path_ = path.join(__dirname, "../temp-data/chat-02-message.json")
const encoding = "utf-8"
let messages: ChatCompletionRequestMessage[] = []


const init = async () => {
  return fs.readFile(_temp_data_path_, {
    encoding
  }).then((d) => {
    messages = JSON.parse(d)
  }).catch((e) => {
    // console.log("e:",e)
    messages = [
      {
        role: "system",
        content: "简单的和我聊天"
        // content: "你是聪明的人工智能，和我聊天吧"
      }
    ]
    save()
  })
}

const initOutput = () => {
  messages.forEach((message) => {
    console.log(message.role.toUpperCase())
    console.log(message.content)
  })
}


const save = () => {
  fs.writeFile(_temp_data_path_, JSON.stringify(messages, null, 2), {
    encoding
  })
}


init().then(() => {
  initOutput()
  run()
})


async function run() {
  while (true) {
    if (messages.length <= 0) {
      throw "messages数据异常"
    }
    if (messages[messages.length - 1].role !== "user") {
      // 最后一条消息不是用户发送的，则需要用户输入
      const input = await readLine("User:\n")
      if (input) {
        messages.push({
          role: "user",
          content: input
        })
        save()
      }
      continue
    }
    if (messages[messages.length - 1].role === "user") {
      // 最后一条消息是用户发送的，则发送对应请求
      const message = await createChatCompletion()
      if (message) {
        messages.push(message)
        console.log(message.role.toUpperCase() + ":")
        console.log(message.content)
        save()
      } else {
        await readLine("请求失败，按回车键重新发送\n")
      }
      continue
    }
  }
}

const createChatCompletion = async (): Promise<ChatCompletionRequestMessage | undefined> => {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
      temperature: 0.1,
      max_tokens: 2000
    });
    console.log('usage:', completion.data.usage)
    return completion.data.choices[0].message
  } catch (e) {
    deal_error(e)
  }
}

