let count=0;
let licount=1;
const images=document.querySelector(".images");
const nextFunc=()=>{
    if(count==-610){
        count=0;
        licount=1;
        images.style="transform: translateX("+count+"px);transition-duration: 1000ms;transition-timing-function:ease-out;";   
        document.querySelectorAll(".status li").forEach(elem=>elem.classList.remove("statusActive"));
        document.querySelector(".status li:nth-child("+licount+")").classList.add("statusActive");
    }
    else{
        count-=305;
        licount++;
        images.style="transform: translateX("+count+"px);transition-duration: 1000ms;transition-timing-function:ease-out;";  
        document.querySelectorAll(".status li").forEach(elem=>elem.classList.remove("statusActive"));
        document.querySelector(".status li:nth-child("+licount+")").classList.add("statusActive");
    } 
}
const prevFunc=()=>{
    if(count==0){
        count=-610;
        licount=3;
        images.style="transform: translateX("+count+"px);transition-duration: 1000ms;transition-timing-function:ease-out;";  
        document.querySelectorAll(".status li").forEach(elem=>elem.classList.remove("statusActive"));
        document.querySelector(".status li:nth-child("+licount+")").classList.add("statusActive");
    }
    else{
        count+=305;
        licount--;
        images.style="transform: translateX("+count+"px);transition-duration: 1000ms;transition-timing-function:ease-out;";
        document.querySelectorAll(".status li").forEach(elem=>elem.classList.remove("statusActive"));
        document.querySelector(".status li:nth-child("+licount+")").classList.add("statusActive");
    }     
}
document.querySelector(".next").addEventListener("click",nextFunc);
document.querySelector(".prev").addEventListener("click",prevFunc);
setInterval(nextFunc,5000);
document.querySelector(".status li:first-child").classList.add("statusActive");