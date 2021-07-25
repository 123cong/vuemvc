export default{
    syncAddContentItem(context,content){
        console.log(content)
        context.commit('addContentItem',content)
    }
}