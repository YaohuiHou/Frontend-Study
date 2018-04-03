<template>
  <swiper :options="swiperOption" ref="mySwiper" v-show="expression">
    <swiper-slide>
      <span @click="iconClick(item.title)" v-for="item in iconArr1"><i class="icon-phiz" :style="item.style"></i></span>
    </swiper-slide>
    <swiper-slide>
      <span @click="iconClick(item.title)" v-for="item in iconArr2"><i class="icon-phiz" :style="item.style"></i></span>
    </swiper-slide>
    <swiper-slide>
      <span @click="iconClick(item.title)" v-for="item in iconArr3"><i class="icon-phiz" :style="item.style"></i></span>
    </swiper-slide>
    <swiper-slide>
      <span @click="iconClick(item.title)" v-for="item in iconArr4"><i class="icon-phiz" :style="item.style"></i></span>
    </swiper-slide>
    <div class="swiper-pagination tabs" id="pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props:['expression'],
  components: {
		swiper,
    swiperSlide,
  },
  data(){
    return{
      iconArr1:[
        {title: "[微笑]", style: "background-position: 0px 0px;"},
        {title: "[撇嘴]", style: "background-position: -24px 0px;"},
        {title: "[色]", style: "background-position: -48px 0px;"},
        {title: "[发呆]", style: "background-position: -72px 0px;"},
        {title: "[得意]", style: "background-position: -96px 0px;"},
        {title: "[流泪]", style: "background-position: -120px 0px;"},
        {title: "[害羞]", style: "background-position: -144px 0px;"},
        {title: "[闭嘴]", style: "background-position: -168px 0px;"},
        {title: "[睡]", style: "background-position: -192px 0px;"},
        {title: "[大哭]", style: "background-position: -216px 0px;"},
        {title: "[尴尬]", style: "background-position: -240px 0px;"},
        {title: "[发怒]", style: "background-position: -264px 0px;"},
        {title: "[调皮]", style: "background-position: -288px 0px;"},
        {title: "[嘻嘻]", style: "background-position: -312px 0px;"},
        {title: "[惊讶]", style: "background-position: -336px 0px;"},
        {title: "[难过]", style: "background-position: -360px 0px;"},
        {title: "[酷]", style: "background-position: -384px 0px;"},
        {title: "[冷汗]", style: "background-position: -408px 0px;"},
        {title: "[抓狂]", style: "background-position: -432px 0px;"},
        {title: "[吐]", style: "background-position: -456px 0px;"},
        {title: "[偷笑]", style: "background-position: -480px 0px;"},
        {title: "[可爱]", style: "background-position: -504px 0px;"},
        {title: "[白眼]", style: "background-position: -528px 0px;"},
        {title: "[傲慢]", style: "background-position: -552px 0px;"},
        {title: "[饥饿]", style: "background-position: -576px 0px;"},
        {title: "[困]", style: "background-position: -600px 0px;"},
        {title: "[惊恐]", style: "background-position: -624px 0px;"},
        {title: "[汗]", style: "background-position: -648px 0px;"}
      ],
      iconArr2:[
        {title: "[憨笑]", style: "background-position: -672px 0px;"},
        {title: "[大兵]", style: "background-position: -696px 0px;"},
        {title: "[奋斗]", style: "background-position: -720px 0px;"},
        {title: "[咒骂]", style: "background-position: -744px 0px;"},
        {title: "[疑问]", style: "background-position: -768px 0px;"},
        {title: "[嘘]", style: "background-position: -792px 0px;"},
        {title: "[晕]", style: "background-position: -816px 0px;"},
        {title: "[折磨]", style: "background-position: -840px 0px;"},
        {title: "[衰]", style: "background-position: -864px 0px;"},
        {title: "[骷髅]", style: "background-position: -888px 0px;"},
        {title: "[敲打]", style: "background-position: -912px 0px;"},
        {title: "[再见]", style: "background-position: -936px 0px;"},
        {title: "[擦汗]", style: "background-position: -960px 0px;"},
        {title: "[挖鼻]", style: "background-position: -984px 0px;"},
        {title: "[鼓掌]", style: "background-position: -1008px 0px;"},
        {title: "[糗大了]", style: "background-position: -1032px 0px;"},
        {title: "[坏笑]", style: "background-position: -1056px 0px;"},
        {title: "[左哼哼]", style: "background-position: -1080px 0px;"},
        {title: "[右哼哼]", style: "background-position: -1104px 0px;"},
        {title: "[哈欠]", style: "background-position: -1128px 0px;"},
        {title: "[鄙视]", style: "background-position: -1152px 0px;"},
        {title: "[委屈]", style: "background-position: -1176px 0px;"},
        {title: "[快哭了]", style: "background-position: -1200px 0px;"},
        {title: "[阴险]", style: "background-position: -1224px 0px;"},
        {title: "[亲亲]", style: "background-position: -1248px 0px;"},
        {title: "[吓]", style: "background-position: -1272px 0px;"},
        {title: "[可怜]", style: "background-position: -1296px 0px;"},
        {title: "[菜刀]", style: "background-position: -1320px 0px;"}
      ],
      iconArr3:[
        {title: "[西瓜]", style: "background-position: -1344px 0px;"},
        {title: "[啤酒]", style: "background-position: -1368px 0px;"},
        {title: "[篮球]", style: "background-position: -1392px 0px;"},
        {title: "[乒乓]", style: "background-position: -1416px 0px;"},
        {title: "[咖啡]", style: "background-position: -1440px 0px;"},
        {title: "[饭]", style: "background-position: -1464px 0px;"},
        {title: "[猪头]", style: "background-position: -1488px 0px;"},
        {title: "[玫瑰]", style: "background-position: -1512px 0px;"},
        {title: "[凋零]", style: "background-position: -1536px 0px;"},
        {title: "[示爱]", style: "background-position: -1560px 0px;"},
        {title: "[爱心]", style: "background-position: -1584px 0px;"},
        {title: "[心碎]", style: "background-position: -1608px 0px;"},
        {title: "[蛋糕]", style: "background-position: -1632px 0px;"},
        {title: "[闪电]", style: "background-position: -1656px 0px;"},
        {title: "[炸弹]", style: "background-position: -1680px 0px;"},
        {title: "[刀]", style: "background-position: -1704px 0px;"},
        {title: "[足球]", style: "background-position: -1728px 0px;"},
        {title: "[瓢虫]", style: "background-position: -1752px 0px;"},
        {title: "[便便]", style: "background-position: -1776px 0px;"},
        {title: "[月亮]", style: "background-position: -1800px 0px;"},
        {title: "[太阳]", style: "background-position: -1824px 0px;"},
        {title: "[礼物]", style: "background-position: -1848px 0px;"},
        {title: "[拥抱]", style: "background-position: -1872px 0px;"},
        {title: "[强]", style: "background-position: -1896px 0px;"},
        {title: "[弱]", style: "background-position: -1920px 0px;"},
        {title: "[握手]", style: "background-position: -1944px 0px;"},
        {title: "[胜利]", style: "background-position: -1968px 0px;"},
        {title: "[抱拳]", style: "background-position: -1992px 0px;"}
      ],
      iconArr4:[
        {title: "[勾引]", style: "background-position: -2016px 0px;"},
        {title: "[拳头]", style: "background-position: -2040px 0px;"},
        {title: "[差劲]", style: "background-position: -2064px 0px;"},
        {title: "[爱你]", style: "background-position: -2088px 0px;"},
        {title: "[NO]", style: "background-position: -2112px 0px;"},
        {title: "[OK]", style: "background-position: -2136px 0px;"}
      ],
      swiperOption: {
        speed:1000,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
      }
    }
  },
  computed: {
		swiper() {
      return this.$refs.mySwiper.swiper
    }
	},
  mounted(){
    
    // this.$watch('expression', ()=> {
    //   this.swiper.update()
    //   this.swiper.pagination.render()
    //   this.swiper.pagination.update()
    // })
  },
  created(){

  },
  methods:{
    iconClick(text){
      this.$emit('icon',text)
    }
  }
}
</script>

<style lang="less">
  // .smile-wrap{position: relative;width:100%;}
  .tabs{
    position: absolute;
    bottom:20px;
    left:0;width:100%;
    height:20px; 
    text-align:center; 
    width:100%; 
    font-size: 0
    }
  .tabs .swiper-pagination-bullet{
    margin:0 10px;
    display:inline-block;
    vertical-align: top;
    width:20px;
    background:#ccc;
    height:20px; 
    border-radius:10px;}
  .tabs .swiper-pagination-bullet-active{background:#2f75bb;}
  // .smile-wrap > .container{
  //   height:150px;
  //   width:1000%;
  //   overflow: hidden;
  //   background-color: #f5f5f5;
  //   position: relative;
  // }
  .swiper-container{
    position: relative;
    overflow: hidden;
    width: 100%;
    background-color: #f5f5f5;
    border-top: solid #e5e5e5 1px;
    border-bottom: solid #e5e5e5 1px;
    padding-top:20px;
    padding-bottom: 40px;
  }
  .swiper-container>div.swiper-wrapper{
    width: 1000%;
  }
  .swiper-slide{
    width: 100%;
    float: left;
    padding:12px 0px;
    box-sizing: border-box;
    overflow: hidden;
    span {
      float: left;
      width: 101px;
      height: 48px;
      padding: 12px 0;
      text-align: center;
    }
    .icon-phiz{
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url(https://s.kcimg.cn/m/images/bbs/wechat/icon-phiz.gif) no-repeat;
      transform: scale(2);
      vertical-align: top;
    }
  }

</style>
