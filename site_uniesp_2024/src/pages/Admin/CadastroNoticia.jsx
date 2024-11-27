/*import { useState } from 'react'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography, Box } from '@mui/material'

const url = "http://localhost:3000/noticias"

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState("")
  const [description, setdescription] = useState("")
  const [text, settext] = useState("")
  const navigate = useNavigate()

  const cadastrarNoticia = async (e) => {
    e.preventDefault()
    try {
      await axios.post(url, { titulo, description, text })
      navigate('/admin-noticias')
    } catch (error) {
      console.error("Erro ao cadastrar a notícia: ", error)
    }
  }

  return (
    <Box component="form" onSubmit={cadastrarNoticia} noValidate sx={{ mt: 3, p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>Cadastrar Notícia</Typography>
      <TextField label="Título" fullWidth margin="normal" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <TextField label="Subtítulo" fullWidth margin="normal" value={description} onChange={(e) => setdescription(e.target.value)} />
      <TextField label="text" fullWidth multiline rows={4} margin="normal" value={text} onChange={(e) => settext(e.target.value)} />
      <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
    </Box>
  )
}

export default CadastroNoticia
*/
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';

const url = "http://localhost:8080/api/v1/news/admin";

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const cadastrarNoticia = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("Usuário não autenticado. Faça login para continuar.");
        return;
      }

      await axios.post(
        url,
        {
          title: titulo,       
          desc: description,    
          text: text            
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      navigate('/admin-noticias');
    } catch (error) {
      console.error("Erro ao cadastrar a notícia: ", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={cadastrarNoticia}
      noValidate
      sx={{
        mt: 3,
        p: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Cadastrar Notícia
      </Typography>
      <TextField
        label="Título"
        fullWidth
        margin="normal"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <TextField
        label="Subtítulo"
        fullWidth
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        label="Texto"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </Box>
  );
};

export default CadastroNoticia;
