<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row">
            <div class="col-md-3 mb-4">
                <CustomerMenu />
            </div>
            <div class="col-md-9 mb-4">
                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h5 class="font-weight-bold"> <i class="fas fa-shopping-cart"></i> MY ORDER</h5>
                        <hr>
                        <table class="table table-striped table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">INVOICE</th>
                                    <th scope="col">FULL NAME</th>
                                    <th scope="col">SHIPPING</th>
                                    <th scope="col">GRAND TOTAL</th>
                                    <th scope="col">OPTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in orders" :key="order.id">
                                    <th>{{ order.invoice }}</th>
                                    <td>{{ order.name }}</td>
                                    <td>{{ order.courier.toUpperCase() }} | {{ order.service }} | Rp. {{ moneyFormat(order.cost_courier) }}</td>
                                    <td>Rp. {{ moneyFormat(order.grand_total) }}</td>
                                    <td class="text-center">
                                        <router-link :to="{name: 'detail_order', params:{snap_token: order.snap_token}}" class="btn btn-sm btn-primary">DETAIL</router-link>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import customer menu component
    import CustomerMenu from '@/components/CustomerMenu' // import component untuk menampilkan menu customer
    import { computed, onMounted } from 'vue' // import hook computed dan OnMounted dari Vue
    import { useStore } from 'vuex' // import hook dari Vuex yaitu useStore, karena untuk menggunakan vuex di dalam composition API ,maka kita harus memanfaatkan hook ini.

    export default {

        components: {
            //customer menu component
            CustomerMenu
        },

        setup() { // setup berfungsi agar kita dapat menginisialisasi component menggunakan composition API

            //store vuex
            const store = useStore() // buat state dengan nama store,dimana didalamnya akan berisi hook useStore dari Vuex,fungsinya agar mempermudah kita memanggil Vuex di component

            //mounted
            onMounted(() => { // jalankan hook onMounted untuk memanggil sebuah action dari modul order

                //panggil action "getOrder" di module "order" vuex
                return store.dispatch('order/getOrder')
                // diatas ketika component mounted berhasil di render,maka kita akan memanggil/dispatch action ke dalam
                // module order di Vuex yang bernama getOrder

            })

            //computed
            // setelah dari onMounted kita akan panggil sebuah getter dari module order di Vuex dengan menambah properti computed
            const orders = computed(() => {

                //panggil getter dengan nama "getOrder" di module "order" vuex 
                return store.getters['order/getOrder']

            })

            //return a state and function
            return { // return semua state dan function dalam setup Composition API
                store,
                orders
            }

        }

    }
</script>

<style scoped>
    .table .thead-dark th {
        color: #fff;
        background-color: #6777ef;
        border-color: #6777ef;
    }
</style>