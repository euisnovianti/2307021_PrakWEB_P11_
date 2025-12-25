import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WithCleanUp from './WithCleanUp'
import NoCleanUp from './NoCleanUp'
import Users from './Users'
import ListMahasiswa from './ListMahasiswa'
import FormMahasiswa from './FormMahasiswa'

function App() {
  // Membuat state
  const [showNoCleanUp, setShowNoCleanUp] = useState(false)
  const [showWithCleanUp, setShowWithCleanUp] = useState(false)


  const [mahasiswa, setMahasiswa] = useState([])
  const [editData, setEditData] = useState(null)

  const addMahasiswa = (data) => {
    setMahasiswa([...mahasiswa, data])
  }
  const deleteMahasiswa = (id) => {
    setMahasiswa(mahasiswa.filter((m) => m.id!== id))
  }
  const updateMahasiswa = (data) => {
    setMahasiswa(mahasiswa.map((m) => m.id === data.id ? data : m))
  }

  


  return (
    <div className="">
      <h2>useEffect Clean Up</h2>

      <button onClick={() => setShowNoCleanUp(!showNoCleanUp)}
      >Tombol No Clean Up
      </button>

      <button 
      onClick={() => setShowWithCleanUp(!showWithCleanUp)}
      style={{ marginLeft: 10 }}
      >Tombol With Clean Up
      </button>

      <hr />

      {showNoCleanUp && <NoCleanUp/>}
      {showWithCleanUp && <WithCleanUp/>}

      <h2>DAFTAR PENGGUNA</h2>
      <Users/>

      <div style = {{padding:20}}>
        <h2> Manajemen Mahasiswa </h2>
        <FormMahasiswa
        addMahasiswa={ addMahasiswa}
        updateMahasiswa={ updateMahasiswa}
        editData={ editData}
        />
        <ListMahasiswa
        mahasiswa={mahasiswa}
        onDelete={ deleteMahasiswa}
        onEdit={setEditData}
        />
      </div>
      
      </div>

  )
}

export default App
