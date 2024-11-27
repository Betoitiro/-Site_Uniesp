import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, List, ListItem, ListItemText, Typography, Box, Paper } from '@mui/material';

const url = "http://localhost:8080/api/v1/news/all";
const url2 = "http://localhost:8080/api/v1/news/admin";

const AdminNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("Usuário não autenticado. Faça login para continuar.");
          return;
        }

        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setNoticias(res.data);
      } catch (error) {
        console.error("Erro ao buscar as notícias: ", error);
      }
    };
    fetchData();
  }, []);

  const removerNoticia = async (id) => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        console.error("Usuário não autenticado. Faça login para continuar.");
        return;
      }

      await axios.delete(`${url2}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      setNoticias(noticias.filter((noticia) => noticia.id !== id));
    } catch (error) {
      console.error("Erro ao remover a notícia: ", error);
    }
  };

  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>
        Gerenciar Notícias
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/cadastrar-noticia"
        sx={{ mb: 2 }}
      >
        Cadastrar Nova Notícia
      </Button>
      <List>
        {noticias.map((noticia) => (
          <ListItem
            key={noticia.id}
            divider
            component={Paper}
            sx={{ mb: 2, p: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}
          >
            <ListItemText primary={noticia.title} secondary={noticia.description} />
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={`/editar-noticia/${noticia.id}`}
              sx={{ mr: 1 }}
            >
              Editar
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => removerNoticia(noticia.id)}
            >
              Remover
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default AdminNoticias;
