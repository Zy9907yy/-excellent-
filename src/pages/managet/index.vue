<template>
<!-- 审核通过后界面 -->
    <div>
        <view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
        <view class="cu-item" :class="menuArrow?'arrow':''">
			<view class="content">
				<text class="cuIcon-shopfill text-grey"></text>
				<text class="text-grey xsl text-black" @click="goods">商品信息管理</text>
			</view>
		</view>
        <view class="cu-item" :class="menuArrow?'arrow':''">
			<view class="content">
				<text class="cuIcon-formfill text-grey"></text>
				<text class="text-grey xxl text-black" @click="order">订单信息管理</text>
			</view>
		</view>
        </view>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    mounteds: {
    },
    methods: {
        goods () {
            mpvue.navigateTo({
                url: '/pages/mangoods/main'
            })
        },
        order () {
            mpvue.navigateTo({
                url: '/pages/manorder/main'
            })
        }
    }
}
</script>