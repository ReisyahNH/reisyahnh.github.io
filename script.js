const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        themeBtn.innerHTML="☀️";
    }
    else{
        localStorage.setItem("theme","dark");
        themeBtn.innerHTML="🌙";
    }

});

if(localStorage.getItem("theme")==="light"){
    document.body.classList.add("light");
    themeBtn.innerHTML="☀️";
}

function openModal(title,desc,role,link){

    document.getElementById("modal").style.display="flex";

    document.getElementById("modalTitle").innerText=title;

    document.getElementById("modalDesc").innerText=desc;

    document.getElementById("modalRole").innerText="Role : "+role;

    document.getElementById("modalLink").href=link;
}

function closeModal(){

    document.getElementById("modal").style.display="none";

}

window.onclick = function(e){

    const modal = document.getElementById("modal");

    if(e.target===modal){
        modal.style.display="none";
    }

}

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade").forEach((el)=>{

    observer.observe(el);

});
