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

4. Membuat & Menghapus Elemen
Pengertian
Membuat Elemen: Proses membuat node/elemen HTML baru secara dinamis dari JavaScript menggunakan document.createElement().

Menghapus Elemen: Proses menghilangkan node/elemen dari DOM menggunakan method element.remove() atau parentElement.removeChild(childElement).

Cara Kerja
Saat createElement('tag') dipanggil, browser membuat elemen di dalam memori (belum tampil di layar). Elemen tersebut harus disisipkan ke dalam struktur DOM menggunakan appendChild() atau prepend(). Untuk menghapus, method .remove() akan mencabut node tersebut dari pohon DOM.

5. Event Listener: click, input, submit
Pengertian
addEventListener() adalah method yang digunakan untuk "mendengarkan" atau merespon tindakan/aksi yang dilakukan oleh pengguna pada elemen tertentu.

click: Terjadi ketika pengguna mengklik suatu elemen (misal: tombol).

input: Terjadi secara real-time saat nilai pada elemen <input> atau <textarea> berubah (saat mengetik).

submit: Terjadi saat formulir (<form>) dikirimkan.

Cara Kerja
Browser memantau interaksi pengguna. Ketika event tertentu terdeteksi pada elemen target, fungsi callback yang didaftarkan akan otomatis dijalankan. Pada event submit, secara standar browser akan melakukan refresh halaman, sehingga kita perlu menghentikannya menggunakan event.preventDefault().

6. Event Bubbling & stopPropagation
Pengertian
Event Bubbling: Fenomena di mana ketika sebuah event (misal click) terjadi pada elemen anak, event tersebut akan memicu event handler pada elemen induknya secara berurutan ke atas (seperti gelembung air yang naik ke permukaan).

stopPropagation(): Method pada objek event yang digunakan untuk menghentikan perambatan (bubbling) event tersebut ke elemen-elemen induk di atasnya.

Cara Kerja
Secara bawaan (default), event di JavaScript menjalar dari elemen paling dalam (target) hingga ke elemen paling luar (window). Jika elemen induk juga memiliki event listener yang sama, event induk tersebut ikut tereksekusi. Memanggil event.stopPropagation() akan memutus rantai perambatan ini.

7. Event Delegation
Pengertian
Teknik mengelola event dengan cara memasang satu event listener pada elemen induk (parent), alih-alih memasang event listener ke setiap elemen anak (child) satu per satu.

Cara Kerja
Mengandalkan sifat Event Bubbling. Karena event dari elemen anak akan membal (bubble up) ke elemen induk, induk dapat mendeteksi elemen mana yang sebenarnya diklik oleh pengguna menggunakan event.target.

8. Ambil Data Dan Validasi
Pengertian
Ambil Data: Mengambil nilai yang dimasukkan oleh pengguna dari elemen form (seperti .value dari <input>, <select>, atau <textarea>).

Validasi: Proses memeriksa apakah data yang dimasukkan sudah memenuhi kriteria/aturan sebelum diproses (misal: tidak boleh kosong, panjang karakter minimal, dll).

Cara Kerja
JavaScript mengambil properti .value dari elemen input, lalu memeriksa nilainya menggunakan pengondisian (if). Jika data tidak valid, proses dihentikan dan pesan peringatan/error ditampilkan.

9. DOM Traversal (Parent & Children)
Pengertian
Teknik menavigasi atau berpindah dari satu elemen ke elemen lain di dalam struktur pohon DOM berdasarkan hubungan kekeluargaan elemen (Induk, Anak, atau Saudara/Sibling).

Method/Properti Utama
parentElement / parentNode: Mengakses elemen induk satu tingkat di atasnya.

children: Mengakses semua elemen anak langsung dalam bentuk HTMLCollection.

firstElementChild / lastElementChild: Mengakses elemen anak pertama atau terakhir.

nextElementSibling / previousElementSibling: Mengakses elemen saudara kandung di sebelah atau sebelahnya lagi.

closest('selector'): Mencari elemen induk/leluhur terdekat yang cocok dengan pemilih CSS.

Cara Kerja
Sistem DOM tersusun seperti pohon keluarga (tree). JavaScript menelusuri rantai pointer hubungan antar node tersebut untuk menemukan elemen tujuan tanpa perlu mencari dari ulang melalui document.querySelector.