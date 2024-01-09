"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nr35 from '../../../public/NR35.jpg'

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
                        <Link href="/treinamentos/nr-05-Comissao-Interna-de-Prevencao-de-Acidentes-e-Assedio" className="text-black"><div>
                        Comissão Interna de Prevenção de Acidentes e Assédio</div></Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-06-Equipamento-de-Protecao-Individual" className='text-black'>
                        Equipamento de Proteção Individual(EPI)</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-10-Seguranca-em-Instalacoes-Eletricas" className='text-black'>
                        Segurança em Instalações Elétricas</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-11-Operacao-em-Empilhadeira" className='text-black'>
                        Operação em Empilhadeira</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-12-Adequacao-de-Maquinas" className='text-black'>
                        Adequação de Máquinas</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-13-Vasos-de-Pressao" className='text-black'>
                        Vasos de Pressão</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-17-Ergonomia-AGP-AET" className='text-black'>
                        Ergonomia / AGP / AET</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-18-Seguranca-e-Saude-no-Trabalho-na-Industria-da-Construcao" className='text-black'>
                        Segurança e Saúde no Trabalho na Industria da Construção</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-23-Brigada-de-Incendio" className='text-black'>
                        Brigada de Incêndio</Link>
                        </li>
                        <li className='mb-2 ml-5 md:ml-0 lg:ml-0 mr-8 md:mr-8 lg:mr-8 '>
                        <Link href="/treinamentos/nr-33-Espaco-Confinado" className='text-black'>
                        Esopaço Confinado</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-10 ml-4 md:ml-8 lg:ml-8">
                <div className="semmarginbotton">
                    <div className="clearflix">
                        <div className="relative mt-0">
                        <div className="entry-image alignleft">
                        <Image src={Nr35} alt=""/>
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