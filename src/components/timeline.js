import React from "react"
import JobItem from './job-item';

const jobs = [
    {
        period  : '2012-2013',
        company : 'Fictor, estágio',
        text    : 'Estágio como analista e suporte para as áreas financeira e contábil do ERP Protheus – Totvs.'
    },
    {
        period  : '2013',
        company : 'Frozen Code, desenvolvedor júnior',
        text    : 'Desenvolvimento de aplicações back-end e front-end em ASP.NET C# e arquitetura MVC orientada a serviço.'
    },
    {
        period  : '2013-2014',
        company : 'WebEleven, desenvolvedor e coordenador de projetos',
        text    :   `Além de programador front-end e back-end, também fui coordenador de desenvolvimento dos seguintes projetos: 
                    <strong><a href="https://ims.com.br/" target="_blank">Instituto Moreira Sales</a></strong> (o qual viria a se tornar um parceiro de longa data), 
                    <strong><a href="https://blogdoims.com.br/" target="_blank">Blog do IMS</a></strong>, 
                    <strong>Terceiro Tempo</strong> e 
                    <strong><a href="https://arcoweb.com.br/" target="_blank">Arcoweb</a></strong>.
                    <br><br>
                    Neste período, também participei do desenvolvimento de projetos como <strong>Avon Maquiagens</strong>, <strong>Live Tim</strong>, <strong>Família Bauducco</strong>, <strong>Instituto Barrichello</strong>, entre outros. Para tal, utilizávamos um CMS Headless próprios, o qual também foi arquitetado e desenvolvido por mim usando apenas PHP puro.
                    `
    },
    {
        period  : '2015-2016',
        company : 'Freelancer',
        text    :   `Entre os anos de 2015 e 2016, atuei como freelancer para, principalmente, o Instituto Moreira Salles como designer e desenvolvedor. Dentre os projetos,
                    incluem-se o próprio site do Instituto, <a href="https://blogdoims.com.br/" target="_blank"><strong>Blog do IMS</strong></a>, 
                    <a href="https://radiobatuta.com.br/" target="_blank"><strong>Rádio Batuta</strong></a> e <a href="https://claricelispectorims.com.br/" target="_blank"><strong>Clarice Lispector</strong></a>. 
                    Além do Instituto, também desenvolvi sistemas fechados em <strong>React</strong>, como um sistema para uma empresa que visava controlar a logística de cargas para supermercados.`
    },
    {
        period  : '2017 - presente',
        company : 'hacklab/, desenvolvedor pleno',
        text    :   `Dedicando-me mais ao front-end, tenho desenvolvido e gerenciado projetos com diversas tecnologias, desde <strong>Angular</strong>, <strong>Vue.js</strong>, <strong>React</strong>,  e <strong>WordPress</strong>; utilizando sempre
                    os atuais padrões em SASS para a criação dos estilos. 
                    <br><br>
                    Apliquei tais tecnologias em sites como a plataforma de streaming 
                    <a href="https://www.spcineplay.com.br/" target="_blank"><strong>Spcine Play</strong></a> (em sua primeira fase),
                    <a href="https://itsrio.org/" target="_blank"><strong>ITS Rio</strong></a> e a plataforma <strong>MOOC TimTec</strong>.                    
                    <br><br>
                    No Hacklab também dei continuidade
                    aos projetos do Instituto Moreira Salles, como seu novo site principal, o site <a href="https://pixinguinha.com.br/" target="_blank"><strong>Pixinguinha</strong></a> e a manutenção de seu sistema de acervos. 
                    <br><br>
                    Além disso, trabalhei internamente na campanha presidencial de 2018 em diversos projetos, como os sites 
                    <a href="https://lula.com.br/" target="_blank"><strong>Lula</strong></a>, 
                    <a href="https://pt.org.br/" target="_blank"><strong>PT</strong></a>, 
                    <a href="https://pcdob.org.br/" target="_blank"><strong>PCdoB</strong></a> e
                    diversas páginas de doação eleitoral para Skaf, Manuela D'Ávila, Wadih Damous, Márcia Tiburi entre outros. 
                    <br><br>
                    Em 2019, desenvolvi uma série de portais de notícias, como 
                    <a href="https://fpabramo.org.br/" target="_blank"><strong>Perseu Abramo</strong></a> (e seus subsites), 
                    <a href="https://outraspalavras.net/" target="_blank"><strong>OutrasPalavras</strong></a>, 
                    <a href="https://observatoriodademocracia.org.br/" target="_blank"><strong>Observatório da Democracia</strong></a>, 
                    <a href="https://ctb.org.br/" target="_blank"><strong>CTB</strong></a>, 
                    <a href="https://lulalivre.org.br/" target="_blank"><strong>Comitê Lula Livre</strong></a>, 
                    além de plataformas para a fundação Lemann, como o próprio 
                    <a href="https://fundacaolemann.org.br/" target="_blank"><strong>site da fundação </strong></a> e
                    <a href="https://conectandosaberes.org/conectandoboaspraticas/" target="_blank"><strong>Conectando Boas Práticas </strong></a>.
                    `
    },
    {
        period  : '',
        company : 'freelancer',
        text    :   `Como freelancer, tenho desenvolvido sistemas para as moedas digitais 
                    <a href="https://nasdacoin.io/login" target="_blank"><strong>Nasdacoin</strong></a> e 
                    <a href="https://cpanel.mediaplay.io/login" target="_blank"><strong>MediaPlay</strong></a> e o sistema de marketing multinível para revendedoras da Contém1g. Todos estes com Laravel e Vue.js.
                    <br><br>
                    Utilizando Angular, também desenvolvo sistemas para a 
                    <a href="https://www.farmarcas.com.br/" target="_blank"><strong>Farmarcas</strong></a>.
                    `
    },
]

const Timeline = () => (
    <div className="timeline mt-16">
        <h2 className="mb-8 text-primary">experiência profissional</h2>
        { jobs.map(job => 
            <JobItem key={ job.period } job={ job }></JobItem> 
        )}
    </div>
)

export default Timeline
