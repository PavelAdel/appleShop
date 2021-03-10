<template>
   <div class="v-nav-bar">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
         <div class="container">
            <a class="navbar-brand" href="#">LOGO</a>
            <button
               class="navbar-toggler"
               type="button"
               data-bs-toggle="collapse"
               data-bs-target="#navbarSupportedContent"
               aria-controls="navbarSupportedContent"
               aria-expanded="false"
               aria-label="Toggle navigation"
            >
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item ">

                     <router-link class="nav-link " exact :to="{name: 'iphone'}" >iPhone</router-link>
                  </li>
                  <li class="nav-item">

                     <router-link class="nav-link" :to="'/ipad'">iPad</router-link>
                  </li>
                  <li class="nav-item">
                     <router-link class="nav-link" :to="'/macbook'">Macbook</router-link>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Watch</a>
                  </li>
               </ul>
               <div class="login">
                  <a href="">
                     <img
                        src="../assets/images/icons8-user.png"
                        alt="sign in"
                     />
                  </a>
               </div>
               <div class="cart">
                  <a href="">
                     <img
                        src="../assets/images/icons8-shopping_cart.png"
                        alt=""
                     />
                  </a>
               </div>
            </div>
         </div>
      </nav>
      <router-view></router-view>
   </div>
</template>

<script>
export default {
   name: 'v-nav-bar',
}
</script>

<style>
.login {
   margin-right: 20px;
}
</style>
