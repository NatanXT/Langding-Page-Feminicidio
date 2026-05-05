import React from 'react';

const Footer = () => {
  const integrantes = [
    "Alessandra de Paula Santana",
    "João Vitor Rezende de Paiva",
    "Lara Alves de Andrade",
    "Raphael Fernandes Evangelista",
    "Gabrielly Medeiros Caiado"
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Sobre o Projeto</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Esta landing page é um projeto acadêmico desenvolvido para o curso de Direito da UNIP - Universidade Paulista, 
              com o objetivo de servir como suporte informativo para apresentações e conscientização sobre o feminicídio.
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Links Rápidos</h3>
            <ul style={{ display: 'grid', gap: '0.8rem', fontSize: '0.9rem' }}>
              <li><a href="#inicio" style={{ opacity: 0.8 }}>Início</a></li>
              <li><a href="#o-que-e" style={{ opacity: 0.8 }}>O que é Feminicídio</a></li>
              <li><a href="#denuncia" style={{ opacity: 0.8 }}>Canais de Denúncia</a></li>
              <li><a href="#apoio" style={{ opacity: 0.8 }}>Rede de Apoio</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Créditos</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '0.5rem' }}>
              <strong>Curso:</strong> Direito
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1rem' }}>
              <strong>Instituição:</strong> UNIP - Universidade Paulista
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.5rem' }}>Integrantes:</p>
            <ul style={{ opacity: 0.8, fontSize: '0.85rem', display: 'grid', gap: '0.3rem' }}>
              {integrantes.map((nome, index) => (
                <li key={index}>{nome}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} - Projeto Acadêmico Feminicídio.info. Uso estritamente educacional.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
