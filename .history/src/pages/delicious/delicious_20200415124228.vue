<template>
  <div class="container">
    <!-- 搜索条 -->
    <div style="width:100%">
      <view class="cu-bar search bg-white">
    <view class="search-form round">
      <text class="cuIcon-search"></text>
      <input type="text" placeholder="搜索图片、文章、视频" confirm-type="search"/>
    </view>
    <view class="action">
      <button class="cu-btn bg-green shadow-blur round">搜索</button>
    </view>
  </view>
    </div>
<!-- 美食分类 -->
 <view class="padding bg-white" style="font-size:14px;width:100%">
    <view class="flex">
      <view class="flex-sub  padding-sm margin-xs radius">
          <img src="../../../static/images/1.svg" class="icon-sort">
          <div class="text-sort">自助餐</div>
      </view>
      <view class="flex-sub  padding-sm margin-xs radius">
           <img src="../../../static/images/3.svg" class="icon-sort">
            <div class="text-sort">火锅</div>
      </view>
       <view class="flex-sub  padding-sm margin-xs radius">
            <img src="../../../static/images/5.svg" class="icon-sort">
             <div class="text-sort">川湘菜</div>
       </view>
        <view class="flex-sub  padding-sm margin-xs radius">
             <img src="../../../static/images/7.svg" class="icon-sort">
              <div class="text-sort">海鲜</div>
        </view>
    </view>
    <view class="flex">
      <view class="flex-sub padding-sm margin-xs radius">
           <img src="../../../static/images/2.svg" class="icon-sort">
            <div class="text-sort">西餐</div>
      </view>
      <view class="flex-sub  padding-sm margin-xs radius">
           <img src="../../../static/images/4.svg" class="icon-sort">
            <div class="text-sort">烧烤</div>
      </view>
       <view class="flex-sub  padding-sm margin-xs radius">
            <img src="../../../static/images/6.svg" class="icon-sort">
             <div class="text-sort">江浙菜</div>
       </view>
        <view class="flex-sub  padding-sm margin-xs radius">
             <img src="../../../static/images/8.svg" class="icon-sort">
              <div class="text-sort">料理</div>
        </view>
    </view>
  </view>
<!-- 店铺展示 -->
<scroll-view scroll-x class="bg-white nav">
  <view class="flex text-center">
  <view class="cu-item flex-sub" :class="0==TabCur?'text-green cur':''" @change="tabSelect" data-id="0">
     综合排序
  </view>
  <view class="cu-item flex-sub" :class="1==TabCur?'text-green cur':''" @change="tabSelect" data-id="1">
     销量高
  </view>
  <view class="cu-item flex-sub" :class="2==TabCur?'text-green cur':''" @change="tabSelect" data-id="2">
    筛选
  </view>
  </view>
</scroll-view>

<div>
<li v-for="(item,i) in list" v-bind:key="i" style="width:100%">
<i-card full :title="item.name" :extra="item.value" :headerStyle="headerStyle" :thumb="item.pic" :fontStyle="fontStyle" i-class="card-demo" >

    <view slot="content" class="des">{{item.description}}</view>
    <!-- <view slot="footer">{{item.pros}}</view> -->
</i-card>
</li>
</div>

<div>654321</div>
<div>123456</div>

  </div>
</template>

<script>
// 导入 click-counter 组件
// import ClickCounter from '@/components/click-counter'

export default {
  // 声明在当前组件下使用 counter-click 组件
//   components: { ClickCounter },

  data () {
    return {
      msg: 'Hello',
      fontStyle: 'font-size:20px;display:inline-block;width:100px;height:40px;line-height:40px;margin:10px;font-weight:bold;overflow:hidden;text-overflow: ellipsis;white-space: nowrap;',
      headerStyle: 'display:flex',
      list: [
        {
          name: '正新鸡排',
          value: '5元/份',
          pic: 'http://img2.imgtn.bdimg.com/it/u=1486489200,393999092&fm=26&gp=0.jpg',
          description: '123456'

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
        },
        {
          name: '火锅',
          value: '69元/人',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586419843628&di=b40bbcde3df391a3b6a3e1ec092a1678&imgtype=0&src=http%3A%2F%2Fpic119.nipic.com%2Ffile%2F20170103%2F21866715_222609972039_2.jpg',
          description: '5646871'
        }
      ],
      TabCur: 0
    }
  },
  methods: {
    tabSelect ({ e }) {
      console.log(e)
      this.TabCur = e.currentTarget.dataset.id
    }

  }
}
</script>

<style scoped>

.icon-sort{
    background-color:white;
    width:40px;
    height:40px;
    margin-left: 10px;
}
.text-sort{
    color:black;
    text-align: center;
}
.des{
    font-size:16px;
    margin-left:80px;
    overflow:hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
