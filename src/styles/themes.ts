import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7D2AE8', // Purple color
        },
        secondary: {
            main: '#FF4081', // Pink color
        },
        text: {
            primary: '#333', // Dark text color
        },
        background: {
            default: '#fff', // White background
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    },
});

export default theme;
