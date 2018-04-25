<template>
  <div class="index">
    <!-- 主页面 -->
    <ul class="number">
      <li v-for="(item,index) in num.toString().split('')" :key="index">
        <span :class="`time selected${item}`">
          <i v-for="(num,i) in numberArr" :key="i">{{ num }}</i>
        </span>
      </li>
    </ul>
    <button @click="random">click加数字</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 80,
      numberArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  methods: {
    random() {
      let num = Math.ceil(Math.random().toFixed(2) * 10)
      this.num = num + parseInt(this.num)
      console.log(`这次加了：${num} 数；最终展示为：${this.num}`)
    }
  }
}
</script>

<style scoped lang="less">
ul {
  list-style: none;
}
.number {
  margin: 40px auto;
  width: 200px;
  height: 40px;
  background: #f60;
  color: #fff;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-radius: 4px;
  li {
    flex: 1;
    position: relative;
    height: 40px;
    line-height: 40px;
    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: all 1.7s ease-in-out 0.2s;
    }
    i {
      font-style: normal;
      height: 40px;
      line-height: 40px;
      width: 100%;
      text-align: center;
    }
  }
}
button {
  display: block;
  border: 1px solid rgb(12, 143, 231);
  width: 150px;
  height: 40px;
  border-radius: 6px;
  background: rgb(62, 173, 236);
  font-size: 16px;
  color: #fff;
  margin: 50px auto;
  outline: none;
}
.selected0 {
  transform: translate3d(0, 0, 0);
}
.selected1 {
  transform: translate3d(0, -40px, 0);
}
.selected2 {
  transform: translate3d(0, -80px, 0);
}
.selected3 {
  transform: translate3d(0, -120px, 0);
}
.selected4 {
  transform: translate3d(0, -160px, 0);
}
.selected5 {
  transform: translate3d(0, -200px, 0);
}
.selected6 {
  transform: translate3d(0, -240px, 0);
}
.selected7 {
  transform: translate3d(0, -280px, 0);
}
.selected8 {
  transform: translate3d(0, -320px, 0);
}
.selected9 {
  transform: translate3d(0, -360px, 0);
}
</style>
