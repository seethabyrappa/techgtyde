// popup
// popup form
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
//  setTimeout(function(){
//    loginPopup.classList.add("show");
//  },5000)

})

function showPopup(){
      const timeLimit = 2 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})





const firebaseConfig = {
  databaseURL: "https://gtyde-academy-default-rtdb.firebaseio.com"
}
firebase.initializeApp(firebaseConfig)
const database = firebase.database()


// Popu Form

function IndexPopupQuery(event){
  console.log("clicked")
  event.preventDefault()
  let name = document.getElementById("index_name3").value
  let email = document.getElementById("index_email3").value
  let mobile = document.getElementById("index_mobile3").value
  let course = document.getElementById("index_course3").value
  let training=document.getElementById("index_training3").value
  // let location=document.getElementById("index_location3").value

  console.log(name,email,mobile,course,training)
  var listRef = database.ref('Enquiry_Request/')
var newRef = listRef.push()
newRef.set({
  'name': name,
  'email': email,
  'mobile': mobile,
  "course":course,
  "training":training,
  // "location":location
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course+ "<br/><br/> Training Type: "+ training 

          console.log(body);
          Email.send({
              SecureToken:"45658e87-747d-432b-bbc3-187b7944baff",
              Host: "smtp.elasticemail.com",
              Username: "gtyde62@gmail.com",
              Password: "7377F82840DE2CF638AFCA727BEF49E86DEB",
              To: 'gtyde62@gmail.com',
              From: "gtyde62@gmail.com",
              Subject: "GTyde Enquiry",
              Body: body
          })
.then(()=>{
  alert("We will get back to you very Soon...!!")
 document.getElementById("index_name3").value=""
 document.getElementById("index_email3").value=""
 document.getElementById("index_mobile3").value=""
  document.getElementById("index_course3").value=""
  document.getElementById("index_training3").value="Select Training Type"
  // document.getElementById("index_location3").value="Select Location"
}).catch(()=>{
  alert("Network Error, So try after some time ")
  document.getElementById("index_name3").value=""
  document.getElementById("index_email3").value=""
  document.getElementById("index_mobile3").value=""
   document.getElementById("index_course3").value=""
   document.getElementById("index_training3").value="Select Training Type"
  //  document.getElementById("index_location3").value=""
})
}

// reqest query 1st form

// request query
function IndexRequestQuery(event){
  event.preventDefault()
  let name = document.getElementById("index_name").value
  let email = document.getElementById("index_email").value
  let mobile = document.getElementById("index_mobile").value
  let course = document.getElementById("index_course").value
  let training=document.getElementById("index_training").value
  console.log(name,email,mobile,course,training)
  

  var listRef = database.ref('HomePage_Request/')
var newRef = listRef.push()
newRef.set({
  'name': name,
  'email': email,
  'mobile': mobile,
  "course":course,
  "training":training
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course+ "<br/><br/> Training Type: "+ training 
console.log(body);
          Email.send({
              SecureToken:"45658e87-747d-432b-bbc3-187b7944baff",
              Host: "smtp.elasticemail.com",
              Username: "gtyde62@gmail.com",
              Password: "7377F82840DE2CF638AFCA727BEF49E86DEB",
              To: 'gtyde62@gmail.com',
              From: "gtyde62@gmail.com",
              Subject: "GTyde Enquiry",
              Body: body
          })
.then(()=>{
  alert("We will get back to you very Soon...!!")
 document.getElementById("index_name").value=""
 document.getElementById("index_email").value=""
 document.getElementById("index_mobile").value=""
  document.getElementById("index_course").value=""
  document.getElementById("index_training").value="Select Training Type"
}).catch(()=>{
  alert("Network Error, So try after some time ")
  document.getElementById("index_name").value=""
  document.getElementById("index_email").value=""
  document.getElementById("index_mobile").value=""
   document.getElementById("index_course").value=""
   document.getElementById("index_training").value="Select Training Type"
})
}





// impression form



function IndexImpressesQuery(event){
  event.preventDefault()
  let name = document.getElementById("index_name2").value
  let mobile = document.getElementById("index_mobile2").value
  let email = document.getElementById("index_email2").value
  let course = document.getElementById("index_course2").value
  let training=document.getElementById("index_training2").value
  console.log(name,email,mobile,course,training)

  var listRef = database.ref('HomePage_impressed/')
var newRef = listRef.push()
newRef.set({
  'name': name,
  'email': email,
  'mobile': mobile,
  "course":course,
  "training":training
})
var body = "Name: " + name + "<br/><br/>Email: " + email + "<br/><br/> Mobile: " + mobile + "<br/><br/> Course: " + course+ "<br/><br/> Training Type: "+ training 
console.log(body);
          Email.send({
              SecureToken:"45658e87-747d-432b-bbc3-187b7944baff",
              Host: "smtp.elasticemail.com",
              Username: "gtyde62@gmail.com",
              Password: "7377F82840DE2CF638AFCA727BEF49E86DEB",
              To: 'gtyde62@gmail.com',
              From: "gtyde62@gmail.com",
              Subject: "GTyde Enquiry",
              Body: body
          })
.then(()=>{
  alert("We will get back to you very Soon...!!")
 document.getElementById("index_name2").value=""
   document.getElementById("index_email2").value=""
 document.getElementById("index_mobile2").value=""
  document.getElementById("index_course2").value=""
  document.getElementById("index_training2").value="Select Training Type"
}).catch(()=>{
  alert("Network Error, So try after some time ")
  document.getElementById("index_name2").value=""
  document.getElementById("index_email2").value=""
  document.getElementById("index_mobile2").value=""
   document.getElementById("index_course2").value=""
   document.getElementById("index_training2").value="Select Training Type"
})
}
































/**
* Template Name: Logis
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/logis-bootstrap-logistics-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});