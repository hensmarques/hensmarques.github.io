import React from "react"
import Panel from "./panel"

const About = () => (
    <Panel title="sobre mim">
        <p>Com 26 anos e <strong>7 anos</strong> de experiência na área, tenho trabalhado como <strong>designer</strong>, <strong>front-ender</strong> e <strong>back-ender</strong> em empresas <i>software-house</i>, agências e como <i>freelancer</i>  desde a minha formação técnica em desenvolvimento web.</p>

        <div className="flex flex-wrap mt-8">
            <div className="flex-1">
                <h3 className="font-title text-primary mb-3">idiomas</h3>
                <ul className="list-disc pl-4">
                    <li>Fluência em Inglês</li>
                    <li>Francês avançado <br/><small><strong>Graduação em Letras - Francês pela UNIFESP</strong></small></li>
                    <li>Italiano intermediário</li>
                </ul>
            </div>
            <div className="flex-1">
                <h3 className="font-title text-primary mb-3">contato</h3>
                <p><strong>telefone: </strong> 12 98176-9663</p>
                <p><strong>e-mail:</strong> <a href="mailto:henrique1_3@hotmail.com">henrique1_3@hotmail.com</a></p>
            </div>
        </div>
    </Panel>
)

export default About
