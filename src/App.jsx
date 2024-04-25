import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/roboto-slab/400.css';
import '@fontsource/roboto-slab/500.css';
import '@fontsource/roboto-slab/700.css';
import { Button, Typography } from '@mui/material';

const theme = createTheme({
	typography: {
		fontFamily: 'Roboto Slab',
	},
});

function App() {
	const showAlert = e => {
		e.preventDefault();
		alert('Hello Material UI!!!!!');
	};
	return (
		<ThemeProvider theme={theme}>
			<Typography variant='h6'>
				On this button you can show an alert message.
			</Typography>
			<Button variant='contained' color='success' onClick={showAlert}>
				Hello World
			</Button>
		</ThemeProvider>
	);
}

export default App;
