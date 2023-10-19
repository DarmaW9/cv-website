import React from 'react'
import '../styles/styles.css'  // Asumsi Anda memiliki file styles.css di direktori src/styles

const IndexPage = () => (
  <div className="cv-container">
    <header className="cv-header">
      <h1>Widya Darma Wirawawan</h1>
      <p>Email: widyawirawan16@gmail.com</p>
      <p>Phone: 082165978014</p>
    </header>
    
    <section className="cv-section">
      <h2>Education</h2>
      <p>Ilmu Komunikasi, Universitas Sebelas Maret</p>
    </section>
    
    {/* Tambahkan lebih banyak bagian seperti Experience, Skills, dll. */}
    
  </div>
)

export default IndexPage
