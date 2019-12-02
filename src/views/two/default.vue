<template>
  <div class="def">
      <div class="def-item" v-for="(item,index) in list" :key='index'>
        <defItem :msg='item'/>
      </div>
  </div>
</template>

<script>
import defItem from '../../components/defItem'
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['list'])
  },
 created () {
   this.$store.dispatch('getlist')
 },
 components: {
   defItem
 }
 
}
</script>

<style lang="scss" scoped>
  .def{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .def-item{
      width: 50%;
      height: 200px;
    }
  }
</style>