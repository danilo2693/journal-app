import { createTheme } from '@mui/material';
import { blue, red } from '@mui/material/colors';

export const blueTheme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: blue[400],
        },
        error: {
            main: red.A400
        }
    },
});
