function sum(a, b) {
  return a + b;
}

function sumVariadic(...c) {
  let total = 0;

  c.forEach((element) => {
    total += element;
  });
  return total;
}

function sumVariadicReduce(...c) {
  const total = c.reduce((acc, value) => acc + value, 0);
  return total;
}

const sumWithArrowFunction = (...a) => a.reduce((acc, value) => acc + value, 0);

const sumWithArrowFunction2 = (...a) => {
  a.reduce((acc, value) => acc + value, 0);
};

let a = (1, 2, 3, 4, 5);

function klikKlakKlok() {
  console.log("klik klak klok");
}

function hide() {
  if (document.getElementById("tralala2").style.display === "none") {
    document.getElementById("tralala2").style.display = "block";
  } else {
    document.getElementById("tralala2").style.display = "none";
  }
}
// document.getElementById('tralala').addEventListener('click', klikKlakKlok);

const submitForm = document.querySelector("#submitForm");
const inputName = document.querySelector("#inputName");
const selectEdu = document.querySelector("#selectEdu");
const inputGender = document.querySelectorAll("[name = 'gender']");

inputName.addEventListener("input", (event) => {
  const value = event.target.value;

  const displayName = document.querySelector("#displayName");
  displayName.textContent = value;
});

selectEdu.addEventListener("change", (event) => {
  const value = event.target.value;

  const displayEdu = document.querySelector("#displayEdu");
  displayEdu.textContent = value;
});

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = inputName.value;
  const edu = selectEdu.value;
  const checkedGender = document.querySelector("[name='gender']:checked").value;

  console.log(name, edu, checkedGender);
});

inputGender.forEach((element) => {
  element.addEventListener("change", (event) => {
    const value = event.target.value;

    const displayGender = document.querySelector("#displayGender");
    displayGender.textContent = value;
  });
});
inputGender.addEventListener("change", (event) => {
  const value = event.target.value;

  const displayGender = document.querySelector("#displayGender");
  displayGender.textContent = value;
});

const checkedGender = document.querySelector("[name='gender']:checked").value;
