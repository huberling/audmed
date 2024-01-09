"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Image from 'next/image';
import Cipa from '../../public/Cipa.jpg';
import Nr06 from '../../public/NR06.jpg';
import Nr10 from '../../public/NR10.jpg';
import Nr11 from '../../public/NR11.jpg';
import Nr12 from '../../public/NR12.png';
import Nr13 from '../../public/NR13.jpg';
import Nr17 from '../../public/NR17.jpeg';
import Nr18 from '../../public/NR18.jpg';
import Nr23 from '../../public/NR23.jpg';
import Nr33 from '../../public/NR33.jpg';
import Nr35 from '../../public/NR35.jpg';
import Link from 'next/link';

export default function Treinamentos(){
    return(
        <>
        <Navbar/>
        <section id="page-title">
        <div className="sobre">
        <h1 className="container">Treinamentos</h1>
        <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                Treinamentos
            </li>
        </ol>
        </div>
    </section>
    <main id="descricao ">          
        <section id="content">
            <div className="titulo title">
            <h1>TREINAMENTOS</h1>
            <span className='m-6 md:m-0 lg:m-0 '>A AUDMED oferece diferentes tipos de treinametos em medicina e <br/> segurança do trabalho</span>
        </div>
        </section>
        <section className="container clearfix bottommargin padding">
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-33-Espaco-Confinado"><Image src={Nr33} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-33-Espaco-Confinado">
                        <h4 className="text-lg text-black font-semibold" ><span className="badge">
                        NR-33
                    </span>
                    Trabalho em Espaaço Confinado</h4></Link>
                <p>A NR-33 é uma norma para trabalhos confinados, que estabelece medidas de prevenção, medidas administrativas, medidas pessoais, capacitação e medidas para situações de emergências.</p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-10-Seguranca-em-Instalacoes-Eletricas"><Image src={Nr10} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-10-Seguranca-em-Instalacoes-Eletricas"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-10
                    </span>
                    Segurança em instalações e serviços em eletricidade</h4></Link>
                <p>Estabelece os requisitos e condições mínimas objetivando a implementação de medidas de controle e sistemas preventivos, de forma a garantir a segurança dos trabalhadores que direta, ou indiretamente, interajam em instalações elétricas.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-23-Brigada-de-Incendio"><Image src={Nr23} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-23-Brigada-de-Incendio"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-23
                    </span>
                    Brigada de Incêndio</h4></Link>
                <p>estabelece que os extintores de incêndio devem ser inspecionados periodicamente, conforme as orientações do fabricante e de acordo com o que estabelece a NBR 12962 - Inspeção, Manutenção e Recarga de Extintores de Incêndio.</p>                
            </div>
            </div>
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-13-Vasos-de-Pressao"><Image src={Nr13} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-13-Vasos-de-Pressao"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-13
                    </span>
                    Vasos de Pressão</h4></Link>
                <p>NR-13 estabelece requisitos mínimos para gestão da integridade estrutural de caldeiras a vapor, vasos de pressão e suas tubulações de interligação nos aspectos relacionados à instalação, inspeção, operação e manutenção, visando a segurança e saúde dos trabalhadores.</p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-12-Adequacao-de-Maquinas"><Image src={Nr12} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-12-Adequacao-de-Maquinas">
                        <h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-12
                    </span>
                    Adequação de Máquinas</h4></Link>
                <p>É uma norma regulamentadora estabelecida pelo governo federal para definir parâmetros técnicos e normas a serem seguidas para a proteção no uso de máquinas e equipamentos. </p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-06-Equipamento-de-Protecao-Individual"><Image src={Nr06} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-06-Equipamento-de-Protecao-Individual">
                        <h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-06
                    </span>
                    Equipamento de Proteção Individual(EPI)</h4>
                    </Link>
                <p>Regulamenta a execução do trabalho com uso de Equipamentos de Proteção Individual (EPI), sem estar condicionada a setores ou atividades econômicas específicas.</p>                
            </div>
            </div>
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-17-Ergonomia-AGP-AET"><Image src={Nr17} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-17-Ergonomia-AGP-AET"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-17
                    </span>
                    Ergonomia / AGP / AET</h4></Link>
                    <p>Trata dos parâmetros necessários para garantir conforto, segurança e saúde para os funcionários, com o intuito de evitar que ocorram doenças causadas por esforço repetitivo.</p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-35-Seguranca-do-Trabalho-em-Altura"><Image src={Nr35} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-35-Seguranca-do-Trabalho-em-Altura"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-35
                    </span>
                    Segurança do Trabalho em Altura</h4></Link>
                <p>Este treinamento aborda os requisitos e as medidas de proteção as atividades realizadas em altura, envolvendo o planejamento, organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-05-Comissao-Interna-de-Prevencao-de-Acidentes-e-Assedio"><Image src={Cipa} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-05-Comissao-Interna-de-Prevencao-de-Acidentes-e-Assedio" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-05
                    </span>
                    Comissão Interna de Prevenção de Acidentes e Assédio - CIPA</h4></Link>
                <p>A NR5 é uma norma regulamentadora que trata especificamente de todos os aspectos relacionados à Comissão Interna de Prevenção de Acidentes – CIPA. Dessa forma, essa NR estipula todas as regras, condições e demais detalhes que devem ser obedecidos pelas empresas e trabalhadores envolvidos na CIPA.</p>                
            </div>
            </div>
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira"><Image src={Nr11} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-11
                    </span>
                    Operação em Empilhadeira</h4></Link>
                <p>A norma regulamentadora número 11, corresponde a regras de segurança cujo foco é dar apoio aos colaboradores que atuam com transporte, movimentação, armazenagem e manuseio de material.</p>                
            </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/nr-18-Seguranca-e-Saude-no-Trabalho-na-Industria-da-Construcao"><Image src={Nr18} className="bottommargin-sm h-64" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/nr-18-Seguranca-e-Saude-no-Trabalho-na-Industria-da-Construcao" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-18
                    </span>
                    Segurança e Saúde no Trabalho na Industria da Construção</h4></Link>
                <p>NR-18 é definida como Norma Setorial, ou seja, é uma norma que regulamenta a execução do trabalho em setores ou atividades econômicos específicos.</p>                
            </div>
            </div>
        </section> 
        </main>
        <Final/>
        </>
    )
}