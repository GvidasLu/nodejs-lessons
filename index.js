import {Animals, Cars} from './classes/animals.js'
import Helper from './classes/helper.js'

const car = new Cars('Škoda', 'Fabia') //Instance (Instancija)

console.log(Helper.multiplyer(20, 30))

car.setParam('Mazda')

console.log(car.param3)

console.log(Animals.grupe)

console.log(car.returnLine('Nuostabus automobilis'))