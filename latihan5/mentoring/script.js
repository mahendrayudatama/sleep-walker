let daftar_simpanan = [
  {
    id: 1,
    nama: "Atong Sukoco",
    simpanan: 50000,
  },
  {
    id: 2,
    nama: "Tralala",
    simpanan: 60000,
  },
];

let total_simpanan_anggota = 0;
daftar_simpanan.forEach((item) => {
  total_simpanan_anggota += item.simpanan;
});
console.log(total_simpanan_anggota);

const deleteSimpanan = (id) => {
  daftar_simpanan = daftar_simpanan.filter((item) => item.id !== id);
};

const tambahSimpanan = (nama, simpanan) => {
  let id = daftar_simpanan.slice(-1)[0].id + 1;
  daftar_simpanan.push({
    id: id,
    nama: nama,
    simpanan: simpanan,
  });
};

const memberDiv = document.createElement("div");
const memberList = document.createElement("ul");
const memberTitle = document.createElement("h2");
const removeButton = document.createElement("button");

memberTitle.innerHTML = "Daftar Anggota";
memberDiv.style.display = "flex";
memberDiv.style.gap = "10px";

// prompt("Masukkan nama anggota baru");
// prompt("Masukkan jumlah simpanan anggota baru");

const listTralala = document.getElementById("listTralala");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {
  let nama = prompt("Masukkan nama anggota baru");
  let simpanan = parseInt(prompt("Masukkan jumlah simpanan anggota baru"));
  tambahSimpanan(nama, simpanan);
  createMemberList();
});

const createMemberList = () => {
  listTralala.innerHTML = "";
  daftar_simpanan.forEach((item) => {
    let memberItem = document.createElement("div");
    memberItem.innerHTML = item.nama + " - " + item.simpanan;
    listTralala.appendChild(memberItem);
  });
};

function renderAnggota() {
  const listAnggota = document.getElementById("listAnggota");

  let row = "";
  listAnggota.forEach((item) => {
    row += `<tr>
    <td>${item.nama}</td>
    <td>${item.simpanan}</td>
    <td><button onclick="deleteSimpanan(${item.id})">Hapus</button></td>
    </td></tr>`;
  });
}

renderAnggota();
createMemberList();
