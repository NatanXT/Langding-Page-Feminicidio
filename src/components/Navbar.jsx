import React from 'react';

const Navbar = () => {
  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Definição', href: '#o-que-e' },
    { name: 'Origem', href: '#historia' },
    { name: 'Casos', href: '#casos' },
    { name: 'Denúncia', href: '#denuncia' },
    { name: 'Apoio', href: '#apoio' },
    { name: 'Serviços', href: '#servicos-especializados' },
  ];

  return (
    <nav className="navbar">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div className="logo" style={{ fontWeight: 700, fontSize: '1.5rem', color: 'var(--primary)' }}>
          Feminicídio<span style={{ color: 'var(--primary-light)' }}>.info</span>
        </div>
        <ul style={{ display: 'flex', gap: '1.5rem' }}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
