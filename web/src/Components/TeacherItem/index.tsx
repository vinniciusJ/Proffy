import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/54449253?s=460&u=f6cd29bba493bab8aaf2e9eee23509dde66b37d1&v=4" alt="Vinicius Jimenez"/>
                <div>
                    <strong>Vinicius Jimenez</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/> <br/>
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>
            <footer>
                <p>Preço/hora <strong>R$ 70,00</strong></p>
                <button type="submit">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
         </article>
    )
}

export default TeacherItem