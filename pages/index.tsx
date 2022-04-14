import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const Home: NextPage = () => (
    <Container>
        <Box>
            <Typography variant="h1" component="h1">
                Hello World
            </Typography>
        </Box>
    </Container>
)

export default Home
