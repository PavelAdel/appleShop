<template>
   <div class="v-item">
      <div class="container d-flex justify-content-between">
         <div class="card text-center">
            <img
               :src="require('../assets/images/apple/' + product_data.image)"
               class="card-img-top iphone-img d-flex justify-content-center"
               alt="..."
            />
            <div class=""></div>
            <div class="card-body">
               <h5 class="card-title">{{ product_data.name }}</h5>
               <h5 class="card-text-canter">
                  Price: {{ product_data.price }}$
               </h5>
               <button class="btn btn-secondary" @click="sendDataToPerent">
                  ADD TO CART
               </button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'v-item',
   props: {
      product_data: {
         type: Object,
         default() {
            return {}
         },
      },
   },
   data() {
      return {}
   },
   computed: {},
   methods: {
      sendDataToPerent() {
         this.$emit('sendArticle', this.product_data.article )
      },
   },
}
</script>

<style scoped>
.iphone-img {
   width: 300px;
}

.btn {
   border-radius: 0;
}

.card {
   margin-top: 20px;
   border-radius: 0;
   max-width: 310px;
   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card:hover {
   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
