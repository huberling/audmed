"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Treinamento01 from '../../../public/Treinamento1.jpg';

export default function Treinamento1(){
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
                    Treinamento para formação NR-33 Supervisor de espaço confinado
                </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content"  className="mb-0">
    <div className="content-padding">
        <div className="container roww clearflix">
        <div className="col-md-2 md:-ml-8 lg:-ml-8">
                <h4 className='font-bold text-xl ml-3'>Outros Treinamentos:</h4>
                <div className="outrosservice">
                    <ul style={listStyle} className="text-sm">
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
                        <Image src={Treinamento01} alt="" />
                        </div>
                        <div><span className='font-bold'>
                            OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>Introduzir, aprimorar e expandir conhecimentos e técnicas necessárias a uma sólida gestão dos trabalhos em espaço confinado em termos burocráticos, legais e práticos, conforme NR 33.</div>    
                        <div><br/></div>    
                        <div><span className="font-bold mt-5">
                        PÚBLICO ALVO
                        </span></div>    
                        <div><br/></div>    
                        <div>Indivíduos com funções gestão, monitoramento e coordenação de grupos e que possuam experiência trabalhos em espaço confinado.
                        </div>    
                        <div><br/></div>    
                        <div><span className='font-bold'>
                            PROGRAMA (PREVISTO NA NR 33)
                        </span></div>  
                        <div><br/></div>  
                        <div> 
                            - 
                        <span className='whitespace-pre'>	</span>
                        Definições
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Reconhecimento, avaliação e controle de riscos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Funcionamento de equipamentos utilizados;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Procedimentos e utilização da Permissão de Entrada e Trabalho;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Noções de resgate e primeiros socorros;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Identificação dos espaços confinados;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Critérios de indicação e uso de equipamentos para controle de riscos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Conhecimentos sobre práticas seguras em espaços confinados;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Legislação de segurança e saúde no trabalho;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Programa de proteção respiratória;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Área classNameificada;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Operações de salvamento.
                        </div>
                        <div> 
                            <br/>
                        </div>
                        <div>  
                            <span className="font-bold">E-MAIS:</span>
                        </div>
                        <div>   
                            <br/>
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Estatísticas;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Considerações iniciais e durante o trabalho;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Principais motivos de acidentes em espaço confinado;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Normas e aspectos legais;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            NBR 14606 Postos de Serviço - Entrada em Espaço Confinado;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            NBR 14787 – Espaço Confinado – Prevenção de Acidentes;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Funcionamento de equipamentos utilizados;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Definição, classNameificação, exigências e obrigações dos EPIs;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Cuidado com os equipamentos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Apresentação e utilização de equipamentos de segurança;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Metodologia de trabalho e posicionamento.
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Regras de segurança;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Definição dos espaços confinados;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Identificação dos espaços confinados;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Cadastramento e mapeamento;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Métodos de avaliação para cada contexto;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Riscos e medidas de controle;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Ações para entrada e permissões;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Metodologia de trabalho e posicionamento;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Exaustão e ventilação;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Testes atmosféricos com utilização de detector de gases;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Definição, classNameificação, exigências e obrigações dos EPIs;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Cuidado com os equipamentos;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Apresentação e utilização de equipamentos de segurança;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Ancoragens;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Técnicas de resgate;
                        </div>
                        <div>     - 
                            <span className='whitespace-pre'>	</span>
                            Primeiros socorros.
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
                            Carga horária: 40 horas
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
            </div>
            <div className="clear"></div>
        </div>       
    </div>
   </section>
        <Final/>
        </main>
        </>
    )
}