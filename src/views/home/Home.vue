<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature-view/>
    <tab-control class="tab-control"
                 :titles="['流行', '新款', '精选']"
                 @tabClick="tabClick" />
    <goods-list :goods="showGoods"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>

      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
      <li>列表7</li>
    </ul>
  </div>
</template>

<script>
  /*组件私有*/
  import HomeSwiper from "./childComps/HomeSwiper"; //轮播图
  import RecommendView from "./childComps/RecommendView"; //推荐
  import FeatureView from "./childComps/FeatureView"; //本周流行

  /*公共组件*/
  import NavBar from "@/components/common/navbar/NavBar"; //导航栏，屏幕最下方4大组件
  import TabControl from "@/components/content/tabControl/TabControl";
  import GoodsList from "@/components/content/goods/GoodsList";

  /*数据*/
  import {getHomeMuleidata, getHomeGoods} from "@/network/home";

  export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList
  },
  data() {
     return {
       banners: [],
       recommends: [],
       goods: {
         'pop': {page: 0, list: []},
         'new': {page: 0, list: []},
         'sell': {page: 0, list: []},
       },
       currentType: 'pop'
     }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() { //组件创建好就发送请求
    //1.请求多个数据
    this.getHomeMuleidata()

    //2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * s事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    },
    /**
     * 网络请求相关方法
     */
    getHomeMuleidata() {
      getHomeMuleidata().then(res => {
        //this.result = res;
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      //动态获取页码
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        //特殊语法，将一个数组解析塞进另一个数组里面
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color:#fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
  }
</style>
