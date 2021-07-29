<template>
  <div>
    <div>
      <div class="mvc-list" v-for="(item,index) in contentItem" :key="index">
        <Icon :type="item.isExpand?'notChecked':'checked'" class="icon-checked" @click="item.isExpand=!item.isExpand" ></Icon>
        <label class="label-content">{{item.content.content}}</label>
        <button class="remove-label"  @click="removeTarget({content:item.content});
                                              displayNone()">×</button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from './icon/Icon.vue'
import {mapGetters,mapActions} from 'vuex'
export default {
    components:{
        Icon
    },
    data(){
      return{
        isExpand:true
      }
    },
    computed:{
      ...mapGetters({
        contentItem:'getContentItem'
      }),
    },
    methods:{
      ...mapActions({
        removeTarget:'syncRemoveOneItem'
      }),
      //调用父组件（数量为0不显示操作栏）
      displayNone(){
        this.$emit('displayBlock')
      },
      //全选/反选
      checkedAll(){
        if(this.isExpand==true){
          this.isExpand = false
        }else{
          this.isExpand = true
        }
      },
      checkedOneItem(event){
        event.currentTarget.getAttributeNode('class');
      }
    }
}
</script>

<style scoped>
.mvc-list{
    padding: 16px 16px 16px 60px;
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
    padding-left: 3vw;
    padding-right: 1.3vw;
    margin-left: 32vw;
    margin-top: -0.1vw;
    border: 1px solid #ededed;
    position: relative;
}
.icon-checked{
    position: absolute;
    left: 2.5%;
    top: 2vh;
}
label{
    position: absolute;
    left: 10%;
    top: 1.2vh;
}
.remove-label{
    color:#cc9a9a;
    border: none;
    font-size: 24px;
    background: white;
    cursor: pointer;
    position: absolute;
    left: 90%;
    top: 2vh;
}
</style>
