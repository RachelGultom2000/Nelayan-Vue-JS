<template>
    <div class="container-fluid mb-5 mt-4">

        <div class="row">

            <div v-for="product in products" :key="product.id" class="col-md-3 col-6 mb-3">
                <div class="card h-100 border-0 shadow rounded-md">
                    <div class="card-img">
                        <img :src="product.image" class="w-100"
                            style="height: 15em;object-fit:cover;border-top-left-radius: .25rem;border-top-right-radius: .25rem;">
                    </div>
                    <div class="card-body">
                        <router-link :to="{name: 'detail_product', params:{slug: product.slug }}"
                            class="card-title font-weight-bold" style="font-size:20px">
                            {{ product.title }}
                        </router-link>

                        <div class="discount mt-2" style="color: #999"><s>Rp. {{ moneyFormat(product.price) }}</s>
                            <span style="background-color: darkorange"
                                class="badge badge-pill badge-success text-white">DISKON
                                {{ product.discount }} %</span>
                        </div>

                        <div class="price font-weight-bold mt-3" style="color: #47b04b;font-size:20px">
                            Rp. {{ moneyFormat(calculateDiscount(product)) }}</div>
                        <router-link :to="{name: 'detail_product', params:{slug: product.slug}}" class="btn btn-primary btn-md mt-3 btn-block shadow-md">LIHAT PRODUK</router-link>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

import { computed, onMounted } from 'vue' // import properti computed dan hook onMounted
import { useStore } from 'vuex'  // import hook useStore dari Vuex,ini kita gunakan untuk menjalankan Vuex di Composition API
import { useRoute } from 'vue-router' // import route dari Vue Router ,ini digunakan untuk mendapatkan parameter slug di dalam URL browser

export default{

    setup() {

        const store = useStore() // buat state store
 
        const route = useRoute() // buat state route

        // ketika view/component mounted / berhasil di render,maka
        // akan menjalankan sebuah action bernama getProductInCategory  dalam category 
        // Vuex
        onMounted(() => {
            store.dispatch('category/getProductInCategory', route.params.slug)

        })
        
        // lalu kiya buat state baru bernama products,state tersebut menggunakan
        // properti computed dan di dalamnya akan memanggil sebuah state bernama
        // productInCategory dari module category di Vuex
        const products = computed(() =>{
            return store.state.category.productInCategory
        })

        // return semua state dan function yang ada di composition
        return {
            store,
            route,
            products
        }

    }

}

</script>