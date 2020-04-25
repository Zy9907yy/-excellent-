<template>
<view>
<swiper class="screen-swiper round-dot" duration="500" interval="5000" current="2">
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
<image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587390099022&di=708120167f3c2655067ab0044a5c5bfa&imgtype=0&src=http%3A%2F%2Fwww.zx123.cn%2Fuploadfile%2F2016%2F0602%2F20160602151726_28375.jpg"></image>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
<image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587390131680&di=2163d42789ec8eee47f9bed3edd351d3&imgtype=0&src=http%3A%2F%2Fwww.dv37.com%2Fupload%2Feditor%2F201703%2F1489377775_690368.jpg"></image>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(200%, 0px) translateZ(0px);">
<image mode="aspectFill" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2776941628,513721050&fm=26&gp=0.jpg"></image>
</swiper-item>
<swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(300%, 0px) translateZ(0px);">
<image mode="aspectFill" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587390206888&di=a71e3bbcbac4117ec01712ba2290f1b2&imgtype=0&src=http%3A%2F%2Fs3img.city.sina.com.cn%2Ffood_city%2Fcommon%2Flarge%2Ff50bc728600a3f0a7cce630c425a4d38.png"></image>
</swiper-item>
</swiper>

<div style="height:150px;">
  <div>
    <p class="serif" style="width:200px;margin-left:6px;">味之美清甜烘焙</p>
    <img src="../../../static/images/店铺.png" alt="" style="width:45px;height:45px; margin-top:18px; padding: 6px;">
    <p class="serif2" style="width:400px;margin-top:10px;">本店致力于手工制造，为您提供新鲜可口的甜品</p>
 </div>
    <view class="cu-tag bg-red light sm round" style="margin:15px;">配送约30分钟</view>
    <view class="cu-tag bg-green light sm round" style="margin:15px;margin-left:5px;">好吃好吃</view>
    <view class="cu-tag bg-blue light sm round" style="margin:15px;margin-left:5px;">20减2</view>
</div> 

<scroll-view class="bg-white nav text-center">
  <view bindtap="tabSelect" class="cu-item text-blue cur" data-id="0"> 点菜 </view>
  <view bindtap="tabSelect" class="cu-item" data-id="1"> 评价 </view>
  <view bindtap="tabSelect" class="cu-item" data-id="2"> 商家 </view>
</scroll-view>

<div class="btn-up">
    <button class="btn" v-for="(item, key) in typelist" :key="key" @click="changelist(item)">
      {{item}}
    </button>
</div>
    <!-- <view>
      <view class="cu-card case no-card">
      <view class="cu-item shadow">
       <view class="image">
        <image mode="widthFix" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" style="height: 194.697px;"></image>
       <view class="cu-tag bg-blue">史诗</view>
      <view class="cu-bar bg-shadeBottom">
     <text class="text-cut">
         我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
     </text>
    </view>
    </view>
    <view class="cu-list menu-avatar">
      <view class="cu-item">
       <view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
        <view class="content flex-sub">
         <view class="text-grey"></view>
         <view class="text-gray text-sm flex justify-between">...</view>
        </view>
       </view>
      </view>
     </view>
    </view>
  </view> -->


    列表
    <view  v-for="(item, key) in renderlist" :key="key" >
      {{item.name}}
    </view>
</view>
</template>
<script>
export default {
  data () {
    return {
      typelist: ['面包类', '西点', '生日蛋糕', '饮品', '炒酸奶', '饼干'],
      list: [
        {
          type: '面包类',
          name: '树皮面包',
          img: '../../../static/images/甜点饮品.png'
        },
        {
          type: '面包类',
          name: '椰丝红豆'
        },
        {
          type: '西点',
          name: '慕斯'
        },
        {
          type: '西点',
          name: '冰淇淋'
        }
      ],
      renderlist: []
    }
  },
  methods: {
    changelist (target) {
      this.renderlist = this.list.filter(function (element) {
        return element.type === target
      })
    }
  },
  created () {
    this.changelist('西点')
  }
}
</script>
<style scoped>
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
.btn-up{
  display: flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
}
.btn{
  width: 80px;
  height: 30px;
  margin: 15px;
  margin-bottom: 0px;
  font-size:13px;
  font-weight: 400;
}
</style>