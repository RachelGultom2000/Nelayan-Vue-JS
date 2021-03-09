<template>
    <div class="container-fluid mb-5 mt-4">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card border-0 shadow rounded">
                    <div class="card-body">
                        <h4>REGISTER</h4>
                        <hr>
                        <form @submit.prevent="register">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Full Name</label>
                                        <input type="text" v-model="user.name" class="form-control" placeholder="Full Name">
                                    </div>
                                    <div v-if="validation.name" class="mt-2 alert alert-danger">
                                        {{ validation.name[0] }}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Email address</label>
                                        <input type="email" v-model="user.email" class="form-control"
                                            placeholder="Email Address">
                                    </div>
                                    <div v-if="validation.email" class="mt-2 alert alert-danger">
                                        {{ validation.email[0] }}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" v-model="user.password" class="form-control"
                                            placeholder="Password">
                                    </div>
                                    <div v-if="validation.password" class="mt-2 alert alert-danger">
                                        {{ validation.password[0] }}
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Konfirmasi Password</label>
                                        <input type="password" v-model="user.password_confirmation" class="form-control"
                                            placeholder="Konfirmasi Password">
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">REGISTER</button>
                        </form>
                    </div>
                </div>
                <div class="register mt-3 text-center">
                    <p>
                        Sudah punya akun ? <router-link :to="{name: 'login'}">Login Disini !</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { ref, reactive } from 'vue' // Reactivity API ,untuk membuat state menjadi reaktif
    import { useStore } from 'vuex' // composition API digunakan,maka kita akan menggunakan hook useStore
    import { useRouter } from 'vue-router' // gunakan useRouter untuk VueRouter

    export default{
        setup() {
            
            // user state
            const user = reactive({
                name: '',
                email: '',
                password: '',
                password_confirmation: ''
            })

            //validation state
            const validation = ref([]) // jika menggunakan ref di dalam setup,maka untuk set dan get data kita harus menggunakan single objek .value

            //store vuex
            const store = useStore()  // didalamnya merupakan hook useStore dari Vuex yang mempermudah kita dalam menggunakan Vuex di dalam Composition API

            //route
            const router = useRouter() // didalamnya merupakan hook router dari Vue Router yang mempermudah kita dalam menggunakan Vue Router di dalam Composition API

            //fungsi ini akan dijalankan ketika form di submit
            function register(){
                //define variable
                let name     = user.name
                let email    = user.email
                let password = user.password
                let password_confirmation = user.password_confirmation

                // kita panggil action/function "register" di dalam module "auth" vuex
                store.dispatch('auth/register', { // kita melakukan dispatch atau memanggil ke module auth dan action yang bernama register.
                // action register akan kita buat untuk melakukan sending data melalui API ke backend admin laravel
                    name,
                    email,
                    password,
                    password_confirmation
                })
                .then(() => {
                    //redirect ke dashboard
                    router.push({name: 'dashboard'}) // jika proses berhasil,akan di arahkan ke dashboard
                }).catch(error => {
                    //show validation message
                    validation.value = error // jika gagal,akan melakukan assign sebuah response error validasi ke dalam state validation
                })
            }

            //return a state and function
            // Di dalam composition API,kita harus melakukan return semua state dan function yang telah kita definisikan
            return {
                user,
                validation,
                register
            }
        }
    }
</script>