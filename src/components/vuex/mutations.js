export default{
    addContentItem(state,content){
        //为空不添加
        if(content.content){
          //计算添加数量
          state.contentItem.push(content)
          state.basicData.push(content)
          state.contentCount = state.contentItem.length
        }
    },
    removeOneItem(state,content){
      //删除指定数据
      state.contentItem = state.contentItem.filter(item => item.content !== content.content)
      state.contentCount = state.contentItem.length

    },
    clearAllItem(state){
      //清空列表
      state.contentItem = []
      state.basicData = []
    },
    //筛选
    setDesignData(state,data){
      state.contentItem = data
    }
}
