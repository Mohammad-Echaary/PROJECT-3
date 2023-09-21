
// active the selected nav
let navLinks = document.querySelectorAll('.menu-list-link');

navLinks.forEach((ele) => {
    ele.onclick = () => {
        // removin active from all navLinks
        navLinks.forEach((nav) => {
            nav.classList.remove("active")
        })
        // add to the cureent one
        ele.classList.add('active')
    }
})


// hide sub section after clickin on a link
let sebSection = document.querySelector(".seb-section")
let anchors = document.querySelectorAll(".seb-section a")
anchors.forEach((a) => {
    a.onclick = () => {
        // removin active from all navLinks
        navLinks.forEach((nav) => {
            nav.classList.remove("active")
        })
    }
})