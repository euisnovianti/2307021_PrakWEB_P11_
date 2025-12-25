function ListMahasiswa({ mahasiswa, onDelete, onEdit }) {
  return (
    <div style={{ marginTop: "20px" }}>
        {/* mapping */}
      {mahasiswa && mahasiswa.map((m, index) => (
        <div 
          key={m.id} 
          style={{
            border: "1px solid grey", 
            borderRadius: "20px", 
            padding: "15px", 
            marginBottom: "10px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <h4>{index + 1}. {m.nama}</h4>
          <p><strong>Jurusan:</strong> {m.jurusan}</p>
          
          <div style={{ marginTop: "10px" }}>
            <button 
              onClick={() => onEdit(m)}
              style={{ marginRight: "10px", cursor: "pointer" }}
            >
              Edit
            </button>
            <button 
              onClick={() => onDelete(m.id)}
              style={{ cursor: "pointer", color: "red" }}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}

      {/* Tampilkan pesan data kosong */}
      {mahasiswa && mahasiswa.length === 0 && (
        <p>Belum ada data mahasiswa.</p>
      )}
    </div>
  );
}

export default ListMahasiswa;