// Event listener untuk tombol "Tambah ke Keranjang"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Produk telah ditambahkan ke keranjang!');
    });
});
