"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import LogoClinica from '../../public/AUDMED LOGOTIPO.png'
import { FacebookIcon, InstagramIcon } from 'lucide-react';

export default function Final(){
    const listStyle:React.CSSProperties = {
        listStyleType: 'circle',
      };
    return(
        <>
        <section id="final" className="col-md-6">
        <div className="roww">
        <div className="col-md-3 mt-8 mb-16 ml-14">
            <Image className='w-44 h-20 mt-16 inline-block ml-16' src={LogoClinica} alt="Logo Clinica"/>
    
        </div>
        <div className="col-md-3 mt-16 mb-16 font-family: 'Lato', sans-serif">
            <h4>
                <b className='ml-8 md:ml-5 lg:ml-5'>Informações de contato</b>
            </h4>
            <p className='md:mr-0 lg:mr-0 mr-6 ml-8 md:ml-5 lg:ml-5'><FontAwesomeIcon icon={faEnvelope} className="mr-1 ml-1" ></FontAwesomeIcon>E-mail: adm@audmed.com.br</p>
            <p className='md:mr-0 lg:mr-0 mr-6 ml-8 md:ml-5 lg:ml-5'><FontAwesomeIcon icon={faPhone} className="mr-1 ml-1"></FontAwesomeIcon>Telefone:(19) 3894-5066</p>
            <p className='md:mr-0 lg:mr-0 mr-6 ml-8 md:ml-5 lg:ml-5'><FontAwesomeIcon icon={faWhatsapp} className="mr-1 ml-1" ></FontAwesomeIcon>Whatsapp:(19) 99249-2716</p>
            <p className='md:mr-0 lg:mr-0 mr-6 ml-8 md:ml-5 lg:ml-5'><FontAwesomeIcon icon={faLocationDot} className="mr-1 ml-1"></FontAwesomeIcon>Endereço: Rua Ademar de Barros, 491 - Centro - 13330-130 - Indaiatuba/SP </p>
          
        </div>
        <div className="col-md-3 mt-16 mb-16 font-family: 'Lato', sans-serif">
            <h4><b className='ml-8 md:ml-5 lg:ml-5'>Siga a Audmed</b></h4>
            <p className='md:mr-0 lg:mr-0 mr-6 ml-8 md:ml-5 lg:ml-5'>Também postamos coisas legais aqui. Siga a AUDMED nas redes sociais.</p>
            <div className='roww'> 
            <Link href="https://www.facebook.com/clinicaaudmed1"><FacebookIcon size={72} className='ml-20 md:ml-10 lg:ml-10 md:mt-0 lg:mt-0 mt-4 md:mb-0 lg:mb-0 -mb-12'/></Link>
            <Link href="https://www.instagram.com/audmed.indaiatuba/" ><InstagramIcon size={72} className='ml-20 md:ml-10 lg:ml-10 md:mt-0 lg:mt-0 mt-4 md:mb-0 lg:mb-0 -mb-8'/></Link>
            </div>
        </div>
        <div className="navegacao col-md-2 mt-16 mb-16">
            <h4><b className='ml-8 md:ml-5 lg:ml-5'>Navegação</b></h4>
            <ul style={listStyle} className="ml-8 md:ml-0 lg:ml-0">
            <li>
            <Link  href="/">Home</Link>
            </li>
            <li>
            <Link href="/sobre">A Audmed</Link>
            </li>
            <li>
            <Link href="/serviços">Serviços</Link>
            </li>
            <li>
            <Link href="/treinamentos">Treinamentos</Link>
            </li>
            <li>
            <Link href="https://sistema.soc.com.br/WebSoc/">Área do Cliente</Link>
            </li>
            <li>
            <Link href="b/blog">Blog</Link>
            </li>
            <li>
            <Link href="contatos">Contato</Link>
            </li>
            </ul>
        </div>
        </div>
    </section>
 
        </>
    )
}