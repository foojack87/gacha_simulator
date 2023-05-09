import SeeleBanner from './components/SeeleBanner';
import Container from './layout/Container';
import { inject } from '@vercel/analytics';

inject();

function App() {
  return (
    <>
      <Container>
        <SeeleBanner />
      </Container>
    </>
  );
}

export default App;
