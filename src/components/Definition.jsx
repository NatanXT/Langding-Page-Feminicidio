import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Scale } from 'lucide-react';

const Definition = () => {
  return (
    <section id="o-que-e" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title">O que é Feminicídio?</h2>
        <p className="section-subtitle">
          Entender o conceito é fundamental para identificar e combater as raízes da violência extrema contra a mulher.
        </p>
        
        <div className="definition-grid">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ marginBottom: '1rem', fontSize: '1.8rem' }}>Uma Violência de Gênero</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              O feminicídio não é apenas um homicídio comum. É o assassinato de mulheres cometido por razões da condição de sexo feminino, 
              envolvendo violência doméstica e familiar e/ou menosprezo ou discriminação à condição de mulher.
            </p>
            <p>
              No âmbito jurídico e social, o termo descreve a etapa final de um ciclo de violência contínuo, 
              frequentemente alimentado por estruturas patriarcais e de posse.
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '0.8rem' }}>
                <Scale color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Aspecto Jurídico</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>No Brasil, a Lei 13.104/2015 tornou o feminicídio uma qualificadora do crime de homicídio e o incluiu no rol dos crimes hediondos.</p>
              </div>
            </div>
            
            <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--secondary)', padding: '1rem', borderRadius: '0.8rem' }}>
                <ShieldCheck color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.5rem' }}>Prevenção</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>O reconhecimento precoce de sinais de violência psicológica, física e patrimonial é a chave para evitar o desfecho fatal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Definition;
