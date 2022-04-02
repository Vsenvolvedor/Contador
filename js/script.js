import addNumb from "./modules/addNumb.js";
import verifyInput from './modules/verifyInput.js'
import counter from './modules/counter.js'
import clock from './modules/clock.js'

counter()
addNumb()
verifyInput()

const Display = new clock({
    hour:true,
    minute:true,
    second:true
}).init()

