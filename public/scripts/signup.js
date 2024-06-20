const imageReflector = ()=>{
    const img = document.querySelector(".img");
    const address = document.querySelector(".imgAddress");

    address.addEventListener("input",(event)=>{
        img.setAttribute("src",event.target.value);
    })
}

const confirmPassword = ()=>{
    const form = document.querySelector("form");
    form.addEventListener("submit",(e)=>{
        const pass = document.querySelector(".password");
        const confirmPass = document.querySelector(".confirmPassword");
        const profile = document.querySelector("imgAddress");
        if(!profile.value)
        if(pass.value != confirmPass.value){
            alert("confim password not match");
        }
        
    })
}
confirmPassword();
imageReflector();