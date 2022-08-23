import { Grid, Typography } from '@mui/material';
import React from 'react';

export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                backgroundColor: 'primary.main',
                minHeight: '100vh',
                padding: 4,
            }}
        >
            <Grid
                item
                className="box-shadow"
                xs={3}
                sx={{
                    backgroundColor: 'white',
                    borderRadius: 3,
                    padding: 3,
                    width: { sm: 450 },
                }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    {title}
                </Typography>
                {children}
            </Grid>
        </Grid>
    );
};
