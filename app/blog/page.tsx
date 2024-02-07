"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Blogs from '../../public/blog/esocial.jpg';
import MedicinaOcupacional from '../../public/blog/MedicinaOcupacional.webp';
import ImportanciaEPC from '../../public/blog/ImportanciadoEPC.jpg';
import Insalubridade from '../../public/blog/Insalubridade-SaudeOcupacional.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons/faFolderOpen';


export default function Blog(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'circle',
      };
    return(
        <>
        <Navbar/>
        <section id="page-title">
            <div className="sobre">
            <h1 className="container">
                Blog
            </h1> 
            <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                    Blog 
                </li>
            </ol>
            </div>
        </section>
        <main id="descricao">
        <div className="content-wrap">
        <div className="container clearfix col-md-10">
            <div className="postcontent nobottommargin clearfix w-full md:w-3/4">
                <div className="single-post nobottommargin">
                    <div className="entry clearfix">
                    <div className="entry-image">
                    <Link href="/blog/categorias/saude-ocupacional/cauculo-de-insalubridade"><Image src={Insalubridade} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                    </div>
                    <div className="entry-title">
                            <h2 className='mt-8'>Saiba como calcular o adicional de Insalubridade</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>24 de Janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p>O adicional de insalubridade é um direito do trabalhador que exerce suas atividades em ambientes de risco, o que pode acabar prejudicando sua saúde.</p>
                            <div className="link">
                <Link href="/blog/categorias/saude-ocupacional/cauculo-de-insalubridade" className='text-uppercases'>Saiba mais...</Link>
            </div>
            <div/>
            <div className="clear"></div>
                     <p><br/></p></div>
                            <div className="entry-image">
                                <Link href="/blog/categorias/e-social/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador"><Image src={Blogs} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                            <div className="entry-title">
                            <h2 className='mt-8'>E-Social: obrigação que facilita os direitos do trabalhador</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>11 de Junho de 2019</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin mb-10">
                            <p>Houveram algumas mudanças nas Normas Regulamentadoras (NR). O governo
                            pretende facilitar as NRs e focar na saúde e segurança do trabalhador. 
                            Principalmente, pelo alto índice de acidentes, doenças ocupacionais e 
                            mortes em locais de trabalho no Brasil.</p>
                            <div className="link">
                <Link href="/blog/categorias/e-social/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador" className='text-uppercases'>Saiba mais...</Link>
                </div>
                            <p><br/></p>
                            <div className="clear"></div>
                        </div>
                            <div className="entry-image">
                                <Link href="/blog/categorias/seguranca-do-trabalho/importancia-do-EPC"><Image src={ImportanciaEPC} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                            <div className="entry-title">
                            <h2 className='mt-8'>A importância dos EPC – Equipamento de Proteção Coletivo</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>4 de Janeiro de 2024</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin mb-10">
                            <p>Quando falamos sobre Segurança no Trabalho, falamos sobre o cuidado que deve ter para que os trabalhadores não sofram nenhum tipo de acidente, e com isso, falamos sobre os equipamentos de proteção: EPI e EPC. Os EPI’s são os Equipamentos de Proteção Individual, que são de uso próprio, como capacetes, luvas, roupas, e cada um tem o seu.</p>
                            <div className="link">
                <Link href="/blog/categorias/seguranca-do-trabalho/importancia-do-EPC" className='text-uppercases'>Saiba mais...</Link>
            </div>
                            <p><br/></p>
                            <div className="clear"></div>
                        </div>
                            <div className="entry-image">
                                <Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao"><Image src={MedicinaOcupacional} alt="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" title="Como a medicina ocupacional pode colaborar para o sucesso nas empresas" width={1000}/></Link>
                            </div>
                            <div className="entry-title">
                            <h2 className='mt-8'>Como a medicina ocupacional pode colaborar para o sucesso nas empresas</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>29 de Dezembro de 2023</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin ">
                            <p>Muitas empresas ainda não sabem a dimensão que a medicina ocupacional pode tomar em uma empresa. Colocar esse fator como prioridade é um dos principais pilares para se alcançar o sucesso. Afinal, uma empresa que valoriza seus funcionários e se preocupa com a saúde e bem-estar de todos, é uma empresa bem-sucedida.</p>
                            <div className="link">
                <Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao" className='text-uppercases'>Saiba mais...</Link>
            </div>
                            <p><br/></p>
                            <div className="clear"></div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
            <div className="sidebar nobottommargin col_last clearfix col-md-2">
         
                        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
                            <h4>Categorias</h4>
                            <div className="widget_links ">
                                <ul style={listStyle}>
                                <li><Link href="/blog/categorias/e-social" className='text-black'>e-SOCIAL</Link></li>
                                <li><Link href="/blog/categorias/saude-ocupacional" className='text-black'>Saúde Ocupacional</Link></li>
                                <li><Link href="/blog/categorias/seguranca-do-trabalho" className='text-black'>Segurança do Trabalho</Link></li>
                                </ul>
                            </div>
                        </div>
        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
            <h4 className=''>Posts Recentes</h4>
            <div className="spost clearfix roww">
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/saude-ocupacional/cauculo-de-insalubridade">Saiba como calcular o adicional de Insalubridade</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>24 de janeiro de 2024</li>
                                       </ul>
                                   </div>
                               </div>
            <div className="spost clearfix roww">
                                   
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/seguranca-do-trabalho/importancia-do-EPC">A importância dos EPC – Equipamento de Proteção Coletivo</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>04 de janeiro de 2024</li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="spost clearfix roww">
        <div className="entry-c">
            <div className="entry-title">
        <h4><Link href="/blog/categorias/saude-ocupacional/medicina-ocupacional-colaboracao" className='md:hover:text-blue-500' >Como a medicina ocupacional pode colaborar para o sucesso nas empresas </Link></h4>
        </div>
        <ul className="entry-meta">
        <li>29 de Dezembro de 2023</li>
        </ul>
        </div>
        </div>
        <div className="spost clearfix roww">
                                   
                                   <div className="entry-c">
                                       <div className="entry-title">
                                           <h4><Link href="/blog/categorias/e-social/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador">E-Social: Obrigação que facilita os direitos do trabalhador</Link></h4>
                                       </div>
                                       <ul className="entry-meta">
                                           <li>11 de junho de 2019</li>
                                       </ul>
                                   </div>
                               </div>
                                                    </div>
                    
                </div>
            </div>
        </div>
        
        
        <Final/>
        </main>
        </>
    )
}