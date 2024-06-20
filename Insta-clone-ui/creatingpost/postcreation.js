const imgReflector = ()=>{
    const img = document.querySelector(".img");
    const imgAdd = document.querySelector(".imgAdd");
    console.log(img,imgAdd)
    imgAdd.addEventListener("input",(e)=>{
        console.log(e.target.value);
        img.setAttribute("src",e.target.value);
    })
}

imgReflector();