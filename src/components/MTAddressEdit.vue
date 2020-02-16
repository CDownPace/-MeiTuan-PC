<template>
<div class="mt-address-edit">
  <mt-nav-bar left-arrow-style="black" title="添加地址"></mt-nav-bar>
<van-address-edit
  :area-list="areaList"
  show-delete
  show-set-default
  :address-info="addressInfo"
  @save="onSave"
  @delete="onDelete"

/>
</div>
</template>

<script type="text/ecmascript-6">
import { AddressEdit } from 'vant';
import MTNavBar from "./Commen/MTNavBar"
import areaList from "../data/area"
export default{
  name:"MTAddressEdit",
  data(){
    return {
      areaList,
      addressInfo:{}
    }
  },
  components:{
    [AddressEdit.name]:AddressEdit,
    [MTNavBar.name]:MTNavBar
  },
  computed:{
    isEditing(){
      if(this.$route.name=='address_edit'){
        return true
      }else{
        return false
      }
    }
  },
  mounted(){
    if(this.isEditing){
       this.addressInfo=this.$store.state.editingAddress
    }
    
  },
  methods:{
    onSave(content){
      console.log(content)

    },
    onDelete(){
      
    }
  }
}
</script>
<style scoped lang='scss'>
</style>