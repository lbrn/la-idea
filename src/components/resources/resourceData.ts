import {
	laRegents,
	laRepresentatives,
	laSenators,
	naipi,
	nihGrants,
} from '../../assets/resources/index';

export interface resourceCard {
	img: string;
	title: string;
	imgTitle: string;
	link: string;
}

export const resourceData: resourceCard[] = [
	{
		img: nihGrants,
		title: 'NIH Grants and Funding',
		imgTitle: 'NIH Grants and Funding',
		link: 'https://www.nih.gov/grants-funding',
	},
	{
		img: laRegents,
		title: 'NIGMS Grants and Funding',
		link: 'https://www.nigms.nih.gov/grants/Pages/Funding.aspx?tab=All',
	},
	{
		title: 'LA Board of Regents',
		imgTitle: 'LA Board of Regents',
		link: 'https://regents.la.gov/',
	},
	{
		img: laSenators,
		title: 'LA Federal Senators',
		imgTitle: 'LA Federal Senators',
		link:
			'https://www.senate.gov/general/contact_information/senators_cfm.cfm?State=LA',
	},
	{
		img: laRepresentatives,
		title: 'LA Federal Representatives',
		imgTitle: 'LA Federal Representatives',
		link: 'https://www.house.gov/representatives#state-louisiana',
	},
	{
		img: naipi,
		title: 'NAIPI',
		imgTitle: 'NAIPI',
		link: 'http://www.naipi.org/',
	},
	{
		title: 'IDeA',
		link: 'https://www.nigms.nih.gov/research/drcb/IDeA/Pages/INBRE.aspx',
	},
];
