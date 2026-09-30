# DOM-Quest
1. querySelector dan querySelectorAll
Pengertian:

querySelector: Method DOM yang digunakan untuk memilih elemen pertama yang cocok dengan pemilih CSS (CSS Selector) tertentu. Jika tidak ada elemen yang cocok, method ini mengembalikan null.

querySelectorAll: Method DOM yang digunakan untuk memilih semua elemen yang cocok dengan pemilih CSS. Method ini mengembalikan sebuah NodeList (kumpulan node/elemen mirip array) yang berisi semua elemen yang memenuhi kriteria

Cara Kerja
Keduanya bekerja dengan cara memindai dokumen HTML (DOM tree) menggunakan sintaks pemilih CSS seperti tag (div), class (.nama-class), ID (#nama-id), atau atribut ([type="text"]).

querySelector akan berhenti memindai segera setelah menemukan elemen pertama yang cocok.

querySelectorAll akan memindai seluruh dokumen dan mengumpulkan semua elemen yang cocok ke dalam NodeList.

2. innerHTML, textContent, dan innerText
Pengertian
innerHTML: Properti yang membaca atau mengubah isi HTML di dalam suatu elemen, termasuk tag-tag HTML di dalamnya.

textContent: Properti yang membaca atau mengubah seluruh teks mentah (raw text) di dalam elemen dan seluruh elemen turunannya, tanpa mempedulikan gaya CSS (seperti display: none).

innerText: Properti yang membaca atau mengubah teks yang tampak/terlihat oleh pengguna di layar (memperhatikan CSS seperti visibility dan display).

Cara Kerja
innerHTML: Ketika diisi nilai baru, browser akan mengurai (parse) string tersebut menjadi nodus-nodus HTML baru. Catatan: Rentan terhadap serangan XSS jika digunakan untuk memasukkan data yang diinput pengguna.

textContent: Menghapus semua node anak di dalam elemen dan menggantinya dengan satu node teks. Sangat cepat dan aman dari serangan XSS.

innerText: Memicu proses reflow/layout browser untuk mengecek apakah suatu teks benar-benar terlihat di layar sebelum mengembalikannya.

3. Manipulasi Atribut dan Style
Pengertian
Manipulasi Atribut: Proses membaca, menambah, mengubah, atau menghapus atribut pada elemen HTML (seperti id, class, src, disabled, data-*). Method utamanya meliputi getAttribute(), setAttribute(), removeAttribute(), hasAttribute(), serta API classList.

Manipulasi Style: Proses mengubah tampilan/Gaya CSS suatu elemen melalui JavaScript secara langsung melalui properti style (inline style) atau dengan mengganti class CSS (classList.add(), classList.remove(), classList.toggle()).

Cara Kerja
Atribut: setAttribute('nama_atribut', 'nilai') secara langsung memperbarui DOM attribute node pada elemen HTML.

Style: Properti element.style.propertyName akan menambahkan atau mengubah CSS secara inline pada tag HTML (misal: style="color: red;").

ClassList: Memanipulasi atribut class secara modular tanpa mengganggu class lain yang sudah ada pada elemen tersebut.