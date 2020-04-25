<template>
<!-- 商品信息管理 -->
    <div>
        <i-card title="美味大薯" extra="10元/份" thumb="/static/images/shutiao.jpg">
         <view slot="content">美味可口</view>
         <view slot="footer" class="flex justify-between">库存100份
         <button class="cu-btn" role="button">修改&nbsp;
             <text class="cuIcon-write"></text></button>
        </view>
        </i-card>
        <i-card title="美味薯条" extra="10元/份" thumb="/static/images/shutiao.jpg">
         <view slot="content">美味可口</view>
         <view slot="footer" class="flex justify-between">库存100份
             <button class="cu-btn" role="button" @click="GoodsClick()">修改&nbsp;
             <text class="cuIcon-write"></text></button>
        </view>
        </i-card>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
        // 跳转
        GoodsClick () {
            mpvue.navigateTo({
                url: '/pages/changeG/main'
            })
        }
    }
}
</script>