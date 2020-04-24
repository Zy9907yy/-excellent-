<template>
  <div class="page">
<!--导航条-->
<view class="navbar">
  <text :wx:for="navbar" :data-idx="index" class="item" :class="currentTab==index ? 'active' : ''" wx:key="unique" bindtap="navbarTap">{{item}}</text>
</view>
 
<!--首页-->
<view :hidden="currentTab!==0">
 <!-- 原模板 -->
      <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>

    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
</view>
 
<!--搜索-->
<view :hidden="currentTab!==1">
  tab_02
</view>
 
<!--我-->
<view :hidden="currentTab!==2">
  tab_03
</view>

     
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'

export default {
  components: {
    card
  },

  data () {
    return {
      logs: [],
      imgUrls: [
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/newsPicture/05558951-de60-49fb-b674-dd906c8897a6',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/coursePicture/0fbcfdf7-0040-4692-8f84-78bb21f3395d',
        'http://mss.sankuai.com/v1/mss_51a7233366a4427fa6132a6ce72dbe54/management-school-picture/7683b32e-4e44-4b2f-9c03-c21f34320870'
      ],
      navbar: ['全部订单', '待付款', '退款'],
      currentTab: 0

    }
  },

  created () {
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
    } else {
      logs = mpvue.getStorageSync('logs') || []
    }
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  methods: {
    navbarTap: function (e) {
      this.setData({
        currentTab: e.currentTarget.dataset.idx
      })
    }

  }
}
</script>

<style scoped>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}

/* 导航 */
.page{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.navbar{
  flex: none;
  display: flex;
  background: #fff;
}
.navbar .item{
  position: relative;
  flex: auto;
  text-align: center;
  line-height: 80rpx;
}
.navbar .item.active{
  color: green;
}
.navbar .item.active:after{
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4rpx;
  background: green;
}
</style>
