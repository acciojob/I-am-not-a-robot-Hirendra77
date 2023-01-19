//your code here
//creates an h3 element
let heading3=document.createElement("h3")
heading3.setAttribute("id", "h")
heading3.innerHTML = "Please click on the identical tiles to verify that you are not a robot."
document.body.prepend(heading3);


//created button
let arr=["reset", "verify"]
for(let t of arr){
let btn=document.createElement("button")
btn.setAttribute("id", t)
btn.innerHTML=t.toUpperCase()
// btn.style.cssText=" color:white; background-color:blue;"
btn.style.display = "none"
document.body.append("btn")
}

//generating 6th class name randomly from 5 values
let imageClass=["img1", "img2", "img3", "img4", "img5"]
let randomIndex1=Math.floor(Math.random()*imageClass.length)
let randomImg=document.querySelectorAll(randomIndex1)
imageClass.push(randomImg) //["img1", "img2", "img3", "img4", "img5", "img3"]

//suffling the array so that image will generate randomly at each position after reload
let arr1=[]
// let randomIndex2=Math.flooor(Math.random()* imageClass.length)
let k=0
while(k<imageClass.length){
    // if(k == imageClass.length){ //while(true)
    //     break
    // }

    let randomIndex2=Math.flooor(Math.random()* imageClass.length)
    if(arr1[randomIndex2] == undefined){
        arr1[randomIndex2] = imageClass[k] 
        k=k+1
    }
    else if(arr1[randomIndex2] != undefined){
        continue
    }
   
}

//selecting all images
let images=document.querySelectorAll("img") // 0 - 6


// setting attribute class_name to all images 
for(let i=0;i<=arr1.length-1;i++){
    images[i].setAttribute("class", arr1[i])
    images[i].setAttribute("id",i)
}

for(let t of images){
    t.addEventListener("click", userOrRobot)
}

let resetBtn=document.getElementById("reset")
let verifyBtn = document.getElementById("verify")

let prevImagId=""
let count=0
function userOrRobot(e){ 
    //change border of image after click
    
   resetBtn.style.display="inline"
     let currentImgId=e.target.id
     if(currentImgId != prevImagId){
        images[currentImgId].classList.add("selected")
        count++
        prevImagId = currentImgId
        if(count == 2){
          
            verifyBtn.style.display="inline"
        }
     }
  
}
resetBtn.addEventListener("click", ()=>{
    verifyBtn.style.display = "none"
    resetBtn.style.display="none"
    count=0
    selectedImages = document.querySelectorAll(".selected")

    for(let t of selectedImages){
        t.classList.remove("selected")
    }
})

verifyBtn.addEventListener("click", ()=>{
    let p = document.createElement("p")
    selectedImages = document.querySelectorAll(".selected")
    let class1 = selectedImages[0].className
    let class2 = selectedImages[1].className
    if(class1==class2){
      verifyBtn.style.display="none"
      p.innerHTML="You are a human. Congratulations! "
     
    }
    else {
        
      p.innerHTML="We can't verify you as a human. You selected the non-identical tiles "
    }
    verifyBtn.style.display="none"
    document.body.append(p)
})
