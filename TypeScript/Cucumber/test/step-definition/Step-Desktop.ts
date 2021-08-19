const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/home.page');

Given(/^user is on HUGO BOSS website$/, async () => {
	browser.maximizeWindow();
    //browser.url('https://www.hugoboss.com');
	HomePage.open();
	
	//const linkCountry = $('a[data-qa-country="US:en_US"]');
	await checkElementExist(HomePage.linkCountry);
	await HomePage.linkCountry.scrollIntoView();
	await HomePage.linkCountry.click();
});

When(/^guest user adds an item to the shopping bag$/, async () => {
	const imageItem = $('//div[@id="main"]/span/div/div[3]/section/div[2]/div/div/div/div/div/div/div[8]/a/div/img');
	await checkElementExist(imageItem);
	await imageItem.click();
	
	const selectSize = $('span[class="js--size-selection-label product-stage__control-item__unselected-size"]');
	await checkElementExist(selectSize);
	await selectSize.click();
	
	const optionSize = $('a[title="S"]');
	await checkElementExist(optionSize);
	await optionSize.click();
	
	const buttonAdd = $('button[title="Add to shopping bag"]');
	await checkElementExist(buttonAdd);
	await buttonAdd.click();
	
	const buttonClose = $('button[class="js-overlays__button-close sidebar__button-close"]');
	await checkElementExist(buttonClose);
	await buttonClose.click();
	
	const menuBag = $('a[title="Shopping Bag"]');
	await checkElementExist(menuBag);
	await menuBag.click();
	
	const buttonCheckout = $('button[name="dwfrm_cart_checkoutCart"]');
	await checkElementExist(buttonCheckout);
	await buttonCheckout.click();
	
	const linkContinueAsGuest = $('a[data-as-click="loginPageGuest"]');
	await checkElementExist(linkContinueAsGuest);
	await linkContinueAsGuest.click();
	
	const selectSalutation = $('#dwfrm_singleshipping_shippingAddress_addressFields_salutation');
	await checkElementExist(selectSalutation);
	await selectSalutation.selectByAttribute('value', 'Mr');

	let name = 'test';
	let address = 'New York';
	$('#dwfrm_singleshipping_shippingAddress_addressFields_firstName').setValue(name);
	$('#dwfrm_singleshipping_shippingAddress_addressFields_lastName').setValue(name);
	$('#id1-ad-fin').setValue('New York');
	$('#dwfrm_singleshipping_shippingAddress_addressFields_address1').setValue(address);
	$('#dwfrm_singleshipping_shippingAddress_addressFields_city').setValue(address);
	
	const selectState = $('#dwfrm_singleshipping_shippingAddress_addressFields_state');
	await checkElementExist(selectState);
	await selectState.selectByAttribute('value', 'NY');
	
	let zipcode = '10001';
	let email = 'test@test.com';
	let phone = '+1 123 456789'
	$('#dwfrm_singleshipping_shippingAddress_addressFields_zip').setValue(zipcode);
	$('#dwfrm_singleshipping_billingAddress_email_emailAddress').setValue(email);
	$('#dwfrm_singleshipping_billingAddress_addressFields_phone').setValue(phone);

	const buttonContinueToPayment = $('button[value="Continue to Payment"]');
	await checkElementExist(buttonContinueToPayment);
	await buttonContinueToPayment.click();
});

Then(/^guest user should be able to proceed to payment checkout$/, async () => {     
	const radiobuttonCreditCard = $('#is-CREDIT_CARD');
	await checkElementExist(radiobuttonCreditCard)
	await radiobuttonCreditCard.scrollIntoView();
	if (await radiobuttonCreditCard.isSelected() === false){
		await radiobuttonCreditCard.click();
	}
	else{
		const inputCardNumber = $('span[data-cse="encryptedCardNumber"]');
		console.log("Does Card Number field exist? " + await checkElementExist(inputCardNumber));
		
		const inputCardExpiry = $('span[data-cse="encryptedExpiryDate"]');
		console.log("Does Expiry Date field exist? " + await checkElementExist(inputCardExpiry));
		
		const inputSecurityCode = $('span[data-cse="encryptedSecurityCode"]');
		console.log("Does Security Code field exist? " + await checkElementExist(inputSecurityCode));
		
		const inputNameOnCard = $('input[class="adyen-checkout__input adyen-checkout__input--text adyen-checkout__card__holderName__input sMjS8HCbKiP5yR9Td9ZgQ adyen-checkout__input--large"]');
		console.log("Does Name On Card field exist? " + await checkElementExist(inputNameOnCard));
	}
	
	await browser.pause(3000);
});

When(/^guest user creates an account$/, async () => {	
	const menuAccount = $('//*[@id="wrapper"]/header/div[2]/div[5]/ul/li[4]/a');
	await checkElementExist(menuAccount);
	await menuAccount.click();
	
	const buttonRegister = $('button[value="Register Now"]');
	await checkElementExist(buttonRegister);
	await buttonRegister.click();
	
	let registerName = 'test';
	$('#dwfrm_profile_customer_firstname').setValue(registerName);
	$('#dwfrm_profile_customer_lastname').setValue(registerName);
	
	let registerEmail = Date.now()+'@test.com';
	let registerPassword = 'Test1234!'
	$('#dwfrm_profile_customer_email').setValue(registerEmail);
	$('#dwfrm_profile_login_password').setValue(registerPassword);
	$('#dwfrm_profile_login_passwordconfirm').setValue(registerPassword);
	
	const checkboxTerms = $('#dwfrm_profile_customer_acceptTermsAndConditions');
	await checkElementExist(checkboxTerms);
	await checkboxTerms.click();
	
	const checkboxPolicy = $('#dwfrm_profile_login_acceptPrivacy');
	await checkElementExist(checkboxPolicy);
	await checkboxPolicy.click();
	
	const buttonCreateAccount = $('button[value="Apply"]');
	await checkElementExist(buttonCreateAccount);
	await buttonCreateAccount.click();
});

Then(/^user should see logout button$/, async () => { 
	const linkLogout = $('a[class="font__link font__link--ia font__link--account-overview-logout"]');
	console.log("Does Logout button exist? " + await checkElementExist(linkLogout));
	//await linkLogout.click();
	
	await browser.pause(3000);
});

async function checkElementExist(selector) {
	await selector.waitForExist({ timeout: 20000,timeoutMsg: 'Element not found' });
	//await selector.scrollIntoView();

    return selector.isExisting();
}  