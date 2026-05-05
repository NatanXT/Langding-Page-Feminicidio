import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const SpecializedServices = () => {
  // Fontes de consulta:
  // - Policia Civil de Goias: Unidades DEAEM.
  // - Prefeitura de Goiania: Centro de Referencia da Mulher Cora Coralina e Casa Abrigo Sempre Viva.
  const services = [
    {
      name: "DEAEM - Delegacia Estadual de Atendimento Especializado à Mulher",
      address: "Rua 24, nº 203, Qd. 49, Lt. 27, Centro, Goiânia - GO, CEP 74030-060",
      phone: "(62) 3201-2801 / 3201-2810 / 3201-2807 | Plantão: (62) 3201-2802",
      description: "Unidade especializada para atendimento à mulher vítima de violência, registro de ocorrência e encaminhamento para medidas protetivas."
    },
    {
      name: "DEAEM - Unidade Jardim Curitiba II",
      address: "Av. do Povo, Qd. 19, Lt. 14, Jardim Curitiba II, Goiânia - GO",
      phone: "(62) 3201-6344 / 3201-6332",
      description: "Unidade de atendimento especializado à mulher na região do Jardim Curitiba II."
    },
    {
      name: "Centro de Referência da Mulher Cora Coralina",
      address: "Rua 74, esquina com Rua 59, nº 423, Setor Central, Goiânia - GO, CEP 74045-020",
      phone: "(62) 3524-2933 / 3524-2934",
      description: "Serviço municipal de atendimento social, psicológico e jurídico para mulheres em situação de violência, com encaminhamento para a rede de proteção."
    },
    {
      name: "Casa Abrigo Sempre Viva",
      address: "Localização sigilosa por motivo de segurança",
      phone: "Acesso por encaminhamento da rede de proteção ou Disque 180",
      description: "Serviço de acolhimento institucional sigiloso para mulheres em situação de violência doméstica ou familiar, com foco em segurança, proteção e preservação da vida."
    }
  ];

  return (
    <section id="servicos-especializados">
      <div className="container">
        <h2 className="section-title">Delegacias e Atendimento Especializado</h2>
        <p className="section-subtitle">
          Serviços focados no atendimento jurídico e policial, garantindo que a lei seja aplicada e a mulher protegida.
        </p>
        
        <div className="cases-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'var(--secondary)', padding: '0.8rem', borderRadius: '50%', flexShrink: 0 }}>
                  <ShieldAlert color="var(--primary)" size={24} />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--primary)', minHeight: '2.5em', display: 'flex', alignItems: 'center' }}>{service.name}</h3>
              </div>
              
              <div style={{ flexGrow: 1 }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong>Endereço:</strong> {service.address}</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}><strong>Telefone:</strong> {service.phone}</p>
              </div>
              
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '1rem', marginTop: 'auto' }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedServices;
