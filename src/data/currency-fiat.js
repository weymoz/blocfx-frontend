import dollar from '../assets/sprites/currencies/fiat/dollar_sign.svg'
import euro from '../assets/sprites/currencies/fiat/euro_sign.svg'
import pound from '../assets/sprites/currencies/fiat/pound_sign.svg'
import yen from '../assets/sprites/currencies/fiat/yen_sign.svg'

let parser = new DOMParser();
let serializer = new XMLSerializer();

let svg = parser.parseFromString(pound.content, "image/svg+xml")
let path = svg.getElementsByTagName('path')[0]
path.setAttribute('fill', 'red')
pound.content = serializer.serializeToString(svg)

export default {
    USD: {
		name: "US Dollar",
        code: "USD",
        sprite: dollar
    },

	EUR: {
		name: "Euro",
		code: "EUR",
        sprite: euro
    },

	GBP: {
		name: "Pound Sterling",
		code: "GBP",
        sprite: pound
    },
    
	JPY: {
		name: "Japanese Yen",
		code: "JPY",
        sprite: yen
	}

}



