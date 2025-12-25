import { useEffect, useState } from "react";

function FormMahasiswa({ addMahasiswa, updateMahasiswa, editData }) {
    const [nama, setNama] = useState("");
    const [jurusan, setJurusan] = useState("");

    useEffect(() => {
        if (editData) {
            setNama(editData.nama);
            setJurusan(editData.jurusan);
        }
    }, [editData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nama || !jurusan) return;

        if (editData) {
            // spread operator
            updateMahasiswa({ ...editData, nama, jurusan });
        } else {
            addMahasiswa({
                id: Date.now(),
                nama,
                jurusan,
            });
        }
        setNama("");
        setJurusan("");
        };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Nama"
            />
            <input
                value={jurusan}
                onChange={(e) => setJurusan(e.target.value)}
                placeholder="Jurusan"
            />
            <button type="submit">{editData ? "Update" : "Tambah"}</button>
        </form>
    );

}

export default FormMahasiswa;