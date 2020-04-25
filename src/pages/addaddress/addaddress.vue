<template>
  <div>
    <form>
      <view class="cu-form-group">
        <view class="title">联系人</view>
        <input placeholder="姓名">
      </view>
      <!-- <view class="cu-form-group margin-top">
        <view class="title">性别</view>
        <picker bindchange="PickerChange" :value="index" :range="picker"></picker>
      </view> -->
      <view class="cu-form-group margin-top">
		<view class="title">电话</view>
		<input placeholder="手机号码">
	</view>
      <view class="cu-form-group">
		<view class="title">收货地址</view>
		<input placeholder="选收货地址"></input>
		<text class="cuIcon-locationfill text-orange"></text>
	</view>
  <view class="cu-form-group">
        <view class="title">联系人</view>
        <input placeholder="姓名">
      </view>
    </form>
  </div>
</template>
<script>
export default {
  // data: {
  //   return() {},
  //   picker: ["男", "女"]
  // },
  // PickerChange(e) {
  //   console.log(e);
  //   this.setData({
  //     index: e.detail.value
  //   });
  // }
}
</script>