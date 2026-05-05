import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Conclusion = () => {
  return (
    <section id="conclusao" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Heart size={64} color="white" style={{ marginBottom: '2rem', margin: '0 auto 2rem' }} />
          <h2 className="section-title" style={{ color: 'white' }}>Você não está sozinha</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)', margin: '0 auto 2rem' }}>
            O enfrentamento ao feminicídio é uma responsabilidade coletiva. Seja acolhendo uma amiga, 
            estudando o tema ou denunciando, cada ação conta para salvar uma vida.
          </p>
          <div style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.8' }}>
            <p>
              "Que o conhecimento aqui compartilhado sirva como ferramenta de emancipação e proteção. 
              A psicologia caminha junto com a luta das mulheres por uma vida livre de violência."
            </p>
          </div>
          <div style={{ marginTop: '3rem' }}>
            <a href="#denuncia" className="btn" style={{ background: 'white', color: 'var(--primary)' }}>
              Preciso de Ajuda Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
