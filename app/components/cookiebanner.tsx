// CookieBanner.tsx
import React, { useState, useEffect } from 'react';
import { setUserDataCookie, getUserDataCookie, removeUserDataCookie } from '../cookie';

const CookieBanner: React.FC = () => {
  const userDataCookie = getUserDataCookie();
  const [isVisible, setIsVisible] = useState(!userDataCookie?.acceptedCookies);

  useEffect(() => {
    console.log('userDataCookie:', userDataCookie);
    setIsVisible(!userDataCookie?.acceptedCookies);
  }, [userDataCookie]);
  

  const handleAcceptCookies = () => {
    console.log('Clicou em Aceitar Cookies');
    setUserDataCookie({ acceptedCookies: true });
    setIsVisible(false);
  };
  
  const handleRejectCookies = () => {
    console.log('Clicou em Rejeitar Cookies');
    removeUserDataCookie();
    setIsVisible(false);
  };
  

  // Exibir o banner apenas se o cookie não foi aceito
  if (isVisible) {
    console.log('Renderizando banner...');
    return (
      <div id='cookies-banner' className='cookies-banner'>
        <div className='cookies-header'>
          <div className='cookies-desc'> Nós utilizamos cookies: Eles são usados para aprimorar a sua experiência. Ao fechar este banner ou continuar na página, você concorda com o uso dos cookies ativos. Você pode optar por rejeitar os cookies de terceiros.</div>
          <button className='cookies-button-sucess' onClick={handleAcceptCookies}>Aceitar Cookies</button>
          <button className='cookies-button-reject' onClick={handleRejectCookies}>Rejeitar Cookies</button>
        </div>
      </div>
    );
  }

  console.log('Não renderizando banner...');
  return null; // Não exibir banner se os cookies já foram aceitos
};

export default CookieBanner;
