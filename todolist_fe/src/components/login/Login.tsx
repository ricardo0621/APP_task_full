import { Container } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Alert } from '@mui/material'
import type { CSSProperties } from '@mui/material'
import { useState } from 'react'



const BoxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    marginTop: "8px",
}


export default function Login() {
    const [loading, setLoading] = useState(false)
    return (
        <Container>
            <Box sx={BoxStyle}>
                <Typography color="primary" variant="h4">Inicio de sesión</Typography>
                <Box sx={{ mt: 2 }}>
                    <TextField label="Email" name="email" variant="outlined" fullWidth margin="normal" />
                    <TextField label="Password" name="password" type='password' variant="outlined" fullWidth margin="normal" />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" color="primary" type='submit'>{loading ? "Cargando..." : "Iniciar sesión"}</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}   