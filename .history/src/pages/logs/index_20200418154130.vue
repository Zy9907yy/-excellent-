<template>
  <div class="page">
<!--导航条-->
<i-tabs :current=" current " color="green" @change="handleChange">
    <i-tab key="tab1" title="全部订单"></i-tab>
    <i-tab key="tab2" title="待付款"></i-tab>
    <i-tab key="tab3" title="退款"></i-tab>
</i-tabs>
 
<!-- 原模板 -->
<div :hidden="current!=='tab1'">
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
</div>
<div :hidden="current!=='tab2'">
    <li v-for="(item2,i) in listTwo" v-bind:key="i">
<i-card full :title="item2.name" :extra="item2.value" :headerStyle="headerStyle" :thumb="item2.pic" :fontStyle="fontStyle" i-class="card-demo" >

    <view slot="content" class="des">{{item2.description}}</view>
    <!-- <view slot="footer">{{item.pros}}</view> -->
</i-card>
</li>
</div>
<div :hidden="current!=='tab3'">
      <li v-for="(item3,i) in listThree" v-bind:key="i">
<i-card full :title="item3.name" :extra="item3.value" :headerStyle="headerStyle" :thumb="item3.pic" :fontStyle="fontStyle" i-class="card-demo" >

    <view slot="content" class="des">有效期至:{{item3.description}}</view>
    <view slot="content" class="des">数量:{{item3.desNum}}</view>
        <view slot="content" class="des">总价:{{item3.desPrice}}</view>

</i-card>
</li>
</div>
     
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
      current: 'tab1',
      fontStyle: 'font-size:20px;display:inline-block;width:100px;height:40px;line-height:40px;margin:10px;font-weight:bold;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;',
      headerStyle: 'display:flex',
      listTwo: [
        {
          name: '正新鸡排',
          value: '5元/份',
          pic: 'http://img2.imgtn.bdimg.com/it/u=1486489200,393999092&fm=26&gp=0.jpg',
          description: '123456',
          desNum: '1',
          desPrice: '￥108'

        },
        {
          name: '旋转小火锅',
          value: '29元/人',
          pic: 'http://userimages12.51sole.com/20161029/b_2862661_201610291421266947.jpg',
          description: '888888'
        },
        {
          name: '牛排',
          value: '69元/人',
          pic: 'http://img1.qunarzz.com/travel/poi/201211/01/36d39b7abf902b15ddb12cfb.jpg_r_480x360x95_8faf0117.jpg',
          description: '5646871'
        }
      ],
      listThree: [{
        name: '正新鸡排',
        value: '5元/份',
        pic: 'http://img2.imgtn.bdimg.com/it/u=1486489200,393999092&fm=26&gp=0.jpg',
        description: '123456'

      }]

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
    handleChange ({ mp }) {
    //   console.log(mp)
      this.current = mp.detail.key
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
/* 卡片内样式 */
.des{
    font-size:16px;
    margin-left:80px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
