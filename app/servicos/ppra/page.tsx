"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Foto from '../../../public/servicosfts/ppra.jpg'


export default function PpraService(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'square',
      }; 
    return(
        <>
        <Navbar/>
        <section id="page-title">
        <div className="sobre">
        <h1 className="container">Serviços</h1>
        <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
               <Link href="/servicos">Serviços</Link> 
            </li>
            <p className="pl-1 pr-1 text-gray-400 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                PPRA - Programa de Prevenção de Riscos Ambientais            
            </li>
        </ol>
        </div>
    </section>  
    <main id="descricao">            
        <section id="content" className="mb-0">
            <div className=" content-padding">
                <div className="container roww clearflix">
                <div className="col-md-2 md:-ml-8 lg:-ml-8">
                        <h4 className="font-bold text-xl">Outros Serviços:</h4>
                        <div className="outrosservice">
                            <ul style={listStyle} className="text-sm">
                                <li className='mb-2'>
                                    <Link href="/servicos/ltcat" className='text-black'>LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</Link>
                                </li>
                                <li>
                                    <Link href="/servicos/pcmso" className='text-black'>PCMSO - Programa de Controle Médico de Saúde Ocupacional</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-10 ml-2">
                        <div className="semmarginbotton">
                            <div className="clearflix">
                                <div className="relative mt-0 ">
                                <div className="entry-image alignleft">
                                <Image src={Foto} alt="" width={500}/>
                                </div>
                                <div >O Programa de Prevenção de Riscos Ambientais (NR-9) (PPRA) é um conjunto de ações visando à preservação da saúde e da integridade física dos trabalhadores, através da antecipação, reconhecimento, avaliação e consequente controle da ocorrência de riscos ambientais existentes ou que venham a existir no ambiente de trabalho, tendo em consideração a proteção do meio ambiente e dos recursos naturais.</div>                            
                    <div><br/></div>    
                    <div>A legislação do Ministério do Trabalho e Emprego (MTE) obriga todas as empresas públicas e privadas a elaborarem e implementarem o PPRA, além de manterem um documento base de registro dessas ações, que incluem:</div>    
                    <div><br/></div>
                    <div>1.
                    <span className="white-space:pre;"></span>
                    Levantamento dos riscos;
                    </div>  
                    <div>2.
                    <span className="white-space:pre;"></span>
                    Planejamento anual com estabelecimento de metas e prioridades;
                    </div> 
                    <div>3.
                    <span className="white-space:pre;"></span>
                    Cronogramas;                                 
                    </div> 
                    <div>4.
                    <span className="white-space:pre;"></span>
                    Estratégia e metodologia de ação;
                    </div>
                    <div>5.
                    <span className="white-space:pre;"></span>
                    Forma do registro, manutenção e divulgação dos dados;
                    </div> 
                    <div>6.
                    <span className="white-space:pre;"></span>
                    Periodicidade e forma de avaliação do desenvolvimento do PPRA.
                    </div>   
                    <div><br/></div>
                    <div>O PPRA - Programa de Prevenção de Riscos Ambientais foi estabelecido pela Secretaria de Segurança e Saúde do Trabalho, do então Ministério do Trabalho, por meio da Norma Regulamentadora (NR-9), Portaria 3214/78.
                    </div>
                    <div><br/></div>
                    <div>São considerados riscos ambientais os agentes físicos, químicos e biológicos e são considerados fatores de riscos ambientais a presença destes agentes em determinadas concentrações ou intensidade.</div>
                <div><br/></div>
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