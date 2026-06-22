```javascript
const btn = document.getElementById("themeBtn");

btn.onclick = () => {

document.body.classList.toggle("light");

};

function openModal(title,desc,role,link){

document.getElementById("modal").style.display="block";

document.getElementById("modalTitle").innerText=title;

document.getElementById("modalDesc").innerText=desc;

document.getElementById("modalRole").innerText="Role : "+role;

document.getElementById("modalLink").href=link;

}

function closeModal(){

document.getElementById("modal").style.display="none";

}

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade").forEach(el=>{

observer.observe(el);

});
```
