<template>
    <div>
        <div class="container">
            <div class="jumbotron">
                <div class="card-header">
                    <img width="200px" height="80px" :src="image"/>    
                </div>
                 <div class="card">
                    <div class="card-body">
                        <form action="/#" type="POST" enctype="multipart" v-on:submit.prevent="submitPost">
                            <div class="form-group">
                                <label >Name:</label>
                                <input type="text" class="form-control" v-model="customers.name" >
                            </div>
                            <div class="form-group" >
                                <label  >Email address:</label>
                                <input type="email" class="form-control" v-model="customers.email">
                            </div>
                            <div class="form-group">
                                <label>Password:</label>
                                <input type="password" class="form-control" v-model="customers.password">
                            </div>
                            <div class="form-group">
                                <label>Contact:</label>
                                <input type="text" class="form-control" v-model="customers.contact_no">
                            </div>
                            <div class="form-group">
                                <label>Report:</label>
                                <input type="text" class="form-control" v-model="customers.reports_allowed">
                            </div>
                            <div class="form-group">
                                <label>Sms Credit:</label>
                                <input type="number" class="form-control" v-model="customers.sms_credit">
                            </div>
                            <div class="form-group">
                                <label>Positions:</label>
                                <input type="text" class="form-control" v-model="customers.positions">
                            </div>
                            <div class="form-group">
                                <label>Operations Allowed:</label>
                                <input type="text" class="form-control" v-model="customers.operations_allowed">
                            </div>
                            <div class="checkbox">
                                <label><input type="checkbox" v-model="customers.visibility">visibility</label>
                            </div> 
                             <button type="submit" class="btn btn-primary" >Submit</button>
                        </form> 
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
            customers:{
                name:"",
                email:"",
                password:"",
                contact_no:"",
                organization_id:"",
                reports_allowed:[],
                visibility:true,
                sms_credit:0,
                position:"",
                operations_allowed:[],
    
            },
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-chnMxcpfF2aPJnC-N2dAN91chom6UTwUpNuZqGR38FXl_TCjQ",
            organizations:[]
           
        }
    },
    

    mounted() {
       
       
        $("input").css("background-color","rgba(211, 211, 211, 0.1)")
         $(".jumbotron").css("width","600px")
                        .css("margin","auto")
         $("button").css("width","100%")
                    .css("background-color","green")
                    .css("border","green")
                    .hover(function(){
                        $(this).css("background-color", "green")
                        }, function(){
                        $(this).css("background-color", "green")
                        });
       

    }
}
</script>
<style>
label{
    display: flex;
}

</style>
