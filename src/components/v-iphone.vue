<template>
   <div class="v-iphone">
      <v-item
         v-for="product in PRODUCTS"
         :key="product.article"
         :product_data="product"
         @sendArticle="showChildArticleInConsole"
      >
      </v-item>
   </div>
</template>

<script>
import vItem from './v-item'
import {mapActions, mapGetters} from 'vuex'

export default {
   name: 'v-iphone',
   components: {
      vItem,
   },
   data() {
      return {

      }
   },
   computed: {
      ...mapGetters([
         'PRODUCTS'
      ])
   },
   methods: {
      ...mapActions([
         'GET_PRODUCTS_FROM_API'
      ]),
      showChildArticleInConsole(data) {
         console.log(data);
      }
   },
   mounted() { // жизненый хук
      this.GET_PRODUCTS_FROM_API()
      .then(response => {
         if(response.data) {
            console.log('Loading!!!');
         }
      })
   }
}
</script>

<style></style>
