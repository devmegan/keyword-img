import Hero from './component/Hero';
import Nav from './component/Nav';
import { THEME } from './Config';

export default function App() {
  return (
    <div className="min-h-screen bg-accent" data-theme={THEME}>
        <Nav />
        <Hero />
    </div>
  );
}