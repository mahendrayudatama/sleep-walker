const editButton = document.querySelector("#editButton");
const editForm = document.querySelector("#editForm");
const submitButton = document.querySelector("#submitButton");

let name = document.querySelector("#name").innerHTML;
let role = document.querySelector("#role").innerHTML;
let availability = document.querySelector("#availability").innerHTML;
let usia = document.querySelector("#usia").innerHTML;
let lokasi = document.querySelector("#lokasi").innerHTML;
let pengalaman = document.querySelector("#pengalaman").innerHTML;
let email = document.querySelector("#email").innerHTML;

const formNama = document.querySelector("#formNama");
const formRole = document.querySelector("#formRole");
const formAvailability = document.querySelector("#formAvailability");
const formUsia = document.querySelector("#formUsia");
const formLokasi = document.querySelector("#formLokasi");
const formPengalaman = document.querySelector("#formPengalaman");
const formEmail = document.querySelector("#formEmail");

editButton.addEventListener("click", () => {
    if (editForm.style.display === "flex") {
        editForm.style.display = "none";
    }else {
        editForm.style.display = "flex";
    }
    formNama.value = name;
    formRole.value = role;
    formAvailability.value = availability;
    formUsia.value = usia;
    formLokasi.value = lokasi;
    formPengalaman.value = pengalaman;
    formEmail.value = email;
});


submitButton.addEventListener("click", () => {
    name = formNama.value;
    role = formRole.value;
    availability = formAvailability.value;
    usia = formUsia.value;
    lokasi = formLokasi.value;
    pengalaman = formPengalaman.value;
    email = formEmail.value;

    document.querySelector("#name").innerHTML = name;
    document.querySelector("#role").innerHTML = role;
    document.querySelector("#availability").innerHTML = availability;
    document.querySelector("#usia").innerHTML = usia;
    document.querySelector("#lokasi").innerHTML = lokasi;
    document.querySelector("#pengalaman").innerHTML = pengalaman;
    document.querySelector("#email").innerHTML = email;

    editForm.style.display = "flex";
});




