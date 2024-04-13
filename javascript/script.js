window.onload = function() {
    let komentarList = JSON.parse(localStorage.getItem("komentarList")) || [];
    let daftarKomentar = document.getElementById("daftarKomentar");

    komentarList.forEach(komentar => {
        tampilkanKomentar(komentar);
    });
};

function tambahKomentar() {
    const komentarText = document.getElementById("komentarText").value;
    if (komentarText.trim() !== "") {
        tampilkanKomentar(komentarText);

        let komentarList = JSON.parse(localStorage.getItem("komentarList")) || [];
        komentarList.push(komentarText);
        localStorage.setItem("komentarList", JSON.stringify(komentarList));

        document.getElementById("komentarText").value = "";
    } else {
        alert("Komentar tidak boleh kosong!");
    }
}

function tampilkanKomentar(komentar) {
    let daftarKomentar = document.getElementById("daftarKomentar");
    let komentarDiv = document.createElement("div");
    komentarDiv.className = "komentar-item";

    // Membuat elemen untuk profil dan username
    let profileDiv = document.createElement("div");
    profileDiv.className = "profile";
    profileDiv.innerText = "A";  // Ini adalah contoh, Anda bisa mengubahnya sesuai kebutuhan

    let usernameDiv = document.createElement("div");
    usernameDiv.className = "username";
    usernameDiv.innerText = "Anonynimus:";

    // Membuat elemen untuk teks komentar
    let komentarTextDiv = document.createElement("div");
    komentarTextDiv.className = "komentar-text";
    komentarTextDiv.innerText = komentar;

    // // Membuat tombol hapus
    // let hapusButton = document.createElement("button");
    // hapusButton.innerText = "Hapus";
    // hapusButton.onclick = function() {
    //     hapusKomentar(komentarDiv);
    // };

    // Menggabungkan semua elemen menjadi satu
    komentarDiv.appendChild(profileDiv);
    komentarDiv.appendChild(usernameDiv);
    komentarDiv.appendChild(komentarTextDiv);
    // komentarDiv.appendChild(hapusButton);  // Menambahkan tombol hapus

    // Menambahkan elemen komentar ke dalam daftar komentar
    daftarKomentar.appendChild(komentarDiv);
}


// function hapusKomentarLocalStorage(komentar) {
//     let komentarList = JSON.parse(localStorage.getItem("komentarList")) || [];
    
//     // Hapus komentar dari array
//     komentarList = komentarList.filter(k => k !== komentar);
    
//     // Update localStorage
//     localStorage.setItem("komentarList", JSON.stringify(komentarList));
// }

// function hapusKomentar(komentarDiv) {
//     let komentarText = komentarDiv.querySelector(".komentar-text").innerText;
    
//     // Hapus komentar dari localStorage
//     hapusKomentarLocalStorage(komentarText);
    
//     // Hapus elemen komentar dari tampilan
//     komentarDiv.remove();
// }
