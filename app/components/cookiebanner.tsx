// CookieBanner.tsx
import React, { useState } from 'react';
import { setUserDataCookie, getUserDataCookie } from '../cookie';

const CookieBanner: React.FC = () => {
    const userDataCookie = getUserDataCookie();
  
    const handleAcceptCookies = () => {
      // Lógica para aceitar cookies, se necessário
      setUserDataCookie({ acceptedCookies: true });
    };
  
    // Exibir o banner apenas se o cookie não foi aceito
    if (!userDataCookie?.acceptedCookies) {
      return (
        <div className="fixed text-center left-0 bottom-0 p-2 w-full bg-gray-400">
          {/* Conteúdo do banner e botão de aceitar */}
          <button onClick={handleAcceptCookies}>Aceitar Cookies</button>
        </div>
      );
    }
  
    return null; // Não exibir banner se os cookies já foram aceitos
  };
  
  export default CookieBanner;