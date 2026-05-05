import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem' }}>Sobre o Projeto</h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              Esta landing page é um projeto acadêmico desenvolvido para a faculdade de Psicologia, 
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
              <strong>Autora:</strong> [Nome da Aluna/Autora]
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              <strong>Orientação:</strong> [Nome do Professor/Orientador]
            </p>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginTop: '1rem' }}>
              Psicologia - [Nome da Instituição]
            </p>
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
