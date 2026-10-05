// ==============================================================================
// POIN 1: querySelector & querySelectorAll
// ==============================================================================
const bookList = document.querySelector("#book-list"); // Memilih 1 elemen
const addForm = document.querySelector("#add-book-form");
const titleInput = document.querySelector("#book-title-input");
const categorySelect = document.querySelector("#category-select");
const titlePreview = document.querySelector("#title-preview");
const errorMessage = document.querySelector("#error-message");
const notification = document.querySelector("#notification-message");

// ==============================================================================
// POIN 2: innerHTML, textContent, innerText
// ==============================================================================
// Mengubah konten teks instruksi awal
notification.textContent = "Kelola daftar buku perpustakaan secara interaktif.";

// ==============================================================================
// POIN 5: Event Listener ('input')
// ==============================================================================
// [5] Event 'input' untuk pratinjau teks saat mengetik secara real-time
titleInput.addEventListener("input", function (event) {
  // [2] Gunakan textContent untuk keamanan
  titlePreview.textContent = event.target.value.trim() || "-";
});

// ==============================================================================
// POIN 5 & 8: Event Listener ('submit'), Ambil Data, dan Validasi Data
// ==============================================================================
addForm.addEventListener("submit", function (event) {
  // [5] Mencegah refresh halaman
  event.preventDefault();

  // [8] Mengambil data input
  const judul = titleInput.value.trim();
  const kategori = categorySelect.value;

  // [8] Validasi Data
  if (judul === "") {
    errorMessage.textContent = "Judul buku tidak boleh kosong!";
    return;
  }

  if (judul.length < 3) {
    errorMessage.textContent = "Judul buku minimal harus 3 karakter!";
    return;
  }

  if (kategori === "") {
    errorMessage.textContent = "Silakan pilih kategori buku!";
    return;
  }

  // Jika validasi sukses, bersihkan pesan error
  errorMessage.textContent = "";

  // [4] Panggil fungsi untuk membuat elemen baru
  tambahBukuBaru(judul, kategori);

  // Reset form setelah berhasil
  addForm.reset();
  titlePreview.textContent = "-";
});

// ==============================================================================
// POIN 4 & 3: Membuat Elemen Baru, Manipulasi Atribut & Style
// ==============================================================================
function tambahBukuBaru(judul, kategori) {
  // [4] Membuatelemen <li> secara dinamis
  const newLi = document.createElement("li");
  newLi.className = "book-item";
  newLi.setAttribute("data-id", Date.now()); // [3] Manipulasi Atribut data-id

  // [2] Menggunakan innerHTML untuk menyusun struktur internal
  newLi.innerHTML = `
    <div class="book-info">
      <span class="title">${judul}</span>
      <span class="category">(${kategori})</span>
    </div>
    <div class="book-actions">
      <span class="status available">Tersedia</span>
      <button class="borrow-btn">Pinjam</button>
      <button class="delete-btn">Hapus</button>
    </div>
  `;

  // [4] Menambahkan elemen ke DOM tree
  bookList.appendChild(newLi);

  // [2] Menggunakan innerText untuk notifikasi
  notification.innerText = `Buku "${judul}" berhasil ditambahkan!`;
}

// ==============================================================================
// POIN 6, 7 & 9: Event Bubbling, stopPropagation, Delegation & DOM Traversal
// ==============================================================================

// [7] EVENT DELEGATION: Memasang SATU listener pada elemen induk <ul>
bookList.addEventListener("click", function (event) {
  const target = event.target;

  // [9] DOM TRAVERSAL: Mengakses elemen induk terdekat dari target yang diklik
  const currentItem = target.closest(".book-item");
  
  if (!currentItem) return; // Jika yang diklik di luar item, abaikan

  // Aksi 1: Jika Tombol PINJAM Diklik
  if (target.classList.contains("borrow-btn")) {
    // [6] Mencegah event bubbling ke elemen li
    event.stopPropagation();

    // [9] DOM Traversal ke elemen status di dalam item yang sama
    const statusSpan = currentItem.querySelector(".status");
    
    // [2] Mengambil judul buku menggunakan innerText
    const bookTitle = currentItem.querySelector(".title").innerText;

    // [3] Manipulasi Atribut & Style
    target.setAttribute("disabled", "true");
    statusSpan.textContent = "Dipinjam";
    statusSpan.className = "status borrowed"; // [3] Manipulasi Class

    notification.innerText = `Kamu telah meminjam buku "${bookTitle}".`;
  }

  // Aksi 2: Jika Tombol HAPUS Diklik
  if (target.classList.contains("delete-btn")) {
    // [6] Mencegah event bubbling ke elemen li
    event.stopPropagation();

    const bookTitle = currentItem.querySelector(".title").innerText;

    // [4] Menghapus Elemen dari DOM
    currentItem.remove();

    notification.innerText = `Buku "${bookTitle}" berhasil dihapus.`;
  }

  // Aksi 3: Jika area Card Buku diklik (Demo Event Bubbling / Card Click)
  if (target === currentItem || target.classList.contains("book-info") || target.classList.contains("title")) {
    // [9] DOM Traversal: Mencari elemen anak (children)
    const titleText = currentItem.querySelector(".title").innerText;
    alert(`Informasi: Kamu mengklik kartu buku "${titleText}"`);
  }
});