export const questions = 
[
	{
		'heading': 'Are you male or female?',
		'type': 'radio',
		'name': 'gender',
		'data': [ 'Male', 'Female' ],
		'callback': null
	},
	{
		'heading': 'What is your postcode?',
		'type': 'text',
		'name': 'postcode',
		'data': 'Postcode e.g. LE10 0NF',
		'callback': 'validatePostcode'
	}
];