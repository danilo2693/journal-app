import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <form>
                <Grid container>
                    <Grid item xs={12} mt={1}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@google.com"
                            fullWidth
                        ></TextField>
                    </Grid>
                    <Grid item xs={12} mt={1}>
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                        ></TextField>
                    </Grid>
                    <Grid container spacing={1} mt={1}>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant="contained" fullWidth>
                                <Google />{' '}
                                <Typography ml={0.5}>Google</Typography>
                            </Button>
                        </Grid>
                        <Grid container direction="row" justifyContent="end">
                            <Link
                                component={RouterLink}
                                color="inherit"
                                to="/auth/register"
                            >
                                Crear una cuenta
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
