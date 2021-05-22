<template>
    <nav class="navbar navbar-expand-lg navbar-light navbarsss mb-4" >
<div class="container container-fluid">
        <router-link style="color: white" class="navbar-brand" to="/">Golobčki</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item m-1">
                    <router-link style="color: white; background-color: #c30909" class="nav-link" to="/">Naredi dostavo</router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link style="color: white; background-color: #c30909" class="nav-link" to="/e1/">Poišči pakete</router-link>
                </li>
                <li class="nav-item m-1">
                    <router-link style="color: white; background-color: #c30909" class="nav-link" to="/e1/">Potrdi paket</router-link>
                </li>

            </ul>

            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <router-link style="color: white; " class="nav-link m-1" to="/e1/">Profil</router-link>
                </li>
            </ul>

        </div>
</div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBar',

    }
</script>

<style scoped>
    .navbarsss{
        background-color: #e06D6D;
    }
</style>
