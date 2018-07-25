<template>
    <div class="container">
        <div class="jumbotron">
            <div class="card">
                <div class="card-header">
                    <img width="200px" height="80px" :src="image"/> 
                      
                </div>
                <div class="card-body">
                   <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">SN</th>
                                <th scope="col">name</th>
                                <th scope="col">email</th>
                                <th scope="col">contact_no</th>
                                <th scope="col">operations_allowed</th>
                                <th scope="col">organization_id</th>
                                <th scope="col">password</th>
                                <th scope="col">reports_allowed</th>
                                <th scope="col">position</th>
                                <th scope="col">sms_credit</th>
                                <th scope="col">visibility</th>
                                <th scope="col">actions</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{customers.sn}}
                                <td>{{customers.email}}</td>
                                <td>{{customers.contact_no}}</td>
                                <td>{{customers.name}}</td>
                                <td>{{customers.operations_allowed}}</td>
                                <td>{{customers.organization_id}}</td>
                                <td>{{customers.password}}</td>
                                <td>{{customers.reports_allowed}}</td>
                                <td>{{customers.position}}</td>
                                <td>{{customers.sms_credit}}</td>
                                <td>{{customers.visibility}}</td>
                                <td><a href="#" class=" fa fa-1x fa-edit" id="edit"></a></td>
                                 <td><a href="#" class=" fa fa-1x fa-trash" id="delete"></a></td>    
                            </tr> 
                            <td>{{customers.sn}}
                                <td>{{customers.email}}</td>
                                <td>{{customers.contact_no}}</td>
                                <td>{{customers.name}}</td>
                                <td>{{customers.operations_allowed}}</td>
                                <td>{{customers.organization_id}}</td>
                                <td>{{customers.password}}</td>
                                <td>{{customers.reports_allowed}}</td>
                                <td>{{customers.position}}</td>
                                <td>{{customers.sms_credit}}</td>
                                <td>{{customers.visibility}}</td>
                                <td><a href="#" class=" fa fa-1x fa-edit" id="edit"></a></td>
                                 <td><a href="#" class=" fa fa-1x fa-trash" id="delete"></a></td>     
                        </tbody>
                        <tbody>
                                <td>{{customers.sn}}
                                <td>{{customers.email}}</td>
                                <td>{{customers.contact_no}}</td>
                                <td>{{customers.name}}</td>
                                <td>{{customers.operations_allowed}}</td>
                                <td>{{customers.organization_id}}</td>
                                <td>{{customers.password}}</td>
                                <td>{{customers.reports_allowed}}</td>
                                <td>{{customers.position}}</td>
                                <td>{{customers.sms_credit}}</td>
                                <td>{{customers.visibility}}</td>
                                <td><a href="#" class=" fa fa-1x fa-edit" id="edit"></a></td>
                                 <td><a href="#" class=" fa fa-1x fa-trash" id="delete"></a></td>     
                        </tbody>
                    </table>        
                </div>
                <div class="card-footer">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a href="javascript:void(0)" class="page-link" v-on:click="previous()">Previous</a></li>
                            <li class="page-item"><a href="javascript:void(0)" class="page-link" v-on:click="next()">Next</a></li>
                             <button type="button" id="create" class="btn btn-success" v-on:click="customerCreate()">Create</button> 
                        </ul>   
                    </nav>
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
                sn:"1",
                name:"Barsha Lamichhane",
                email:"barsha@gmail.com",
                password:"happygirl",
                contact_no:"97786786",
                organization_id:"1234",
                reports_allowed:"yes",
                visibility:true,
                sms_credit:0,
                position:"trainee",
                operations_allowed:"tracking",
    
            },
                //customers : [],
                current_page: 0,
                start_of_stream: true,
                end_of_stream: false,
                page_states: [],
                is_fetching: false,
                per_page: 1,
                pushPageState: true,
                image:"data:image/png;base64,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"
            }
        },
        mounted(){
             $(".jumbotron").css({"position":"absolute", "background-color": "grey", "width": "1500px", "margin-left":"-200px"})
             $("#edit").css("color","blue")
             $("#delete").css("color","red")
             $(".page-link").css({"background-color":"#28a745", "color":"white","border-radius":"0.25rem",
                                    "line-height":"1.5","text-align": "center","vertical-align": "middle"})
             $('tr:odd').css('background-color','rgb(220,220,220)');

                           
            //$(".fa").css({"background-color":"white","border":"white"})//"rgba(255, 0, 0, 0.1)",})
        }
    }
</script>
