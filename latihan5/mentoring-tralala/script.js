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

function renderAnggota() {
  const listAnggota = document.getElementById("listAnggota");

  let row = "";
  daftar_simpanan.forEach((item) => {
    row += `<tr>
                <td>${item.nama}</td>
                <td>${item.simpanan}</td>
                <td><button onclick="deleteSimpanan(${item.id})">Hapus</button></td>
            </tr>`;
  });
  listAnggota.innerHTML = row;
}

renderAnggota();

const addButton = document.getElementById("addButton");

function addMember() {
  let nama = prompt("Masukkan nama anggota baru");
  let simpanan = parseInt(prompt("Masukkan jumlah simpanan anggota baru"));
  tambahSimpanan(nama, simpanan);
  renderAnggota();
}

const tambahSimpanan = (nama, simpanan) => {
  let id = daftar_simpanan.slice(-1)[0].id + 1;
  daftar_simpanan.push({
    id: id,
    nama: nama,
    simpanan: simpanan,
  });
};
