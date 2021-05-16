// Assets
import { useEffect } from 'react';
import logo from '../../assets/logo.png'
import './styles.css'

export default function Home() {

    function assistant() {
    }

    useEffect(() => {
        assistant()
    }, [])


    return (
        <div class="container">
            <div class="containerHeader">
                <img src={logo} alt="Logo Doc On" />
                <h1>Olá, seja bem-vindo ao assistente virtual Doc On</h1>
            </div>
            <div class="containerFooter">
                <h2>Por meio de nosso assistente você poderá nos conhecer mais, clique no ícone no canto inferior
                direito e
                aproveite!</h2>
            </div>
        </div>
    )
}