import React from 'react'

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

export default () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/54729353?s=460&u=ec59ca16f3e85240f9caaeabf78ea4c3b5510a40&v=4" alt="Wesley de Souza"/>
                <div>
                    <strong>Wesley de Souza</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusisasta das melhores tecnologias de quimica avançada.
                <br/> <br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vidas pessoas através de expêricencias. mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    entrar em contato
                </button>
            </footer>
        </article>
    )
}