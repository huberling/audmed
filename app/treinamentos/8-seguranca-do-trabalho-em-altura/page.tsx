"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Treinamento08 from '../../../public/Treinamento8.jpg'

export default function Treinamento8(){
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
            Trabalho em Altura                
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
                        <Image src={Treinamento08} alt=""/>
                        </div>
                        <div><span className='font-bold'>
                            OBJETIVO
                        </span></div>
                        <div><br/></div> 
                        <div>A NR 35 é uma norma regulamentadora, que versa sobre padrões de segurança para o trabalho em altura, ela garante que nenhum trabalho coloque em risco a vida e a integridade dos funcionários. </div>    
                        <div><br/></div>  
                       
                        <div><br/></div>
                        <div><span className='font-bold mt-5'>
                        PÚBLICO ALVO
                        </span></div>    
                        <div><br/></div>    
                        <div>Engenheiros, Técnicos de segurança do trabalho, profissionais da área de segurança e profissionais envolvidos com trabalhos em altura em geral.</div>    
                        <div><br/></div>    
                        <div>  
                            <span className='font-bold'>PROGRAMA (PREVISTO NA NR 35)</span>
                        </div>
                        <div>   
                            <br/>
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Normas e regulamentos aplicáveis ao trabalho em altura;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Planejamento, organização e metodologia para trabalho em altura;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            AR- Análise de Riscos e Condições Impeditivas;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Riscos de acidentes típicos em trabalho em altura (escadas, rampas e passarelas e etc.);
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Equipamentos de Proteção Individual para trabalho em altura: seleção, inspeção, conservação e limitação de uso;
                        </div>     
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Condutas em situações de emergência, incluindo noções de técnicas de resgate e de primeiros socorros.
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Segurança na movimentação e transporte de materiais e pessoas;
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Riscos de acidentes típicos em trabalho em altura (escadas, rampas e passarelas e etc.);
                        </div>    
                        <div><br/>
                        </div>  
                        <div><span className='font-bold'>
                        OBRIGAÇÔES DO EMPREGADOR
                        </span></div>  
                        <div><br/></div>  
                        <div> 
                            - 
                        <span className='whitespace-pre'>	</span>
                        Implementar as medidas de proteção especificadas nas normas regulamentares;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Estabelecer procedimentos operacionais padrão para as operações de alta altitude da empresa;
                        </div>
                        <div> 
                            - 
                        <span className='whitespace-pre'>	</span>
                        Cumprir as normas relativas à autorização de trabalhadores para o exercício das atividades;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Pré-avaliar as condições do local, planejar e implementar medidas de segurança;
                        </div>
                        <div> 
                            - 
                        <span className='whitespace-pre'>	</span>
                        Antes de tomar as medidas de proteção necessárias, certifique-se de que nenhuma operação em alta altitude seja iniciada;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Sempre que um novo risco surgir e não puder ser eliminado imediatamente, suspenda o trabalho;
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
   </div>
        </section>
        <Final/>
        </main>
        </>
    )
}