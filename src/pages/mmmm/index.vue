<template>
  <div>
    <view class="cu-list menu middle margin-bottom-xl shadow-lg radius">
    <view class="cu-item arrow form-line">
        <navigator class="content" hover-class="none" url="/pages/addaddress/main">
          <image
            src="/static/images/address.png"
            class="png"
            mode="aspectFit"
          ></image>
          <text class="text-grey">新增地址</text>
        </navigator>
      </view>
    </view>
    <div class="addresscard">
      <view class="flex p-xs margin-bottom-sm mb-sm">
        <view class="flex-twice">
          <div style="font-size:32rpx;color:black;">河北工程学新校区</div>
          <div style="font-size:29rpx;color:black;margin-top:20rpx;">
            <div>门牌号</div>
          </div>
          <div style="font-size:29rpx;color:grey;display:flex;flex: row;margin-top:20rpx;">
            <div>姓名</div>
            <div>(性别)</div>
            <div style="margin-left:15rpx;">手机号</div>
          </div>
        </view>
        <view class="flex-sub editaddress">
          <img class="editpng" src="/static/images/editaddress.png" />
        </view>
      </view>

      <div style="flex-direction:column;height:100%;"></div>
    </div>
  </div>
</template>
<style>
.addresscard {
  background-color: white;
  height: 200rpx;
  width: 716rpx;
  margin: 15rpx auto;
  border-radius: 15rpx;
  padding: 30rpx;
  flex-direction: row;
  /* font-size: 30rpx;
    color: gray; */
}
.editaddress {
  /* background-color: yellow; */
  padding: 50rpx;
}
.editpng {
  width: 30px;
  height: 30px;
  -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
  filter: grayscale(100%) opacity(50%);
  margin-left: 125rpx;
}
</style>