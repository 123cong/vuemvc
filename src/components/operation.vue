<template>
  <div class="mvc-operation">
      <span class="operation-item"><strong>{{this.contentIndex}}</strong> item left</span>
      <ul class="operation-ul">
          <li><a href="#">All</a></li>
          <li><a href="#">Active</a></li>
          <li><a href="#">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="clearCompleted();
                                              displayNone()">Clear completed</button>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  computed:{
    ...mapGetters({
      contentIndex:'getContentCount'
    }),
  },
  methods:{
    ...mapActions({
      clearCompleted:'syncClearAllItem'
    }),
    //调用父组件（数量为0不显示操作栏）
    displayNone(){
      this.$emit('displayBlock')
    }
  }
}
</script>

<style scoped>
.mvc-operation{
  padding: 16px 16px 16px 60px;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  position: relative;
  margin: 0;
  width: 35.4%;
  height: 5vh;
  font-size: 16px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: #777;
  padding: 6px;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  background: white;
  padding-left: 3vw;
  padding-right: 1.3vw;
  margin-left: 32vw;
  margin-top: -0.1vw;
  border: 1px solid #ededed;
  position: relative;
}
.mvc-operation ul{
  list-style: none;
  padding-inline-start: 0px;
  position: absolute;
  width: 100%;
  left: 25%;
  top: -20%;
}
.operation-item,.operation-ul,.clear-completed{
  float:left;
}
.operation-item{
  position: absolute;
  left: 3%;
}
.operation-item > strong{
  font-weight: 300;
}
.mvc-operation ul > li{
  display: inline;
  margin-left: 1.5%;
}
.operation-ul li > a{
    color: inherit;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
}
.clear-completed{
  position: absolute;
  left: 75%;
  line-height: 20px;
  cursor: pointer;
  color: #777;
  background: none;
  border: 0;
  font-size: 16px;
  outline: none;
}
.clear-completed:hover{
  text-decoration: underline;
}
</style>
