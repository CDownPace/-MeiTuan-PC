<style scoped lang="scss">
// i{
//   font-size:32px;
// }
.header-group {
  background-color: #1c1b20;
  padding: 20px 14px 10px;
  .address-group {
    color: white;
    font-size: 16px;
    font-weight: 700;
  }

  .search-group {
    margin-top: 10px;
  }
}

.main-group {
  h2 {
    padding: 20px 10px 10px;
  }
  .merchant-list {
    .merchant-item {
      padding: 10px;
      display: flex;
      .logo {
        width: 85px;
        height: 64px;
      }
      .merchant-info {
        margin-left: 5px;
        .merchant-name {
          font-size: 16px;
          weight: 700;
        }
        .rate-group {
          padding-top: 5px;
        }
        .tag-group {
          padding-top: 5px;
          span {
            margin-right: 2px;
          }
        }
      }
    }
  }
}
</style>

<style scoped>
.van-dropdown-menu__item {
  font-size: 15px;
  color: #767676;
}
.van-dropdown-menu >>> .van-ellipsis {
  color: #767676;
}
</style>



<template>
  <div class="home-container">
    <div class="header-group">
      <div class="address-group">
        <i class="iconfont icon-dingwei"></i>
        <span class="address">三里屯</span>
        <i class="iconfont icon-iconfontjiantou3"></i>
      </div>
      <div class="search-group">
        <van-search placeholder="请输入搜索关键词" />
      </div>
    </div>

    <div class="main-group">
      <h2>推荐商家</h2>
      <van-dropdown-menu>
        <van-dropdown-item v-model="sort" :options="sorts" />
        <!-- 下拉菜单 -->
        <div class="van-dropdown-menu__item">品质联盟</div>
        <div class="van-dropdown-menu__item">距离最近</div>
        <div class="van-dropdown-menu__item">
          筛选
          <i class="iconfont icon-loudou"></i>
        </div>
      </van-dropdown-menu>
      <div class="merchant-list">
        <router-link to="/merchant/1">
          <div class="merchant-item">
            <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578392951322&di=dab8cf615e49f64fc72cabd1e2be2d5e&imgtype=0&src=http%3A%2F%2Fp0.so.qhmsg.com%2Ft01c7dbf19c160a43d5.png"
              alt
              class="logo"
            />
            <div class="merchant-info">
              <div class="merchant-name">肯德基</div>
              <div class="rate-group">
                <van-rate size="12" v-model="rate"></van-rate>
                <!-- 评分 -->
              </div>
              <div class="tag-group">
                <van-tag round>美团专送</van-tag>
                <van-tag round>家常菜</van-tag>
              </div>
            </div>
          </div>
        </router-link>

        <div class="merchant-item">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578392951322&di=dab8cf615e49f64fc72cabd1e2be2d5e&imgtype=0&src=http%3A%2F%2Fp0.so.qhmsg.com%2Ft01c7dbf19c160a43d5.png" alt class="logo" />
          <div class="merchant-info">
            <div class="merchant-name">肯德基</div>
            <div class="rate-group">
              <van-rate size="12" v-model="rate"></van-rate>
              <!-- 评分 -->
            </div>
            <div class="tag-group">
              <van-tag round>美团专送</van-tag>
              <van-tag round>家常菜</van-tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Search, DropdownMenu, DropdownItem, Rate, Tag } from "vant";

export default {
  name: "Home",
  data() {
    return {
      sort: 0,
      rate: 8,
      sorts: [
        { text: "综合排序", value: 0 },
        { text: "好评优先", value: 1 },
        { text: "距离最近", value: 2 },
        { text: "销量最高", value: 3 }
      ]
    };
  },
  components: {
    [Search.name]: Search,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem,
    [Rate.name]: Rate,
    [Tag.name]: Tag
  }
};
</script>

