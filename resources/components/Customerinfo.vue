<template lang="html">
    <main class="app-content">
        <div class="container-custom">
            <div class="app-title">
                <div>
                    <h1>Company Information</h1>
                </div>
                    <div class="app-breadcrumb">
                        <router-link :to="'/customers/update/' + customer._id" class="btn btn-primary btn-round  fa fa-1x fa-edit">
                            Edit Information
                        </router-link>
                    </div>
                       </div>
            <div class="row vechicle-info">
                <div class=" col-lg-12 col-5">
                    <div class="vehicle-summary sticky">
                        <div class="vehicle-stats">
                            <div class="vehicle-icon">
                                <i class="icon icon-apartment"></i>
                            </div>
                           
                        </div>
                        <div class="vehicle-details">
                            <h6 class="heading">
                                Company Information
                            </h6>
                            <div class="details-box">
                                <div class="info">
                                   <div class="row"> <label class="col-sm-4">ID:</label><div class="col-sm-8">{{customer._id}}</div></div>
                                </div>
                                <div class="info">
                                   <div class="row"> <label class="col-sm-4">Name:</label><div class="col-sm-8">{{customer.name}}</div></div>
                                </div>
                                
                                <div class="info">
                                   <div class="row"> <label class="col-sm-4">Email:</label><div class="col-sm-8">{{customer.email}}</div></div>
                                </div>
                                <div class="info">
                                   <div class="row"> <label class="col-sm-4">Contact No:</label><div class="col-sm-8">{{customer.contact_no}}</div></div>
                                </div>
                              
                                <div class="info">
                                     <div class="row"><label class="col-sm-4">Organization ID:</label><div class="col-sm-8">{{customer.organization}}</div></div>
                                </div>
                                <div class="info">
                                    <div class="row"><label class="col-sm-4">Position: </label><div class="col-sm-8">{{customer.position}}</div></div>
                                </div>
                                <div class="info">
                                   <div class="row"><label class="col-sm-4">Operations Allowed: </label><div class="col-sm-8">
                                    <ul style="list-style-type:solid;">
                                        <li v-for="operation in customer.operations_allowed">
                                            {{ operation }}
                                        </li>
                                    </ul></div></div>
                                </div>
                                <div class="info">
                                   <div class="row"><label class="col-sm-4">Reports Allowed: </label><div class="col-sm-8">
                                    <ul style="list-style-type:solid;">
                                        <li v-for="report in customer.reports_allowed">
                                            {{ report }}
                                        </li>
                                    </ul></div></div>
                                </div>
                                <div class="info">
                                    <div class="row"><label class="col-sm-4">SMS Credit: </label><div class="col-sm-8">{{customer.sms_credit}}</div></div>
                                </div>
                                <div class="app-breadcrumb">
                                    <div class=" fa fa-2x fa-trash btn btn-danger btn-round " @click="cancel">Delete</div>
                                </div>
          
                                
                            </div>
                        </div>
                    </div>
                </div>
                             
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data(){
       return{
            customer : [],
            perPage:10,
            currentPage:1,
        }
    },
    created: function () {
          // console.log(this.$route.params.id)
          this.getCustomers();
       },
    methods:{
        getCustomers(){
            var instance=this
            axios.get(BASE_URL +'customers/'+this.$route.params.id).then(function(response) {
                console.log(response)
                instance.customer = response.data
            })
            .catch(function(err) {
            console.log(err)
            })
        },
        reduceArrayToString(array){
            if(array == null || array.length == 0) return '';
            if(array.length == 1) return array[0];
            return array.reduce((accumulator, key) => accumulator + '\n' + key)
        },
        cancel(){
            var instance=this
            console.log("you clicked cancel")
            swal({
                title: "Are you sure?", 
                text: "Are you sure that you want to delete the information? Once you click delete you will not be able to recover the information again", 
                icon: "warning",
                buttons: {

                    doNotDelete:{
                        text:"No",
                        value:false
                        //showModal:true
                    },
                    doDelete:{
                        text:"yes, Delete",
                        value:true
                    }
                }
                
            }).then((result) => {

                if (result==false) {
                    return;    
                }
                if(result==true){
                    axios.post(BASE_URL +'customers/delete/' + this.$route.params.id).then(function(response){
                        swal({
                            text:'you deleted information successfully',
                            icon:'success',
                            buttons:false  
                            });
                    setTimeout(function() {    
                     instance.$router.push("/customers/")
                    }, 1000)
                       
                    }).catch(function(err) {
                    console.log(err)
                    })

                    }
                       /* swal({
                            text:'you deleted information',
                            icon:'abort',
                            buttons:false  
                            });
                    setTimeout(function() {    
                    location.reload(true)
                    }, 1000)
                }*/
            })

        }                                               


    },
    
}
</script>
<style lang="scss" scoped>
    @media (min-width: 576px) { 
       .vehicle-summary{
           margin: auto;
           width:500px;
       }
        
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
        
       
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
       
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
       
         
    }
    @media (min-width: 1400px){
       
    }
</style>



