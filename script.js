// ========================================================
// 1. IMPLEMENTASI querySelector & querySelectorAll
// ========================================================
const bookList = document.querySelector("#book-list");
const notification = document.querySelector("#notification-message");


// ========================================================
// 2. IMPLEMENTASI innerHTML & textContent
// ========================================================

// A. innerHTML: Menambah elemen list buku baru beserta tag HTML-nya
const newBookHTML = `
  <li class="book-item" data-id="4">
    <span class="title">Laut Bercerita</span>
    <span class="status available">Tersedia</span>
    <button class="borrow-btn">Pinjam</button>
  </li>
`;
bookList.innerHTML += newBookHTML;

// B. textContent: Mengubah teks secara langsung (tanpa mengurai tag HTML)
const secondBookStatus = document.querySelectorAll(".status")[1];
secondBookStatus.textContent = "Dikembalikan";
secondBookStatus.className = "status available"; 


// ========================================================
// 3. IMPLEMENTASI innerText, MANIPULASI ATRIBUT & STYLE
// ========================================================
document.addEventListener("click", function (event) {
  // Mengecek apakah elemen yang diklik adalah tombol .borrow-btn
  if (event.target.classList.contains("borrow-btn")) {
    const button = event.target;
    const bookItem = button.closest(".book-item");
    const statusSpan = bookItem.querySelector(".status");
    
    // C. innerText: Membaca teks judul yang nampak di layar
    const bookTitle = bookItem.querySelector(".title").innerText;
    
    // innerText: Mengubah pesan pada kotak notifikasi
    notification.innerText = `Berhasil meminjam buku: "${bookTitle}"`;

    // MANIPULASI ATRIBUT: Menambahkan atribut 'disabled' pada tombol
    button.setAttribute("disabled", "true");
    
    // MANIPULASI STYLE & CLASS: Mengubah kelas CSS dan tampilan
    button.classList.add("disabled-btn");
    button.textContent = "Dipinjam";

    statusSpan.textContent = "Dipinjam";
    statusSpan.className = "status borrowed";
  }
});