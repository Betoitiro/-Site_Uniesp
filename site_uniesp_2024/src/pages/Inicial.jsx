import { Box, Paper, Typography, Grid } from '@mui/material';

const Inicial = () => {
    return (
        <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '12px', boxShadow: 1 }}>
            <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '12px' }}>
                <Typography variant="body1" paragraph>
                    A UNIESP Cabedelo, localizada na cidade de Cabedelo, Paraíba, é uma instituição de ensino superior
                    que oferece cursos de graduação e pós-graduação em diversas áreas do conhecimento. Reconhecida pelo
                    MEC, a unidade proporciona uma infraestrutura moderna, com salas de aula equipadas, biblioteca e
                    laboratórios. Focada no desenvolvimento profissional, promove atividades acadêmicas e projetos de
                    extensão que integram os alunos à comunidade local. Além disso, dispõe de programas de bolsas e
                    financiamentos para facilitar o acesso ao ensino superior. A UNIESP busca formar profissionais
                    qualificados, alinhados às demandas do mercado de trabalho regional e nacional.
                </Typography>

                <Typography variant="body1" paragraph>
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


            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGNvbGxlZ2V8ZW58MHx8fHwxNjI2NzUwNzY0&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Campus Life"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <Typography variant="h6" gutterBottom mt={2}>
                            Vida no Campus
                        </Typography>
                        <Typography variant="body2">
                            Um ambiente vibrante e acolhedor, com atividades que promovem o desenvolvimento pessoal e
                            social dos alunos.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGxpYnJhcnl8ZW58MHx8fHwxNjI2NzUwODE2&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Library"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <Typography variant="h6" gutterBottom mt={2}>
                            Biblioteca
                        </Typography>
                        <Typography variant="body2">
                            Uma biblioteca com um acervo completo e atualizado, incluindo livros, revistas e recursos
                            digitais para pesquisa e estudo.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={3}
                        sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', textAlign: 'center' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Main Building"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                        <Typography variant="h6" gutterBottom mt={2}>
                            Prédio Principal
                        </Typography>
                        <Typography variant="body2">
                        O centro de nossa instituição é um espaço projetado para excelência, com salas de aula modernas, equipadas com tecnologias de ponta, e laboratórios de última geração que proporcionam um ambiente ideal para o aprendizado prático e teórico. 
                        Além disso, nossas instalações foram cuidadosamente planejadas para oferecer conforto e funcionalidade, garantindo que estudantes e professores tenham à disposição tudo o que precisam para uma experiência educacional completa e de alta qualidade.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
                        <Typography variant="h6" gutterBottom>
                            Parcerias com Empresas
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8, color: '#555' }}>
                            A UNIESP mantém parcerias com diversas empresas, permitindo que nossos alunos tenham acesso
                            a oportunidades de estágio e emprego logo após a graduação. Essas parcerias são fundamentais
                            para integrar os estudantes ao mercado e para oferecer uma experiência educacional alinhada
                            com a prática profissional.
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px' }}>
                        <Typography variant="h6" gutterBottom>
                            Compromisso com a Educação
                        </Typography>
                        <Typography variant="body2" sx={{ lineHeight: 1.8, color: '#555' }}>
                            A UNIESP se dedica a oferecer uma educação acessível e de qualidade, acreditando que o
                            conhecimento transforma vidas. Nossos programas são desenhados para preparar os alunos não
                            apenas para carreiras, mas para que eles possam fazer contribuições significativas para a
                            sociedade.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Inicial;
