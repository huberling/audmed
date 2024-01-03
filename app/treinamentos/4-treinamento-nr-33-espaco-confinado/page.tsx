"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Treinamento04 from '../../../public/Treinamento4.jpg'

export default function Treinamento4(){
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
        Vasos de Pressão          
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
                        <div className='relative mt-0'>
                        <div className="entry-image alignleft">
                        <Image src={Treinamento04} alt=""/>
                        </div>
                        <div><span className='font-bold '>
                        OBJETIVO
                        </span></div>
                        <div><br/></div>
                        <div>O objetivo desta Norma Regulamentadora - NR é estabelecer requisitos mínimos
                            para a gestão da integridade estrutural de caldeiras, vasos de pressão, suas tubulações
                            de interligação e tanques metálicos de armazenamento nos aspectos relacionados à
                            instalação, inspeção, operação e manutenção, visando a segurança e saúde dos
                            trabalhadores.
                        </div>       
                        <div><br/></div>
                        
                        <div><span className='font-bold '>
                        PÚBLICO ALVO
                        </span></div>
                        <div><br/></div> 
                        <div>Operadores de Cadeiras, Operadores de Unidades de Processos, técnicos, engenheiros, gerentes e demais profissionais que atuam nas áreas de projeto, fabricação, montagem, operação, manutenção e inspeção de vasos e caldeiras.</div>    
                        <div><br/></div>    
                        <div>  
                            <span className='font-bold'>PROGRAMA (PREVISTO NA NR 13)</span>
                        </div>
                        <ul style={listStyle}>
                        <li className='-ml-4'>Pressão atmosférica;</li>
                        <li className='-ml-4'>Pressão Interna de um vaso;</li>
                        <li className='-ml-4'>Pressão manométrica, pressão relativa e pressão absoluta;</li>
                        <li className='-ml-4'>Unidades de pressão;</li>
                        <li className='-ml-4'>Calor e temperatura;</li>
                        <li className='-ml-4'>Noções gerais: o que é calor, o que é temperatura;</li>
                        <li className='-ml-4'>Modo de transferência de calor;</li>
                        <li className='-ml-4'>Calor específico e calor sensível</li>
                        <li className='-ml-4'>Transferência de calor a temperatura constante;</li>
                        <li className='-ml-4'>Vapor saturado e vapor superaquecido.</li>
                        </ul>            
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
                            Validade: 01 ano
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