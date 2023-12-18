"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navbar';
import Final from '../components/final';
import Image from 'next/image';
import Link from 'next/link';


export default function Blog(){
    return(
        <>
        <Navbar/>
        <section id="page-title">
            <div className="sobre">
            <h1 className="container">
                Blog
            </h1> 
            <ol className="breadcrumb">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <p className="pl-1 pr-1 text-gray-400">/</p>
                <li className="ads">
                    Blog 
                </li>
            </ol>
            </div>
        </section>
        <main id="descricao" className="container">
        </main>
        <Final/>
        </>
    )
}