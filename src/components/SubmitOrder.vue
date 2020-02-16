<template>
<div class="">
<mt-nav-bar leftArrowStyle="black" title="确认订单"></mt-nav-bar>
<van-cell-group>
  <van-cell title="请选择收货地址" icon="location-o" is-link to="/address">
    <template slot="title" v-if="address">
      <div class="user-info">
        <span>{{address.realname}}</span>
        <span>{{address.telephone}}</span>
      </div>
      <div class="address-info">
        {{address.province}}{{address.city}}{{address.county}}{{address.detail}}

      </div>
    </template>
  </van-cell>
</van-cell-group>

<van-cell-group title="肯德基" border>
    <van-cell v-for="goods in goodsList" :key="goods.name">
        <template slot="title">
            <div class="goods-group">
                <div class="thumbnail-group">
                    <img :src="goods.picture" alt="">
                </div>
                <div class="info-group">
                    <div class="title-group">
                      console.log(goods.name)
                        <span>{{goods.name}}</span>
                        <span>¥{{goods.price}}</span>
                    </div>
                    <div class="number">份*{{goods.count}}</div>
                </div>
            </div>
        </template>
    </van-cell>
  </van-cell-group>

<van-submit-bar
  :price="totalPrice*100"
  button-text="提交订单"
  @submit="onSubmit"
/>


</div>
</template>

<script type="text/ecmascript-6">
import MTNavBar from "./Commen/MTNavBar"
import { Cell, CellGroup,SubmitBar } from 'vant';
export default{
  name:"SubmitOrder",
  data(){
    return {
      goodsList:[] ,
      address:{
        realname:"张三",
        telephone:"18877775645",
        province:"湖南省",
        city:"长沙市",
        county:"岳麓区",
        detail:"岳麓区109号"
      }
    }
  },
  computed:{
    totalPrice(){
      let total=0
      for(let goods of this.goodsList){
        total +=goods.price*goods.count
      }
      return total
    }
  },
  mounted(){
    this.goodsList = this.$store.state.cart
  },
  components:{
    [MTNavBar.name]:MTNavBar,
    [Cell.name]:Cell,
    [CellGroup.name]:CellGroup,
    [SubmitBar.name]:SubmitBar
  },
  method:{
     onSubmit(){
       console.log("点击了提交订单")
     }
  }
}
</script>
<style scoped lang='scss'>

.goods-group{
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #F8F8F8;
    .thumbnail-group{
      width: 55px;
      height: 55px;
      min-width: 55px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .info-group{
      flex: 1;
      padding-left: 10px;
      .title-group{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #333;
      }
    }
}
</style>