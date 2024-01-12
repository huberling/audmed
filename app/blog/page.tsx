"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Image from 'next/image';
import Link from 'next/link';
import Blogs from '../../public/esocial.jpg'
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
                                <Link href="/blog/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador"><Image src={Blogs} alt="eSOCial: obrigação que facilita os direitos do trabalhador" title="eSOCial: obrigação que facilita os direitos do trabalhador" width={1000}/></Link>
                            </div>
                            <div className="entry-title">
                            <h2 className='mt-8'>eSOCial: obrigação que facilita os direitos do trabalhador</h2>
                        </div>
                        <ul className="entry-meta clearfix -ml-5 -mt-8">
                            <li><FontAwesomeIcon icon={faCalendarDays} className="mr-1 "></FontAwesomeIcon>11 de junho de 2019</li>
                            <li><Link href={'https://www.soc.com.br/'}><FontAwesomeIcon icon={faUser} className="mr-1"></FontAwesomeIcon>SOC</Link></li>
                        </ul>
                        <div className="entry-content notopmargin">
                            <p >Houveram algumas mudanças nas Normas Regulamentadoras (NR). O governo
                            pretende facilitar as NRs e focar na saúde e segurança do trabalhador. 
                            Principalmente, pelo alto índice de acidentes, doenças ocupacionais e 
                            mortes em locais de trabalho no Brasil.</p>
                            <div className="link">
                <Link href="/blog/1-esocial-obrigacao-que-facilita-os-direitos-do-trabalhador" className='text-uppercases'>Saiba mais...</Link>
            </div>
                            <p><br/></p>
                            <p>Fonte:<Link href="https://ww2.soc.com.br/2019/06/obrigacao-que-facilita-os-direitos-do-trabalhador/" target="_blank">https://ww2.soc.com.br/2019/06/obrigacao-que-facilita-os-direitos-do-trabalhador/</Link></p>                                   
                            <div className="clear"></div>
                        </div>
                    </div>
                    
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Postado Por: <span><Link href="">SOC</Link></span></h3>
                        </div>
                        <div className="panel-body">
                            <div className="author-image">
                                <Image src={Blogs} alt="SOC" title="SOC" className="img-circle"/>
                            </div>
                                                    </div>
                    </div>
                </div>
            </div>
            
            <div className="sidebar nobottommargin col_last clearfix col-md-2 ">
         
                        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
                            <h4>Categorias</h4>
                            <div className="widget_links ">
                                <ul style={listStyle}>
                                <li><Link href="/blog/categorias/dicas" className='text-black'>Dicas</Link></li>
                                <li><Link href="/blog/categorias/diversos" className='text-black'>Diversos</Link></li>
                                <li><Link href="/blog/categorias/e-social" className='text-black'>e-SOCIAL</Link></li>
                                <li><Link href="/blog/categorias/saude-ocupacional" className='text-black'>Saúde Ocupacional</Link></li>
                                <li><Link href="/blog/categorias/seguranca-do-trabalho" className='text-black'>Segurança do Trabalho</Link></li>
                                </ul>
                            </div>
                        </div>
        <div className="widget clearfix -ml-20 md:-ml-6 lg:-ml-6">
            <h4 className=''>Posts Recentes</h4>
        <div className="spost clearfix roww ">
        <div className="entry-c ">
            <div className="entry-title">
        <h4><Link href="/blog/exames-ocupacionais-obrigatorios" className='md:hover:text-blue-500' >Exames ocupacionais obrigatórios:</Link></h4>
        </div>
        <ul className="entry-meta">
        <li>9 de dezembro de 2020</li>
        </ul>
        </div>
        </div>
                                    <div className="spost clearfix roww">
                                   
                                    <div className="entry-c">
                                        <div className="entry-title">
                                            <h4><Link href="/blog/depressao-10-sinais-para-prestar-atencao-nos-colaboradores">Depressão: 10 sinais para prestar atenção nos colaboradores</Link></h4>
                                        </div>
                                        <ul className="entry-meta">
                                            <li>8 de dezembro de 2020</li>
                                        </ul>
                                    </div>
                                </div>
                                                            <div className="spost clearfix roww">
                                    <div className="entry-c">
                                        <div className="entry-title">
                                            <h4><Link href="/blog/exames-periodicos-entenda-sua-importancia-e-quem-precisa-fazer">Exames periódicos: entenda sua importância e quem precisa fazer</Link></h4>
                                        </div>
                                        <ul className="entry-meta">
                                            <li>12 de novembro de 2020</li>
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