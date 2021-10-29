class HeaderComponent extends HTMLElement {
  constructor() {
    super();

    this._navbarlogo = "";
    this._navbarItem = [];
  }

  connectedCallback() {
    this._navbarlogo = this.getAttribute("navbarLogo");
    this.render();
  }

  navItem() {
    let navTitle = this.getAttribute("navbarTitle");
    let navLink = this.getAttribute("navbarLink");

    navTitle = navTitle.split(", ");
    navLink = navLink.split(", ");

    navTitle.map((data, i) => {
      data = data.replace(/'/g, "");
      navLink[i] = navLink[i].replace(/'/g, "");
      this._navbarItem.push({ title: data, link: navLink[i] });
    });

    const navbarActive = (link) => {
      let pathName = window.location.pathname;

      link = link.replace(/^\/|\/$/g, '');
      pathName = pathName.replace(/^\/|\/$/g, '');

      if ((link == '#') || (link == 'index.html')) {
        link = '';
      }

      if (link == pathName) {
        return 'active';
      }
    }

    return this._navbarItem
      .map((data) => 
        `<li class="nav-item me-4">
          <a class="nav-link ${navbarActive(data.link)}" href="${data.link}">${data.title}</a>
        </li>`
      )
      .join("");
  }

  render() {
    return (this.innerHTML = `
      <div id="header" class="col-12 col-sm-12 col-lg-12 col-xl-12">
        <nav class="navbar navbar-expand-sm navbar-light navbar-top">
          <div class="container">
            <a class="navbar-brand" href="#">
              Welcome to <span>Website Himtika</span>
            </a>
            <div class="navbar-collapse navbar-information">
              <div class="navbar-information_box">
                <div class="navbar-information_box-icon">
                  <img src="assets/icon/calling.png" alt="" />
                </div>
                <div class="navbar-information_box-title">
                  Call for help : <span>(+62) 856 9999 8888</span>
                </div>
              </div>
              <div class="navbar-information_box">
                <div class="navbar-information_box-icon">
                  <img src="assets/icon/email.png" alt="" />
                </div>
                <div class="navbar-information_box-title">
                  Mail to us : <span>himtika@lorem.com</span>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row-reverse bd-highlight">
              <div class="navbar-information_box-icon">
                <img src="assets/icon/facebook.png" alt="" />
                <img src="assets/icon/twitter.png" alt="" />
                <img src="assets/icon/instagram.png" alt="" />
                <img src="assets/icon/tik-tok.png" alt="" />
              </div>
            </div>
          </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-light navbar-top">
          <div class="container">
            <div class="navbar-logo">
              <img src="${this._navbarlogo}" alt="" srcset="" />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav m-auto mb-2 mb-lg-0">
              ${this.navItem()}
              </ul>
              <form class="d-flex">
                <button class="btn btn-primary btn-navbar" type="submit">
                  Kontak Kami
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    `);
  }
}

customElements.define("header-component", HeaderComponent);
