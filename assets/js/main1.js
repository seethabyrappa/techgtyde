/**
* Template Name: Arsha
* Updated: Aug 30 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
    /**
     * Initiate  glightbox 
     */
    const glightbox = GLightbox({
      selector: '.glightbox'
    });
  
    /**
     * Skills animation
     */
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }
  
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });
  
        let portfolioFilters = select('#portfolio-flters li', true);
  
        on('click', '#portfolio-flters li', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
  
    });
  
    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  
    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  
  })()
  
  
  // form
  
  
  
  // $(document).ready(function () {
  //     //Owl
  //     $('.hero-slider').owlCarousel({
  //         loop: true,
  //         margin: 0,
  //         items: 1,
  //         dots: false,
  //         navText: ['PREV', 'NEXT'],
  //         smartSpeed: 1000,
  //         autoplay: true,
  //         autoplayTimeout: 7000,
  //         responsive: {
  //             0: {
  //                 nav: false,
  //             },
  //             768: {
  //                 nav: true,
  //             }
  //         }
  //     })
  
  //     $('#projects-slider').owlCarousel({
  //         loop: true,
  //         nav: false,
  //         items: 2,
  //         dots: true,
  //         smartSpeed: 600,
  //         center: true,
  //         autoplay: true,
  //         autoplayTimeout: 4000,
  //         responsive: {
  //             0: {
  //                 items: 1
  //             },
  //             768: {
  //                 items: 2,
  //                 margin: 8,
  //             }
  //         }
  //     })
  
  //     $('.reviews-slider').owlCarousel({
  //         loop: true,
  //         nav: false,
  //         dots: true,
  //         smartSpeed: 900,
  //         items: 1,
  //         margin: 24,
  //         autoplay: true,
  //         autoplayTimeout: 4000,
  //     })
  // });
  
  
  // toggle
  // var acc = document.getElementsByClassName("accordion");
  // var i;
  
  // for (i = 0; i < acc.length; i++) {
  //   acc[i].addEventListener("click", function() {
  //     /* Toggle between adding and removing the "active" class,
  //     to highlight the button that controls the panel */
  //     this.classList.toggle("active");
  
  //     /* Toggle between hiding and showing the active panel */
  //     var panel = this.nextElementSibling;
  //     if (panel.style.display === "block") {
  //       panel.style.display = "none";
  //     } else {
  //       panel.style.display = "block";
  //     }
  //   });
  // }
  
  
  
  
  // backend
  
  
  
  
  const firebaseConfig = {
    databaseURL: "https://gtyde-academy-default-rtdb.firebaseio.com"
  }
  firebase.initializeApp(firebaseConfig)
  const database = firebase.database()
  
  
  // request query
  function IndexRequestQuery(event){
    event.preventDefault()
    let name = document.getElementById("index_name").value
    let email = document.getElementById("index_email").value
    let mobile = document.getElementById("index_mobile").value
    let course = document.getElementById("index_course").value
    console.log(name,email,mobile,course)
  
    var listRef = database.ref('Javafullstack_Request/')
  var newRef = listRef.push()
  newRef.set({
    'name': name,
    'email': email,
    'mobile': mobile,
    "course":course
  })
  .then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name").value=""
   document.getElementById("index_email").value=""
   document.getElementById("index_mobile").value=""
    document.getElementById("index_course").value=""
  }).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name").value=""
    document.getElementById("index_email").value=""
    document.getElementById("index_mobile").value=""
     document.getElementById("index_course").value=""
  })
  }
  
  
  
  
  
  // contact query
  function IndexContactQuery(event){
    event.preventDefault()
    let name1 = document.getElementById("index_name1").value
    let email1= document.getElementById("index_email1").value
    let mobile1 = document.getElementById("index_mobile1").value
    let course1 = document.getElementById("index_course1").value
    console.log(name1,email1,mobile1,course1)
  
    var listRef = database.ref('Javafullstack_contact/')
  var newRef = listRef.push()
  newRef.set({
    'name1': name1,
    'email1': email1,
    'mobile1': mobile1,
    "course1":course1
  })
  .then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name1").value=""
   document.getElementById("index_email1").value=""
   document.getElementById("index_mobile1").value=""
    document.getElementById("index_course1").value=""
  }).catch((err)=>{
    alert("Network Error, So try after some time "+ err)
    document.getElementById("index_name1").value=""
    document.getElementById("index_email1").value=""
    document.getElementById("index_mobile1").value=""
     document.getElementById("index_course1").value=""
  })
  }
  
  
  
  
  
  // impression form
  
  
  
  function IndexImpressesQuery(event){
    event.preventDefault()
    let name2 = document.getElementById("index_name2").value
    let email2 = document.getElementById("index_email2").value
    let mobile2 = document.getElementById("index_mobile2").value
    let course2 = document.getElementById("index_course2").value
    console.log(name2,email2,mobile2,course2)
  
    var listRef = database.ref('Javafullstack_impressed/')
  var newRef = listRef.push()
  newRef.set({
    'name': name2,
    'email': email2,
    'mobile': mobile2,
    "course":course2
  })
  .then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name2").value=""
     document.getElementById("index_email2").value=""
   document.getElementById("index_mobile2").value=""
    document.getElementById("index_course2").value=""
  }).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name2").value=""
    document.getElementById("index_email2").value=""
    document.getElementById("index_mobile2").value=""
     document.getElementById("index_course2").value=""
  })
  }
  
  
  
  
  
  
  