//js CODE

const file__input = document.getElementById("file__input")
const default__pic = document.querySelector(".default__pic")
const Baseprofile__img = "./image/profilePic.jpg"
 
 file__input.addEventListener("change", (e)=>{ 
  const imageChanger = () =>{
     let reader = new FileReader()
     reader.readAsDataURL(e.target.files[0])
     reader.onloadend = () =>{
    
      //saved to localStorage
     localStorage.setItem("image", JSON.stringify(reader.result))
    }
   }
  imageChanger()
})

  // fetch from localStrage
  const setImage = () =>{
  let stored__image = JSON.parse(localStorage.getItem("image"))
  default__pic.src = stored__image ? stored__image :  Baseprofile__img
  }
setInterval(()=>{setImage()}, 1000) 


function i (x){
 
}
console.log(i[1,3,5,6])
  


