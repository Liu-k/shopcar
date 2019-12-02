<template>
  <div class="shop-page">
      <div v-for="(item,index) in curList" :key='index' class="shop-item">
        <input type="checkbox" v-model="item.flag" @click="changeItem(item.id)">
        <span><img :src='item.img' alt=""></span>
        <span>{{item.title}}</span>
        <span>{{item.newPrice}}</span>
        <span><button @click="changecount({type:'-',id:item.id})">-</button>{{item.count}}<button @click="changecount({type:'+',id:item.id})">+</button></span>
      </div>
      <input type="checkbox" v-model="changeAll" @click="checkall">全选
      <p><span>数量：{{this.$store.getters.totalnum}}</span><span>总价：{{this.$store.getters.totalprice.toFixed(2)}}</span></p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['curList','changeAll'])
  },
  methods: {
    changecount(obj){
      this.$store.commit('changenum',{obj:obj})
    },
    changeItem(id){
      this.$store.commit('changeitem',{id:id})
    },
    checkall(){
      this.$store.commit('checkAll')
    }
  }

}
</script>

<style lang="scss" scoped>
.shop-page{
  width: 100%;
  height: 100%;
  .shop-item{
    width: 100%;
    height: 100px;
    display: flex;
    span{
      width: 25%;
      flex: 1;
      img{
         width: 100%;
         height: 100%;
      }
    }
  }
}
</style>