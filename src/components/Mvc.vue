<template>
  <div class="todoapp">
    <h1>{{ msg }}</h1>
    <div class="todoSet">
      <strong @click="checkedItem">╲╱</strong>
      <input placeholder="What needs to be done?" v-model.trim="strValue"
          class="newtodo" @keyup.enter="addNewtodo({content:strValue,isExpand:false});
                                        clearValue();
                                        displayBlock();">
    </div>
    <div class="todoMain">
      <keep-alive>
        <router-view></router-view>
        <List class="main-list" @displayBlock="displayBlock" ref="list" />
      </keep-alive>
      <Operation class="main-operation" @displayBlock="displayBlock" />
    </div>
    <div class="todoInfo">
      <p>Double-click to edit a todo</p>
      <p>Written by Evan You</p>
      <p>Part of TodoMVC</p>
    </div>
  </div>
</template>

<script>
import List from './list.vue'
import Operation from './operation.vue'
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  //props 将数据从父组件传递到其他子组件
  //data 每个组件的内存,这是存储数据和希望跟踪的任何其他变量的地方
  name: 'Mvc',
  components:{
    List,
    Operation
  },
  data(){
    return{
      msg:'todos', //标题
      strValue:'', //文本框值
    }
  },
  computed:{
    ...mapGetters({
      contentItem:'getContentItem'
    }),
  },
  methods:{
    ...mapActions({
      addNewtodo:'syncAddContentItem'
    }),
    clearValue(){
      this.strValue = '';
    },
    displayBlock(){
      //通过数据量判断，0不显示全选箭头、排序
      if(this.contentIndex!=0){
        document.querySelector(".todoSet strong").style.display = "block";
        document.querySelector(".main-operation").style.display = "block";
      }else{
        document.querySelector(".todoSet strong").style.display = "none";
        document.querySelector(".main-operation").style.display = "none";
      }
    },
    //调用子组件（全选/反选）
    checkedItem(){
      this.$refs.list.checkedAll();
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todoSet{
  margin-top: 18vh;
}
p{
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.todoInfo{
  margin-top: 4vh;
}
.todoInfo p{
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}
.newtodo{
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  position: relative;
  margin: 0;
  width: 35vw;
  height: 8vh;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  padding: 6px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: white;
  padding-left: 3.5%;
  padding-right: 2%;
  border: 1px solid #ededed;
  outline: none;
  margin-left: 32.3%;
}
input{
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: -internal-light-dark-color(white, black);
  -webkit-rtl-ordering: logical;
  cursor: text;
  font: 400 13.3333px Arial;

}
input::-webkit-input-placeholder{
  color:#ededed;
}
.todoSet strong{
  position: absolute;
  left: 33.5%;
  top: 20.5%;
  z-index: 2;
  display: none;
  cursor: pointer;
}
.todoapp h1{
  position: absolute;
  top: -10vh;
  width: 99%;
  font-size: 100px;
  font-weight: 100;
  text-rendering: optimizeLegibility;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;
}
.main-operation{
  display:none;
}
</style>
