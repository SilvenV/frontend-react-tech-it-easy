import './App.css';
import {inventory} from './constants/inventory.js';
import './helpers/totalSoldHelper.js'
import totalSold from "./helpers/totalSoldHelper.js";
import totalStockBought from "./helpers/totalStockBoughtHelper.js";
import totalLeftToSell from "./helpers/totalLeftToSellHelper.js";

function App() {
    console.log(`Totaal aantal tv's verkocht: ${totalSold(inventory)}.`);
    console.log(`Totaal aantal tv's ingekocht: ${totalStockBought(inventory)}.`);
    console.log(`Totaal aantal tv's nog te verkopen: ${totalLeftToSell(inventory)}.`);
    return (
        <>
            <h1>Begin hier met met maken van de applicatie!</h1>
            <p className='totalSold'>{totalSold(inventory)}</p>
            <p className='totalStockBought'>{totalStockBought(inventory)}</p>
            <p className='totalLeftToSell'>{totalLeftToSell(inventory)}</p>
        </>
    )
}

export default App
