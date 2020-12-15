import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer class="bg-white">
                <div class="container py-5">
                    <div class="row py-4">
                        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src="img/logo.png" alt="" width="180" class="mb-3" />
                            <p class="font-italic text-muted">
                                Trong năm 2020, GÕ TỐC KÝ với tầm nhìn mới là trở
                                thành nền tảng học
                                gõ tốc ký thời gian ngắn nhất và gõ nhanh nhất.
                            </p>
                            <ul class="list-inline mt-4">
                                <li class="list-inline-item"><a href="#" target="_blank" title="twitter"><i class="fa fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank" title="facebook"><i class="fa fa-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank" title="instagram"><i class="fa fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
                                <li class="list-inline-item"><a href="#" target="_blank" title="vimeo"><i class="fa fa-vimeo"></i></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">DANH MỤC CHÍNH</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="#" class="text-muted">Học quy tắc</a></li>
                                <li class="mb-2"><a href="#" class="text-muted">Luyện gõ</a></li>
                                <li class="mb-2"><a href="#" class="text-muted">Thi đấu</a></li>
                                <li class="mb-2"><a href="#" class="text-muted">Soạn thảo</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">CÔNG TY</h6>
                            <ul class="list-unstyled mb-0">
                                <li class="mb-2"><a href="#" class="text-muted">Login</a></li>
                                <li class="mb-2"><a href="#" class="text-muted">Register</a></li>
                                <li class="mb-2"><a href="#" class="text-muted">Wishlist</a></li>
                                <li class="mb-2"><a href="#" class="text-muted">Our Products</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-lg-0">
                            <h6 class="text-uppercase font-weight-bold mb-4">LIÊN HỆ</h6>
                            <p class="text-muted mb-4">Trụ sở: NP Tower, số 232/17 đường Tạ Quuang Bủu, Hai Bà Trưng, Hà Nội, Việt Nam</p>
                            <div class="p-1 rounded border">
                                <div class="input-group">
                                    <input type="email" placeholder="Nhập địa chỉ Email của bạn" aria-describedby="button-addon1" class="form-control border-0 shadow-0" />
                                    <div class="input-group-append">
                                        <button id="button-addon1" type="submit" class="btn btn-link"><i class="fa fa-paper-plane"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
