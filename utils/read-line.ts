import readline from "readline"

export const readLine = (Q: string = ""):Promise<string> => {
  return new Promise((reslove) => {
    const instance = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    instance.question(`${Q}`, text => {
      instance.close()
      reslove(text)
      return
    })
  })
}

