import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const timeline = [
    {
      year: "Década de 70",
      title: "Primeiro uso público do termo",
      desc: "O termo 'femicide' foi utilizado pela primeira vez por Diana Russell no Tribunal Internacional de Crimes contra Mulheres em Bruxelas (1976)."
    },
    {
      year: "Anos 90",
      title: "Expansão na América Latina",
      desc: "Antropólogas como Marcela Lagarde adaptaram o termo para 'feminicídio' para incluir a impunidade e a negligência do Estado."
    },
    {
      year: "2015",
      title: "Legislação no Brasil",
      desc: "Sancionada a Lei do Feminicídio (Lei 13.104/2015), alterando o Código Penal para tipificar o crime como qualificadora."
    },
    {
      year: "Hoje",
      title: "Debate Social e Acadêmico",
      desc: "O conceito continua evoluindo na psicologia para entender as dinâmicas de poder e as interseccionalidades de raça e classe."
    }
  ];

  return (
    <section id="historia">
      <div className="container">
        <h2 className="section-title">Origem e Evolução</h2>
        <p className="section-subtitle">
          O conceito de feminicídio não surgiu do nada; ele é fruto de décadas de luta teórica e política para dar visibilidade a um fenômeno específico.
        </p>
        
        <div className="history-timeline">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <h4 style={{ color: 'var(--primary-light)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{item.year}</h4>
              <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
