<template>
  <svg class="icon" aria-hidden="true">
    <use :href="iconClass" ></use>
  </svg>
</template>

<script>
import Iconfont from './iconfont'
var map = {
    checked:'#icon-xuanze',
    notChecked:'#icon-xuanze2'
}
export default {
    components:{
        Iconfont
    },
    props:{
        type:{  //属性名称
            type:String, //属性类型
            required:true
        },
    },
    computed:{
        iconClass(){
            return map[this.type];
        }
    }
}
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>