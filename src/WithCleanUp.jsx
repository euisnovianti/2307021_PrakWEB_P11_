import React, { useEffect } from 'react'

const WithCleanUp = () => {
    // Menambahkan useEffect untuk clean up
    useEffect(() => {
        const id = setInterval(() => {
        console.log("tick dengan clean up")
        }, 1000);
        return() => {
            clearInterval(id)
            console.log("clean up dijalankan")
            }
    })
    return (
        <div>
        <p>KOMPONEN DENGAN CLEAN UP AKTIF</p>
        </div>

    )
           
}

export default WithCleanUp
