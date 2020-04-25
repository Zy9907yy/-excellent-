<template>
<div  class="hole">
 <div class="top">
   <img class="userinfo-location" src="/static/images/location.png" background-size="cover"  />
    <p style="width:100px;float:left; padding: 6px;">location</p>
 </div>
 <input type="text" class="search"  placeholder="搜索" />
  <div class="userinfo" @click="bindViewTap">
      <div class="icon"><img class="userinfo-avatar" src="/static/images/美食.png"  /><p style="width:50px;text-align:center;">主食</p></div>
      <div class="icon"><img class="userinfo-avatar" src="/static/images/蔬菜.png"  /><p style="width:50px;text-align:center;">蔬菜</p></div>
      <div class="icon"><img class="userinfo-avatar" src="/static/images/水果水果.png"  /><p style="width:50px;text-align:center;">水果</p></div>
      <div class="icon"><img class="userinfo-avatar" src="/static/images/家常菜菜.png"  /><p style="width:50px;text-align:center;">家常菜</p></div>
      <div class="icon"><img class="userinfo-avatar" src="/static/images/西餐西餐.png"  /><p style="width:50px;text-align:center;">西餐</p></div>
      <div class="icon"><img class="userinfo-avatar" src="/static/images/甜点饮品.png"  /><p style="width:50px;text-align:center;">甜点</p></div>
      <div class="icon"><img class="userinfo-avatar" src="/static/images/超市.png"  /><p style="width:50px;text-align:center;">超市</p></div>
      <div class="icon"><img class="userinfo-avatar" src="/static/images/快餐.png"  /><p style="width:50px;text-align:center;">快餐</p></div> 
  </div>

  <!-- 卡片 -->
  <p class="serif">今日特惠 <text style="font-size:12px;font-weight:100;">这么买太便宜了！</text> <text style="font-size:18px;font-weight:100;float:right;margin-top:5px;">更多></text></p>
<div class="usermotto">
  <view class="cu-card case">
<view class="cu-item shadow">
<view class="image">
<image mode="widthFix" src="http://img3.imgtn.bdimg.com/it/u=2343053044,2247314709&fm=11&gp=0.jpg" style="height: 194.697px;"></image>
<view class="cu-tag bg-blue" style="width:60px;">特价</view>
<view class="cu-bar bg-shadeBottom">
  <text class="text-cut">
    <text style="color:red;font-size:35px;">$20</text> 我家的小龙虾特别好吃，长得好看，今天打八折
    </text>
  </view>
</view>
<view class="cu-list menu-avatar">
<view class="cu-item">
<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
<view class="content flex-sub">
<view class="text-grey">王小二海鲜</view>
<view class="text-gray text-sm flex justify-between">
一天前
<view class="text-gray text-sm">

<text class="cuIcon-appreciatefill margin-lr-xs">
::before
</text>
20
<text class="cuIcon-messagefill margin-lr-xs">
::before
</text>
30
</view>
</view>
</view>
</view>
</view>
</view>
</view>
</div>
<!-- 为您优选 -->
<p class="serif" >为您优选</p> 
  <div class="usermotto" style="height:230px;">    
<swiper bindchange="cardSwiper" class="card-swiper square-dot" duration="500" indicator-active-color="#0081ff" indicator-color="#8799a3" interval="5000" current="3">  
     <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
<view class="swiper-item">
<image mode="aspectFill" src="http://handan.v00.cn/1155759/20200404154212619.jpg"></image>
</view>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
<view class="swiper-item">
<image mode="aspectFill" src="http://img1.imgtn.bdimg.com/it/u=2737409694,2991031523&fm=26&gp=0.jpg"></image>
</view>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(200%, 0px) translateZ(0px);">
<view class="swiper-item">
<image mode="aspectFill" src="http://img1.imgtn.bdimg.com/it/u=193722845,2263257218&fm=26&gp=0.jpg"></image>
</view>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(300%, 0px) translateZ(0px);">
<view class="swiper-item">
<image mode="aspectFill" src="http://img2.imgtn.bdimg.com/it/u=3060097219,3929277575&fm=11&gp=0.jpg"></image>
</view>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(400%, 0px) translateZ(0px);">
<view class="swiper-item">
<image mode="aspectFill" src="http://img1.imgtn.bdimg.com/it/u=1504617013,2374899438&fm=26&gp=0.jpg"></image>
</view>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(500%, 0px) translateZ(0px);">
<view class="swiper-item">
<image mode="aspectFill" src="http://img4.imgtn.bdimg.com/it/u=334858679,3190543625&fm=11&gp=0.jpg"></image>
</view>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(600%, 0px) translateZ(0px);">
<view class="swiper-item">
<image mode="aspectFill" src="http://img3.imgtn.bdimg.com/it/u=2343053044,2247314709&fm=11&gp=0.jpg"></image>
</view>
</swiper-item>
</swiper>
  </div>

<!-- 导航栏 -->
<p class="serif" >附近商家</p>
<div >
<scroll-view class="bg-white nav">
<view class="flex text-center">
<view @click='tabSelect' class="cu-item flex-sub text-orange cur" data-id="0"> 综合排序 </view>
<view @click='tabSelect' class="cu-item flex-sub" data-id="1"> 销量高 </view>
<view @click='tabSelect' class="cu-item flex-sub" data-id="2"> 速度快</view>
<view @click='tabSelect' class="cu-item flex-sub" data-id="3"> 评分高 </view>
</view>
</scroll-view>
</div>

<!-- 列表 -->
<div>
 <view class="cu-card article no-card" style="margin:10px;margin-bottom:0px;" @click='jumpshop'>
<view class="cu-item shadow">
<view class="content" style="margin-top:20px;">
<image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586777994949&di=c3ea23265e589cf66bf8070a71900bc1&imgtype=0&src=http%3A%2F%2Fp1.meituan.net%2Fdeal%2Fa9f88619ce8ae507c9c042bd464d39d3323711.jpg"></image>
<view class="desc">
 <view class="text-content"> <view style="font-size:22px;font-weight:600;color:black;"> 兄弟鸡公煲</view> 
   月售250<view style="float:right;"> 30分钟/1.4千米</view>
 </view>
<view>
<view class="cu-tag bg-red light sm round">分量大</view>
<view class="cu-tag bg-green light sm round">可口</view>
<view class="cu-tag bg-blue light sm round">20减4</view>
</view>
</view>
</view>
</view>
</view>

<view class="cu-card article no-card" style="margin:10px;margin-bottom:0px;">
<view class="cu-item shadow">
<view class="content" style="margin-top:20px;">
<image mode="aspectFill" src="http://img1.imgtn.bdimg.com/it/u=193722845,2263257218&fm=26&gp=0.jpg"></image>
<view class="desc">
 <view class="text-content"> <view style="font-size:22px;font-weight:600;color:black;"> 最好吃的寿司</view> 
   月售300<view style="float:right;"> 30分钟/2.5千米</view>
 </view>
<view>
<view class="cu-tag bg-red light sm round">20起送</view>
<view class="cu-tag bg-green light sm round">好吃好吃</view>
<view class="cu-tag bg-blue light sm round">20减2</view>
</view>
</view>
</view>
</view>
</view>

<view class="cu-card article no-card" style="margin:10px;margin-bottom:0px;">
<view class="cu-item shadow">
<view class="content" style="margin-top:20px;">
<image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586778293449&di=7794d4ac28b4efb82d1f5c46453251a9&imgtype=0&src=http%3A%2F%2Fattachment.jmw.com.cn%2Fcomp_uploadfile%2Fnews%2F2018%2F10%2F31%2F35481540996299.jpg"></image>
<view class="desc">
 <view class="text-content"> <view style="font-size:22px;font-weight:600;color:black;"> 重庆小面</view> 
   月售120<view style="float:right;"> 20分钟/2.5千米</view>
 </view>
<view>
<view class="cu-tag bg-red light sm round">20减3</view>
<view class="cu-tag bg-green light sm round">正宗</view>
</view>
</view>
</view>
</view>
</view>
</div>
    <!-- <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
     
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form> -->
<!-- 
    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
      
    </div> -->
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: '为您优选'
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    jumpshop: function (options) {
      // eslint-disable-next-line no-undef
      wx.navigateTo({
        url: '../shop/main'
      })
    },
    tabSelect (e) {
      this.TabCur = e.currentTarget.dataset.id
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.hole{
 display: flex;
  flex-direction:column;
}
.top{
  display: inline-block;
  height: 30px;
 
}
p.serif{
  font-family:"微软雅黑",Times,serif;
  font-size:24px;
  font-weight: 500;
  float:left; 
  margin-top:15px; 
  padding: 6px;
  }
p.serif2{
  font-family:"微软雅黑",Times,serif;
  font-size:12px;
  font-weight: 200;
  float:right;
  width:120px;
 
  }
.userinfo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 13px;
}
.icon{
   width: 50px;
  height:65px;
  margin: 37rpx;
}
.userinfo-avatar {
   width: 60px;
   height: 50px;
   margin-bottom: 5px;
 
}
.userinfo-location{
   width:60rpx;
  height: 48rpx;
  margin: 10rpx;
  padding-left: 5px;
  
  float: left;
}
.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  height: 300px;
}
.card{
   height: 200px;
   margin-top: 120px;
}
.form-control {
  display: block;
  width:150px;
  padding: 0 12px;
  margin: 10px;
  border: 1px solid #ccc;
}
.search{
  display: block;
  height: 30px;
  padding: 0 12px;
  margin: 10px;
  margin-top: 0px;
  border-radius: 8px;
  border: 1px solid rgb(179, 173, 173);
  background-color: rgba(224, 226, 226, 0.884);
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
103,214,58
215,240,219