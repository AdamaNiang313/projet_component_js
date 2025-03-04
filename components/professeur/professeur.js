import isEmpty from "./../../utils/validator.js";
import * as ServiceLocalStorage from './../../services/professeur.localStorage.js';
import * as Component from './component.js';
let professeurs = [];

const form = document.getElementById("createForm");
const checkboxError = document.getElementById("checkboxError");
const tbody = document.getElementById("tbodyProfs");
const checkboxMatieres =  document.querySelectorAll("input[type=checkbox]");
load();

console.log(professeurs);


/*
const nomElem = form.elements["nom"];
const prenomElem = document.getElementById("prenom");
const gradeElem = document.getElementById("grade");
*/



//checkboxMatieres.forEach((checkbox) => {
//Array.from(checkboxMatieres).filter(checkbox => checkbox.checked);

for (const checkbox of checkboxMatieres) {
    checkbox.addEventListener('change', () => {
        if(checkbox.checked){
            checkbox.classList.remove('is-invalid')
            checkbox.classList.add('is-valid')
        } else {
            checkbox.classList.remove('is-valid')
            checkbox.classList.add('is-invalid')
        }
    })
}


    
//})


//const formFields = [nomElem, prenomElem, gradeElem];
//const formFieldsValidation = ["nom","prenom","grade"];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    let newProf = {};

    for (const [name,value] of formData.entries()) {
        //let field = form.elements[fieldId];
        //let field = document.getElementById(name);
        let field = document.querySelector(`[name=${name}]`);

        if(isEmpty(field)){
            Component.showErrorMessage(field);
            return; 
        }
        newProf[name] = value;
        Component.showSuccessMessage(field);
    }
    
    const elementsChoisis = document.querySelectorAll(".form-check-input:checked");
    if(elementsChoisis.length == 0){
        checkboxError.textContent = "Veillez cocher au moins une matière";
        return;
    }
    checkboxError.textContent = "";

    newProf = { ...newProf,
        id: professeurs.length + 1, 
        matieres: Array.from(elementsChoisis).map(element => element.value)
    };
    
    ServiceLocalStorage.saveDataProf(newProf);
    form.reset()

});

 function load() {
    professeurs = ServiceLocalStorage.loadData();
    Component.closeForm(form);
    Component.activateFocus();
    Component.genererDataProfesseur(professeurs,tbody);
    
};

//const inputs = [nomElem, prenomElem];




// Les fonctions de validation



// Fonction d'affichage des messages de succès ou d"erreur sur les champs


document.getElementById("btnOpenForm").addEventListener("click", ()=>{Component.openForm(form)});
document.getElementById("closeForm").addEventListener("click", ()=>{Component.closeForm(form)});

