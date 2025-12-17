import { Container } from '@mui/material'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Alert } from '@mui/material'
import type { CSSProperties } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../../store/store'
import { LoginUser } from '../../store/auth.slice'




const BoxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    marginTop: "8px",
}


export default function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const {loading,error,isAuthenticated} = useSelector((state: RootState) => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuthenticated){
            navigate('/task')
        }
    }, [isAuthenticated,navigate])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(LoginUser({ email, password }))
    }

    return (
        <Container>
            <Box sx={BoxStyle}>
                <Typography color="primary" variant="h4">Inicio de sesión</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField label="Email" name="email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField label="Password" name="password" type='password' variant="outlined" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {error && <Alert severity="error">Error al iniciar sesión</Alert>}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" color="primary" type='submit'>{loading ? "Cargando..." : "Iniciar sesión"}</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}   