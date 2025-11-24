import './listTvHelper.css';

import generateTVNameStringHelper from "./generateTVNameStringHelper.js";
import generatePriceString from "./generatePriceStringHelper.js";
import availableScreenSizes from "./availableScreenSizesHelper.js";
import listOptionNames from "./listOptionNamesHelper.jsx";

function listTVs(array) {
    return (
        <ul className='tvList'>
            {array.map(tv => (
                <li key={tv.type}>
                    <div className='tvWrapper'>
                        <img src={tv.sourceImg} alt='Best-Selling TV'/>
                        <div className='tvDescription
                        '>
                            <h3>{generateTVNameStringHelper(tv)}</h3>
                            <h2>{generatePriceString(tv)}</h2>
                            <h3>{availableScreenSizes(tv)}</h3>
                            {/*<h4>{check} wifi {minus} speech {check} hdr {check} bluetooth {minus} ambilight</h4>*/}
                            <h4>
                                {listOptionNames(tv)}
                            </h4>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default listTVs;