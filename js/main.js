menu.onclick = function menuResponsive() {
  var x = document.getElementById('menu-responsive')

  if (x.className === "navbar-nav") {
    x.className += " responsive"
  } else {
    x.className = 'navbar-nav'
  }
}