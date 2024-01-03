"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Treinamento09 from '../../../public/Treinamento9.jpg'

export default function Treinamento9(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
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
               <Link href="/treinamentos">Treinamentos</Link> 
            </li>
            <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block"> 
                Comissão Interna de Prevenção de Acidentes - CIPA              
                  </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content" className='mb-0'>
    <div className="content-padding">
        <div className="container roww clearflix">
            <div className="col-md-2 md:-ml-8 lg:-ml-8">
                <h4 className='font-bold text-xl'>Outros Treinamentos:</h4>
                <div className="outrosservice">
                <ul style={listStyle} className="text-sm">
                        <li className="mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 ">
                        <Link href="/treinamentos/1-treinamento-para-formacao-nr-33-supervisor-de-espaco-confinado" className="text-black"><div>
                        Treinamento para formação Supervisor de Espaço Confinado</div></Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/2-treinamento-de-reciclagem-da-nr-33-trabalhador-autorizado-e-vigia" className='text-black'>
                        Treinamento de reciclagem da NR-33 trabalhador autorizado e vigia</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/3-treinamento-para-formacao-nr-33-trabalhador-autorizado-e-vigia" className='text-black'>
                        Treinamento para formação NR-33 trabalhador autorizado e vigia</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/4-treinamento-nr-33-espaco-confinado" className='text-black'>
                        Treinamento NR-33 Espaço Confinado</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/5-treinamento-para-formacao-supervisor-de-espaco-confinado" className='text-black'>
                        Treinamento para formação Supervisor de Espaço Confinado</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/6-treinamento-da-nr-33-trabalhador-autoriza-e-vigia" className='text-black'>
                        Treinamento da NR - 33 trabalhador autoriza e vigia</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/7-o-treinamento-de-trabalho-em-altura" className='text-black'>
                        O Treinamento de Trabalho em Altura</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/8-seguranca-do-trabalho-em-altura" className='text-black'>
                        Segurança do Trabalho em Altura</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 ml-4 md:ml-8 lg:ml-8">
                <div className="semmarginbotton">
                    <div className="clearflix">
                        <div className='relative mt-0'>
                        <div className="entry-image alignleft">
                        <Image src={Treinamento09} alt=""/>
                        </div>
                        <div><span className='font-bold '>
                        DEFINIÇÃO
                        </span></div>
                        <div><br/></div>
                        <div>A NR 05 é uma norma regulamentadora que trata especificamente de todos os aspectos relacionados à Comissão Interna de Prevenção de Acidentes – CIPA. Dessa forma, essa NR estipula todas as regras, condições e demais detalhes que devem ser obedecidos pelas empresas e trabalhadores envolvidos na CIPA.</div>       
                        <div><br/></div>    
                        <div><span className='font-bold '>
                        OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>Identificar perigos existentes no ambiente de trabalho capazes de comprometer a segurança e causar danos à integridade física e à saúde do trabalhador, sugerindo medidas de controle e propondo soluções e implementando as medidas solicitadas. </div>
                        <div><br/></div>
                        <div><span className='font-bold'>
                        PÚBLICO ALVO
                        </span></div>
                        <div><br/></div>
                        <div>Todas as empresas que possuem trabalhadores contratados pela CLT (Consolidação das Leis Trabalhistas). Caso a empresa não tenha enquadramento para obrigatoriedade, deverá treinar um designado.</div>
                        <div><br/></div>
                        <div><span className='font-bold'>
                        PROGRAMA (PREVISTO NA NR 05)
                        </span></div>
                        <div><br/></div>
                        <ul style={listStyle}>
                        <li className='-ml-4'>Estudo do ambiente, das condições de trabalho, bem como dos riscos originados do processo produtivo;</li>
                        <li className='-ml-4'>Noções sobre acidentes e doenças relacionadas ao trabalho decorrentes das condições de trabalho e da exposição aos riscos existentes no estabelecimento e suas medidas de prevenção;</li>
                        <li className='-ml-4'>Metodologia de investigação e análise de acidentes e doenças relacionadas ao trabalho;</li>
                        <li className='-ml-4'>Princípios gerais de higiene do trabalho e de medidas de prevenção dos riscos;</li>
                        <li className='-ml-4'>Noções sobre as legislações trabalhista e previdenciária relativas à segurança e saúde no trabalho;</li>
                        <li className='-ml-4'>Noções sobre a inclusão de pessoas com deficiência e reabilitados nos processos de trabalho;</li>
                        <li className='-ml-4'>Organização da CIPA e outros assuntos necessários ao exercício das atribuições da Comissão;</li>
                        <li className='-ml-4'>Prevenção e combate ao assédio sexual e a outras formas de violência no trabalho. (</li>
                        </ul>
                        <div><br/></div>
                        <div><span className='font-bold '>
                        CAMPO DE APLICAÇÃO
                        </span></div>
                        <div><br/></div>
                        <div>
                        As organizações e os órgãos públicos da administração direta e indireta, bem como os órgãos
                        dos Poderes Legislativo, Judiciário e Ministério Público, que possuam empregados regidos pela
                        Consolidação das Leis do Trabalho - CLT, devem constituir e manter CIPA.
                        </div>
                        <div>Nos termos previstos em lei, aplica-se o disposto nesta NR a outras relações jurídicas de trabalho.</div>
                        <div>  
                            <br/>
                        </div>
                        <div>  
                            <span className='font-bold'>CARACTERÍSTICAS GERAIS</span>
                        </div>
                        <div> 
                            <br/>
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Carga horária: De 8 a 20 horas
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Horário: A combinar
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Validade: 01 anos
                        </div>
                        <div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="clear"></div>
        </div>       
    </div>
    </div>
   </section>
        <Final/>
        </main>
        </>
    )
}