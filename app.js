const submitBtn = document.querySelector(".btn");
const card = document.querySelector(".card");
const card1 = document.querySelector(".card1");
const rateBtn = document.querySelectorAll(".rate-btn");

const scoreBtn = document.querySelector("#score"); 
submitBtn.addEventListener("click",onSubmitFun);

rateBtn.forEach( btn => {
     btn.addEventListener("click", onRateBtnFun);
});


function onSubmitFun (){
    card.classList.add("hide");
    card1.classList.remove("hide");
}

function onRateBtnFun(event){
   
    rateBtn.forEach ( btn => {
         btn.classList.remove("active");

         if (event.target.classList.contains("rate-btn")) {
            event.target.classList.add("active");
            }else{
                event.target.parentElement.classList.add("active");
            }
            
        }
    );

    scoreBtn.textContent=event.target.textContent;
}