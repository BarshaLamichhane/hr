<template>
    <div>
        <div class="container">
            <div class="row">
                 <div id="main">
                    Filter: <input type="text" v-model="search"/>
                    <div v-if="search">   
                   <div v-for="customer in filteredCustomers" v-bind:key="customer">
                    <span><img style="max-width:60px" :src="customer.profile_pic" class="profile-pic" /></span>
                    <span>{{customer.name}}</span>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    data(){
        return{
            search:"",
            customers: [
          { id: '1', name: 'Jhon Snow', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '2', name: 'Deanerys Targarian', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '3', name: 'Jaime Lanister', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'},
          { id: '4', name: 'Tyron Lanister', profile_pic: 'https://i.stack.imgur.com/CE5lz.png'}
        ],
        }
    },
    

    mounted() {
       
       
      
       

    },
    computed:{
          filteredCustomers:function()
    {
        var self=this;
       return this.customers.filter(function(cust){return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
    }
    }
}
</script>
<style>
label{
    display: flex;
}

</style>
