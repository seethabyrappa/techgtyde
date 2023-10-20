

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

    var listRef = database.ref('HomePage_Request/')
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

    var listRef = database.ref('HomePage_contact/')
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
    // let email = document.getElementById("index_email").value
    let mobile2 = document.getElementById("index_mobile2").value
    let course2 = document.getElementById("index_course2").value
    console.log(name2,mobile2,course2)

    var listRef = database.ref('HomePage_impressed/')
var newRef = listRef.push()
newRef.set({
    'name': name2,
    // 'email': email,
    'mobile': mobile2,
    "course":course2
})
.then(()=>{
    alert("We will get back to you very Soon...!!")
   document.getElementById("index_name2").value=""
//    document.getElementById("index_email2").value=""
   document.getElementById("index_mobile2").value=""
    document.getElementById("index_course2").value=""
}).catch(()=>{
    alert("Network Error, So try after some time ")
    document.getElementById("index_name2").value=""
    // document.getElementById("index_email2").value=""
    document.getElementById("index_mobile2").value=""
     document.getElementById("index_course2").value=""
})
}





