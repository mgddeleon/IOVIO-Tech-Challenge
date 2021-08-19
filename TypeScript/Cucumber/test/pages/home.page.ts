const BasePage = require('./base.page')
//import BasePage from './page'

class HomePage extends BasePage {
	get linkCountry () { return $('a[data-qa-country="US:en_US"]') }
	
	open() {
		super.open('https://www.hugoboss.com');
	}
}

module.exports = new HomePage();