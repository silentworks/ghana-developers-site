let people = [
	{
		name: 'Ivy Barley',
		title: 'Co-founder of @devinvogue',
		picture: 'ibivarley.jpg',
		twitterUrl: 'ibivarley'
	},
	{
		name: 'Edem Kumodzi',
		title: 'Senior Consultant @Andela',
		picture: 'edemkumodzi.jpg',
		twitterUrl: 'edemkumodzi'
	},
	{
		name: 'David Oddoye',
		title: 'NodeJS Developer',
		picture: 'theRealBraZee.jpg',
		twitterUrl: 'theRealBraZee'
	},
	{
		name: 'Beulah Ana',
		title: 'Co-founder @fhoodiInc',
		picture: 'buelersandra.jpg',
		twitterUrl: 'buelersandra'
	},
	{
		name: 'Bubunyo Nyavor',
		title: 'Co-founder of @AFRadioHQ',
		picture: 'KiddBubu.jpg',
		twitterUrl: 'KiddBubu'
	},
	{
		name: 'Chiamaka',
		title: 'Software Engineer',
		picture: 'Mz_Chi.jpg',
		twitterUrl: 'Mz_Chi'
	},
	{
		name: 'Stefan Froelich',
		title: 'CTO, Entrepreneur @WitsGh',
		picture: 'TheDumbTechGuy.jpg',
		twitterUrl: 'TheDumbTechGuy'
	},
	{
		name: 'Anthony Acquah',
		title: 'Software Engineer',
		picture: 'tony_mobster.png',
		twitterUrl: 'tony_mobster'
	},
	{
		name: 'Charis',
		title: 'Software Engineer',
		picture: 'Afrohacker.jpg',
		twitterUrl: 'Afrohacker'
	},
	{
		name: 'Alfred Rowe',
		title: 'Developer & Entrepreneur',
		picture: 'nukturnal.jpg',
		twitterUrl: 'nukturnal'
	},
	{
		name: 'Claude Ayitey',
		title: 'UI/UX, I run @dcgharage',
		picture: 'MrAyitey.jpg',
		twitterUrl: 'MrAyitey'
	},
	{
		name: 'Yaw Boakye',
		title: 'Software Engineer',
		picture: 'ejnbo.jpg',
		twitterUrl: 'ejnbo'
	},
	{
		name: 'Andrew Smith',
		title: 'Community Builder @devcongress',
		picture: 'silentworks.jpg',
		twitterUrl: 'silentworks'
	},
	{
		name: 'Tsatsu',
		title: 'Dev{coder} | DevLess @devlessio',
		picture: 'tsa_tsu.jpg',
		twitterUrl: 'tsa_tsu'
	},
	{
		name: 'Salis Braimah',
		title: 'A passionate programmer',
		picture: '_msbrime.jpeg',
		twitterUrl: '_msbrime'
	},
	{
		name: 'Casprine',
		title: 'Frontend dev with feelings for UI',
		picture: 'casprine_ix.jpg',
		twitterUrl: 'casprine_ix'
	},
	{
		name: 'Oliver Mensah',
		title: 'Computer science student',
		picture: 'Oliver_Mensah.jpg',
		twitterUrl: 'Oliver_Mensah'
	},
	{
		name: 'Eddy Mens',
		title: 'Software Developer @devlessio',
		picture: 'Eddy_mens.jpg',
		twitterUrl: 'Eddy_mens'
	},
	{
		name: 'Gerald Pharin',
		title: '@PyGhana, @PyAccra member.',
		picture: 'pharingee.jpg',
		twitterUrl: 'pharingee'
	},
	{
		name: 'Fiifi Baidoo',
		title: 'Cofounder at @iSpaceGh',
		picture: 'fiifibaidoo.jpg',
		twitterUrl: 'fiifibaidoo'
	},
	{
		name: 'Francis Addai',
		title: 'Software Engineer @Andela',
		picture: 'faddai.jpg',
		twitterUrl: 'faddai'
	},
	{
		name: 'Jeffrey Godwyll',
		title: 'CTO @WineloyaDigital',
		picture: 'rey12rey.png',
		twitterUrl: 'rey12rey'
	},
	{
		name: 'Noah Alorwu',
		title: 'CEO @actorgan | HMC @pen_ed',
		picture: 'PlasmaDray.jpg',
		twitterUrl: 'PlasmaDray'
	},
	{
		name: 'Nkansah Rexford',
		title: 'Software Developer',
		picture: 'nkansahrexford.jpg',
		twitterUrl: 'nkansahrexford'
	},
	{
		name: 'Hassan Abudu',
		title: 'Software Developer',
		picture: 'hassanabudu.jpg',
		twitterUrl: 'hassanabudu'
	}
];

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(JSON.stringify(people));
}