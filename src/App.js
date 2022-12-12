import Header from './components/Header'
import Main from './containers/Main'
import Footer from './components/Footer';
import DBConnectionModal from './components/DBConnectionModal'
import { useEffect, useState } from 'react';
// import './App.css';

function App() {
  const [dbConnectionList, setDBConnectionList] = useState([{
    db: 'MySQL',
    host: 'localhost',
    port: '3306',
    database: 'mydb',
    user: 'user',
    status: 'connected'
  },
  {
    db: 'Postgres',
    host: 'localhost',
    port: '5432',
    database: 'mydb',
    user: 'user',
    status: 'disconnected'
  }

  ])
  const [showConnectionModal, setShowConnectionModal] = useState(false)

  useEffect(() => {
    if (!dbConnectionList?.length) {
      setShowConnectionModal(true)
    }
  }, [])

  return (
    <div className="App">
      <Header />
      <Main setShowConnectionModal={setShowConnectionModal} dbConnectionList={dbConnectionList} />
      <Footer />
      {showConnectionModal ? <DBConnectionModal onModalClose={()=>setShowConnectionModal(false)} isClosable={dbConnectionList?.length} isOpen={true} /> : null}
    </div>
  );
}

export default App;
