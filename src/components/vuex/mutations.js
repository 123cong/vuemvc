export default{
    addContentItem(state,content){
        //为空不添加
        if(content.content){
          state.contentCount = state.contentItem.length+1
          state.contentItem.push(content);
        }
    },
}
