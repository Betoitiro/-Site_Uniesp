/*import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const url = "http://localhost:3000/noticias";

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get(url);
                setNoticias(response.data);
            } catch (error) {
                console.error("Erro ao buscar notícias: ", error);
            }
        };
        fetchNoticias();
    }, []);

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>
                Notícias
            </Typography>
            <Grid container spacing={4}>
                {noticias.map((noticia) => (
                    <Grid item xs={12} sm={6} md={4} key={noticia.id}>
                        <Card sx={{ maxWidth: 345, mx: "auto" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300x140.png?text=Notícia+Imagem"
                                alt={`Imagem de ${noticia.titulo}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {noticia.title}
                                </Typography>
                                <Link 
                                    to={`/visualiza-noticia/${noticia.id}`} 
                                    style={{
                                        textDecoration: 'none',
                                        color: '#3f51b5',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        Ler mais
                                    </Typography>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Noticias;
*/

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import axios from 'axios';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);
    const url = "http://localhost:8080/api/v1/news/all"; // Ajuste o endpoint

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get(url);
                console.log(response.data
                )
                setNoticias(response.data);
            } catch (error) {
                console.error("Erro ao buscar notícias: ", error);
            }
        };
        fetchNoticias();
    }, []);

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h3" gutterBottom>
                Notícias
            </Typography>
            <Grid container spacing={4}>
                {noticias.map((noticia, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ maxWidth: 345, mx: "auto" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="https://via.placeholder.com/300x140.png?text=Notícia+Imagem"
                                alt={`Imagem de ${noticia.title}`}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {noticia.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {noticia.description}
                                </Typography>
                                <Link
                                    to={`/visualiza-noticia/${noticia.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#3f51b5',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Ler mais
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Noticias;
