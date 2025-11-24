import './App.css';
import {bestSellingTv, inventory} from './constants/inventory.js';
import './helpers/totalSoldHelper.js'
import totalSold from "./helpers/totalSoldHelper.js";
import totalStockBought from "./helpers/totalStockBoughtHelper.js";
import totalLeftToSell from "./helpers/totalLeftToSellHelper.js";
import generateTVNameString from "./helpers/generateTVNameStringHelper.js";
import generatePriceString from "./helpers/generatePriceStringHelper.js";
import availableScreenSizes from "./helpers/availableScreenSizesHelper.js";
import generateTVNameStringHelper from "./helpers/generateTVNameStringHelper.js";
import checkImg from './assets/check.png';
import minusImg from './assets/minus.png';

import showOutcomeInConsole from './constants/oefenbestand.js';
import brandLister from "./helpers/brandListHelper.jsx";
import listTVs from "./helpers/listTvHelper.jsx";

const check = <img src={checkImg} className='iconSmall' alt='Check'/>
const minus = <img src={minusImg} className='iconSmall' alt='NotCheck'/>

function App() {

    showOutcomeInConsole();

    console.log(`Totaal aantal tv's verkocht: ${totalSold(inventory)}.`);
    console.log(`Totaal aantal tv's ingekocht: ${totalStockBought(inventory)}.`);
    console.log(`Totaal aantal tv's nog te verkopen: ${totalLeftToSell(inventory)}.`);
    console.log(generateTVNameString(bestSellingTv));
    console.log(generatePriceString(bestSellingTv));
    console.log(availableScreenSizes(bestSellingTv));

    return (
        <>
            <div className='bestSoldDisplay'>
                <img src={bestSellingTv.sourceImg} alt='Best-Selling TV'/>
                <div className='bestSoldDescription'>
                    <h3>{generateTVNameStringHelper(bestSellingTv)}</h3>
                    <h2>{generatePriceString(bestSellingTv)}</h2>
                    <h3>{availableScreenSizes(bestSellingTv)}</h3>
                    <h4>{check} wifi {minus} speech {check} hdr {check} bluetooth {minus} ambilight</h4>
                </div>
            </div>

            <div>{listTVs(inventory)}</div>

            <div className='buttonsDiv'>
                <button onClick={() => sortBySold(inventory)}>Meest verkocht eerst</button>
                <button onClick={() => sortByCheapest(inventory)}>Goedkoopste eerst</button>
                <button onClick={() => sortByRefreshRate(inventory)}>Meest geschikt voor sport eerst
                </button>
            </div>
            <div>
                {brandLister(inventory)}
            </div>
        </>
    )
}

function sortBySold(array) {
    console.log(array.sort((a, b) => {
        return b.sold - a.sold;
    }));
}

function sortByCheapest(array) {
    console.log(array.sort((a, b) => {
        return a.price - b.price;
    }));
}

function sortByRefreshRate(array) {
    console.log(array.sort((a, b) => {
        return b.refreshRate - a.refreshRate;
    }))
}

export default App