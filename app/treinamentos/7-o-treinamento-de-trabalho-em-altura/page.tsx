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
                        <div>O Treinamento de Trabalho em Altura aborda os requisitos e as medidas de proteção as atividades realizadas em altura, com base na NR 35 envolvendo o planejamento, organização e a execução, de forma a garantir a segurança e a saúde dos trabalhadores envolvidos direta ou indiretamente.</div>    
                        <div><br/></div>  
                        <div>Trabalho em altura caracteriza-se como atividades executadas acima de 2,00 m (dois metros) do nível inferior, onde haja risco de queda.
                        </div>  
                        <div><br/></div>
                        <div>O curso de aperfeiçoamento profissional NR-35 - Segurança nas Atividades com Trabalho em Altura - Inicial tem por objetivo conscientizar e desenvolver habilidades básicas para trabalhos seguros em alturas, garantindo a integridade física e a saúde dos envolvidos nas atividades.
                        </div>
                        <div><br/></div>
                        <div><span className='font-bold mt-5'>
                        PÚBLICO ALVO
                        </span></div>    
                        <div><br/></div>    
                        <div>Indivíduos sem nenhuma experiência e cuja realidade do trabalho em altura seja de baixa complexidade.</div>    
                        <div><br/></div>    
                        <div><span className='font-bold'>
                        REQUISITOS
                        </span></div>  
                        <div><br/></div>  
                        <div> 
                            - 
                        <span className='whitespace-pre'>	</span>
                        O aluno deverá, no início do curso, ter no mínimo 18 anos de idade.
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                        O aluno deverá ter completado a 4ª série do Nível Fundamental.
                        </div>
                        <div> 
                            <br/>
                        </div>
                        <div>  
                            <span className='font-bold'>PROGRAMA:</span>
                        </div>
                        <div>   
                            <br/>
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            NR-35;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Objetivo;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Campo de aplicação;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Responsabilidades;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Normas relacionadas;
                        </div>     
                        <div><br/>
                        </div>
                        <div>  
                            <span className='font-bold'>TRABALHOS EM ALTURA</span>
                            </div>
                            <div>   
                                <br/>
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Definição;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Tipos Acidentes;
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Fator de queda;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Riscos e perigos;
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Medidas de controle;
                            </div> 
                        <div>   
                            <br/>
                        </div>                   
                        <div>  
                            <span className='font-bold'>DOCUMENTAÇÃO</span>
                            </div>
                            <div>   
                                <br/>
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Procedimento operacional;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Análise de riscos;
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Permissão de trabalho;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Plano de atendimento emergencial;
                            </div>
                            <div><br/></div>                
                        <div>  
                            <span className='font-bold'>CONDIÇÃO IMPEDITIVA</span>
                            </div>
                            <div>   
                                <br/>
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Principais condições impeditivas;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Suspensão de atividades iniciadas;
                            </div>
                            <div><br/></div>
                        <div>  
                            <span className='font-bold'>SISTEMA DE PROTEÇÂO DE QUEDAS - SPQ</span>
                            </div>
                            <div>   
                                <br/>
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Função do SPQ;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Responsabilidades;
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Zona Livre de Queda - ZLQ;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Fator de Queda;
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Sistema de Proteção Coletiva Contra Quedas - SPCQ;
                            </div> 
                        <div>   
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Sistema de Proteção Individual Contra Quedas - SPIQ;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                SPIQ - Equipamentos de Proteção Individual (EPI);
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                SPIQ - Equipamentos auxiliares e acessórios;
                            </div>
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                SPIQ - Recebimento, inspeção e uso dos elementos do SPIQ;
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Tipos de bloqueios e sinalização de segurança;
                            </div> 
                            <div>     - 
                                <span className='whitespace-pre'>	</span>
                                Noções em situações de emergência e primeiros socorros;
                            </div> 
                        <div>   
                            <br/>
                        </div>
                        <div>  
                        <span className='font-bold'>IN COMPANY</span>
                        </div>
                        <div>   
                            <br/>
                        </div>
                        <div> 
                            Treinamentos oferecidos nas instalações do próprio cliente que se adéquam as reais necessidades de trabalho.
                        </div>
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
                            Carga horária: 08 horas - 01 dia
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Horário: Das 08:00 às 16:00 horas - 01 hora de almoço
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Validade: 02 anos
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