import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
// import ModalWin from './components/ModalWin/ModalWin';
import { useState } from 'react';
import axios from "axios"


function App() {
  // const [modalActiv, setModalActiv] = useState(true)
  const [user, setUser] = useState([])


  async function getInfo() {
    await axios.get("http://localhost:305/item")
    .then(res => setUser(res.data))
  }
  return (
    <div className="App">
      <Header getInfo={getInfo} />
      <Table user={user} getInfo={getInfo}/>
      <Footer />
      {/* <ModalWin activ={modalActiv} setActiv={setModalActiv}/> */}
    </div>
  );
}

export default App;
