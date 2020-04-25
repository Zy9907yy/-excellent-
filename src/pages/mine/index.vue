<template>
  <div @click="clickHandle">
    <div class="head">
      <div>
        <image src="/static/images/111.jpg" class="headphoto" />
      </div>

      <div style="flex-direction: column; margin-left: 40rpx;">
        <div class="username">
          我的买卖
          <img src="/static/images/edit.png" alt="edit" class="editpng" />
        </div>

        <navigator
          url="/pages/manage/main"
          style="width: 150rpx; height: 70rpx;"
        >
          <button class="management">账号管理&gt;</button></navigator
        >
      </div>
    </div>


 
<!-- <view class="cu-bar bg-white margin-top">
  <view class="action">
    <text class="cuIcon-title text-orange "></text> 对话窗口
  </view>
  <view class="action">
    <button class="cu-btn bg-blue shadow margin-left" bindtap="showModal" data-target="DialogModal2">Dialog</button>
  </view>
</view> -->


<view class="cu-modal" :class="modalName=='DialogModal2'?'show':''">
  <view class="cu-dialog">
    <view class="cu-bar bg-white justify-end">
      <view class="content">Modal标题</view>
      <view class="action" bindtap="hideModal">
        <text class="cuIcon-close text-red"></text>
      </view>
    </view>
    <view class="padding-xl">
      Modal 内容。
    </view>
    <view class="cu-bar bg-white">
      <view class="action margin-0 flex-sub text-green solid-left" bindtap="hideModal">取消</view>
      <view class="action margin-0 flex-sub  solid-left" bindtap="hideModal">确定</view>
    </view>
  </view>
</view>





    <view class="cu-list menu middle margin-bottom-xl shadow-lg radius">
     <view class="cu-item arrow form-line">
        <navigator class="content" hover-class="none" url="/pages/mmmm/main">
          <image
            src="/static/images/address.png"
            class="png"
            mode="aspectFit"
          ></image>
          <text class="text-grey">我的地址</text>
        </navigator>
      </view>
      <view class="cu-item arrow">
        <navigator class="content" hover-class="none" url="/pages/advice/main">
          <text class="cuIcon-writefill text-cyan"></text>
          <text class="text-grey">意见反馈</text>
        </navigator>
      </view>
       
      <view class="cu-item arrow form-line">
        <navigator class="content" hover-class="none" url="/pages/about/main">
          <image
            src="/static/images/tree.png"
            class="png"
            mode="aspectFit"
          ></image>
          <text class="text-grey">关于优&nbsp;+</text>
        </navigator>
      </view>
            <view class="cu-item arrow form-line">
        <div class="content">
          <image
            src="/static/images/heart.png"
            class="png"
            mode="aspectFit"
          ></image>
          <text class="text-grey">退出登录</text>
        </div>
      </view>
    </view>
  </div>
</template>

<script>
import card from '@/components/card'

export default {

  components: {
    card
  },
  medoths: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    },
    showModal (e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal (e) {
      this.setData({
        modalName: null
      })
    }
  }
}
</script>

<style>
.head {
  width: 100%;
  height: 230rpx;
  background-color: #8dc73e;
  display: flex;
  flex-direction: row;
}

.editpng {
  width: 40rpx;
  height: 40rpx;
}
.headphoto {
  width: 150rpx;
  height: 150rpx;
  margin-left: 50rpx;
  border-radius: 5000rpx;
  background-size: cover;
  background-position: center;
  vertical-align: middle;
}
.management {
  width: 150rpx;
  height: 70rpx;
  transform: translate(1rpx, 1rpx);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 28rpx;
  padding: 0;
}
.username {
  margin-bottom: 30rpx;
}
.middle {
  width: 660rpx;
  height: auto;
  margin: 50rpx auto;
  border-radius: 20rpx;
  overflow: hidden;
  background-color: white;
  /* padding: 20rpx; */
  color: gray;
}
.form-line {
  border-bottom: #f1f1f1 solid 2px;
  display: flex;
  padding: 0 30rpx;
  min-height: 100rpx;
  align-items: center;
}
</style>
