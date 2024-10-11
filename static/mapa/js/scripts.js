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

let selecto = document.querySelector("#city");
const totalInfectados = document.querySelector("#totalI")
const ocorrencia = document.querySelector("#maiorOc")
const adicional = document.querySelector("#linkAdd")
const imagem = document.querySelector("#imagem")

let buttonFirst = document.querySelector("#primeiro");
buttonFirst.addEventListener('click', () => {
    if (selecto.value == "AL") {
        console.log("SIM")
        totalInfectados.textContent = "Total de infectados: 192 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: Centro de Saúde de Alexandria"
        adicional.textContent = "Influenza"
        adicional.setAttribute('href','http://127.0.0.1:8080/catalogo influenza')
        imagem.setAttribute('src',"https://th.bing.com/th/id/R.472786b1b8a46bdd2fe25465c7c4242b?rik=2Gxmp9b3j3%2bBEA&riu=http%3a%2f%2fwww.aranhahomem.com%2fimages%2fpictures%2fespetacular-homem-aranha.jpg&ehk=ERbUhUtnoV2mA1qGWVw9o43fc%2bDJCdrYQa8URE8DTgE%3d&risl=&pid=ImgRaw&r=0")
        console.log(imagem.src)
    }
    if (selecto.value == "PF") {
        console.log("NAO")
        totalInfectados.textContent = "Total de infectados: 97 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: NULL"
        adicional.textContent = "Influenza"
        adicional.setAttribute('href','http://127.0.0.1:8080/catalogo influenza')
        imagem.setAttribute('src',"https://6512159831a40e007a3a0179--luminous-gnome-2d34bf.netlify.app/mapa/img/PaudosFerros-Influenza.png")
    }
    if (selecto.value == "PE") {
        console.log("Talvez")
        totalInfectados.textContent = "Total de infectados: 881 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: Hospital Municipal"
        adicional.textContent = "Influenza"
        adicional.setAttribute('href','http://127.0.0.1:8080/catalogo influenza')
        imagem.setAttribute('src',"https://6512159831a40e007a3a0179--luminous-gnome-2d34bf.netlify.app/mapa/img/Pereiro_Influenza.jpeg")
    }
    
})

let buttonSecond = document.querySelector("#segundo");
buttonSecond.addEventListener('click', () => {
    if (selecto.value == "AL") {
        console.log("S")
        totalInfectados.textContent = "Total de infectados: 25 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: Un. de Saúde da Família Santo Amaro"
        adicional.textContent = "Gastroenterite"
        adicional.setAttribute('href','#')
        imagem.setAttribute('src',"https://lh3.googleusercontent.com/pw/ABLVV86B2Jsjxb52hZUOZYVqeI4pEYR-Ex-ZR3OF5KoBoKtGG1ULhu5k5O0hx6Fm-St5bCglMPuPoewdtKD6X74grjO_nOyz9dJWsq264fTvqZ8VzYnF8UsO6-y8opHAWbIh5gXng4NFnCAElKuRhbAwS5WJZ4oo95OoouOB2ExP6oQ4-IxseLSqDQX4SnBL25gRengZrYqwyBo92mhtW_M_GxgVxH2Dx4VgNyDFo0EmUS4RQmrulICOZceNgk1wGJBoDo9vzgmH1iiMTbi4wuKerUlBmDURndZkb86QIask3cMoIK_EU0O_Gfq-UqV9UjBTirSDOs-qKOLAoo_9Fdcvqt0g_U_93LmGMPwmN9i4CVRxpdfBOhHt2IsFE0C9eWhlGXHgBvlaABKND5oXJoWZme1oR7BjhxB64deUFPn3vMDbuu9vzhba3zqVHiW47puI-K2-SVAopoPv1u2M9qD8zY6IFtbrQHriG5iCHb2xuvpXnoUT2pcufGvAQPJwAIoh-WyUpzMXCbowJ6vgyqzxIPUWKBKdHjc5LVSmkYPRYIuAoBqn_XAbdOvPpsVvmpcg7R3T94kvBSyITK6ndaEAtZ4_57looAC5s3HLVZ1Xew2C7w0qi0ybmC6FriW_6_ilJrgG_VxvJKIhTZVkq7oE6_igxhQdOzBS2BYPPBjPxp_xtORTHjFFByS7ClYY67LtAZm0iPkNYyUaw-o2vx3d5DYS6-K444wvSpOwpwVP1oWOVfAQu7R_zFR4zxM6XneIVgR4K3SHHOpqR4EXmlwokfZqYIslDNI3H2RzgUy12pDiB0pX0748o6l2lDeasqIOaIUrw7DD9rAQLElCc13rl105gyzHQ6wsUiNMk5pzY2sXFCJx4w3uqQKIfGwEl6aoSh5V0eu5mrHFQCWlme6FB7KQkc8E5PJ2bM3_RaBuTHe0kTxN9K6WD7Df7SWwV9PdYyKvoWYPOfw=w1245-h885-s-no?authuser=0")
    }
    if (selecto.value == "PF") {
        console.log("N")
        totalInfectados.textContent = "Total de infectados: 12 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: NULL"
        adicional.textContent = "Gastroenterite"
        adicional.setAttribute('href','#')
        imagem.setAttribute('src',"https://6512159831a40e007a3a0179--luminous-gnome-2d34bf.netlify.app/mapa/img/PaudosFerros-Gastroenterite.png")
    }
    if (selecto.value == "PE") {
        console.log("T")
        totalInfectados.textContent = "Total de infectados: 254 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: Hospital Municipal"
        adicional.textContent = "Gastroenterite"
        adicional.setAttribute('href','#')
        imagem.setAttribute('src',"https://6512159831a40e007a3a0179--luminous-gnome-2d34bf.netlify.app/mapa/img/Pereiro_Gastroenterite.jpeg")
    }
    
})

let buttonThird = document.querySelector("#terceiro");
buttonThird.addEventListener('click', () => {
    if (selecto.value == "AL") {
        console.log("M")
        totalInfectados.textContent = "Total de infectados: 152 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: Un. de Saúde da Família Cascalho"
        adicional.textContent = "Nasofaringite Aguda"
        adicional.setAttribute('href','#')
        imagem.setAttribute('src',"https://6512159831a40e007a3a0179--luminous-gnome-2d34bf.netlify.app/mapa/img/Alexandria-Nasofaringite.png")
    }
    if (selecto.value == "PF") {
        console.log("O")
        totalInfectados.textContent = "Total de infectados: 50 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: NULL"
        adicional.textContent = "Nasofaringite Aguda"
        adicional.setAttribute('href','#')
        imagem.setAttribute('src',"https://6512159831a40e007a3a0179--luminous-gnome-2d34bf.netlify.app/mapa/img/PaudosFerros-Nasofaringite.png")
    }
    if (selecto.value == "PE") {
        console.log("z")
        totalInfectados.textContent = "Total de infectados: 583 casos"
        ocorrencia.textContent = "Estabelecimento com maior ocorrência: Hospital Municipal"
        adicional.textContent = "Nasofaringite Aguda"
        adicional.setAttribute('href','#')
        imagem.setAttribute('src',"https://6512159831a40e007a3a0179--luminous-gnome-2d34bf.netlify.app/mapa/img/Pereiro_Nasofaringite.jpeg")
    }
    
})