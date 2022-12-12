import Header from './components/Header'
import Main from './containers/Main'
import Footer from './components/Footer';
import DBConnectionModal from './components/DBConnectionModal'
import { useEffect, useState } from 'react';

const dbConnections = [
  {
    id: 1,
    db: 'MySQL',
    host: 'localhost',
    port: '3306',
    database: 'mydb',
    user: 'user',
    connected: true,
    selected: true
  },
  {
    id: 2,
    db: 'Postgres',
    host: 'localhost',
    port: '5432',
    database: 'mydb',
    user: 'user',
    connected: false,
    selected: false
  }
]
function App() {
  const [dbConnectionList, setDBConnectionList] = useState(dbConnections)
  const [showConnectionModal, setShowConnectionModal] = useState(false)

  useEffect(() => {
    if (!dbConnectionList?.length) {
      setShowConnectionModal(true)
    }
  }, [])

  const setSelectedConnection = (connection) => {
    const updatedDBConnectionList = [...dbConnectionList]
    updatedDBConnectionList.forEach(item => {
      if (connection.id === item.id) {
        item.selected = true
      } else {
        item.selected = false
      }
    })
    setDBConnectionList(updatedDBConnectionList)
  }

  const changeConnectionStatus = (connection, status) => {
    const updatedDBConnectionList = [...dbConnectionList]
    updatedDBConnectionList.forEach(item => {
      if (connection.id === item.id) {
        item.connected = status
      }
    })
    setDBConnectionList(updatedDBConnectionList)
  }

  const deleteConnection = (connection) => {
    const updatedDBConnectionList = dbConnectionList.filter(item => {
      return connection.id === item.id
    })
    setDBConnectionList(updatedDBConnectionList)
  }

  return (
    <div className="App">
      <Header />
      <Main setSelectedConnection={setSelectedConnection} changeConnectionStatus={changeConnectionStatus} deleteConnection={deleteConnection} setShowConnectionModal={setShowConnectionModal} dbConnectionList={dbConnectionList} />
      <Footer />
      {showConnectionModal ? <DBConnectionModal onModalClose={() => setShowConnectionModal(false)} isClosable={dbConnectionList?.length} isOpen={true} /> : null}
    </div>
  );
}

export default App;
