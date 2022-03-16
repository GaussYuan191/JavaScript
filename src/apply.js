// 核心同call ，但是apply传的参数是数组
Function.prototype.myApply = function (thisArg, args = []) {
  if (typeof this != "function") {
    throw new Error("apply must be a fucntion");
  }
  if (thisArg === undefined || thisArg === null) {
    thisArg = globalThis;
  } else {
    thisArg = Object(thisArg);
  }
  // 判断参数是不是数组
  if (!Array.isArray(args)) {
    throw new Error(
      "second argument to Function.prototype.apply must be an array"
    );
  }
  thisArg.fn = this;
  let res = thisArg.fn(...args);
  delete thisArg.fn;
  return res;
};
let obj = {
  a: 2,
  b: 4,
  add: function () {
    console.log(this.a + this.b);
  },
};
let obj2 = {
  a: 4,
  b: 3,
};
obj.add.myApply(obj2, [2]);


{
  "name": "yunzai",
  "version": "2.0.8",
  "homepage": "https://github.com/Le-niao/Yunzai-Bot",
  "author": "Le-niao",
  "description": "Genshin QQ group Bot",
  "main": "app.js",
  "type": "module",
  "engines": {
    "node": ">= v14"
  },
  "scripts": {
    "app": "node ./app.js",
    "debug": "node ./app.js debug",
    "test": "node ./lib/test.js",
    "start": "pm2 start ./config/pm2/pm2.json",
    "stop": "pm2 stop Yunzai",
    "restart": "pm2 restart Yunzai",
    "log": "pm2 logs --lines 200 Yunzai"
  },
  "keywords": [
    "qqBot",
    "genshin"
  ],
  "license": "MIT",
  "dependencies": {
    "art-template": "^4.13.2",
    "baidu-aip-sdk": "^4.15.6",
    "image-size": "^1.0.0",
    "lodash": "^4.17.21",
    "log4js": "^6.4.0",
    "md5": "^2.3.0",
    "module": "^1.2.5",
    "node-fetch": "^3.0.0",
    "node-schedule": "^2.0.0",
    "oicq": "^2.2.0",
    "pm2": "^5.1.2",
    "prettier": "^2.4.1",
    "puppeteer": "^13.4.1",
    "redis": "^4.0.2",
    "tencentcloud-sdk-nodejs": "^4.0.285",
    "xmlhttprequest": "^1.8.0"
    "tencentcloud-sdk-nodejs": "^4.0.285"
  }
}
{
  "name": "yunzai",
  "version": "2.0.8",
  "homepage": "https://github.com/Le-niao/Yunzai-Bot",
  "author": "Le-niao",
  "description": "Genshin QQ group Bot",
  "main": "app.js",
  "type": "module",
  "engines": {
    "node": ">= v14"
  },
  "scripts": {
    "app": "node ./app.js",
    "debug": "node ./app.js debug",
    "test": "node ./lib/test.js",
    "start": "pm2 start ./config/pm2/pm2.json",
    "stop": "pm2 stop Yunzai",
    "restart": "pm2 restart Yunzai",
    "log": "pm2 logs --lines 200 Yunzai"
  },
  "keywords": [
    "qqBot",
    "genshin"
  ],
  "license": "MIT",
  "dependencies": {
    "art-template": "^4.13.2",
    "baidu-aip-sdk": "^4.15.6",
    "image-size": "^1.0.0",
    "lodash": "^4.17.21",
    "log4js": "^6.4.0",
    "md5": "^2.3.0",
    "node-fetch": "^3.0.0",
    "node-schedule": "^2.0.0",
    "oicq": "^2.2.0",
    "pm2": "^5.1.2",
    "prettier": "^2.4.1",
    "puppeteer": "^13.4.1",
    "redis": "^4.0.2",
    "tencentcloud-sdk-nodejs": "^4.0.285"
  }
}
