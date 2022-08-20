// import logo from './logo.svg';
import './App.css';
import '../src/components/Header/Navigation/Navigation'
import Navigation from '../src/components/Header/Navigation/Navigation';
import MainTitle from './components/Header/MainTitle/MainTitle';
import WelcomeText from './components/Header/WelcomeText/WelcomeText';
import SearchBlock from './components/Header/Search/SearchBlock';
import MiddleBody from './components/Body/MiddleBody/MiddleBody';
import Establishments from './components/Body/Establishments/Establishments';
import Footer from './components/Footer/Footer';
import ModalAuth from './components/ModalAuth/ModalAuth';

function App() {
  const cardItems = [
    {
        id: 1,
        name: 'Adriano',
        phone: '+996(312)31-15-06',
        adress: 'пр. Манаса, 57 А, уг. ул. Киевская',
    },
    {
      id: 2,
      name: 'Adriano',
      phone: '+996(312)31-15-06',
      adress: 'пр. Манаса, 57 А, уг. ул. Киевская',
  },
  {
    id: 3,
    name: 'Adriano',
    phone: '+996(312)31-15-06',
    adress: 'пр. Манаса, 57 А, уг. ул. Киевская',
  },
  {
  id: 4,
  name: 'Adriano',
  phone: '+996(312)31-15-06',
  adress: 'пр. Манаса, 57 А, уг. ул. Киевская',
  },
  ]
  return (
    <div className="App">
     
      <Navigation/>
      <MainTitle/>
      <WelcomeText/>
      <SearchBlock/>
      <MiddleBody/>
      <Establishments/>
      <Footer/>
      

      <ModalAuth/>
    </div>
  );
}

export default App;
