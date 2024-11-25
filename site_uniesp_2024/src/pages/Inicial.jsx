import { Box, Paper, Typography, Grid } from '@mui/material';

const Inicial = () => {
    return (
        <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '12px', boxShadow: 1 }}>
            <Typography variant="h3" gutterBottom>
                Bem-vindo à Faculdade UNIESP
            </Typography>

            <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '12px' }}>
                <Typography variant="h5" gutterBottom>
                    Sobre a Faculdade
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
                    A UNIESP Cabedelo, localizada na cidade de Cabedelo, Paraíba, é uma instituição de ensino superior
                    que oferece cursos de graduação e pós-graduação em diversas áreas do conhecimento. Reconhecida pelo
                    MEC, a unidade proporciona uma infraestrutura moderna, com salas de aula equipadas, biblioteca e
                    laboratórios. Focada no desenvolvimento profissional, promove atividades acadêmicas e projetos de
                    extensão que integram os alunos à comunidade local. Além disso, dispõe de programas de bolsas e
                    financiamentos para facilitar o acesso ao ensino superior. A UNIESP busca formar profissionais
                    qualificados, alinhados às demandas do mercado de trabalho regional e nacional.
                </Typography>
            </Paper>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '12px' }}>
                        <Typography variant="h5" gutterBottom>
                            Notícias
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
                            Recentemente, a UNIESP Cabedelo organizou eventos marcantes, como o INOVA UNIESP 2024, que
                            ocorreu de 16 a 18 de outubro. Esse evento reuniu palestras, workshops, apresentações
                            artísticas e exposições, com foco em criatividade e inovação, destacando-se como um dos
                            maiores encontros universitários da Paraíba. Ele também incluiu aulões preparatórios para o
                            Enem, com dicas práticas e estratégias para os participantes, transmitidos ao vivo. Além
                            disso, a instituição promoveu iniciativas voltadas à educação continuada e à preparação para
                            exames importantes, reforçando seu papel na capacitação de estudantes e no incentivo à
                            inovação acadêmica e cultural na região.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '12px' }}>
                        <Typography variant="h5" gutterBottom>
                            Área Administrativa
                        </Typography>
                        <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#555' }}>
                            Acesso administrativo permite com que gerencie notícias e outras atividades do site.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Inicial;
