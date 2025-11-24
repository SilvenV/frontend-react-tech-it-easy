import {inventory} from './inventory.js';

function showOutcomeInConsole() {

    // 1a
    console.log(inventory.map((tv) => {
        return tv.type
    }));
    // 1b
    console.log(inventory.filter((tv) => tv.originalStock - tv.sold === 0));
    // 1c
    console.log(inventory.find((tv) => {
        return tv.type === 'NH3216SMART'
    }));
    // 1d
    console.log(inventory.map((tv) => {
        if (tv.refreshRate >= 100) {
            return `name: ${tv.brand} ${tv.name}, suitable: true`;
        } else {
            return `name: ${tv.brand} ${tv.name}, suitable: false`;
        }
    }));
    // 1e
    console.log(inventory.filter((tv) => {
        return Math.max(...tv.availableSizes) >= 65;
    }))
    // 1f
    console.log(inventory.filter((tv) => {
        return tv.options.some(option => option.name === 'ambiLight' && option.applicable);
    }))
}

export default showOutcomeInConsole;