import Image from 'next/image';
import Logo from '../../public/AUDMED LOGOTIPO.png';
export default function Navbar(){
    return(
<>
<header>
  <Image src={Logo} alt="Audmed Logo" />    
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="about.html">A Audmed</a></li>
    <li><a href="service.html">Serviços</a></li>
    <li><a href="training.html">Treinamentos</a></li>
    <li><a href="blog.html">Blog</a></li>
    <li><a href="contact.html">Contato</a></li>
    <li className="li"><a href="https://sistema.soc.com.br/WebSoc/">Área do Cliente</a></li>
  </ul>
</header>
</>
    )
}