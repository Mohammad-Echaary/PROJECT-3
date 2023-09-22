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

let anchors = document.querySelectorAll(".seb-section a")
anchors.forEach((a) => {
    a.onclick = () => {
        // removin active from all navLinks
        navLinks.forEach((nav) => {
            nav.classList.remove("active")
        })
    }
})

// select active while scrollin
let mainContainer = document.querySelectorAll(".main-container");
let mainLinksArray = ["articles", "gallery", "features"]
let started = false;


let arrow = document.querySelector(".arrow-up");
arrow.onclick = () => {
    window.scrollTo(0, 0);
}

window.onscroll = () => {

    if (window.scrollY <= navLinks[0].offsetTop) {
        navLinks.forEach((nav) => {
            nav.classList.remove("active")
        })
    }

    mainContainer.forEach((nav) => {
        if (window.scrollY >= nav.offsetTop - 70) {
            navLinks.forEach((nav) => {
                nav.classList.remove("active")
            })
            document.querySelector(`a[href="#${nav.classList.item(0)}"]`).classList.add('active');

            let a = document.querySelector(".other-links");

            if (!mainLinksArray.includes(nav.classList.item(0))) {
                a.firstChild.textContent = nav.classList.item(0);
                a.classList.add('active');
            } else {
                a.classList.remove('active');
                a.firstChild.textContent = 'Other Links'
            }
        }

    })

    // skills section

    let skillsSection = document.querySelector("#skills")
    let spans = skillsSection.querySelectorAll("p");

    if (window.scrollY >= skillsSection.offsetTop - 70) {
        spans.forEach((span) => {
            span.style.width = span.parentElement.getAttribute('data-perc');
        })
    }

    // stats
    let stats = document.querySelector('#stats');
    let counts = stats.querySelectorAll('h3');

    if (window.scrollY >= stats.offsetTop - 300) {
        if (!started) {
            counts.forEach((ele) => countin(ele))
        }
        started = true
    }

    // return to home pa
    if (window.scrollY > 200) {
        arrow.classList.add("active")
    } else {
        arrow.classList.remove("active")
    }
}
// stats
function countin(ele) {
    let max = ele.getAttribute("data-max");
    let count = setInterval(() => {
        ele.textContent++;
        if (ele.textContent == max) {
            clearInterval(count);
        }
    }, 4000 / Number(max))
}

// deadline

let day = document.querySelector(".day");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let last = new Date("2023-12-31T23:59:59");
setInterval(() => {
    let date = new Date();

    let dayTime = Math.floor(((last - date) / 1000 / 60 / 60 / 24)).toFixed()
    day.textContent = dayTime.length == 1 ? `0${dayTime}` : dayTime;

    let hourTime = Math.floor(((last - date) / 1000 / 60 / 60 % 24)).toFixed();
    hour.textContent = hourTime.length == 1 ? `0${hourTime}` : hourTime;

    let minuteTime = Math.floor(((last - date) / 1000 / 60 % 60)).toFixed();
    minute.textContent = minuteTime.length == 1 ? `0${minuteTime}` : minuteTime;

    let secondTime = Math.floor(((last - date) / 1000 % 60)).toFixed();
    second.textContent = secondTime.length == 1 ? `0${secondTime}` : secondTime;
}, 1000)

