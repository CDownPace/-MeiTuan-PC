
<style scoped lang='scss'>
// 商家详情界面
.header-group {
  background-color: #2e2f3b;
  padding: 10px;
  display: flex;
  margin-top: -46px;
  padding-top: 46px;
  .logo {
    width: 85px;
    height: 64px;
  }
  .merchant-info {
    flex: 1;
    margin-left: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    .notice {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      // 超出的部分变成...
    }
  }
}

.tab-group {
  .menu-group {
    display: flex;
    .category-group {
      width: 80px;

      text-align: center;
      // background: pink;
      height: 100%;
      overflow: hidden;
      .category-list {
        overflow: hidden;
        li {
          height: 50px;
          line-height: 50px;
          &.active {
            background-color: #ccc;
          }
        }
      }
    }
    .goods-group {
      flex: 1;
      overflow: hidden;
      // background: yellow;
      margin-left: 10px;
      height: 100%;
      .category-name {
        font-size: 12px;
        height: 32px;
        line-height: 32px;
      }
      .goods-item {
        display: flex;
        // margin-bottom: 10px;
        padding-bottom: 10px;
        height: 75px;
        .thumbnail {
          width: 75px;
          height: 75px;
        }
        .goods-info {
          flex: 1;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          .gooda-name {
            font-size: 16px;
            font-weight: 700;
          }
          .goods-info-bottom{
            display:flex;
            justify-content:space-between;
            align-items:center;
            .price {
            color: #fb4e44;
            font-size: 16px;
            font-weight: 700;
          }
          }
          
        }
      }
    }
  }
}
</style>



<template>
  <div class="merchant-container">
    <mt-nav-bar></mt-nav-bar>
    <div class="header-group">
      <!-- 头 -->
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578392951322&di=dab8cf615e49f64fc72cabd1e2be2d5e&imgtype=0&src=http%3A%2F%2Fp0.so.qhmsg.com%2Ft01c7dbf19c160a43d5.png"
        alt
        class="logo"
      />
      <div class="merchant-info">
        <div class="delivery-info">
          <span>20分钟</span> |
          <span>1千米</span>
        </div>
        <div class="notice">公告：欢迎关注肯德基宅急送，专业外送，全程保温，准时送达</div>
      </div>
    </div>

    <van-tabs class="tab-group" v-model="active">
      <van-tab title="点菜">
        <!-- 点菜页面 -->
        <div class="menu-group" :style="menuHeightStyle">
          <div class="category-group" ref="category">
            <ul class="category-list">
              <li
                v-for="(category,index) in categories"
                :key="category.name"
                @click="catgoryClick(index)"
                :class="index==currentIndex?'active':''"
              >{{category.name}}</li>
            </ul>
          </div>

          <div class="goods-group" ref="goods">
            <div class="goods-list">
              <dl v-for="(category,category_index) in categories" :key="category.name" class="goods-dl">
                <dt class="category-name">{{category.name}}</dt>
                <dd class="goods-item" v-for="(goods,goods_index) in category.goods_list" :key="goods.id" @click="goodsClick(category_index,goods_index)">
                  <img :src="goods.picture" alt class="thumbnail" />
                  <div class="goods-info">
                    <div class="goods-name">{{goods.name}}</div>
                    <div class="month-sale">月售10份</div>
                    
                    <div class="goods-info-bottom">
                      <div class="price">￥{{goods.price}}</div>
                      <stepper v-model="goods.count"></stepper>
                      <!-- {{goods.count}} -->
                    </div>
                    
                    
                   
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="评价">评价页面</van-tab>
      <van-tab title="商家">商家页面</van-tab>
      
    </van-tabs>
<goods-detail :goods="detailGoods"></goods-detail>
    <cart :categories="categories"></cart>
  </div>
</template>

<script type="text/ecmascript-6">
import { NavBar, Tab, Tabs } from "vant";
import BScroll from "better-scroll";
import kfc from "../../data/kfc";
// 左边拉动效果：better-scroll
import GoodsDetail from "./GoodsDetail"
import Stepper from './Stepper'
import Cart from './Cart'
import MTNavBar from '../Commen/MTNavBar'

export default {
  name: "Merchant",
  data() {
    return {
      active: 0,
      categories: [],
      position: [],
      currentIndex: 0,
      detailGoods:undefined
    };
  },
  computed: {
    // 计算属性
    menuHeightStyle() {
      const height = window.innerHeight - 164;
      return {
        height: height + "px"
      };
    }
  },
  components: {
    
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [BScroll.name]: BScroll,
    [GoodsDetail.name]:GoodsDetail,
    [Stepper.name]:Stepper,
    [Cart.name]:Cart,
    [MTNavBar.name]:MTNavBar
  },
  mounted() {
    const categories = kfc["categories"];
    for (let category of categories){
      for(let goods of category.goods_list){
        goods.count=0;
      }
    }
    this.categories = categories;
    // console.log(this.categories);
    this.$nextTick(() => {
      var menuScroll = new BScroll(this.$refs.category, {
        // 获取带ref的所有元素

        scrollY: true,
        click: true
      });

      var goodsScroll = new BScroll(this.$refs.goods, {
        scrollY: true,
        click: true,
        // 设置probeType为2，才能监听scroll事件
        probeType: 2
      });

      goodsScroll.on("scroll", pos => {
        const y = Math.abs(pos.y);
        const positions = this.positions;
        for (let index = positions.length - 1; index >= 0; index--) {
          const position = positions[index];
          if (y >= position) {
            this.currentIndex = index;
            break;
          }
        }
      });

      this.menuScroll = menuScroll;
      this.goodsScroll = goodsScroll;

      const positions = [0];
      let offset = 0;

      const dlList = document.getElementsByClassName("goods-dl");
      // for...in...  循环对象
      // for...of...  循环数组
      for (let dl of dlList) {
        const height = dl.clientHeight;
        offset += height;
        positions.push(offset);
      }
      this.positions = positions;
    });
    // console.log(this.mainStyle)
  },
  methods: {
    catgoryClick(index) {
      //  console.log("当前点击的：",index)
      const position = this.positions[index];
      // 滚动的时候如果想往上面滚动，就加上负号
      this.goodsScroll.scrollTo(0, -position, 500);
      this.currentIndex = index;
    },
    
    goodsClick(category_index,goods_index){
      let category =this.categories[category_index]
      let goods=category.goods_list[goods_index]
      // console.log(goods)
      this.detailGoods=JSON.parse(JSON.stringify(goods));
    }
  }
};
</script>

