"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Treinamento07 from '../../../public/Treinamento7.jpg'

export default function Treinamento7(){
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
                Treinamento de Trabalho em Altura
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
                        <Link href="/treinamentos/8-seguranca-do-trabalho-em-altura" className='text-black'>
                        Segurança do Trabalho em Altura</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/9-comissao-interna-de-prevencao-de-acidentes-cipa" className='text-black'>
                        Comissão Interna de Prevenção de Acidentes - CIPA</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 ml-4 md:ml-8 lg:ml-8">
                <div className="semmarginbotton">
                    <div className="clearflix">
                        <div className="relative mt-0">
                        <div className="entry-image alignleft">
                        <Image src={Treinamento07} alt=""/>
                        </div>
                        <div><span className='font-bold'>
                            OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>Esta Norma Regulamentadora visa estabelecer as diretrizes e os requisitos que permitam a adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, de modo a proporcionar conforto, segurança, saúde e desempenho eficiente no trabalho.</div>
                        <div><br/></div>
                        <div><span className='font-bold mt-5'>
                        PÚBLICO ALVO
                        </span></div>    
                        <div><br/></div>    
                        <div>Todos os funcionários de empresas que exercem o trabalho em atividades de teleatendimento/telemarketing, construção civil, comércio em geral, industria, logística e transportes e terminais portuários.</div>    
                        <div><br/></div>
                        <div>  
                            <span className='font-bold'>PROGRAMA(PREVISTO NA NR-17)</span>
                        </div>
                        <div>   
                            <br/>
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Conceitos e definições NR17- Ergonomia;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Fundamentos de Biomecânica;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Legislação;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Patologias do Trabalho;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Educação postural no trabalho;
                        </div>     
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Transporte Manual de cargas;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Ginástica Laboral
                        </div>     
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Soluções Ergonômicas;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Métodos preventivos.
                        </div>     
                        <div><br/>
                        </div>              
                </div>
            </div>
            <div className="clear"></div>
        </div>       
    </div>
   </div>
   </div>
        </section>
        <Final/>
        </main>
        </>
    )
}