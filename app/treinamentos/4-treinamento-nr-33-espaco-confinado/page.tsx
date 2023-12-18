"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';

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
        Treinamento para formação NR-33 Espaço Confinado               
        </li>
            </ol>
            </div>
    </section>
    <main id="descricao">            
   <section id="content"  className="mb-0">
    <div className="content-padding">
        <div className="container roww clearflix">
            <div className="col-md-2 -ml-8">
                <h4 className='font-bold text-xl ml-3'>Outros Treinamentos:</h4>
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
                        <li className='mb-2 mr-8 '>
                        <Link href="/treinamentos/9-comissao-interna-de-prevencao-de-acidentes-cipa" className='text-black'>
                        Comissão Interna de Prevenção de Acidentes - CIPA</Link>
                        </li>
                    </ul>
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