import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';

const url = "http://localhost:8080/auth/login"; 

const Login = () => {
  const [login, setLogin] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, { login, password });
      const token = response.data.token; 
      localStorage.setItem("authToken", token);
      navigate("/admin-noticias");
    } catch (err) {
      console.error("Erro ao fazer login: ", err);
      setError("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleLogin}
      noValidate
      sx={{
        mt: 3,
        p: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        maxWidth: 400,
        mx: "auto",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      {error && (
        <Typography color="error" variant="body2" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <TextField
        label="Login"
        fullWidth
        margin="normal"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        required
      />
      <TextField
        label="Senha"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Entrar
      </Button>
    </Box>
  );
};

export default Login;
