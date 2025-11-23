import totalSold from "./totalSoldHelper.js";
import totalStockBought from "./totalStockBoughtHelper.js";

function totalLeftToSell(array){
    return totalStockBought(array) - totalSold(array);
}

export default totalLeftToSell;