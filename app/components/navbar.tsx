import Image from 'next/image';
import Logo from '../../public/AUDMED LOGOTIPO.png';
import Link from 'next/link';
export default function Navbar(){
    return(
<>
<header>
  <Image src={Logo} alt="Audmed Logo" />    
  <ul>
    <li><Link className='py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:bg-transparent md:p-0 md:hover:text-green-600' aria-current="page" href={'/'}>Home</Link></li>
    <li><Link className='py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:bg-transparent md:p-0 md:hover:text-green-600' aria-current="page" href={'/sobre'}>A Audmed</Link></li>
    <li><Link className='py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:bg-transparent md:p-0 md:hover:text-green-600' aria-current="page" href={'/servicos'}>Serviços</Link></li>
    <li><Link className='py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:bg-transparent md:p-0 md:hover:text-green-600' aria-current="page" href={'/treinamentos'}>Treinamentos</Link></li>
    <li><Link className='py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:bg-transparent md:p-0 md:hover:text-green-600' aria-current="page" href={'/blog'}>Blog</Link></li>
    <li><Link className='py-2 pl-3 pr-4 transition ease-in duration-100 hover:-translate-y-1 flex flex-row gap-1 rounded md:bg-transparent md:p-0 md:hover:text-green-600' aria-current="page" href={'/contatos'}>Contato</Link></li>
    <li className="li"><Link href={"https://sistema.soc.com.br/WebSoc/"} target="_blank">Área do Cliente</Link></li>
  </ul>
</header>
</>
    )
}