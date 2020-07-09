import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: 'rgb(175,23,11) ',
		},
	},
	typography: {
		fontFamily: 'Montserrat, Helvetica, sans',
		body1: {
			fontFamily: 'Montserrat, Helvetica, sans',
		},
		h5: {
			fontFamily: 'Proza Libre, Helvetica, sans',
		},
		h6: {
			fontFamily: 'Montserrat, Helvetica, sans',
			lineHeight: 1.45,
		},
	},
});

export default theme;
