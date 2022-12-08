import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';
import DBConnectionModal from './components/DBConnectionModal'
// import './App.css';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Main isDisabled={true}/>
      <Footer />
      {/* <DBConnectionModal isOpen={true} isClosable={false}/> */}
    </div>
  );
}

export default App;
