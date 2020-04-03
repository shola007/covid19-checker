 const myForm= document.querySelector(".my-form");
 const coughSelect= document.querySelector(".coughselect");
 const sneezeSelect= document.querySelector(".sneezeselect");
 const painSelect= document.querySelector(".painselect");
 const weakSelect= document.querySelector(".weakselect");
 const feverSelect= document.querySelector(".feverselect");
 const breathSelect= document.querySelector(".breathselect");
 const message= document.querySelector(".message");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    if((coughSelect.value=="" && sneezeSelect.value=="") && (painSelect.value==""
    && weakSelect.value=="" )&& (feverSelect.value=="" && breathSelect.value=="")){
         message.classList.add(".message");
         message.innerHTML="KINDLY SELECT FROM ALL OPTIONS ABOVE TO CHECK IF YOU HAVE CORONA VIRUS"
         setTimeout(()=>message.remove(), 10000);
         coughSelect.focus();
         return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="No" && painSelect.value=="No"
    && weakSelect.value=="No" && feverSelect.value=="No" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY DRY COUGH. PLEASE USE COUGH SYRUP"
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="Yes" && painSelect.value=="No"
    && weakSelect.value=="No" && feverSelect.value=="No" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY SHOWED CATARRH SYMPTOM."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="No" && painSelect.value=="Yes"
    && weakSelect.value=="No" && feverSelect.value=="No" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY SHOWED PAIN SYMPTOM."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="No" && painSelect.value=="No"
    && weakSelect.value=="Yes" && feverSelect.value=="No" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY SHOWED WEAKNESS SYMPTOM."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="No" && painSelect.value=="No"
    && weakSelect.value=="No" && feverSelect.value=="Yes" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY SHOWED FEVER SYMPTOM."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="No" && painSelect.value=="No"
    && weakSelect.value=="No" && feverSelect.value=="No" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY DIFFICULTY BREATHING SYMPTOM."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    
    else if((coughSelect.value=="Yes" && sneezeSelect.value=="Yes") && (painSelect.value=="Yes"
    && weakSelect.value=="Yes" )&& (feverSelect.value=="Yes" && breathSelect.value=="Yes")){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL THE SYMPTOMS OF COVID19 AND YOU MAY HAVE THE VIRUS.PLEASE YOU NEED TO SEEK MEDICAL ADVICE AND TEST"
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
        
    }
    else if((coughSelect.value=="Yes"&& sneezeSelect.value=="Yes") && painSelect.value=="No"
    && weakSelect.value=="No" && feverSelect.value=="No" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ONLY COMMON COLD SYMPTOM."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="Yes" && painSelect.value=="Yes"
    && weakSelect.value=="No" && feverSelect.value=="No" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY AIR POLLUTION AND STRESS."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="Yes" && painSelect.value=="Yes"
    && weakSelect.value=="Yes" && feverSelect.value=="No" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE ONLY COMMON COLD AND STRESS."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="Yes" && painSelect.value=="Yes"
    && weakSelect.value=="Yes" && feverSelect.value=="Yes" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL SYMPTOMS EXCEPT DRY COUGH ADVICE YOU STILL SUBMIT YOURSELF FOR TEST."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="No" && painSelect.value=="Yes"
    && weakSelect.value=="Yes" && feverSelect.value=="Yes" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL SYMPTOMS EXCEPT CATARRH ADVICE YOU STILL SUBMIT YOURSELF FOR TEST."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="Yes" && painSelect.value=="No"
    && weakSelect.value=="Yes" && feverSelect.value=="Yes" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL SYMPTOMS EXCEPT HAVING PAIN ADVICE YOU STILL SUBMIT YOURSELF FOR TEST."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="Yes" && painSelect.value=="Yes"
    && weakSelect.value=="No" && feverSelect.value=="Yes" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL SYMPTOMS EXCEPT WEAKNESS ADVICE YOU STILL SUBMIT YOURSELF FOR TEST."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="Yes" && painSelect.value=="Yes"
    && weakSelect.value=="Yes" && feverSelect.value=="No" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL SYMPTOMS EXCEPT FEVER ADVICE YOU STILL SUBMIT YOURSELF FOR TEST."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="Yes" && sneezeSelect.value=="Yes" && painSelect.value=="Yes"
    && weakSelect.value=="Yes" && feverSelect.value=="Yes" && breathSelect.value=="No"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL SYMPTOMS EXCEPT DIFFICULTY BREATHING ADVICE YOU STILL SUBMIT YOURSELF FOR TEST."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="No" && painSelect.value=="Yes"
    && weakSelect.value=="Yes" && feverSelect.value=="Yes" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU HAVE SHOWED ALL SYMPTOMS EXCEPT DRY COUGH AND CATARRH ADVICE YOU STILL SUBMIT YOURSELF FOR TEST."
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }
    else if(coughSelect.value=="No" && sneezeSelect.value=="No" && painSelect.value=="No"
    && weakSelect.value=="Yes" && feverSelect.value=="Yes" && breathSelect.value=="Yes"){
        message.classList.add(".message");
        message.innerHTML="YOU DO NOT HAVE THE COVID19. ADVICE YOU SEE MEDICAL ADVICE FOR OTHER SYMPTOMS ONLY "
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
    }

    else if((coughSelect.value=="No" && sneezeSelect.value=="No") && (painSelect.value=="No"
    && weakSelect.value=="No" )&& (feverSelect.value=="No" && breathSelect.value=="No")){
        message.classList.add(".message");
        message.innerHTML="YOU DO NOT SHOWED ANY SYMPTOMS OF THE VIRUS. HOWEVER, STAY SAFE!!! AND MAINTAIN PREVENTIVE PRECAUTIONS"
        setTimeout(()=>message.remove(), 10000);
        coughSelect.focus();
        return false;
        
}
}
myForm.addEventListener("submit", reloaded);
function reloaded(){
    setTimeout(()=>location.reload(), 10000);
}
     
     
 

