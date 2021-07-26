export default{
    addContentItem(state,content){
        //为空不添加
        if(content.content){
          state.contentItem.push(content);
          console.log(state.contentItem)
        }
    }
}
