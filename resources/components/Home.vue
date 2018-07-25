<template>
<div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Nodeblog</a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/post" class="nav-link">CustomerCreate </router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/get" class="nav-link" >CustomerGet</router-link>
                </li>
                <li class="nav-item active">
                    <router-link to="/search" class="nav-link" >Search</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <router-view/>
</div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>