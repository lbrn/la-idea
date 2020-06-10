import card from '../../types/card';
import { clbd, ceidr, laCats, ctvo } from '../../assets/index';

export const cardData: card[] = [
	{
		title: 'Center for Lung Biology and Disease',
		imgTitle: 'homepage',
		img: clbd,
		link: 'https://clbd.cobre.lsu.edu/',
		id: 'clbd-card-data',
	},
	{
		title: 'Center for Experimental Infectious Disease Research',
		imgTitle: 'homepage',
		img: ceidr,
		link: 'http://www.cobre.ceidr.lsu.edu/',
		id: 'ceidr-card-data',
	},
	{
		title: 'Louisiana Clinical & Translational Science Center',
		imgTitle: 'homepage',
		img: laCats,
		link: 'https://www.lacats.org/',
		id: 'laCats-card-data',
	},
	{
		title: 'Center for Translational Viral Oncology',
		imgTitle: 'homepage',
		img: ctvo,
		link: 'https://grantome.com/grant/NIH/P20-GM121288-01',
		id: 'ctvo-card-data',
	},
];
