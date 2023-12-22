"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../components/navbar';
import Final from '../../components/final';
import Image from 'next/image';
import Link from 'next/link';


export default function eSocial(){
    return(
        <>
        <Navbar/>
        <section id="page-title">
            <div className="sobre">
            <h1 className="container">
                E-Social
            </h1> 
            <ol className="breadcrumb ">
            <li>
                <Link href="/" className='hidden md:inline-block lg:inline-block'>Home</Link>
            </li>
            <p className="pl-1 pr-1 text-gray-500 hidden md:inline-block lg:inline-block">/</p>
            <li className="ads hidden md:inline-block lg:inline-block">
                    E-Social 
                </li>
            </ol>
            </div>
        </section>
        <Final/>
        </>
    )
}