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
            <ol className="breadcrumb">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <p className="pl-1 pr-1 text-gray-500">/</p>
                <li className="ads">
                   <Link href="/treinamentos"> Treinamentos</Link>
                </li>
                <p className="pl-1 pr-1 text-gray-400">/</p>
                <li className="ads">
                Comissão Interna de Prevenção de Acidentes - CIPA              
                  </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content" className='mb-0'>
    <div className="content-padding">
        <div className="container roww clearflix">
            <div className="col-md-2 -ml-8">
                <h4 className='font-bold text-xl'>Outros Treinamentos:</h4>
                <div className="outrosservice">
                <ul style={listStyle} className="text-sm">
                        <li className="mb-2 mr-8 ">
                        <Link href="/treinamentos/1-treinamento-para-formacao-nr-33-supervisor-de-espaco-confinado" className="text-black"><div>
                        Treinamento para formação Supervisor de Espaço Confinado</div></Link>
                        </li>
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/2-treinamento-de-reciclagem-da-nr-33-trabalhador-autorizado-e-vigia" className='text-black'>
                        Treinamento de reciclagem da NR-33 trabalhador autorizado e vigia</Link>
                        </li>
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/3-treinamento-para-formacao-nr-33-trabalhador-autorizado-e-vigia" className='text-black'>
                        Treinamento para formação NR-33 trabalhador autorizado e vigia</Link>
                        </li>
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/4-treinamento-nr-33-espaco-confinado" className='text-black'>
                        Treinamento NR-33 Espaço Confinado</Link>
                        </li>
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/5-treinamento-para-formacao-supervisor-de-espaco-confinado" className='text-black'>
                        Treinamento para formação Supervisor de Espaço Confinado</Link>
                        </li>
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/6-treinamento-da-nr-33-trabalhador-autoriza-e-vigia" className='text-black'>
                        Treinamento da NR - 33 trabalhador autoriza e vigia</Link>
                        </li>
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/7-o-treinamento-de-trabalho-em-altura" className='text-black'>
                        O Treinamento de Trabalho em Altura</Link>
                        </li>
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/8-seguranca-do-trabalho-em-altura" className='text-black'>
                        Segurança do Trabalho em Altura</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 ml-8">
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
                        <div>A brigada de incêndio é um grupo organizado de pessoas voluntárias ou não, treinadas e capacitadas para atuar na prevenção, combate a princípio de incêndio, abandono de área e prestação dos primeiros socorros, dentro de uma área pré-estabelecida.</div>       
                        <div><br/></div>    
                        <div>Devido à sua importância, é prevista no âmbito federal pela Lei 6514/77, que dá as diretrizes sobre Segurança e Medicina do Trabalho, regulamentadas pela Portaria 3214/78, e por meio da Norma regulamentadora n°. 23 (NR-23), que trata da proteção contra incêndios. No âmbito estadual e municipal, também existem leis específicas e fiscalizadoras, como o Decreto Estadual 56819/11 do Corpo de Bombeiro do Estado de São Paulo, conforme a NBR 14276/99 da Associação Brasileira de Normas Técnicas (ABNT).
                        </div>    
                        <div><br/></div>    
                     
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