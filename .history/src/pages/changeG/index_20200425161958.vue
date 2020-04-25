<template>
<!-- 商品信息管理 -->
    <div>
        <view>
            <form>
            <view class="cu-form-group margin-top">
				<view class="title">商品名称</view>
				<input placeholder="请输入商品名称" name="input"/>
			</view>
			<view class="cu-form-group">
				<view class="title">商品单价</view>
				<input placeholder="请输入商品单价" name="input">
			</view>
			<view class="cu-form-group">
				<view class="title">商品库存</view>
				<input placeholder="请输入商品库存" name="input">
			</view>
            <view class="cu-form-group">
				<view class="title">商品备注</view>
				<input placeholder="请输入商品备注" name="input">
			</view>
            <view class="cu-bar bg-white margin-top">
				<view class="action">
					商品图片上传
				</view>
				<view class="action">
					{{imgList.length}}/1
				</view>
			</view>
            </form>
        </view>
    </div>
</template>
<script>
export default {
  data () {
    return {
      index: -1,
      imgList: []
    }
  },
  methods: {
    // 图片上传
    ChooseImage () {
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album'],
        success: (res) => {
          if (this.imgList.length !== 0) {
            this.imgList = this.imgList.concat(res.tempFilePaths)
          } else {
            this.imgList = res.tempFilePaths
          }
        }
      })
    },
    ViewImage (e) {
      wx.previewImage({
        urls: this.data.imgList,
        current: e.currentTarget.dataset.url
      })
    }
  }
}
</script>
