const imageReflector = ()=>{
    const img = document.querySelector(".img");
    const address = document.querySelector(".imgAddress");

    img.setAttribute("src","https://images.freeimages.com/fic/images/icons/560/fast_icon_users/128/user.png?fmt=webp&w=500");
    address.addEventListener("input",(event)=>{
        img.setAttribute("src",event.target.value);
    });
}

const confirmPassword = ()=>{
    const form = document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        const pass = document.querySelector(".password");
        const confirmPass = document.querySelector(".confirmPassword");
        const profile = document.querySelector("imgAddress");
        
        if(pass.value != confirmPass.value){
            alert("confim password not match");
            e.preventDefault();
        }
         
    })
}

const setDefault = ()=>{
    const form = document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        const address = document.querySelector(".imgAddress");
        if(address.value == ""){
            address.value = "https://images.freeimages.com/fic/images/icons/560/fast_icon_users/128/user.png?fmt=webp&w=500";
        }
    });
}

setDefault();
confirmPassword();
imageReflector();