const body = document.querySelector("body")

// Loading funtions
const loading = document.querySelector(".loading");

const contain = document.querySelector(".quest-container");

setTimeout(()=>{
    loading.style.display = "none";
    contain.style.display = "block";
}, 8000)

//nav funtion
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const show = document.querySelector(".quit");
const nav = document.querySelector(".nav");
const timeOut = document.querySelector("#time-out");

nav.addEventListener("click", ()=>{
    body.classList.toggle("act")
})
// Slide funtions

const slide = document.querySelector(".quest-slide");
const prevBtn = document.querySelectorAll("#prev");
const nextBtn = document.querySelectorAll("#next");


prevBtn.forEach(prev =>{
    if(prev.classList.contains("prev2")){
        prev.addEventListener("click", ()=>{
            slide.style.marginLeft = "0"
        })
    }
    else if(prev.classList.contains("prev3")){
        prev.addEventListener("click", ()=>{
            slide.style.marginLeft = "-310px"
        })
    }
})
nextBtn.forEach(next =>{
    if(next.classList.contains("next1")){
        next.addEventListener("click", ()=>{
            slide.style.marginLeft = "-310px"
        })
    }
    else if(next.classList.contains("next2")){
        next.addEventListener("click", ()=>{
            slide.style.marginLeft = "-620px"
        })
    }
})
//Time funtions


let time = count.innerText;

setInterval(()=>{
   
   let realTime = time -= 1
   count.innerText = realTime
   if(count.innerText == 0){
       
       contain.style.display = "none"
       cancelModal.style.display = "none"
       modal.classList.add("confirm-submit");
       modalBgn.classList.add("modalback");
       quitConfirm.innerText = "Time out ";
       showResult.innerText = "Submit"
   }
}, 1000)

//Quit functions and appearance 
const quitQuiz = document.querySelector("#quit-quiz");
const quitConfirm = document.querySelector("#quit-confirm");

quitQuiz.addEventListener("click", ()=>{
    modal.classList.add("confirm-submit");
    modalBgn.classList.add("modalback")
    quitConfirm.innerText = "Are you sure you want to quit the test ?"
    
})

//Submit functions
const submitBtn = document.querySelector("#submit");
const modal = document.querySelector(".modal");
const modalBgn = document.querySelector(".modal-bgn");

submitBtn.addEventListener("click", ()=>{
    modal.classList.add("confirm-submit");
    modalBgn.classList.add("modalback")
})

// Modal to confirm submit
const cancelModal = document.querySelector("#cancel");

cancelModal.addEventListener("click", ()=>{
    contain.style.display = "block"
    modal.classList.remove("confirm-submit");
    modalBgn.classList.remove("modalback")
});

//Show results button functions 
const showResult = document.querySelector("#show-result");
const scoreSheet = document.querySelector(".score-sheet");
showResult.addEventListener("click", ()=>{
    contain.style.display = "none"
    scoreSheet.style.display = "block";
    timeOut.style.display = "none"
    modal.classList.remove("confirm-submit");
    modalBgn.classList.remove("modalback");
    count.style.display = "none"
})

//Getting selected functions
const ansOne = document.querySelector("#answer-one");
const ansTwo = document.querySelector("#answer-two");
const ansThree = document.querySelector("#answer-three");
const items = document.querySelectorAll("li");

const check1 = document.querySelector(".check-one");
const xmark1 = document.querySelector(".xmark-one");
const check2 = document.querySelector(".check-two");
const xmark2 = document.querySelector(".xmark-two");
const check3 = document.querySelector(".check-three");
const xmark3 = document.querySelector(".xmark-three");


items.forEach(item =>{
    if(item.classList.contains("quest-one-correct")){
        item.addEventListener("click", ()=>{
            
            ansOne.innerText = "Correct";
            check1.style.opacity = "1"
            xmark1.style.opacity = "0"
        })
    }
    else if(item.classList.contains("quest-one-wrong-one")){
        item.addEventListener("click", ()=>{
            
            ansOne.innerText = "Wrong";
            check1.style.opacity = "0"
            xmark1.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-one-wrong-two")){
        item.addEventListener("click", ()=>{
            
            ansOne.innerText = "Wrong";
            check1.style.opacity = "0"
            xmark1.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-one-wrong-three")){
        item.addEventListener("click", ()=>{
            
            ansOne.innerText = "Wrong";
            check1.style.opacity = "0"
            xmark1.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-two-correct")){
        item.addEventListener("click", ()=>{
            
            ansTwo.innerText = "Correct";
            check2.style.opacity = "1"
            xmark2.style.opacity = "0"
        })
    }
    else if(item.classList.contains("quest-two-wrong-one")){
        item.addEventListener("click", ()=>{
            
            ansTwo.innerText = "Wrong";
            check2.style.opacity = "0"
            xmark2.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-two-wrong-two")){
        item.addEventListener("click", ()=>{
            
            ansTwo.innerText = "Wrong";
            check2.style.opacity = "0"
            xmark2.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-two-wrong-three")){
        item.addEventListener("click", ()=>{
            
            ansTwo.innerText = "Wrong";
            check2.style.opacity = "0"
            xmark2.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-three-correct")){
        item.addEventListener("click", ()=>{
            
            ansThree.innerText = "Correct";
            check3.style.opacity = "1"
            xmark3.style.opacity = "0"
        })
    }
    else if(item.classList.contains("quest-three-wrong-one")){
        item.addEventListener("click", ()=>{
            
            ansThree.innerText = "Wrong";
            check3.style.opacity = "0"
            xmark3.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-three-wrong-two")){
        item.addEventListener("click", ()=>{
            
            ansThree.innerText = "Wrong";
            check3.style.opacity = "0"
            xmark3.style.opacity = "1"
        })
    }
    else if(item.classList.contains("quest-three-wrong-three")){
        item.addEventListener("click", ()=>{
            
            ansThree.innerText = "Wrong";
            check3.style.opacity = "0"
            xmark3.style.opacity = "1"
        })
    }
    

});
const drop = document.querySelector("#drop");

drop.addEventListener("click", ()=>{
    
    body.classList.toggle("drip")
    
})

const retake = document.querySelector("#retake")
retake.addEventListener("click", ()=>{
    
    document.location.reload()
    
})
