const links = document.getElementsByClassName("nav-link");

const container = document.getElementById('container');
const WEBURL = "http://127.0.0.1:5503/components";

function loadTemplate(path) {
   // container.innerHTML = '<H2> page professeur </H2>';
    fetch(`${WEBURL}/${path}/${path}.html`)
    .then(response => response.text())
    .then(data => {
        container.innerHTML = data;
    })
    .catch(error => console.error(error));

}


document.addEventListener('DOMContentLoaded',()=>{
    loadTemplate("professeur");
    loadJs("professeur");
    activeLink();
})

function loadJs(path) {
    const script = document.createElement('script');
    script.src = `${WEBURL}/${path}/${path}.js`;
    script.type = 'module';
    script.onload = ()=>{
        
        
    }
    //document.getElementsByTagName('body')[0];
    document.body.appendChild(script);
    
}

function activeLink() {
    for (const link of links) {
        link.addEventListener("click",()=>{
            let path = link.getAttribute('data-path');
            loadTemplate(path);
            
            loadJs(path);
        })
    }
}