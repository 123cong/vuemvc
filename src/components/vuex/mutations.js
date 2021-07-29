export default{
    addContentItem(state,content){
        //为空不添加
        if(content.content){
          //计算添加数量
          state.contentItem.push({content:content,isExpand:false})
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
      state.contentCount = 0
    },
    filterItem(state,data){
      if(data=='All'){
        state.contentItem
      }else if(data=='Active'){
        newData = data.filter(item=> item.isExpand===true)
        state.contentItem = newData
      }else if(data=='Completed'){
        newData = data.filter(item=> item.isExpand===false)
        state.contentItem = newData
      }
    }
}
