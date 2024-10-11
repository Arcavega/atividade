function menuShow() {
    let menuMobile = document.getElementById("mobileMenu");

    if (menuMobile.style.visibility == 'visible') {
        menuMobile.style.visibility = 'hidden';
        menuMobile.style.overflowY = 'hidden';
        menuMobile.style.height = '0px';
        console.log("OIIII")
    } else {
        menuMobile.style.visibility = 'visible';
        menuMobile.style.overflowY = 'auto';
        menuMobile.style.height = 'calc(65vh - 130px)';
    }
};


function menuUserShow() {
    let menuUser = document.getElementById("userMenu")
    console.log(menuUser,menuUser.style.visibility)

    if (menuUser.style.visibility == 'visible') {
        menuUser.style.visibility = 'hidden';
        menuUser.style.overflowY = 'hidden';
        menuUser.style.height = '0px';
        console.log("OIIII")
    } else {
        menuUser.style.visibility = 'visible';
        menuUser.style.overflowY = 'auto';
        menuUser.style.height = 'calc(35vh - 190px)';
    }
}

function menuUserShow1() {
    let menuUser1 = document.getElementById("ulMobileUser")
    console.log(menuUser1,menuUser1.style.visibility)

    if (menuUser1.style.visibility == 'visible') {
        menuUser1.style.visibility = 'hidden';
        menuUser1.style.overflowY = 'hidden';
        menuUser1.style.height = '0px'
        console.log("OIIII")
    } else {
        menuUser1.style.visibility = 'visible';
        menuUser1.style.overflowY = 'auto';
        menuUser1.style.height = 'calc(14.5vh - 48px)';
    }
}

