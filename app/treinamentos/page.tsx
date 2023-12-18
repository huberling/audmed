"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Image from 'next/image';
import Treinamento1 from '../../public/Treinamento1.jpg';
import Treinamento2 from '../../public/Treinamento2.jpg';
import Treinamento3 from '../../public/Treinamento3.jpg';
import Treinamento4 from '../../public/Treinamento4.jpg';
import Treinamento5 from '../../public/Treinamento5.jpg';
import Treinamento6 from '../../public/Treinamento6.jpg';
import Treinamento7 from '../../public/Treinamento7.jpg';
import Treinamento8 from '../../public/Treinamento8.jpg';
import Treinamento9 from '../../public/Treinamento9.jpg';
import Link from 'next/link';

export default function Treinamentos(){
    return(
        <>
        <Navbar/>
        <section id="page-title">
        <div className="sobre">
        <h1 className="container">Treinamentos</h1>
        <ol className="breadcrumb">
            <li>
                <Link href="/">Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-400">/</p>
            <li className="ads">
                Treinamentos
            </li>
        </ol>
        </div>
    </section>
    <main id="descricao ">          
        <section id="content">
            <div className="titulo title">
            <h1>TREINAMENTOS</h1>
            <span>A AUDMED oferece diferentes tipos de treinametos em medicina e <br/> segurança do trabalho</span>
        </div>
        </section>
        <section className="container clearfix bottommargin padding">
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/1-treinamento-para-formacao-nr-33-supervisor-de-espaco-confinado"><Image src={Treinamento1} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/1-treinamento-para-formacao-nr-33-supervisor-de-espaco-confinado">
                        <h4 className="text-lg text-black font-semibold" ><span className="badge">
                        NR-33
                    </span>
                    Treinamento para formação NR-33 Supervisor de espaço confinado</h4></Link>
                <p>Introduzir, aprimorar e expandir conhecimentos e técnicas necessárias a uma sólida gestão dos trabalhos em espaço confinado em termos de burocráticos, legais e práticos, conforme NR-33.</p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/2-treinamento-de-reciclagem-da-nr-33-trabalhador-autorizado-e-vigia"><Image src={Treinamento2} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/2-treinamento-de-reciclagem-da-nr-33-trabalhador-autorizado-e-vigia"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-33
                    </span>
                    Treinamento de reciclagem da NR-33 trabalhador autorizado e vigia</h4></Link>
                <p>Aprimorar conceitos básicos de segurança para realização de trabalhos em espaço confinado capacitando pessoas conforme NR 33.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/3-treinamento-para-formacao-nr-33-trabalhador-autorizado-e-vigia"><Image src={Treinamento3} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/3-treinamento-para-formacao-nr-33-trabalhador-autorizado-e-vigia"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-33
                    </span>
                    Treinamento para formação NR-33 trabalhador autorizado e vigia</h4></Link>
                <p>Introduzir conceitos básicos de segurança para realização de trabalhos em espaço confinado capacitando pessoas conforme NR 33.</p>                
            </div>
            </div>
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/4-treinamento-nr-33-espaco-confinado"><Image src={Treinamento4} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/4-treinamento-nr-33-espaco-confinado"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-33
                    </span>
                    Treinamento NR-33 Espaço Confinado</h4></Link>
                <p>Espaço confinado é qualquer área ou ambiente não projetado para ocupação humana contínua, que possua meios limitados de entrada e saída.</p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/5-treinamento-para-formacao-supervisor-de-espaco-confinado"><Image src={Treinamento5} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/5-treinamento-para-formacao-supervisor-de-espaco-confinado">
                        <h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-33
                    </span>
                    Treinamento para formação Supervisor de Espaço Confinado</h4></Link>
                <p>Aprimorar conceitos básicos de segurança para realização de trabalhos em espaço confinado capacitando pessoas conforme NR 33.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/6-treinamento-da-nr-33-trabalhador-autoriza-e-vigia"><Image src={Treinamento6} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/6-treinamento-da-nr-33-trabalhador-autoriza-e-vigia">
                        <h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-33
                    </span>
                    Treinamento da NR - 33 trabalhador autorizado e vigia</h4></Link>
                <p>Aprimorar conceitos básicos de segurança para realização de trabalhos em espaço confinado capacitando pessoas conforme NR 33.</p>                
            </div>
            </div>
            <div className="row servicos bottommargin-sm ">
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/7-o-treinamento-de-trabalho-em-altura"><Image src={Treinamento7} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/7-o-treinamento-de-trabalho-em-altura"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-33
                    </span>
                    O Treinamento de Trabalho em Altura</h4></Link>
                    <p>Trabalho em altura caracteriza-se como atividades executadas acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.</p>
                </div>
                <div className="col-md-4 bottommargin-no" >
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/8-seguranca-do-trabalho-em-altura"><Image src={Treinamento8} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/8-seguranca-do-trabalho-em-altura"><h4 className="text-lg text-black font-semibold"><span className="badge">
                        NR-35
                    </span>
                    Segurança do Trabalho em Altura</h4></Link>
                <p>Este treinamento aborda os requisitos e as medidas de proteção as atividades realizadas em altura, envolvendo o planejamento, organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente.</p>
                </div>
                <div className="col-md-4 bottommargin-no">
                    <div className="feature-box fbox-center fbox-effect">
                        <Link href="/treinamentos/9-comissao-interna-de-prevencao-de-acidentes-cipa"><Image src={Treinamento9} className="bottommargin-sm" alt=""/></Link>
                    </div>
                    <Link href="/treinamentos/9-comissao-interna-de-prevencao-de-acidentes-cipa" ><h4 className="text-lg text-black font-bold"><span className="badge">
                        NR-05
                    </span>
                    Comissão Interna de Prevenção de Acidentes - CIPA</h4></Link>
                <p>A brigada de incêndio é um grupo organizado de pessoas voluntárias ou não, treinadas e capacitadas para atuar na prevenção, combate a princípio de incêndio, abandono de área e prestação dos primeiros socorros, dentro de uma área pré-estabelecida.</p>                
            </div>
            </div>
        </section> 
        </main>
        <Final/>
        </>
    )
}