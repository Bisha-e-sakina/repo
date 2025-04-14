document.getElementsByTagName("nav")[0].innerHTML = `<nav class="navbar navbar-expand-lg  fixed-top">
    <div class="container-fluid ">
      <a class="navbar-brand" href="#">
        <h1 class="text-black">NOBEL PRIZE</h1>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body backgro">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link" href="Home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Gallery.html">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="News.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Events.html">Events</a>
            </li>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Videos.html">Videos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="faq.html">FAQs</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
Prize Categories             
 </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="Chemistry.html">Chemistry</a></li>
                <li><a class="dropdown-item" href="Physics.html">Physics</a></li>
                <li><a class="dropdown-item" href="Physiology or Medicine.html">Physiology or Medicine</a></li>
                <li><a class="dropdown-item" href="Literature.html">Literature</a></li>
                <li><a class="dropdown-item" href="Peace.html">Peace</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
              </ul>
              <li class="nav-item">
              <a class="nav-link" href="Sitemap.html">SiteMap</a>
            </li>
            </li>
          </ul>
          <form class="d-flex mt-3" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-dark" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>`


document.getElementsByTagName("footer")[0].innerHTML = `








<footer class="text-black text-center py-1" style="background-color: rgb(218, 165, 32); font-size: 0.7rem; line-height: 1.2;">
  <h5 style="margin-bottom: 0.3rem;">Nobel Prize</h5>
  <div class="d-flex justify-content-center gap-2" style="margin-bottom: 0.2rem;">
    <a href="#" class="text-dark text-decoration-none">Twitter</a> |
    <a href="#" class="text-dark text-decoration-none">Facebook</a> |
    <a href="#" class="text-dark text-decoration-none">Instagram</a> |
    <a href="#" class="text-dark text-decoration-none">YouTube</a>
  </div>
  <p>&copy; 2025 Nobel Prize Newsletter. All rights reserved.</p>
</footer>


`