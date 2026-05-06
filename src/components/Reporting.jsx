import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Siren, HelpCircle } from 'lucide-react';

const Reporting = () => {
  return (
    <section id="denuncia">
      <div className="container">
        <h2 className="section-title">Como Denunciar</h2>
        <p className="section-subtitle">
          Saber para onde ligar pode salvar vidas. É fundamental distinguir entre canais de orientação e canais de emergência.
        </p>
        
        <div className="reporting-comparison">
          <motion.div 
            className="card report-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <PhoneCall size={48} color="var(--primary)" style={{ margin: '0 auto' }} />
            <h3 style={{ marginTop: '1rem' }}>Central de Atendimento</h3>
            <div className="report-number" style={{ color: 'var(--accent)' }}>180</div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              O <strong>Disque 180</strong> é um serviço de utilidade pública essencial para o enfrentamento à violência contra a mulher.
            </p>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>• Acolhimento e orientação</li>
              <li>• Encaminhamento para a rede de proteção</li>
              <li>• Recebimento de denúncias</li>
              <li>• Funciona 24h, todos os dias</li>
            </ul>
          </motion.div>

          <motion.div 
            className="card report-card"
            style={{ border: '2px solid var(--accent)' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Siren size={48} color="var(--accent)" style={{ margin: '0 auto' }} />
            <h3 style={{ marginTop: '1rem' }}>Emergência Policial</h3>
            <div className="report-number" style={{ color: 'var(--accent)' }}>190</div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              O <strong>190</strong> deve ser acionado em situações de <strong>ameaça ou violência imediata</strong>.
            </p>
            <ul style={{ textAlign: 'left', display: 'inline-block' }}>
              <li>• Atendimento de urgência</li>
              <li>• Flagrante de agressão</li>
              <li>• Envio de viatura ao local</li>
              <li>• Risco iminente à vida</li>
            </ul>
          </motion.div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div className="card" style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--secondary)' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
              <HelpCircle color="var(--primary)" />
              <h4 style={{ margin: 0 }}>Qual canal utilizar?</h4>
            </div>
            <p style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.6' }}>
              Em situação de <strong>risco imediato, agressão em andamento ou ameaça à vida, ligue 190</strong>. 
              Para orientação, acolhimento e denúncia sobre violência contra a mulher, ligue <strong>180</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;
