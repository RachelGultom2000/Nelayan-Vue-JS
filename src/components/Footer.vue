<template>
    <footer style="background: #ffffff;border-top: 5px solid #6677ef;" class="pt-5">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-5 mb-4">
                    <h4 class="font-weight-bold">TENTANG</h4>
                    <hr style="border-top: 3px solid rgb(226 232 240);border-radius:.5rem">
                    <p style="font-family: helvetica;">
                        Website UMKM Nelayan (NELAYAN) merupakan website yang ditujukan kepada masyarakat perisir/Nelayan dalam membantu meningkatkan perekonomian dengan
                        hasil laut yang melimpah dan tentunya masih alami(Fresh).
                    </p>
                    <b>Hint :</b>
                    <br>
                    <b><p style="font-family: helvetica; color:#008B8B">Website ini bukan website statis,tetapi dinamis. Data diambil dari server role(admin) yang di-integrasikan ke client(frontend) dengan menggunakan Restful API.</p></b>

                    <div class="social">
                        <a href="#" class="mr-4"> <i class="fab fa-facebook fa-2x"></i></a>
                        <!-- <a href="#" class="mr-4" style="color:#00c4ff"> <i class="fab fa-twitter fa-2x"></i></a> -->
                        <a href="#" class="mr-4" style="color: #de2fb8;"> <i class="fab fa-instagram fa-2x"></i></a>
                        <a href="#" style="color: red;"> <i class="fab fa-youtube fa-2x"></i></a>
                    </div>
                </div>
                <div class="col-md-3 mb-4">
                    <h4 class="font-weight-bold">PEMBAYARAAN</h4>
                    <hr style="border-top: 3px solid rgb(226 232 240);border-radius:.5rem">
                    <div class="row">
                        <div class="col-md-4 col-4 mb-3">
                            <div class="card h-100 border-0 rounded shadow">
                                <div class="card-body p-2 text-center">
                                    <img src="@/assets/payment/BCA.png" style="width: 50px;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 mb-3">
                            <div class="card h-100 border-0 rounded shadow">
                                <div class="card-body p-2 text-center">
                                    <img src="@/assets/payment/BNI.png" style="width: 45px;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 mb-3">
                            <div class="card h-100 border-0 rounded shadow">
                                <div class="card-body p-2 text-center">
                                    <img src="@/assets/payment/BRI.png" style="width: 60px;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 mb-3">
                            <div class="card h-100 border-0 rounded shadow">
                                <div class="card-body p-2 text-center">
                                    <img src="@/assets/payment/GOPAY.png" style="width: 60px;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 mb-3">
                            <div class="card h-100 border-0 rounded shadow">
                                <div class="card-body p-2 text-center">
                                    <img src="@/assets/payment/indomaret-logo.png" style="width: 60px;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 mb-3">
                            <div class="card h-100 border-0 rounded shadow">
                                <div class="card-body p-2 text-center">
                                    <img src="@/assets/payment/atm-bersama.jpg" style="width: 40px;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <h4 class="font-weight-bold">KONTAK</h4>
                    <hr style="border-top: 3px solid rgb(226 232 240);border-radius:.5rem">
                    <p>
                        <img src="@/assets/akun.png"><b> Developer</b> 
                        <br>
                        rachelgultom5@gmail.com | +6285261943230
                    </p>
                    <p>
                        <img src="@/assets/linkedin.png"> <b> Linkedin</b>
                        <br>
                        https://www.linkedin.com/in/rachel-gultom-66133b197
                    </p>
                </div>
            </div>
            <div class="row text-center mt-3 pb-3">
                <div class="col-md-12">
                    <hr>
                    © <strong>NELAYAN - Website UMKM Nelayan</strong> {{ new Date().getFullYear() }} • Hak Cipta Dilindungi
                    <br>
                    <br>
                    <b><h3 style="color: #00008B">Masih Dalam Pengembangan. Mohon Menanti ya :)</h3></b>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    }
</script>