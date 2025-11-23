// opdracht 1c

function totalStockBought(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].originalStock;
    }
    return total;
}

export default totalStockBought;