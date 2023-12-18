"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Contatos(){
    return(
        <>
        <Navbar/>
        <section id="page-title">
            <div className="sobre">
            <h1 className="container">
                Contato
            </h1> 
            <ol className="breadcrumb">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <p className="pl-1 pr-1 text-gray-400">/</p>
                <li className="ads">
                    Contato 
                </li>
            </ol>
            </div>
        </section>
        <main>
        <section id="mapa">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.2729771629397!2d-47.21388598955873!3d-23.087100979041494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b4a33a21482d%3A0x71d7f3a923ec9ba4!2sCl%C3%8Dnica%20AUDMED!5e0!3m2!1spt-BR!2sbr!4v1698430011245!5m2!1spt-BR!2sbr" z-index="3" width="100%" height="470" className="border-none" loading="lazy"></iframe>
                </div>
            </section>
            <section id="contatos" className="container " >
                <div className="title">
                    <h2>Entre em contato conosco</h2>
                </div>
                <div className="formpost w-11/12" >
                    <form action="envio_email.php" method="post" className="roww">
                        <div className='form-group col-md-3 ml-6'>
                            <label htmlFor="nome" className='font-semibold'>Nome:</label>
                            <input type="text" className="form-control" id="nome" name="nome" aria-describedby="telHelp" placeholder="Insira seu nome" />
                        </div>
                        <div className='form-group col-md-3 ml-10'>
                            <label htmlFor="email" className='font-semibold'>Email:</label>
                            <input type="email" className="form-control" name="email" id="email" aria-describedby="nomeHelp" placeholder="Insira seu Email" />
                        </div>
                        <div className='form-group col-md-3 ml-10'>
                            <label htmlFor="telefone" className='font-semibold'>Telefone:</label>
                            <input type="text" className="form-control" id="telefone" name="telefone" aria-describedby="telHelp" placeholder="Insira seu numero de telefone" />
                        </div>
                        <div className="form-group col-md-10 ml-6 mt-2">
                            <label htmlFor="assunto" className='font-semibold'>Assunto:</label>
                            <input type="text" className="form-control" id="assunto" name="assunto" aria-describedby="telHelp" placeholder="Insira o assunto a ser tratato"/>
                        </div>                    
                        <div className="form-group col-md-10 ml-6 mt-2 mb-4">
                            <label htmlFor="mensagem" className='font-semibold'>Mensagem:</label>
                            <textarea className="form-control" name="mensagem" id="mensagem" aria-describedby="telHelp" rows={3} placeholder="Insira sua mensagem"></textarea>
                        </div>   
                    </form>
                    <div>
                        <input type="submit" value={"Enviar"} className="col-md-1 button ml-3 "/>
                      </div>  
                    </div>
                    <div className="endereco end col-md-2">
                    <address >
                        <strong className='font-semibold'><FontAwesomeIcon icon={faLocationDot} className='mr-1'/>Endereço:</strong>
                        <br />
                        Rua Ademar de Barros, 491 
                        - Centro - 13330-130 - 
                        Indaiatuba/SP
                    </address>
                    <address>
                        <strong className='font-semibold'><FontAwesomeIcon icon={faPhone} className='mr-1'/>Telefone:</strong>
                        <Link href={'tel:+55193894-5066'}>+55 (19) 3894-5066</Link>
                    </address>
                    <address>
                        <strong className='font-semibold'><FontAwesomeIcon icon={faEnvelope} className='mr-1'/>Email:</strong>
                        adm@audmed.com.br
                    </address>
                    </div>
                    </section>
        </main>
        <Final/>
        </>
    )
}