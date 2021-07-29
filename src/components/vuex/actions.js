export default{
    syncAddContentItem(context,content){
      context.commit('addContentItem',content)
    },
    syncRemoveOneItem(context,content){
      context.commit('removeOneItem',content)
    },
    syncClearAllItem(context){
      context.commit('clearAllItem')
    },
    syncFilerItem(context,data){
      context.commit('filterItem',data)
    }
}
