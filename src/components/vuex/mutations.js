export default{
    addContentItem(state,content){
        //为空不添加
        if(content.content){
          //计算添加数量
          state.contentItem.push(content)
          state.contentCount = state.contentItem.length
        }
    },
    removeOneItem(state,content){
      //删除指定数据
      console.log("contentItem:"+content.content)
      state.contentItem.splice(content,1)
      state.contentCount = state.contentItem.length

    },
    clearAllItem(state){
      //清空列表
      state.contentItem = []
      state.contentCount = 0
    }
}
