import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { blueTheme } from './';

export const AppTheme = ({ children }) => {
    return (
        <ThemeProvider theme={blueTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
