class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    return (this.innerHTML = `
      <div class="footer-spacer"></div>
      <div class="footer-main mt-5">
        <div class="footer-main_header-icon">
            <div class="ellipse">
                <img src="assets/logo/Himtika.png" alt="HIMTIKA" title="HIMTIKA">
            </div>
        </div>
        <div class="container mt-5">
            <div class="row">
                <div class="col-md-4 mb-5">
                    <div class="footer-main_title">We are HIMTIKA</div>
                    <div class="footer-main_desc">
                        Himpunan Mahasiswa Teknik Informatika Universitas Singaperbangsa
                        yang berdiri pada tanggal 16 Oktober 2017
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <div class="footer-main_title">Newsletter</div>
                    <div class="footer-main_desc">
                        Subscribe our newsletter to <br> get our latest update & news
                    </div>
                    <div class="mt-3">
                        <form class="d-flex form-newsletter">
                            <input class="form-control" type="text" placeholder="Masukkan Email">
                            <button class="btn btn-primary btn-newsletter" type="submit"><img src="assets/icon/send.png"
                                    class="img-fluid"></button>
                        </form>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="footer-main_title">Official Info</div>
                    <div class="footer-main_desc">
                        <div class="row mb-3">
                            <div class="col-1">
                                <img src="assets/icon/pin-24.png" alt="" />
                            </div>
                            <div class="col-10">Jl. Lorem ipsum dolor sit amet.</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-1">
                                <img src="assets/icon/telephone-24.png" alt="" />
                            </div>
                            <div class="col-10">(+62) 856 9999 8888</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-1">
                                <img src="assets/icon/email-24.png" alt="" />
                            </div>
                            <div class="col-10">himtika@lorem.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-end">
        <div class="footer-end_copyright">
            2021 © All rights reserved by Informatics UNSIKA
        </div>
    </div>
    `);
  }
}

customElements.define("footer-component", FooterComponent);