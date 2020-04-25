<template>
<!-- 商家信息注册界面 -->
    <div class="reall">
        <!-- <div></div> -->
            <view>
                <form>
                    <view class="cu-form-group margin-top">
				<view class="title">店铺名称</view>
				<input placeholder="请输入店铺名称" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">店铺简介</view>
				<input placeholder="请输入店铺简介" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">店铺地址</view>
				<input placeholder="请输入店铺地址" name="input"></input>
			</view>
            <view class="cu-form-group">
				<view class="title">负责人</view>
				<input placeholder="请输入负责人姓名" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">身份证号</view>
				<input placeholder="请输入负责人身份证号" name="input"></input>
			</view>
            <view class="cu-form-group">
				<view class="title">联系方式</view>
				<input placeholder="请输入负责人联系方式" name="input"></input>
			</view>

            <view class="cu-form-group margin-top">
				<view class="title">店铺类型</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'请选择店铺类型'}}
					</view>
				</picker>
			</view>

            <view class="cu-bar bg-white margin-top">
				<view class="action">
					营业执照以及卫生许可证上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">头像</view>
				<view class="cu-avatar radius bg-gray"></view>
			</view>
                </form>
            </view>
        <div>
            <button @click="regist" class="cu-btn bg-gradual-green margin-tb-sm lg">注册店铺</button>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            index: -1,
			picker: ['a', 'b', 'c'],
			imgList: []
        }
    },

    mounteds: {
    },
    methods: {
		// 类型选择
        PickerChange (e) {
				this.index = e.detail.value
			},
		// PickerChange (e) {
		// 	console.log(e)
		// 	this.setData({
		// 		index: e.detail.value
		// 		})
		//     },
		// 跳转
        regist () {
            mpvue.navigateTo({
                url: '/pages/manage/main'
            })
		},
		// 上传图片
			ChooseImage () {
				wx.chooseImage({
                    count: 4,
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
<style>
.reall{
    overflow: auto;
}
.int1{
    width: 80%;height: 8vh;
    border: 2px solid black;border-radius: 10px;
}
.cu-btn{
    width: 100%;
}
</style>
