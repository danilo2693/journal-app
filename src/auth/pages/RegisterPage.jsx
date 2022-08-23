import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title="Crear cuenta">
            <form>
                <Grid container>
                    <Grid item xs={12} mt={1}>
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                        ></TextField>
                    </Grid>
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
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                        <Grid container direction="row" justifyContent="end">
                            <Typography sx={{ mr: 1 }}>
                                ¿Ya tienes cuenta?
                            </Typography>
                            <Link
                                component={RouterLink}
                                color="inherit"
                                to="/auth/login"
                            >
                                Iniciar sesión
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
