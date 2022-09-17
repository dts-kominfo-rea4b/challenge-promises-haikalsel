const { promiseTheaterIXX, promiseTheaterVGC } = require('./external.js');

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async emosi => {
    try {
        const ixx = await promiseTheaterIXX();
        const vgc = await promiseTheaterVGC();

        // ambil key 'hasil' dari object
        // Masukkan ke dalam array
        const hasil = ixx
            .map(item => item.hasil)
            .concat(vgc.map(item => item.hasil));

        // filter array yang sesuai dengan
        // parameter emosi
        emosi = hasil.filter(hasil => hasil === emosi);

        // output hasil
        return emosi.length;
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    promiseOutput,
};
