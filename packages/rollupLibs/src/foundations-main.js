import {UMDArrowFunction, IIFEFunction} from './foundations-format'

let brushUp = function () {
    console.log(`running vanilla JS in older way`)
}

if (window) {
    console.log(`running code outside function`)
    brushUp();

    UMDArrowFunction();
}


export {UMDArrowFunction, IIFEFunction}
