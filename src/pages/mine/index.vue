<template>
  <div @click="clickHandle">
    <div class="head">
      <div>
        <a href=""> <image src="/static/images/111.jpg" class="headphoto" /></a>
      </div>
      <div style="flex-direction: column; margin-left: 50rpx;">
        <div class="username">
          我的买卖
          <img src="/static/images/edit.png" alt="edit" class="editpng" />
        </div>

        <a href="/pages/manage/main" style="width: 150rpx; height: 70rpx;">
          <button class="management">账号管理&gt;</button></a
        >
      </div>
    </div>
    <div style="width: 100%; background-color: #f1f1f1; position: fixed;">
      <div class="middle">
        <form >
          <div class="form-line">
            <div class="flex1"><text>ndjkenfcknk</text></div>
            <div class="flex2">〉</div>
          </div>
          <div class="form-line">
            <div class="flex1"><text>ndjkenfcknk</text></div>
            <div class="flex2">〉</div>
          </div>
          <div class="form-line">
            <div class="flex1"><text>ndjkenfcknk</text></div>
            <div class="flex2">〉</div>
          </div>
          <div class="form-line">
            <div class="flex1"><text>ndjkenfcknk</text></div>
            <div class="flex2">〉</div>
          </div>
          <div class="form-line">
            <div class="flex1"><text>ndjkenfcknk</text></div>
            <div class="flex2">〉</div>
          </div>
          <div class="form-line">
            <div class="flex1"><text>ndjkenfcknk</text></div>
            <div class="flex2">〉</div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {}
  },

  components: {
    card
  },
  medoths: {
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  }
}
</script>

<style>
.head {
  width: 100%;
  height: 250rpx;
  background-color: #8dc73e;
  display: flex;
  flex-direction: row;
}

.editpng {
  width: 40rpx;
  height: 40rpx;
}
.headphoto {
  width: 130rpx;
  height: 130rpx;
  margin-left: 30rpx;
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
  background: black;
  width: 660rpx;
  height: 600rpx;
  margin: 50rpx auto;
  border-radius: 20rpx;
  overflow: hidden;
  background-color: white;
  /* padding: 20rpx; */
  color: gray;
;
}
.form-line {
  border-bottom: #f1f1f1 solid 2px;
  display: flex;
  padding: 0 30rpx;
  min-height: 100rpx;
  align-items: center;
  display: flex;
}
.flex1{
  flex: 15;
}
.flex2{
  flex: 1;
}
</style>
