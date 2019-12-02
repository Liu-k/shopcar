<template>
 <div class="def-box">
     <img :src='msg.img' alt="">
     <p>{{msg.title}}</p>
     <p>￥{{msg.newPrice}}</p>
     <button @click="addcart(msg.id)">加入购物车</button>
 </div>
</template>

<script>
export default {
    props: ['msg'],
    methods: {
        addcart(id){
        this.$store.commit('additem',{id:id})
        }
    }
}
</script>

<style lang="scss" scoped>
   .def-box{
         width: 100%;
         height: 100%;
        img{
          width: 100%;
          height: 60%;
        }
      }
</style>