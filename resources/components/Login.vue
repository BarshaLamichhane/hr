<template>
    <div class="container">
        <div class="jumbotron">
           <!-- <div v-bind:class="{transparent:transparent}" class="card">-->
               <div class="card">
                <div class="card-body">
                    <!--  <img width="200px" height="200px" :src="image"/> -->
                    <form action="#">
                        <div>
                            <label class="mt-2">email:</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span v-bind:class="{transparent:transparent, inputcolor:inputcolor}" class="input-group-text fa fa-envelope" ></span>
                                </div>
                                <input type="email" v-bind:class="{transparent:transparent, inputcolor:inputcolor}" class="form-control" v-model="user.email"  placeholder="email"  required>
                                
                            </div>
                        </div>
                        <div>
                            <label class="mt-2">Password:</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span v-bind:class="{transparent:transparent, inputcolor:inputcolor}"  class="input-group-text fa fa-lock" ></span>
                                </div>
                                <input type="password" v-bind:class="{transparent:transparent, inputcolor:inputcolor}" class="form-control" v-model="user.password" placeholder="Password"  required>
                            </div>
                        </div>
                        <a href="#" class="mt-2">forgot password?</a>
                        <div class="form-check">
                            <label class="form-check-label" ><input class="form-check-input" type="checkbox" value="" >
                                Remember me
                            </label>    
                        </div>
                        <div class="container mt-4">
                            <div class="row">
                                 <div class="col-4">
                                    <button type="button" v-bind:class={available:available} class="btn btn-primary" v-on:click="cancel()" >cancel</button>
                                </div>
                                <div class="col-3">
                                    <button type="submit" v-bind:class={available:available} class="btn btn-primary" >login</button>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <h4 v-bind:class={inputcolor:inputcolor}>Not a memember?</h4>
                         <button type="button"  v-bind:class="{inputcolor:inputcolor, signupbutton:signupbutton}" class="btn btn-success mt-3" >Sign up now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            available:true,
            transparent:true,
            inputcolor:true,
            signupbutton:true,
            user:{
                email:"",
                password:"",
                remember:""
            }
        }
    },
    methods:{
        cancel(){
            console.log("you clicked cancel")
            swal({
                title: "Are you sure?", 
                text: "Are you sure that you want to cancel your login?", 
                icon: "warning",
                buttons: {

                    abortCancel:{
                        text:"No",
                        value:false
                        //showModal:true
                    },
                    doCancel:{
                        text:"yes",
                        value:true
                    }
                }
                
            }).then((result) => {
                if (result==false) {
                    return;    
                }
                if(result==true){
                     //setTimeout(function() {
                        swal({
                            text:'you cancelled login',
                            icon:'success',
                            buttons:false
                            
                            });
                    //}, 2000)
                    setTimeout(function() {    
                    location.reload(true)
                    }, 3000)
                }
            })

        }
    },
    mounted(){
    }
   
};
</script>

<style lang="scss" scoped>
    @media (min-width: 576px) { 
        label{
            display: flex;
            color: white;
        }
        input{
            border-radius:5px;
            border-color:rgba(0, 0, 0, 0.5 );
        }
        hr{
            height: 1px;
            background-color: rgba(21, 128, 0, 0.5); 
                
        }
        h4{
            display: flex;
        }
        
        
        .card{
            width:300px;
             margin:auto;
             border-radius: 10px;
             opacity:0.8;
             background: linear-gradient(to bottom, #006666  0%, #336699 100%);

        }
        .jumbotron{
            width:500px;
            margin:auto;
            opacity: 1;
            // background: linear-gradient(to bottom, #336699  100%, #006666 0%);
            background: url('https://wallpaperbrowse.com/media/images/lH38wI.jpg');
        }
        .inputcolor{
            color: white;
        }
        .transparent{
            background: transparent;
        } 
        .fa{
            border-color:rgba(0, 0, 0, 0.3);
        }
        .available{
           -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 0, 255, 0.75);
            -moz-box-shadow: 0px 0px 15px 5px rgba(0, 0, 190, .75);
            box-shadow: 0px 0px 15px 5px rgba(0, 0, 190, .75); 
            border-color: #006666;
        } 
        .signupbutton{
            -webkit-box-shadow: 0px 0px 15px 5px rgba(0, 255, 13, 0.75);
            -moz-box-shadow: 0px 0px 15px 5px rgba(0, 255, 13, .75);
            box-shadow: 0px 0px 15px 5px rgba(0, 255,13, .75); 
            border-color:green;
            width: 100%;

        }      
        
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
        
        label{
            display: flex;
        }
        .card{
            width:400px;
        }
        .jumbotron{
            width:600px;  
        } 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        label{
        display: flex;
        }
        .card{
            width:500px;
        }
        .jumbotron{
            width:700px; 
        }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        label{
        display: flex;
        }
        .card{
            width:300px;   
        }
        .jumbotron{
            width:700px;    
        } 
         
    }
    @media (min-width: 1400px){
        .jumbotron{
            margin-top:150px;
        }
    }
</style>
