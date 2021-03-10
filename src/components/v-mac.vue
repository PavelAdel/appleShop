<template>
   <div class="v-mac">
      <v-item
         v-for="product in products"
         :key="product.article"
         :product_data="product"
         @sendArticle="showChildArticleInConsole"
      >
      </v-item>
   </div>
   <!-- v-iphone -->
</template>

<script>
import vItem from './v-item'
export default {
   name: 'v-mac',
   components: {
      vItem,
   },
   data() {
      return {
         products: [
            {
               image: '7.jpg',
               name: 'MACBOOK PRO 13″ TB SILVER',
               price: 1.849,
               article: 'i14',
               available: true,
            },
            {
               image: '8.jpg',
               name: 'MACBOOK PRO 13″ TB SPACE GRAY',
               price: 1.849,
               article: 'i15',
               available: true,
            },
            {
               image: '9.jpg',
               name: 'MACBOOK PRO 16” TB SPACE GRAY',
               price: 2.329,
               article: 'i16',
               available: true,
            },
            {
               image: '10.jpg',
               name: 'MACBOOK PRO 16” TB SILVER',
               price: 2.329,
               article: 'i17',
               available: true,
            },
            {
               image: '8.jpg',
               name: 'MACBOOK PRO 16” TB SPACE GRAY',
               price: 2.799,
               article: 'i18',
               available: true,
            },
            {
               image: '9.jpg',
               name: 'MACBOOK PRO 16” TB SPACE',
               price: 2.799,
               article: 'i19',
               available: true,
            },
            {
               image: '11.jpg',
               name: 'MACBOOK AIR 13 GOLD',
               price: 979,
               article: 'i20',
               available: true,
            },
            {
               image: '12.jpg',
               name: 'MACBOOK AIR 13 SILVER',
               price: 979,
               article: 'i21',
               available: true,
            },
            {
               image: '13.jpg',
               name: 'MACBOOK AIR 13 M1 SPACE GRAY',
               price: 1.139,
               article: 'i22',
               available: true,
            },
            {
               image: '13.jpg',
               name: 'MACBOOK AIR 13 M1 GOLD',
               price: 1.139,
               article: 'i23',
               available: true,
            },
            {
               image: '13.jpg',
               name: 'MACBOOK AIR 13 M1 SILVER',
               price: 1.139,
               article: 'i24',
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

<style></style>
