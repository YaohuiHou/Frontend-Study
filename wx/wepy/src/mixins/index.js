import wepy from 'wepy'
const qiniuUploader = require('../qiniuUploader')
export default class testMixin extends wepy.mixin {
  data = {
    userInfo: null,
    qiniuToken: '',
    taskStatus: [],
    // host: 'https://kjt-wx.kcimg.cn'
    host: 'https://yufabu-policy-wx.kcimg.cn'
  }
  methods = {
    // 跳转页面
    jump(path) {
      wepy.navigateTo({
        url: path
      })
    }
  }
  // 获取七牛云token
  getToken() {
    wepy.request(`${this.host}/getUpToken`).then(res => {
      let { status, uptoken } = res.data
      if (!status) {
        this.qiniuToken = uptoken
      }
    })
  }
  isFunction(fuc) {
    return typeof fuc === 'function'
  }
  /*
    七牛云上传接受两个参数
    images 是 调用小程序chooseImage 获取的图片数组
    callback 是图片上传七牛云成功以后的回调，接受一个新的七牛云图片数组
  */
  qiniuUploaderImg(images, callback) {
    let qiniuImgs = []
    let num = images.length
    images.forEach((element, index) => {
      qiniuUploader.upload(
        element,
        res => {
          qiniuImgs[index] = res.imageURL
          if (!--num && callback && typeof this.isFunction(callback)) {
            callback.call(this, qiniuImgs.join(','))
          }
        },
        error => {
          console.log('error: ' + error)
        },
        {
          region: 'ECN',
          domain: 'kjt.kcimg.cn/',
          uptoken: this.qiniuToken
        }
      )
    })
  }

  // 获取openid
  async getOpenid() {
    let openid
    try {
      openid = wepy.getStorageSync('openid')
      if (!openid) {
        let res = await wepy.login()
        if (res) {
          let data = await wepy.request(
            `${this.host}/getUnionid?code=${res.code}`
          )
          wepy.setStorageSync('openid', data.data['openid'])
          return data.data['openid'] ? data.data['openid'] : ''
        }
      } else {
        return openid
      }
    } catch (e) {}
  }
  // 消息 => 获取列表数量
  async getListCount(type) {
    let res = await wepy.request(
      `${this.host}/message/getList?openId=${this.openid}&type=${type}`
    )
    let { data: resData, statusCode } = res
    // 请求失败
    if (statusCode !== 200) {
      console.log(statusCode)
      return false
    }
    let { data, status, message } = resData
    if (status) {
      console.log(message)
      return false
    }
    return data
  }
  // 设置某个楼中楼、讨论组已读
  updateReadState(commentId, lastTime) {
    try {
      let readMap = wepy.getStorageSync('readMap')
      if (!readMap) {
        readMap = {}
      }
      readMap[commentId] = lastTime
      wepy.setStorageSync('readMap', readMap)
    } catch (error) {
      console.log(error)
    }
  }
  onShow() {}
  // 获取新的对象数据 整理数据
  getNewObj(valObj, allObj) {
    for (let key in valObj) {
      valObj[key] = allObj[key]
    }
    return valObj
  }
  // 判断用户是不是自己跳转到对应的个人中心
  toUserPage(uid) {
    let openid
    try {
      openid = wepy.getStorageSync('openid')
      if (uid === openid) {
        wepy.navigateTo({
          url: `/pages/user`
        })
      } else {
        wepy.navigateTo({
          url: `/pages/friend?uid=${uid}`
        })
      }
    } catch (e) {}
  }
  async getUserInfo1() {
    await wepy.login()
    let { userInfo } = await wepy.getUserInfo()
    this.userInfo = userInfo
    this.$apply()
  }
  async deleteComment(data) {
    let res = await wepy.request({
      url: `${this.host}/deleteComment`,
      data
    })
    return res.data
  }
  // 获取当天是这周第几天
  getweekDay() {
    let times = new Date().getDay()
    times = times || 7
    return --times
  }
  // 获取任务以及更新任务
  async getTaskList(uid, id) {
    try {
      let res = await wepy.request({
        url: `${this.host}/getTaskList`,
        data: {
          openid: uid,
          groupId: id
        }
      })
      let { status, data } = res.data
      if (!status) {
        this.taskData = this.picData(data)
        this.$apply()
      }
    } catch (error) {
    }
  }
  //  过滤任务数据
  picData(data) {
    if (data && data.length) {
      data.forEach((element, index) => {
        switch (element.project) {
          case '360che_tuan_task_sign':
            this.signDatas = element
            // 把用户签到规则做储存 签到规则页面调用可以从缓存里面获取
            try {
              wepy.setStorageSync('userSignInfo', element)
            } catch (error) { }
            break
          case '360che_tuan_task_task_post':
            element.icon = 'https://s.kcimg.cn/wechat/vanca/today-task.png'
            break
          case '360che_tuan_task_reply':
            element.icon = 'https://s.kcimg.cn/wechat/vanca/today-sign.png'
            break
          case '360che_tuan_task_share_post':
            element.icon = 'https://s.kcimg.cn/wechat/vanca/to-post-icon.png'
            break
          case '360che_tuan_task_share_article':
            element.icon = 'https://s.kcimg.cn/wechat/vanca/share-article.png'
            break
        }
      })
    }
    try {
      wepy.setStorageSync('taskStatus', data)
    } catch (error) { }
    return data
  }
  // 获取具体任务信息
  getOnlyTask (p) {
    let ele = {}
    try {
      let taskStatus = wepy.getStorageSync('taskStatus')
      taskStatus.forEach(element => {
        if (element.project.indexOf(p) > -1) {
          ele = element
        }
      })
      return ele
    } catch (error) {}
  }
  //  完成分享任务
  async finishTask(TaskShareStatus, uid) {
    if (TaskShareStatus.autoReceive && TaskShareStatus.completeProgress[0] < TaskShareStatus.dayCount) {
      try {
        let res = await wepy.request({
          url: `${this.host}/completeTask`,
          data: {
            openid: uid,
            project: TaskShareStatus.project
          },
          method: 'post'
        })
        let { status, message } = res.data
        this.getTaskList()
        if (!status) {
          if (message.indexOf('完成任务到上限') > -1) {
            return {}
          } else {
            return TaskShareStatus
          }
        } else {
          return {}
        }
      } catch (error) {
      }
    } else {
      return {}
    }
  }
}
