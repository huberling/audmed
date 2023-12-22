"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar"
import Link from 'next/link';
import Image from 'next/image';
import DHL from '../../public/clientes/dhl.png';
import Intralox from '../../public/clientes/intralox.png';
import Robiel from '../../public/clientes/robiel.png';
import Toyota from '../../public/clientes/toyota.jpg';
import Schott from '../../public/clientes/schott-logo.png';
import Tk from '../../public/clientes/tk-logistica.jpg';
import Lumegal from '../../public/clientes/lumegal.jpg';
import LogoClinica from '../../public/AUDMED LOGOTIPO.png';
import { FacebookIcon, InstagramIcon } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Final from '../components/final';

export default function SobreClinica(){
    
    return(
        <>
        <Navbar/> 
        <section id="page-title">
        <div className="sobre">
        <h1 className="container">Sobre</h1>
       <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                Sobre
            </li>
        </ol>
        </div>
    </section>   
    <main id="descricao">            
        <section className="titulo">
            <h1>A AUDMED</h1>
            <span>Nós cuidamos da saúde do seu funcionário</span>
        </section>
       <section className="container">
        <div className="roww">
            <div className="descritivos col-md-5">
            <h3 className="text-lg font-semibold mb-7 leading-6 ml-4 md:ml-0 lg:ml-0">Nossa Empresa</h3>
            <p className="text2 ml-4 md:ml-0 lg:ml-0 mr-4 md:mr-0 lg:mr-0">A Clínica Audmed, oferece ampla assessoria às empresas, para atender as exigências do Ministério do Trabalho e Emprego no que se refere à Medicina e Segurança do Trabalho. Através de nossa equipe e de nossos parceiros, primamos pela qualidade dos serviços prestados, realizando Assessoria às Pequenas, Médias e Grandes Empresas de Indaiatuba e Região. Estamos localizados na Rua: Ademar de Barros, n° 491 no Centro de Indaiatuba-SP, contando com infra-estrutura adequada para a realização de exames médicos ocupacionais e complementares.</p>
            </div>
            <div className="descritivos col-md-6 ml-12">
                <h3 className="text-lg font-semibold mb-7 leading-6 ml-4 md:ml-0 lg:ml-0">Nossos Objetivos</h3> 
                <p className="text2 ml-4 md:ml-0 lg:ml-0 mr-4 md:mr-0 lg:mr-0">Manter seus Clientes totalmente informados quanto à Saúde e Segurança do Trabalho de seus empregados, através da emissão dos Relatórios Gerenciais informatizados;<br/>
                    Realizar a Gestão da Saúde Ocupacional e da Segurança do Trabalho de forma responsável e eficaz, possibilitando a empresa manter o foco em seu próprio negócio;<br/>
                    Auxiliar na elaboração de programas de prevenção customizados para seus clientes;<br/>
                    Atuar na promoção da Saúde e do bem-estar no ambiente de trabalho;<br/>
                    Cumprir a legislação trabalhista vigente no tocante à Saúde e Segurança do Trabalho;<br/>
                    Padronizar e normatizar as ações voltadas ao controle médico da saúde ocupacional;<br/>
                    Auxiliar no controle e redução dos índices de acidentes de trabalhos e de doenças profissionais;</p>
                </div>
            </div>
       </section>
       <section >
        <div className="container">
<div className="roww clçaa">
    <div className="descritivos2 col-md-4 -ml-6 mr-3 md:mr-0 lg:mr-0 md:-ml-12 lg:-ml-12">
        <h4 className='text-xl font-semibold'>MISSÃO</h4>       
        <p className="text">Atender plenamente as necessidades e interesses dos nossos clientes, colaboradores e fornecedores no que se refere ao desenvolvimento, implantação e coordenação de Programas de Saúde, Segurança e Qualidade de Vida no Ambiente de Trabalho. Isso através do desenvolvimento de uma equipe de trabalho comprometida, integrada, bem informada e empática, com ênfase na lucratividade e qualidade. Diagnosticando e prevenindo nossos clientes de possíveis vulnerabilidades ocupacionais, agregando valores legais em forma de documentos oficiais que orientem às exposições ambientais e sugerindo plano de ações para alterações de pontos críticos, atendendo assim, às necessidades inerentes à atividade de cada cliente.</p>
    </div>
    <div className="descritivos2 desc1 col-md-4 -ml-7 md:mr-0 lg:mr-0 md:ml-11 lg:ml-11">
        <h4 className='text-xl font-semibold'>VISÃO</h4>
        <p className="text">Melhorar continuamente a qualidade dos serviços prestados e ser conhecida como a melhor Empresa Prestadora, em excelência de qualidade de Serviços em Gestão Ocupacional.<br />
            1- Promovendo a satisfação plena dos nossos clientes. <br />
            2- Buscando a qualidade de vida crescente dos nossos funcionários e colaboradores, através da excelência em nossos serviços/ambiente de .</p>
        </div>  
    <div className="descritivos2 desc2 col-md-4 -ml-7 md:-mr-96 lg:-mr-96 md:ml-11 lg:ml-11">
        <h4 className='text-xl font-semibold'>VALORES</h4>
        <p className="text">Pessoas em 1°lugar;<br/>
        Prevenção;<br />
            Qualidade Total: de vida, preservação do meio ambiente;<br />
            Ética;<br />
            Comunicação Assertiva;<br />
            Transparência;<br />
            Reconhecimento de nossos colaboradores, principalmente os que buscam crescimento intelectual e psicossocial.</p>
        </div>  
    </div>
</div>
</section>
<section id="fotoo">
<div className="foto" data-stellar-background-ratio="0.3">
    <div className="container clearfix">
        <div className="col-md-5 offset-md-6 text-white mr-8">
              <h2>AUDMED ATUA NA MEDICINA E SEGURANÇA DO TRABALHO HÁ 20 ANOS</h2>
              <ul>
                <li>Conformidade com o e-Social</li>
                <li>Localização com fácil acesso</li>
                <li>Equipe de profissionais altamente capacitados</li>
                <li>Referencia no segmento em Indaiatuba e região</li>
            </ul>
              
        </div>
    </div>
</div>
</section>
<section>
    <div className="container mt-20">
        <h2 className='text-center font-thin text-3xl leading-6'>Empresas que confiam em nosso trabalho</h2>
        <div className="cont">
            <Image className="clientes" src={DHL} alt=""/>
            <Image className="clientes" src={Intralox} alt=""/>
            <Image className="clientes" src={Robiel} alt=""/>
            <Image className="clientes" src={Toyota} alt=""/>
            <Image className="clientes" src={Schott} alt=""/>
            <Image className="clientes" src={Tk} alt=""/>
            <Image className="clientes" src={Lumegal} alt=""/>
        </div>    
    </div>
</section>
<Final/>
   </main>
        </>
    )
}