<template>
  <div class="home">
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <router-link v-for="(item,index) in list" :key="index" tag='dl' :to='item.path' active-class='active'>
        <dt><span :class="item.icon" style="font-size:24px"></span></dt>
        <dd>{{item.name}}</dd>
      </router-link>
    </div>
  </div>
</template>

<script>


export default {
  data () {
    return {
      list:[
        {
          name:'首页',
          path:'/default',
          icon:'iconfont icon-iconset0111'
        },
        {
          name:'分类',
          path:'/classify',
          icon:'iconfont icon-icon-test'
        },
        {
          name:'购物车',
          path:'/shopcar',
          icon:'iconfont icon-gouwuche'
        },{
          name:'我的',
          path:'/my',
          icon:'iconfont icon-wode01'
        }
      ]
    }
  },
  name: 'home',
  components: {
   
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .main{
      width: 100%;
      flex: 1;
      overflow: auto;
    }
    .footer{
      width: 100%;
      display: flex;
      line-height: 23px;
      dl{
        flex: 1;
        text-align: center;
      }
    }
    .active{
      color: orange;
    }
  }
</style>
