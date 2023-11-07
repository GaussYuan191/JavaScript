import fetch from "node-fetch";

async function linglu(e) {
  let msg = "你好"
  let data = {"prompt":msg}
  let url = await fetch("https://linglu.pro/api/generate", {
    "headers": {
      "Referer": "https://linglu.pro/zh",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": JSON.stringify(data),
    "method": "POST"
  });
  url = await url.text()
  console.log(url)
  // e.reply(url)
  }

  linglu()