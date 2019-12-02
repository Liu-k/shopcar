import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    list:[],
    curList:[],
    changeAll:false
  },
  getters:{
    totalnum(state){
      let num=0
      state.curList.forEach(item=>{
        num+=item.count
      })
      return num
    },
    totalprice(state){
      let price=0
      state.curList.forEach(item=>{
        price+=item.count*item.newPrice
      })
      return price
    }
  },
  mutations: {
    changelist(state,action){
      state.list=action.list
    },
    additem(state,action){
      let Item=state.list.find(item=>item.id===action.id)
      Item.count=1
      let Index=state.curList.findIndex(item=>item.id===action.id)
      if(Index==-1){
        state.curList.push(Item)
      }else{
        alert('该商品已经存在了哦')
      }
    
    },
    changenum(state,action){
     let Item= state.curList.find(item=>item.id===action.obj.id)
      if(action.obj.type==='-'){
        Item.count--
        if(Item.count<=0){
          Item.count=0
        }
      }else{
        Item.count++
      }
    },
    changeitem(state,action){
      let item=state.curList.find(item=>item.id===action.id)
      item.flag=!item.flag
      console.log(item.flag)
      state.changeAll=state.curList.every(item=>item.flag)
    },
    checkAll(state,action){
      console.log(state.changeAll)
      state.changeAll=!state.changeAll
      state.curList.forEach(item=>{
        item.flag=state.changeAll
      })
    }
  },
  actions: {
    getlist(context){
      axios.get('/getlist').then(res=>{
        context.commit('changelist',{list:res.data})
      })
    }
  },
  modules: {
  }
})
