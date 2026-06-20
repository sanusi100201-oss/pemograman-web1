function hitung() {

    let pelanggan =
        document.getElementById("pelanggan").value;

    let produk =
        document.getElementById("produk").value;

    let harga =
        parseFloat(document.getElementById("harga").value);

    let jumlah =
        parseFloat(document.getElementById("jumlah").value);

    if (
        pelanggan === "" ||
        produk === "" ||
        isNaN(harga) ||
        isNaN(jumlah)
    ) {
        alert("Semua data wajib diisi!");
        return;
    }

    let totalBelanja = harga * jumlah;

    let potongan = 0;

    if (totalBelanja >= 400000) {
        potongan = 50000;
    }

    let totalBayar = totalBelanja - potongan;

    document.getElementById("outPelanggan").innerHTML =
        pelanggan;

    document.getElementById("outProduk").innerHTML =
        produk;

    document.getElementById("outBelanja").innerHTML =
        totalBelanja.toLocaleString("id-ID");

    document.getElementById("outPotongan").innerHTML =
        potongan.toLocaleString("id-ID");

    document.getElementById("outBayar").innerHTML =
        totalBayar.toLocaleString("id-ID");

    document.getElementById("hasil").style.display =
        "block";
}

function resetForm() {

    document.getElementById("pelanggan").value = "";
    document.getElementById("produk").value = "";
    document.getElementById("harga").value = "";
    document.getElementById("jumlah").value = "";

    document.getElementById("hasil").style.display =
        "none";
}