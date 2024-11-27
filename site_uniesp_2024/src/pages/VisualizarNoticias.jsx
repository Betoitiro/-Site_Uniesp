/*import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VisualizaNoticia = () => {
    const { id } = useParams()
    const [noticia, setNoticia] = useState({})
    const url = `http://localhost:3000/noticias/${id}`

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(url)
                setNoticia(response.data)
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error)
            }
        }
        fetchNoticia()
    }, [id])

    return (
        <div>
            <h1>{noticia.title}</h1>
            <p>{noticia.description}</p>
        </div>
    )
}

export default VisualizaNoticia
*/
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const VisualizaNoticia = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null);
    const [error, setError] = useState(null);
    const url = `http://localhost:8080/api/v1/news/${id}`; // Ajuste a URL

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(url);
                setNoticia(response.data);
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error);
                setError("Não foi possível carregar a notícia.");
            }
        };
        fetchNoticia();
    }, [id]);

    if (error) {
        return <Typography variant="h5" color="error">{error}</Typography>;
    }

    if (!noticia) {
        return <Typography variant="h5">Carregando...</Typography>;
    }

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>
                {noticia.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {noticia.description}
            </Typography>
        </Box>
    );
};

export default VisualizaNoticia;
