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
	}
];