export default{
    addContentItem(state,content){
        //为空不添加
        if(content.content){
          //计算添加数量
          state.contentCount = state.contentItem.length+1
          state.contentItem.push(content)
        }
    },
    removeOneItem(state,content){
      //删除指定数据
      console.log("contentItem:"+content.content)
      state.contentItem.splice(content,1)

    },
    clearAllItem(state){
      //清空列表
      state.contentItem = []
    }
}
