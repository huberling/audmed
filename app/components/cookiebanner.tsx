// CookieBanner.tsx
import React, { useState } from 'react';
import { setUserDataCookie, getUserDataCookie } from '../cookie';

const CookieBanner: React.FC = () => {
    const userDataCookie = getUserDataCookie();
  
    const handleAcceptCookies = () => {
      const userData = getUserDataCookie();
      // Lógica para aceitar cookies, se necessário
      setUserDataCookie({ acceptedCookies: true });
    };
  
    // Exibir o banner apenas se o cookie não foi aceito
    if (!userDataCookie?.acceptedCookies) {
      return (
        <div className='cookies'>
          {/* Conteúdo do banner e botão de aceitar */}
          <button onClick={handleAcceptCookies}>Aceitar Cookies</button>
        </div>
      );
    }
  
    return null; // Não exibir banner se os cookies já foram aceitos
  };
  
  export default CookieBanner;