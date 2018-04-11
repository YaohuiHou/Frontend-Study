## 微信分享

基于微信公众号分享，调用微信sdk，引用本文件前必须保证页面已经引入（支持https）  http://res.wx.qq.com/open/js/jweixin-1.2.0.js [详细查看微信公众号开发](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)

### CommonJs

本文件判断CommonJs API（module.exports），可在vue中引用此模块

```
// vue调用
const wxShare = require('./assets/share')
wxShare( config , callback )

// 普通页面调用
wxShare( config , callback )

```

### config

config是为接口权限配置，必传 ；callback为成功之后的回调函数，非必传，

```
config = {
  appId: '', // 必填，公众号的唯一标识
  timestamp: , // 必填，生成签名的时间戳
  nonceStr: '', // 必填，生成签名的随机串
  signature: '',// 必填，签名
  jsApiList: [], // 必填，调用api
  WechatShareData：{  // 必填
    'title': '分享文案',
    'link': '分享链接',
    'imgUrl': '分享图标',
    'desc': '描述'
  }
}

wxShare( config )

```

### callback

callback是微信sdkapi的其他扩展方法，非必填

```
wxShare( config ,function(){
  // 其他api扩展 非必填
  wx.hideAllNonBaseMenuItem();
})

```
