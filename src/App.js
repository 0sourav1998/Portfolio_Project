import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Service from './components/Service/Service';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';
import GithubStats from './components/GithubStats/GithubStats';
import Stack from './components/Stack/Stack';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Service/>
    <GithubStats/>
    <Stack/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
