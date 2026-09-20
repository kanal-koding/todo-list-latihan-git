const form = document.getElementById("form-tugas");
const input = document.getElementById("input-tugas");
const daftar = document.getElementById("daftar-tugas");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const teks = input.value.trim();
    if (teks ==="") {
        return;
    }

    const item = document.createElement("li");
    item.textContent = teks;
    daftar.appendChild(item);
    input.value = "";
    input.focus();
});

// Penjelasan per baris:

// const form = document.getElementById("form-tugas");
// document mewakili seluruh halaman. getElementById mencari elemen yang id-nya cocok dan mengembalikan objek elemen itu. const berarti variabel form tidak boleh diberi nilai baru (isi objeknya tetap bisa berubah). Dua baris berikutnya melakukan hal yang sama untuk kolom input dan daftar.
// form.addEventListener("submit", function (event) { ... });
// Memasang "pendengar" pada form. Argumen pertama adalah jenis kejadian ("submit" terjadi saat form dikirim, baik lewat tombol maupun tekan Enter). Argumen kedua adalah fungsi yang dijalankan setiap kali kejadian itu terjadi. Parameter event berisi informasi tentang kejadiannya.
// event.preventDefault();
// Perilaku bawaan form adalah memuat ulang halaman saat dikirim. Baris ini mencegahnya, supaya halaman tetap dan JavaScript yang mengurus datanya.
// const teks = input.value.trim();
// input.value adalah isi yang diketik pengguna (berupa string). trim() membuang spasi di awal dan akhir, jadi " belajar " menjadi "belajar".
// if (teks === "") { return; }
// Kalau hasilnya string kosong (misalnya pengguna hanya mengetik spasi), return menghentikan fungsi lebih awal. Pola ini disebut early return atau guard clause. === membandingkan nilai dan tipe, dan ini lebih aman daripada ==. Atribut required di HTML tidak menangkap input yang hanya berisi spasi, jadi pengecekan ini tetap perlu.
// const item = document.createElement("li");
// Membuat elemen <li> baru. Saat ini elemennya baru ada di memori, belum tampil di halaman.
// item.textContent = teks;
// Mengisi teks elemen. textContent memperlakukan isi sebagai teks biasa, sehingga kalau pengguna mengetik <b>halo</b>, yang tampil adalah tulisan itu apa adanya. Bandingkan dengan innerHTML yang menafsirkannya sebagai HTML dan berisiko disusupi kode berbahaya, jadi biasakan textContent untuk teks dari pengguna.
// daftar.appendChild(item);
// Memasang <li> tadi di akhir daftar <ul>, dan baru sekarang tampil di halaman.
// input.value = ""; dan input.focus();
// Mengosongkan kolom input, lalu mengembalikan kursor ke sana agar pengguna bisa langsung mengetik tugas berikutnya.