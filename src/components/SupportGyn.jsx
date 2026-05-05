import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';

const SupportGyn = () => {
  // Fontes de consulta:
  // - Prefeitura de Goiania: Centro de Referencia da Mulher Cora Coralina e Casa Abrigo Sempre Viva.
  // - Policia Civil de Goias: Unidades DEAEM.
  const locations = [
    {
      name: "Centro de Referência da Mulher Cora Coralina",
      type: "Atendimento social, psicológico e jurídico",
      address: "Rua 74, esquina com Rua 59, nº 423, Setor Central, Goiânia - GO, CEP 74045-020",
      phone: "(62) 3524-2933 / 3524-2934",
      schedule: "Segunda a sexta, das 8h às 17h",
      obs: "Oferece acompanhamento por equipe interdisciplinar e encaminhamento para a rede de serviços de proteção à mulher."
    },
    {
      name: "Casa Abrigo Sempre Viva",
      type: "Acolhimento institucional sigiloso",
      address: "Localização sigilosa por motivo de segurança",
      phone: "Acesso por encaminhamento da rede de proteção ou Disque 180",
      schedule: "Atendimento conforme encaminhamento da rede de proteção",
      obs: "Serviço de acolhimento para mulheres em situação de violência doméstica ou familiar, preservando sigilo, segurança e proteção das vítimas."
    },
    {
      name: "DEAEM - Delegacia Estadual de Atendimento Especializado à Mulher",
      type: "Atendimento policial especializado",
      address: "Rua 24, nº 203, Qd. 49, Lt. 27, Centro, Goiânia - GO, CEP 74030-060",
      phone: "(62) 3201-2801 / 3201-2810 / 3201-2807 | Plantão: (62) 3201-2802",
      schedule: "Atendimento especializado e plantão conforme canais da Polícia Civil",
      obs: "Unidade especializada para registro de ocorrências, orientação e encaminhamento para medidas protetivas."
    }
  ];

  return (
    <section id="apoio" style={{ background: '#fff' }}>
      <div className="container">
        <h2 className="section-title">Rede de Apoio em Goiânia</h2>
        <p className="section-subtitle">
          Existem locais prontos para acolher e proteger mulheres em situação de vulnerabilidade em nossa capital.
        </p>
        
        <div className="support-grid">
          {locations.map((loc, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <h4 style={{ color: 'var(--primary-light)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{loc.type}</h4>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--primary)', minHeight: '3em' }}>{loc.name}</h3>
              
              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span>{loc.address}</span>
                </div>
                
                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1rem', fontSize: '0.9rem' }}>
                  <Phone size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span>{loc.phone}</span>
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  <Clock size={18} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <span>{loc.schedule}</span>
                </div>
              </div>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                {loc.obs}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportGyn;
