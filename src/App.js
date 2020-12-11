// import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Header/>

      <HelloWorld nick="wp"/>

      <Footer/>
    </div>
  );
}

export default App;
