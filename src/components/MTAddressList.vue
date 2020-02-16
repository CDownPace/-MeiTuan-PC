<template>
<div class="mt-address-list">
  <mt-nav-bar left-arrow-style="black" title="地址列表"></mt-nav-bar>
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  
  @add="onAdd"
  @edit="onEdit"

  
/>
</div>
</template>

<script type="text/ecmascript-6">
import { AddressList } from 'vant';
import MTNavBar from './Commen/MTNavBar'
export default{
  name:"MTAddressList",
  data(){
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '3',
          addressDetail:"三里屯101号",
          areaCode:"11015",
          city:"北京市",
          county:"朝阳区",
          isDefault:false,
          
          name: '李四',
          postalCode:"",
          province:"北京市",
          tel:18954236458
        },
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  components:{
    [AddressList.name]:AddressList,
    [MTNavBar.name]:MTNavBar
  },
  mounted(){

  },
  methods:{
    onAdd(){
      this.$router.push("/address/add")
    },
    onEdit(item,index){
      this.$store.commit("setEditingAddress",item)
      this.$router.push("/address/edit")
    
      //  console.log('goto Edit')
    }
  }
}
</script>
<style scoped lang='scss'>
</style>