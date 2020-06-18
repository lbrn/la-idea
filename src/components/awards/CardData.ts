import card from '../../types/card';
import { clbd, ceidr, laCats, ctvo } from '../../assets/index';

export const cardData: card[] = [
	{
		title: 'Center for Lung Biology and Disease',
		imgTitle: 'homepage',
		investigator: "Dr. Samithamby Jey Jeyaseelan",
		investigatorLink: "http://facultypages.vetmed.lsu.edu/faculty/jey",
		institution: "LSU",
		institutionLink: "https://www.lsu.edu/",
		img: clbd,
		grantLink: 'https://clbd.cobre.lsu.edu/',
		id: 'clbd-card-data',
	},
	{
		title: 'Center for Experimental Infectious Disease Research',
		imgTitle: 'homepage',
		investigator: "Unknown",
		investigatorLink: "",
		institution: "LSU",
		institutionLink: "https://www.lsu.edu/",
		img: ceidr,
		grantLink: 'http://www.cobre.ceidr.lsu.edu/',
		id: 'ceidr-card-data',
	},
	{
		title: 'Louisiana Clinical & Translational Science Center',
		imgTitle: 'homepage',
		investigator: "Unknown",
		investigatorLink: "",
		institution: "Pennington Biomedical",
		institutionLink: "https://www.pbrc.edu/",
		img: laCats,
		grantLink: 'https://www.lacats.org/',
		id: 'laCats-card-data',
	},
	{
		title: 'Center for Translational Viral Oncology',
		imgTitle: 'homepage',
		investigator: "Unkown",
		investigatorLink: "",
		institution: "LSUHSC",
		institutionLink: "https://www.lsuhsc.edu/",
		img: ctvo,
		grantLink: 'https://grantome.com/grant/NIH/P20-GM121288-01',
		id: 'ctvo-card-data',
	},
];
