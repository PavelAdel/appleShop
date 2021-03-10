<template>
   <div class="v-ipad">

     <v-item
         v-for="product in products"
         :key="product.article"
         :product_data="product"
         @sendArticle="showChildArticleInConsole"
      >
      </v-item>
   </div>
</template>

<script>
import vItem from './v-item'
export default {
   name: 'v-ipad',
   components: {
      vItem
   },
   data() {
      return {
         products: [
            {
               image: '5.jpg',
               name: 'IPAD PRO 11” WI-FI 128GB SPACE GRAY',
               price: 849,
               article: 'i11',
               available: true,
            },
            {
               image: '5.jpg',
               name: 'IPAD PRO 11” WI-FI 256GB SPACE GRAY ',
               price: 949,
               article: 'i12',
               available: true,
            },
            {
               image: '6.jpg',
               name: 'IPAD PRO 11” WI-FI 256GB SILVER',
               price: 949,
               article: 'i13',
               available: true,
            },
         ],
      }
   },
   computed: {},
   methods: {
      showChildArticleInConsole(data) {
         console.log(data);
      }
   }
}
</script>

<style lang="scss" scoped></style>
