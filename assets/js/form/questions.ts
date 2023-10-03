interface Body {
	'labelName': string,
	'labelValue': string,
	'id': string,
	'type': string,
	'name': string,
	'value': string,
	'placeholder': string,
	'style': string
}

export interface Questions {
	'title': string,
	'body': Body[],
	'callback': string
}

export const questions: Questions[] = 
[
	{
		'title': 'Do you already have solar panel systems installed?',
		'body': [ 
			{
				'labelName': 'solar_panel_systems_installed_yes',
				'labelValue': 'Yes',
				'id': 'solar_panel_systems_installed_yes',
				'type': 'radio',
				'name': 'solar_panel_systems_installed',
				'value': 'Yes',
				'placeholder': '',
				'style': ''
			}, 
			{
				'labelName': 'solar_panel_systems_installed_no',
				'labelValue': 'No',
				'id': 'solar_panel_systems_installed_no',
				'type': 'radio',
				'name': 'solar_panel_systems_installed',
				'value': 'No',
				'placeholder': '',
				'style': ''
			},
		],
		'callback': ''
	},
	{
		'title': 'Which solar panels are you interest in?',
		'body': [ 
			{
				'labelName': 'solar_panel_interet_solar_panels',
				'labelValue': 'Solar Panels',
				'id': 'solar_panel_interet_solar_panels',
				'type': 'radio',
				'name': 'solar_panel_interet',
				'value': 'Solar Panels',
				'placeholder': '',
				'style': 'width: 100%;'
			}, 
			{
				'labelName': 'solar_panel_interet_solar_batteries',
				'labelValue': 'Solar Panels and Solar Batteries',
				'id': 'solar_panel_interet_solar_batteries',
				'type': 'radio',
				'name': 'solar_panel_interet',
				'value': 'Solar Panels and Solar Batteries',
				'placeholder': '',
				'style': 'width: 100%'
			}, 
		],
		'callback': '',
	},
	{
		'title': 'What is the average monthly electricity bill of your business?',
		'body': [ 
			{
				'labelName': 'under_1000',
				'labelValue': 'Under £1000',
				'id': 'under_1000',
				'type': 'radio',
				'name': 'electrcity_bill',
				'value': 'Under £1000',
				'placeholder': '',
				'style': 'width: 100%;'
			}, 
			{
				'labelName': '£1000-10000',
				'labelValue': '£1000 - £10,000',
				'id': '£1000-10000',
				'type': 'radio',
				'name': 'electrcity_bill',
				'value': '£1000 - £10,000',
				'placeholder': '',
				'style': 'width: 100%;'
			}, 
			{
				'labelName': '£10000-30000',
				'labelValue': '£10,000 - £30,000',
				'id': '£10000-30000',
				'type': 'radio',
				'name': 'electrcity_bill',
				'value': '£10,000 - £30,000',
				'placeholder': '',
				'style': 'width: 100%;'
			}, 
			{
				'labelName': '£30000-50000',
				'labelValue': '£30,000 - £50,000',
				'id': '£30000-50000',
				'type': 'radio',
				'name': 'electrcity_bill',
				'value': '£30,000 - £50,000',
				'placeholder': '',
				'style': 'width: 100%;'
			}, 
			{
				'labelName': 'over50000',
				'labelValue': 'over £50,000',
				'id': 'over50000',
				'type': 'radio',
				'name': 'electrcity_bill',
				'value': 'over £50,000',
				'placeholder': '',
				'style': 'width: 100%;'
			}, 
		],
		'callback': '',
	},
	{
		'title': 'What is your postcode?',
		'body': [ 
			{
				'labelName': 'postcode',
				'labelValue': 'No',
				'id': 'postcode',
				'type': 'text',
				'name': 'postcode',
				'value': '',
				'placeholder': 'Postcode e.g. LE10 0NF',
				'style': ''
			}
		],
		'callback': 'validatePostcode'
	},
	{
		'title': 'Your email address?',
		'body': [ 
			{
				'labelName': 'email',
				'labelValue': 'Your email address?',
				'id': 'email',
				'type': 'text',
				'name': 'email',
				'value': '',
				'placeholder': 'e.g. example@email.com',
				'style': ''
			}
		],
		'callback': ''
	},
	{
		'title': 'Your fullname?',
		'body': [ 
			{
				'labelName': 'fullname',
				'labelValue': 'Your fullname?',
				'id': 'fullname',
				'type': 'text',
				'name': 'fullname',
				'value': '',
				'placeholder': 'e.g. Joe Blogs',
				'style': ''
			}
		],
		'callback': ''
	},
];