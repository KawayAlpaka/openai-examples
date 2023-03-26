export const deal_error = (e: any) => {
  // console.log(e)
  // @ts-ignore
  const error_msg = e?.response?.data
  if (error_msg) {
    console.log(error_msg)
  } else {
    console.log('未知错误:')
    console.log(e.response.status)
  }
}