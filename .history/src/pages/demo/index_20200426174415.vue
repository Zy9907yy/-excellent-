<template>
    <!-- 商家入驻界面 -->
    <div class="all">
        <!-- 顶部 -->
    <div class="top1">
        <scroll-view scroll-x class="bg-green nav navbar">
            <view class="flex text-center text-lg">
            <view v-for="(item,index) in tabs" :key="index" class="cu-item flex-sub">
                <view :id="index" :class="{'navbar_item_on':activeIndex == index}" class="navbar_item" @click="tabClick">
                    <view class="navbar_title cu-item flex-sub">{{item.name}}</view>
                </view>
            </view></view>
        </scroll-view>
        </div>
        <!-- <div></div>三个内容<view></view> -->
        <div class="test">
            <!-- 平台介绍 -->
            <div :hidden="activeIndex != 0" style="padding:10px">
                <div class="bg">
                    <view class="bg-gradual-green radius text-center shadow-blur bt text-xl">
                        客户量翻倍</view>
                    <div class="p2ic">
                    <div class="pic">
                        <img src="/static/images/qian.png" style="width:40vw;height:25vh;">
                        <div class="word text-xl">加入前</div>
                    </div>
                    <div class="pic">
                        <img src="/static/images/hou.png" style="width:40vw;height:25vh;">
                        <div class="word text-xl">加入后</div>
                    </div>
                    </div>
                </div>
            </div>
            <!-- 开店流程 -->
            <div :hidden="activeIndex != 1">
                <div class="tit">
                    <div class="num">
                        <div class="ber">1</div>
                    </div>
                <div class="tit1">提交资料</div><br>
                </div>
                <div class="mes1">
                    <div class="wu1"></div>
                    <div class="wu2">填写店铺相关信息，提交经营资质照片</div><br>
                </div>
                <div class="tit">
                    <div class="num">
                        <div class="ber">2</div>
                    </div>
                <div class="tit1">审核签约</div><br>
                </div>
                <div class="mes1">
                    <div class="wu1"></div>
                    <div class="wu2">等待资质审核（1-3个工作日）<br></div><br>
                </div>
                <div class="tit">
                    <div class="num">
                        <div class="ber">3</div>
                    </div>
                <div class="tit1">开店营业</div><br>
                </div>
                <div class="mes1">
                    <div class="wu1"></div>
                    <div class="wu2">
                        录入商品信息<br>
                        业务经理到店下线下审核，审核通过即可开门营业<br>
                    </div><br>
               </div>     
            </div>
            <!-- 开店要求 -->
            <div :hidden="activeIndex != 2">
                <div class="tit">
                    <img src="/static/images/men.png" style="width:10vw;height:7vh;">
                    <div class="tit1">有实体门店</div>
                </div><br>
                <div class="mes1">
                    <div class="wu2">入住本平台前，需有线下实体店铺<br></div>
                </div>
                <div class="tit">
                    <img src="/static/images/ying.png" style="width:10vw;height:7vh;">
                    <div class="tit1">有经营资质</div>
                </div>
                <div class="mes1">
                    <div class="wu2">
                        申请开店过程中需要您提供符合国家法律规定的经营许可证照，包括但不限于营业执照、各类许可证、特许证件等。<br>
                </div></div>
                <div class="tit">
                    <img src="/static/images/lei.png" style="width:10vw;height:7vh;">
                    <div class="tit1">品类范围</div>
                </div><br>
                <div class="mes1">
                    <div class="wu2">本平台支持以下经营项目：<br></div>
                </div>
            </div>
        </div>
        <!-- 底部<div></div> -->
        <div class=bottom>
            <button class="btn1 cu-btn bg-gradual-green margin-tb-sm lg" @click="handClick()">立即开店</button>
            <div class="bottom1 text-xs">欢迎加入我们</div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      TabCur: 0,
      scrollLeft: 0,
      // 顶部导航栏
      tabs: [
        {
          name: '平台介绍',
          type: '1',
          checked: true
        },
        {
          name: '开店流程',
          type: '2',
          checked: true
        },
        {
          name: '开店要求',
          type: '3',
          checked: true
        }
      ],
      activeIndex: 0,
      currentTab: 0,
      winWidth: 0,
      winHeight: 0
    }
  },
  computed: {
    navbarSliderClass () {
      if (this.activeIndex === 0) {
        return 'navbar_slider_0'
      }
      if (this.activeIndex === 1) {
        return 'navbar_slider_1'
      }
      if (this.activeIndex === 2) {
        return 'navbar_slider_2'
      }
    },
    contentHeight () {
      return this.winHeight + 'px'
    }
  },
  mounteds: {
  },
  methods: {
    // 跳转
    handClick () {
      mpvue.navigateTo({
        url: '/pages/registers/main'
      })
    },
    // 顶部导航栏
    tabClick (e) {
      this.activeIndex = e.currentTarget.id
      this.currentTab = this.activeIndex
    },
    swiperChange (e) {
      this.currentTab = e.mp.detail.current
      this.activeIndex = this.currentTab
    }
  },
  onLoad () {
    var res = wx.getSystemInfoSync()
    this.winWidth = res.windowWidth
    this.winHeight = res.windowHeight
  }
  // tabSelect (e) {
  // this.TabCur = e.currentTarget.dataset.id
  // // this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
  // },
}
</script>
<style>
.all{
    width: 100%;
    height: 100vh;
    /* background-color: darksalmon; */
}
.top1{
    width: 100%;height: 8%;
    opacity:0.8;text-align: center;
    /* display: inline-flex;
    flex-direction: row;
    justify-content: space-around; */
}
.test{
    width: 100%;height: 78%;
    background-color:white;
}
.bg{
    width:100%;height:60vh;
    border-style:solid;border-width:1px;border-radius: 13px;border-color: transparent;
    text-align: center;background-color: #f9f9f9;
}
.bt{
    width: 35vw;height: 8vh;margin:0 auto;
    text-align: center;line-height:8vh;margin-bottom: 30px;margin-top: 20px;
}
.p2ic{
    width: 100%;height: 50vh;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-around;
}
.pic{
    width: 50%;height: 35vh;text-align: center;
}
.list1{
    /* text-align: center; */
    display:table;
    margin-left:auto;margin-right:auto;
}
.item1{
    float: left;
    width: 103px;
    /* display: inline; */
    /* top: 30%; */
}
.choice{
    font-size: 20px;
    color: white;
    cursor: pointer;
}
.p{width: 5vw;}
#div1{
    display: none;
}
#div2{
    display: block;
}
#div3{
    display: none;
}
.tit{
    width: 100%;height: 8vh;padding: 10px;font-size: 18px;
    display: inline-flex;
    flex-direction: row;
}
.num{
    width:10vw;height: 7vh;text-align: center;
    background-color: yellowgreen;
    border-radius: 50%;margin-right: 5px;
}
.ber{text-align: center;line-height: 7vh;color:black;}
.tit1{font-size: 20;width: 90%;height: 100%;line-height: 7vh;  }
.mes1{
    width: 100%;height: 13vh; 
    display: inline-flex;flex-direction: row;padding: 10px;
}
.wu1{width: 7vh;height: 100%;color: white;}
.wu2{
    width: 90%;height: 100%;
    font-size: 16px;color: rgb(114, 119, 119);
}
.bottom{width: 100%;height: 14%;background-color: white;}
.bottom1{
    width: 100%;text-align: center;color: rgb(114, 119, 119);
}
.btn1{height: 20vh;width: 100%;
    /* text-align: center;
    background-color: yellowgreen; */
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> 9951c84e668fb1e83a2e247066df763548b47bb8
