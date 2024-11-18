import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VisualizaNoticia = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null); // Inicializa como null para diferenciar "carregando" de "sem dados"
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = `http://localhost:3000/noticias/${id}`; // Considerar usar uma variável de ambiente para a URL base

    useEffect(() => {
        const fetchNoticia = async () => {
            setLoading(true); // Define o estado de carregamento como ativo
            setError(null);  // Limpa erros anteriores
            try {
                const response = await axios.get(url);
                setNoticia(response.data);
            } catch (error) {
                console.error("Erro ao buscar a notícia:", error);
                setError("Não foi possível carregar a notícia. Tente novamente mais tarde.");
            } finally {
                setLoading(false); // Define o carregamento como concluído
            }
        };
        fetchNoticia();
    }, [id, url]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!noticia) {
        return <p>Notícia não encontrada.</p>;
    }

    return (
        <div>
            <h1>{noticia.titulo}</h1>
            <p>{noticia.texto}</p>
        </div>
    );
};

export default VisualizaNoticia;
