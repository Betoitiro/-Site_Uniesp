import { Box, Typography, Grid, Paper } from '@mui/material';

const Faculdade = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
      <Typography variant="h3" gutterBottom>
        A Faculdade
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#ffffff', borderRadius: '8px' }}>
        <Typography variant="body1" paragraph>
          A Faculdade UNIESP é uma instituição comprometida com a excelência no ensino e no desenvolvimento de habilidades para o mercado de trabalho. 
          Nossa missão é oferecer uma educação de qualidade, focada em formar profissionais preparados para enfrentar os desafios do mundo atual.
        </Typography>
        <Typography variant="body1" paragraph>
          Com uma infraestrutura moderna, laboratórios equipados, uma biblioteca rica em recursos e professores altamente qualificados, proporcionamos um ambiente que 
          incentiva a criatividade, a pesquisa e o aprendizado contínuo. Além disso, promovemos a integração entre teoria e prática para garantir que nossos estudantes 
          estejam prontos para contribuir com a sociedade e o mercado de trabalho.
        </Typography>
        <Typography variant="body1">
          Junte-se à nossa comunidade e descubra um universo de oportunidades. Aqui, você encontrará suporte, inovação e um compromisso constante com o sucesso acadêmico 
          e profissional de nossos alunos.
        </Typography>
      </Paper>

      <Grid container spacing={4}>
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
              Nossa vida no campus é marcada por um ambiente vibrante, repleto de eventos culturais, esportivos e acadêmicos. 
              Promovemos atividades que incentivam o desenvolvimento pessoal e a construção de amizades, tornando o campus um lugar dinâmico e acolhedor.
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
              Nossa biblioteca oferece um espaço tranquilo e inspirador para estudo e pesquisa. Com uma vasta coleção de livros, periódicos e recursos digitais, 
              garantimos aos alunos acesso a materiais atualizados e relevantes para suas áreas de interesse.
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
              O prédio principal é o coração da instituição. Nele estão localizadas salas de aula modernas, laboratórios tecnológicos e espaços para convivência, 
              proporcionando aos estudantes o que há de melhor em infraestrutura para o aprendizado.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Faculdade;
