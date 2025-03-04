export function loadData(){
    return localStorage.key("professeurs") != null ? JSON.parse(localStorage.getItem("professeurs")) : [];
}

export function saveDataProf(newProf) {
    let professeurs = loadData();
    professeurs.push(newProf);
    localStorage.setItem("professeurs", JSON.stringify(professeurs));
}