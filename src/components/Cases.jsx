import React from 'react';
import { motion } from 'framer-motion';

const Cases = () => {
  // Fontes de consulta:
  // - TJGO: noticias institucionais sobre casos de feminicidio.
  // - Portais de noticias locais (Rio Verde e Goiania) para contextualizacao de casos reais.
  const cases = [
    {
      name: "Conceição Rodrigues Mendonça",
      year: "2022",
      location: "Goiânia - GO",
      context: "Conceição Rodrigues Mendonça foi vítima de feminicídio em agosto de 2022, no Setor Santa Genoveva, em Goiânia. O caso evidencia a gravidade da violência contra a mulher no contexto de relações anteriores e reforça a importância da rede de proteção, da denúncia e do acompanhamento de situações de risco."
    },
    {
      name: "Elda Pereira da Silva",
      year: "2024",
      location: "Rio Verde - GO",
      context: "Elda Pereira da Silva foi vítima de feminicídio em novembro de 2024, em Rio Verde. O caso foi reconhecido judicialmente como crime cometido por razões da condição de sexo feminino, em contexto de violência doméstica, reforçando a urgência de políticas públicas, medidas protetivas e acolhimento especializado."
    },
    {
      name: "Maria da Penha",
      year: "1983",
      location: "Fortaleza - CE",
      context: "Embora não tenha sido um feminicídio consumado, o caso de Maria da Penha se tornou um marco histórico no enfrentamento à violência doméstica no Brasil e contribuiu para a criação da Lei 11.340/2006. Sua história representa a luta por proteção legal, responsabilização dos agressores e fortalecimento dos direitos das mulheres."
    }
  ];

  return (
    <section id="casos" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title">Casos, memória e marcos históricos</h2>
        <p className="section-subtitle">
          Humanizar os números é uma forma de honrar as vítimas e entender a urgência de políticas públicas eficazes.
        </p>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '-2rem auto 3rem', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
          Os casos abaixo são apresentados com finalidade educativa, buscando preservar a dignidade das vítimas e promover reflexão sobre prevenção, denúncia e proteção.
        </p>
        
        <div className="cases-grid">
          {cases.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>{item.name}</h3>
              <div style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--primary-light)', fontWeight: 600 }}>
                <p>Período: {item.year}</p>
                <p>Local: {item.location}</p>
              </div>
              <p style={{ color: 'var(--text-dark)', fontSize: '0.95rem', lineHeight: '1.6' }}>{item.context}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
