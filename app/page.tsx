"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Servicos from '../public/serviços.png';
import Image from 'next/image';
import Nr35 from '../public/NR35.jpg';
import DHL from '../public/clientes/dhl.png';
import Intralox from '../public/clientes/intralox.png';
import Robiel from '../public/clientes/robiel.png';
import Toyota from '../public/clientes/toyota.jpg';
import Schott from '../public/clientes/schott-logo.png';
import Tk from '../public/clientes/tk-logistica.jpg';
import Lumegal from '../public/clientes/lumegal.jpg';
import ESocial from '../public/esocial.jpg'
import Link from 'next/link';
import Final from './components/final';
import React from 'react';
import CookieNotification from './components/cookies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const Home:React.FC = ()=> {
 

  return (
   <>
   <CookieNotification/>
   <Navbar/>
   <main >
        <section id="background">
            <div className="container clearflix">
            <div className="roww anota anotação col-md-8" >
                <h2 className='ml-7 md:ml-0 lg:ml-0 text-5xl md:text-6xl lg:text-6xl'>MEDICINA E SEGURANÇA DO TRABALHO</h2>
                <p className='text-white text-2xl -mt-6 hidden md:inline-block lg:inline-block'>Nós cuidamos da saúde do seu funcionário</p>
            </div> 
        </div>
        </section>
        <section id="card" className='-mt-80 md:-mt-96 lg:-mt-96'>
            <div className="container">
                <div className="col-md-4"  >
                    <div className="card1">
                    <div className="carrd">  
                        <h2>Atendimento</h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
                        <ul className='list-none p-0 m-0'>
                        <li>
                        Segunda à Sexta
                        <span className='ml-20 text-sm text-white'>07:00 - 17:00</span>
                        </li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className="col-md-4 card2 ">
                    <div className="caard">
                    <h2 className=''>Bem vindo a Audmed</h2>
                    <p className='relative lg:-mt-6 md:-mt-6 -mt-9'>Somos especializados em Medicina e Segurança do Trabalho. Nós cuidamos da saúde dos seus funcionários! Oferecemos uma varidade de serviços e treinamentos que resultem em benefícios para sua empresa e todo o quadro de colaboradores.</p>                   
                </div>
                </div>
                <div className="col-md-4 card3">
                <div className="carrd" >
                        <h2 >Contato</h2>
                        <p className="opacity-6 -mt-4" >Estamos ansiosos pelo seu contato. Ligue agora e fale com um de nossos consultores</p>  
                <div className='text-xl -mt-4'>
                <FontAwesomeIcon icon={faPhone} className='text-base'></FontAwesomeIcon> <b>(19) 3894-5066</b>
</div>     
<div className='text-xl -mt-2'>
<FontAwesomeIcon icon={faWhatsapp} className='text-lg mt-2'></FontAwesomeIcon>  <b>(19) 99249-2716</b>
</div>  
</div>                  
</div>
</div>
</section>
<section id="content">
    <div className="content-1">
        <div className="container" >
            <div className="heading-block center">
                <h2>Como podemos te ajudar?</h2>
                <span className="spancenter">Conheça nossas soluções, oferecemos diversos serviços e treinamentos em medicina e segurança do trabalho.</span>
            </div>
        </div>
    </div>
</section>
<section>
    <div className="container">
        <div className="roww">
        <div className="col-md-4">
            <div className="feature-box fbox-center fbox-effect">
            <Link href="/servicos/pcmso"><Image className="img" src={Servicos} alt="Serviço" /></Link>
            <Link href="/servicos/pcmso"><h3 className="h3desc">PCMSO - PROGRAMA DE CONTROLE MÉDICO DE SAÚDE OCUPACIONAL.</h3></Link>
            <p>O Programa de Controle Médico de Saúde Ocupacional (PCMSO) tem como objetivo a promoção e a preservação da saúde dos trabalhadores</p>
        </div>      
    </div>
        <div className="col-md-4">
            <div className="feature-box fbox-center fbox-effect">
            <Link href="/servicos/pgr"><Image className="img" src={Servicos} alt=""/></Link>
            <Link href="/servicos/pgr"><h3 className="h3desc">PGR - PROGRAMA DE GERENCIAMENTO DE RISCOS</h3></Link>
            <p>O Programa de Gerenciamento de Riscos (PGR) é um conjunto de ações visando à preservação da saúde e da integridade física dos trabalhadores.</p>
        </div> 
    </div>     
        <div className="col-md-4">
            <div className="feature-box fbox-center fbox-effect">
            <Link href="/servicos/ltcat"><Image className="img" src={Servicos} alt="" /></Link>
            <Link href="/servicos/ltcat"><h3 className="h3desc">LTCAT - LAUDO TÉCNICO DAS <br /> CONDIÇÕES AMBIENTAIS DE TRABALHO</h3></Link>
            <p>O LTCAT (Laudo Técnico de Condições Ambientais do Trabalho) é um documento com fins previdenciários, elaborado por Engenheiro de Segurança do Trabalho.</p>
        </div>  
    </div>
    </div>
</div>
    <div className="container mt-20" >
    <div className="roww">
        <div className="col-md-6">
            <h2 className='ml-6 md:ml-3 lg:ml-3'>TREINAMENTOS</h2>
            <div className="fbox-media bottommargin-sm"> 
                <Image className="imgtre md:ml-0 lg:ml-0 ml-auto "  src={Nr35}  priority={true} alt="" />
            </div>
            <ul className="list-group">
                <li className="list-group-item"><span className="badge badge-sucess">NR-35</span>
                <Link href="/treinamentos/nr-35-Seguranca-do-Trabalho-em-Altura" className='text-uppercase' >Segurança do Trabalho em Altura</Link></li>
                <li className="list-group-item"><span className="badge badge-sucess">NR-05</span>
                <Link href="/treinamentos/nr-05-Comissao-Interna-de-Prevencao-de-Acidentes-e-Assedio" className='text-uppercase'>Comissão Interna de Prevenção de Acidentes - CIPA</Link></li>
            </ul>
            <div className="link">
                <Link href="/treinamentos" className='text-uppercases'>Saiba mais...</Link>
            </div>
        </div>
        <div className="col-md-6">
            <h2 className='ml-6 md:ml-3 lg:ml-3'>e-Social</h2>
            <div className="fbox-media bottommargin-sm"> 
                <Image className="imgtre md:ml-0 lg:ml-0 ml-auto" src={ESocial} alt='' />
            </div>
            <ul className="list-group" >
                <li className="list-group-item">
                <Link href="/blog/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador" className="text-uppercase">E-SOCIAL: OBRIGAÇÃO QUE FACILITA OS DIREITOS DO TRABALHADOR</Link></li>
                </ul>
            <div className="link">
                <Link href="/treinamentos" className='text-uppercases'>Saiba mais...</Link>
            </div>
        </div>
    </div>
</div>
</section>
<section id="fotoo">
        <div className="foto" data-stellar-background-ratio="0.3">
            <div className="container clearfix">
                <div className='col-md-5 offset-md-6 text-white mr-8'>
                      <h2>AUDMED ATUA NA MEDICINA E SEGURANÇA DO TRABALHO HÁ 20 ANOS</h2>
                      <ul className='text-black -mt-4 -ml-8'>
                        <li>Conformidade com o e-Social</li>
                        <li>Localização com fácil acesso</li>
                        <li>Equipe de profissionais altamente capacitados</li>
                        <li>Referencia no segmento em Indaiatuba e região</li>
                    </ul>  
                </div>
            </div>
        </div>
</section>
<div className='container mt-40'>
    <h2 className='text-center font-bold text-3xl leading-6 '>Empresas que confiam em nosso trabalho</h2>
    <div className="cont">
       <Link href={'https://www.dhl.com/br-pt/home.html'}><Image className="clientes" src={DHL} alt="DHL Logo" /></Link>
       <Link href={'https://www.intralox.com/pt'}><Image className="clientes" src={Intralox} alt="Intralox Logo" /></Link>
       <Link href={'https://www.robiel.com/'}><Image className="clientes" src={Robiel} alt="Robiel Logo" /></Link>
       <Link href={'https://www.toyota.com.br/'}><Image className="clientes" src={Toyota} alt="Toyota Logo" /></Link>
       <Link href={'https://www.schott.com/pt-br/flat-glass'}><Image className="clientes" src={Schott} alt="Schott Logo" /></Link>
       <Link href={'https://www.tklogistica.com.br/'}><Image className="clientes" src={Tk} alt="TK Logística Logo" /></Link>
       <Link href={'https://www.lumegal.com.br/'}><Image className="clientes" src={Lumegal} alt="Lumegal Logo" /></Link>
    </div>    
</div>
<Final/>
</main>


   </>
  );
}
export default Home;