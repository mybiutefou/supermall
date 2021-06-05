<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar"; //导航栏，屏幕最下方4大组件
  import HomeSwiper from "./childComps/HomeSwiper"; //轮播图
  import RecommendView from "./childComps/RecommendView"; //推荐

  import {getHomeMuleidata} from "@/network/home";

  export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
     return {
       banners: [],
       recommends: []
     }
  },
  created() {
    //1.请求多个数据
    getHomeMuleidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color:#fff
  }
</style>
