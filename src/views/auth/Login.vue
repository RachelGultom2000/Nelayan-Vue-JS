<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div v-if="validation.message" class="mt-2 alert alert-danger">
                    {{ validation.message }}
                </div>
                <div class="card border-0 shadow rounded">
                    <div class="card-body">
                        <h4><b>LOGIN</b></h4>
                        <hr>
                        <form @submit.prevent="login">
                            <div class="form-group">
                                <label>Email Address</label>
                                <input type="email" v-model="user.email" class="form-control"
                                    placeholder="Email Address">
                            </div>
                            <div v-if="validation.email" class="mt-2 alert alert-danger">
                                {{ validation.email[0] }}
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" v-model="user.password" class="form-control"
                                    placeholder="Password">
                            </div>
                            <div v-if="validation.password" class="mt-2 alert alert-danger">
                                {{ validation.password[0] }}
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Ingatkan Saya</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">LOGIN</button>
                        </form>

                    </div>
                </div>
                <div class="register mt-3 text-center">
                    <p>
                        Belum punya akun ? <router-link :to="{name: 'register'}">Daftar Sekarang !</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue' // kita import Reactivity API, yaitu reactive dan ref,ini digunakan untuk membuat state/variable menjadi reaktif
import { useStore } from 'vuex' // kita import hook useStore dan useRouter dari VueRouter ini. 
import { useRouter } from 'vue-router' // ini digunakan agar kita dapat memanggil Vuex dan Vue Router di dalam Composition API

    export default {

        setup() { // setup berfungsi dalam mendeklarasikan sebuah composition API,makan di awali dengan function setup

            //user state
            const user = reactive({
                email: '', // buat state dengan nama user, dimana state ini kita buat menjadi reaktif menggunakan reactive API
                password: '' // 
                // email dan password digunakan untuk menampung value yang diinputkan melalui form
            })

            //validation state
            const validation = ref([]) // buat state bernama validation dan disini kita gunakan reactivity jenis ref

            //store vuex
            const store = useStore() // buat state yang digunakan untuk menyimpan store dari Vuex dan router dari Vue Router, ini digunakan agar kita bisa lebih mudah dalam pemanggilan di dalam component

            //route
            const router = useRouter()

            //method login
            function login() { // buat method login,yang dijalankan ketika form di submit

                //define variable 
                let email    = user.email
                let password = user.password            
               
               //panggil action "login" dari module "auth" di vuex
                store.dispatch('auth/login', { // kita memanggil/dispatch ke sebuah action di dalam module auth yang bernama login,disini kita
                                                // akan memparsing sebuah parameter yaitu email dan password 
                    email,
                    password
                })
                .then(() => {
                    //redirect ke dashboard
                    router.push({name: 'dashboard'}) // jika berhasil login,maka akan redirect ke dashboard
                }).catch(error => {
                    //assign validaation message 
                    validation.value = error // jika gagal login, maka akan melakukan assign error response message ke dalam state validation
                })
            }

            //return object
            return {
                user,
                validation,
                login
            }

        }

    }
</script>