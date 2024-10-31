const editButton = document.querySelector("#editButton");
const editForm = document.querySelector("#editForm");
const submitButton = document.querySelector("#submitButton");

let palue = [
  "name",
  "role",
  "availability",
  "usia",
  "lokasi",
  "pengalaman",
  "email",
];

let palueIngput = [
  "formNama",
  "formRole",
  "formAvailability",
  "formUsia",
  "formLokasi",
  "formPengalaman",
  "formEmail",
];

editButton.addEventListener("click", () => {
  if (editForm.style.display === "flex") {
    editForm.style.display = "none";
  } else {
    editForm.style.display = "flex";
  }
  palue.forEach((item, index) => {
    document.querySelector(`#${palueIngput[index]}`).value =
      document.querySelector(`#${item}`).innerHTML;
  });
});

editForm.addEventListener("submit", function(event) {
  event.preventDefault();
  palueIngput.forEach((item, index) => {
    document.querySelector(`#${palue[index]}`).innerHTML =
      document.querySelector(`#${item}`).value;
  });
  editForm.style.display = "none";
});
