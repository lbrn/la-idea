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
		},
	},
});

export default theme;
