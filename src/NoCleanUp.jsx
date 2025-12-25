import React, { useEffect } from 'react';

const NoCleanUp = () => {
    // Menggunakan useEffect untuk memanggil data clean up
    useEffect(() => {
        setInterval(() => {
            console.log("tick tanpa clean up")
        }, 1000)
    }, [])  
  return (
    <div>
      <p>NO CLEAN UP</p>
    </div>
  )
}

export default NoCleanUp