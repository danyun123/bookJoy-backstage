const CryptoJS = require("crypto-js");
const WebSocket = require("ws");

// const { text, lang } = ctx.query;
const text = "Hello I am cxk，I like eat chicken";

const config = {
  // 请求地址
  hostUrl: "wss://tts-api.xfyun.cn/v2/tts",
  host: "tts-api.xfyun.cn",
  appid: "f131ec6c",
  apiSecret: "ZThiN2UzMjAwMzBkZGMyZWY2ODU4YTRh",
  apiKey: "237780867c5fba34463e58b884c70125",
  text,
  uri: "/v2/tts",
};

// 将时间戳转换为RFC1123格式
const date = new Date().toUTCString();

let wssUrl =
  config.hostUrl +
  "?authorization=" +
  getAuthStr(date) +
  "&date=" +
  date +
  "&host=" +
  config.host;
const getIflyVoiceInfomation = async (ctx, next) => {
  config.text = ctx.request.body.content;

  const ws = new WebSocket(wssUrl);

  let voiceBase64 = "";

  // 建立连接并调用send方法
  ws.on("open", () => {
    send(ws);
  });
  // 获取讯飞服务返回来的数据
  ws.on("message", async (data, err) => {
    if (err) return;
    let res = JSON.parse(data);

    if (res.code !== 0) {
      wx.close();
      ctx.throw(400, "讯飞语音合成出错");
      return;
    }
    voiceBase64 += res.data.audio;
    if (res.code === 0 && res.data.status === 2) {
      // 合成完成
      ctx.voiceData = voiceBase64;
      ctx.body = {
        code: 0,
        voice: voiceBase64,
      };
      await next();
      ws.close();
    }
  });
  // 资源释放
  ws.on("close", async () => {
    voiceBase64 = "";
  });

  // 连接错误
  ws.on("error", (err) => {
    console.log("websocket connect err: " + err);
    ws.close();
    ctx.throw(400, "讯飞语音连接出错");
  });
};

function getAuthStr(date) {
  let signatureOrigin = `host: ${config.host}\ndate: ${date}\nGET ${config.uri} HTTP/1.1`;
  let signatureSha = CryptoJS.HmacSHA256(signatureOrigin, config.apiSecret);
  let signature = CryptoJS.enc.Base64.stringify(signatureSha);
  let authorizationOrigin = `api_key="${config.apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
  let authStr = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(authorizationOrigin)
  );
  return authStr;
}

function send(ws) {
  let frame = {
    // 填充common
    common: {
      app_id: config.appid,
    },
    // 填充business
    business: {
      tte: "UTF8",
      auf: "audio/L16;rate=16000",
      aue: "lame",
      vcn: "xiaoyan",
      speed: 40,
      reg: "2",
    },
    // 填充data
    data: {
      // 将字符串转换为缓冲区，在通过toString转换为base64
      text: Buffer.from(config.text ?? "123456789").toString("base64"),
      status: 2,
    },
  };
  // 发送字符串格式的base64的内容
  ws.send(JSON.stringify(frame));
}

module.exports = getIflyVoiceInfomation;
