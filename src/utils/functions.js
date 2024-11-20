


const formatPrice = (price) => {
    const formatter = new Intl.NumberFormat('fa-IR');

    return formatter.format(price);
}


module.exports = {
    formatPrice
}