
export function showErrorMessage(champ){
    const champError = document.getElementById(`${champ.id}Error`);
    champ.classList.add('is-invalid');
    champError.classList.add('invalid-feedback');
    champError.textContent = "Ce champ est obligatoire";
}

export function showSuccessMessage(champ){
    const champError = document.getElementById(`${champ.id}Error`);
    champ.classList.remove('is-invalid'); 
    champError.classList.remove('invalid-feedback');

    champ.classList.add('is-valid');
    champError.classList.add('valid-feedback');

    champError.textContent = '';
}

export function deleteClass(champ, classInput, classError){
    const champError = document.getElementById(`${champ.id}Error`);
    if(nomElem.classList.contains(classInput)){
        champ.classList.remove(classInput); 
        champError.classList.remove(classError);
        champError.textContent = '';
    }
}

// Fonction d'accès aux données
export function genererDataProfesseur(professeurs,tbody) {
    tbody.innerHTML = "";
    professeurs.forEach((professeur) => {
        
        const badges = professeur.matieres.map(matiere => `<span class="badge text-bg-primary mr-1">${matiere}</span>`);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${professeur.nom}</td>
            <td>${professeur.prenom}</td>
            <td>${professeur.grade}</td>
            <td>${badges}</td>
            <td>
                <button class="btn btn-sm btn-warning">Modifier</button>
                <button class="btn btn-sm btn-danger">Supprimer</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

export function openForm(form) {
    form.style.display = "block";
}

export function closeForm(form) {
    form.style.display = "none";
}


const inputs = document.getElementsByClassName('form-control');

export function activateFocus(){
    for (const input of inputs) {
        input.addEventListener('focus', () => {
            deleteClass(input, 'is-invalid', 'invalid-feedback');
            deleteClass(input, 'is-valid', 'valid-feedback');
        })
    }
}