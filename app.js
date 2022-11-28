const { index, store, update, destroy } = require('./FruitController');

const main = () => {
    index('Method Index - Menampilkan Buah');
    store('Durian', 'Method Store - Menambahkan Buah Durian');
    update(0, 'Grape', 'Method Update - Update Data 0 Menjadi Grape');
    destroy(0, 'Menhapus Data 0');
}

main();