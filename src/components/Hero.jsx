import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Conscientização e Enfrentamento ao Feminicídio</h1>
          <p>
            Uma plataforma informativa dedicada à compreensão, prevenção e combate à violência de gênero. 
            Projeto acadêmico para a Faculdade de Psicologia.
          </p>
          <div className="hero-btns">
            <a href="#denuncia" className="btn btn-primary">
              Canais de Denúncia <ArrowRight size={20} />
            </a>
            <a href="#o-que-e" className="btn btn-outline">
              Saiba Mais <Info size={20} />
            </a>
          </div>
          <motion.p 
            style={{ marginTop: '2rem', fontSize: '0.9rem', opacity: 0.8, fontStyle: 'italic' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1, duration: 1 }}
          >
            "O silêncio é cúmplice da violência. Informar-se é o primeiro passo para a mudança."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
