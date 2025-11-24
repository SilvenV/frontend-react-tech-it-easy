// opdracht 2c
import convertInchToCM from "./inchToCmHelper.js";

// function availableScreenSizes(tv) {
//     let tvSizes = "";
//     for (let i = 0; i < tv.availableSizes.length; i++) {
//         tvSizes += ` ${tv.availableSizes[i]} inch (${convertInchToCM(tv.availableSizes[i])} cm) `;
//         if(i<tv.availableSizes.length-1){
//             tvSizes += `|`;
//         }
//     }
//     return tvSizes;
// }

function availableScreenSizes(tv) {
    return tv.availableSizes.map(size =>
        `${size} inch (${convertInchToCM(size)} cm)`
    ).join(' | ');
}

export default availableScreenSizes;