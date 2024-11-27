import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, Typography, Box } from '@mui/material';

const EditarNoticia = () => {
  const { id } = useParams(); 
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken"); 
        if (!token) {
          console.error("Usuário não autenticado. Faça login para continuar.");
          return;
        }

        const res = await axios.get(`http://localhost:8080/api/v1/news/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setTitle(res.data.title);
        setdesc(res.data.desc);
        setText(res.data.text);
      } catch (error) {
        if (error.response?.status === 403) {
          console.error("Permissão negada: verifique as roles do usuário.");
        } else {
          console.error("Erro ao buscar a notícia: ", error);
        }
      }
    };

    fetchData();
  }, [id]);

  const editarNoticia = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("Usuário não autenticado. Faça login para continuar.");
        return;
      }

      await axios.put(
        `http://localhost:8080/api/v1/news/admin/${id}`,
        { title, desc, text },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      navigate('/admin-noticias'); 
    } catch (error) {
      console.error("Erro ao editar a notícia: ", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={editarNoticia}
      noValidate
      sx={{
        mt: 3,
        p: 4,
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Editar Notícia
      </Typography>
      <TextField
        label="Título"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Subtítulo"
        fullWidth
        margin="normal"
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
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
        Salvar
      </Button>
    </Box>
  );
};

export default EditarNoticia;
