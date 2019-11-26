import React from "react"
import Panel from "./panel"
import Project from "./project"

const projects = [
    {
        image : require('../images/ims.png'),
        title : 'Instituto Moreira Sales',
        url : 'https://ims.com.br/',
        description : 'Desde 2012 tenho trabalhado com o Instituto Moreira Sales e, durante este período, desenvolvi não somente três versões de seu site principal, como também diversos outros projetos do instituto na área de literatura e música.',
        tech : [ 'vue', 'wordpress', 'php', 'analytics' ],
        roles : [ 'coordenador de projetos', 'front-ender', 'back-ender' ],
        styles : { padding : '20px' }
    },
    {
        image : require('../images/pixinguinha-logo.png'),
        title : 'Pixinguinha',
        url : 'https://pixinguinha.com.br/',
        description : 'Fruto da parceria com o Instituto Moreira Sales, este site foi desenvolvido em comemoração aos 120 de Pixinguinha com o intuito de <strong>disponibilizar todo seu acervo</strong> de músicas, fotografias, documentos e partituras.',
        tech : [ 'vue', 'wordpress', 'php', 'analytics' ],
        roles : [ 'front-ender', 'back-ender' ],
        styles : { padding: '0px' }
    },
    {
        image : 'https://www.arcoweb.com.br/css/images/logo.png',
        title : 'Arcoweb',
        url : 'https://arcoweb.com.br/',
        description : 'Atuei como coordenador de projeto e desenvolvedor na versão digital da revista Arcoweb. O projeto conta com um forte trabalho de <strong>otimização de SEO</strong>, geração de <strong>métricas customizadas para o Analytics</strong> com <i>custom events</i> e gateway de pagamento integrado com o <strong>PagSeguro</strong>.',
        tech : [ 'php', 'integração com redes sociais', 'SEO', 'ad sense','analytics', 'CMS Headless', 'integração com PagSeguro' ],
        roles : [ 'back-ender' ],
    },
    {
        image : require('../images/radio.png'),
        title : 'Rádio Batuta',
        url : 'https://radiobatuta.com.br/',
        description : 'Fruto de mais uma parceira com o Insituto Moreira Sales, desenvolvi (sem a utilização de plugins Javascript) um player para a Rádio Batuta que atendesse as suas necessidades específicas, como um <strong>streaming 24h</strong>, <strong>podcasts</strong> e execução de <strong>playlists integradas ao Wordpress</strong>.',
        tech : [ 'wordpress', 'javascript' ],
        roles : [ 'front-ender' ],
    },
    {
        image : require('../images/lula.png'),
        title : 'Lula',
        url : 'https://lula.com.br/',
        description : 'Trabalhei internamente durante a campanha presidencial de 2018 no desenvolvimento do portal de notícias Lula, contando com um <strong>plugin para publicações de notícias real-time</strong> (minuto-a-minuto) e galeria multimídia com submissão de arte dos usuários. Fizemos um intenso trabalho de <strong>SEO</strong>, com monitoramento constante de tags e buscas para maximizar os acessos ao site.',
        tech : [ 'vue', 'wordpress', 'SEO', 'mailchimp', 'analytics'],
        roles : [ 'front-ender', 'back-ender', 'ux' ],
    },
    {
        image : require('../images/conectando.png'),
        title : 'Conectando Boas Práticas',
        url : 'https://conectandosaberes.org/conectandoboaspraticas/',
        description : 'Projeto da <strong>Fundação Lemann</strong>, o Conectando Boas Práticas conta com um avançado gerenciador de cadastro e gerenciamento de projetos que podem ser submetidos por professores, coordenadores e diretores de escolas.',
        tech : [ 'vue', 'wordpress', 'mailchimp', 'analytics' ],
        roles : [ 'front-ender', 'back-ender' ],
    },
    {
        image : require('../images/ocupa.svg'),
        title : 'Ocupa',
        url : 'https://ocupa.org.br/',
        description : 'Participei do desenvolvimento do Ocupa, plataforma de envolvimento e engajamento político-social, que conta com fóruns, distribuição de material e seção de doação à plataforma.',
        tech : [ 'angular' ],
        roles : [ 'front-ender' ],
    },
    {
        image : require('../images/pcdob.webp'),
        title : 'APP PCdoB Digital',
        url : 'https://play.google.com/store/apps/details?id=br.org.pcdob&hl=pt_BR',
        description : 'Participei do desenvolvimento aplicativo PCdoB Digital para filiados ao partido.',
        tech : [ 'angular', 'ionic' ],
        roles : [ 'front-ender', 'ux' ],
        styles : { backgroundColor : '#ec1e24', padding : '0 15px' }
    },
    {
        image : require('../images/ej.svg'),
        title : 'Empurrando Juntos',
        url : 'https://www.ejplatform.org/home/',
        description : 'Participei do desenvolvimento da primeira versão da plataforma Empurrando Juntos',
        tech : [ 'angular' ],
        roles : [ 'front-ender' ],
        styles : { padding : '25px 40px' }
    },
    {
        image : 'https://www.mediaplay.io/img/logo.svg',
        title : 'MediaPlay',
        url : 'https://cpanel.mediaplay.io/login',
        description : 'Desenvolvi o painel administrativo da moeda digital MediaPlay, o qual conta com funcionalidades de exchange e gerenciamento de carteira eletrônica.',
        tech : [ 'vue', 'laravel', 'php' ],
        roles : [ 'front-ender' ],
        styles : { padding: '20px 50px' }
    },
    {
        image : 'https://nasdacoin.io/new/img/logo-header.png',
        title : 'Nasdacoin',
        url : 'https://bo.nasdacoin.io/login',
        description : 'Desenvolvi o painel administrativo da moeda digital Nasdacoin, o qual conta com funcionalidades de <strong>exchange</strong>, gerenciamento de carteira eletrônica e uma área de <strong>Cassino</strong>.',
        tech : [ 'vue', 'laravel', 'php' ],
        roles : [ 'front-ender' ],
        styles : { backgroundColor : '#1c212e', padding : '15px' }
    },
    {
        image : 'https://www.spcineplay.com.br/Images/logo-spcine.png',
        title : 'Spcine Play',
        url : 'https://www.spcineplay.com.br/',
        description : 'Tendo participado desde as primeiras reuniãos do projeto, pude atuar em todas as áreas do desenvolvimento desta <strong>plataforma de streaming</strong>. Infelizmente a primeira versão (na qual trabalhei) foi descontinuada por um corte de custos, mas contava com um serviço próprio de streaming utilizando tecnologia <strong>WebTorrent</strong>.',
        tech : [ 'angular', 'webtorrent', 'analytics' ],
        roles : [ 'front-ender', 'ux', 'designer', 'coordenador de projetos' ],
        styles : { backgroundColor : '#000', padding : '15px' }
    },
    {
        image : 'https://ev.contem1g.com.br/img/topo-login.png',
        title : 'Contém1g',
        url : 'https://ev.contem1g.com.br/',
        description : 'Participei do desenvolvimento do front-end do escritório virtual da Contém1g para gerenciamento do marketing multinível das revendedoras.',
        tech : [ 'vue', 'php', 'laravel' ],
        roles : [ 'front-ender' ],
        styles : { backgroundColor : '#000' }
    },
    {
        image : require('../images/tradelinx.png'),
        title : 'TradeLinx',
        url : '',
        description : 'Ainda em desenvolvimento, desenvolvo o front-end em <strong>React</strong> do painel de administrativo, exchange e trade da moeda virtual TradeLinx.',
        tech : [ 'react' ],
        roles : [ 'front-ender' ],
    },
    {
        image : require('../images/vermelho.png'),
        title : 'Vermelho',
        url : 'https://dev.vermelho.org.br/',
        description : 'Ainda em desenvolvimento, desenvolvo o front-end do portal Vermelho utilizando <strong>React</strong> para o desenvolvimento de blocos gustomizados do Gutenberg.',
        tech : [ 'react', 'gutenberg', 'mailchimp', 'analytics' ],
        roles : [ 'front-ender' ],
    },
    {
        image : require('../images/its.svg'),
        title : 'ITS Rio',
        url : 'https://itsrio.org/',
        description : 'Desenvolvido com Vue.js, Wordpress e integração com o Mailchimp e Google Analytics.',
        tech : [ 'wordpress', 'mailchimp', 'vue', 'analytics' ],
        roles : [ 'front-ender', 'back-ender' ],
        styles : { padding : '15px' }
    },
    {
        image : require('../images/ctb.png'),
        title : 'CTB',
        url : 'https://ctb.org.br/',
        description : 'Desenvolvido com a nova tecnologia Gutenberg do Wordpress e integração com o Mailchimp e Google Analytics.',
        tech : [ 'wordpress', 'gutenberg', 'mailchimp', 'analytics' ],
        roles : [ 'front-ender', 'back-ender' ],
        styles : { padding : '15px' }
    },
    {
        image : require('../images/portfolio.png'),
        title : 'Portfólio',
        url : '#',
        description : 'Este portfólio foi hospedado pelo Github Pages e desenvolvido utilizando <strong>React</strong> e <strong>GatsbyJS</strong>',
        tech : [ 'react' ],
        roles : [ 'front-ender' ],
        styles : { padding : '0' }
    },
    
]

const techs = [
    {
        slug : 'react',
        logo : require('../images/techs/react.svg'),
        name : 'React'
    },
    {
        slug : 'angular',
        logo : require('../images/techs/angular.svg'),
        name : 'Angular'
    },
    {
        slug : 'vue',
        logo : require('../images/techs/vuejs.png'),
        name : 'Vue.js'
    },
    {
        slug : 'wordpress',
        logo : require('../images/techs/wordpress.png'),
        name : 'WordPress'
    },
    {
        slug : 'gutenberg',
        logo : require('../images/techs/gutenberg.svg'),
        name : 'Gutenberg'
    },
    {
        slug : 'laravel',
        logo : require('../images/techs/laravel.png'),
        name : 'Laravel'
    },
    {
        slug : 'ionic',
        logo : require('../images/techs/ionic.png'),
        name : 'Ionic'
    },
    {
        slug : 'mailchimp',
        logo : require('../images/techs/mailchimp.jpg'),
        name : 'Mailchimp'
    },
    {
        slug : 'php',
        logo : require('../images/techs/php.png'),
        name : 'PHP'
    },
    {
        slug : 'analytics',
        logo : require('../images/techs/analytics.svg'),
        name : 'Analytics'
    },
]

export default class Portfolio extends React.Component {
    constructor(props){
        super(props)

        this.state = { filter : 'todos', filteredProjects : projects }
    }

    filterProjects(filter){
        filter = filter === this.state.filter ? 'todos' : filter;
        this.setState( { filter, filteredProjects : projects.filter( p => p.tech.indexOf(filter) > -1 || filter === 'todos' ) })
    }

    render(){
        return ( 
            <Panel title="portfolio" side="right">
                <p>Durante minha carreira, adquiri experiência em uma vasta gama de tecnologias, como <strong>React</strong>, <strong>Angular</strong>, <strong>Vue.js</strong>, <strong>WordPress</strong> e estratégias de <strong>SEO</strong> e <strong>Marketing Digital</strong>. São estes alguns dos projetos que já desenvolvi: </p>
                <h3 className="text-primary mb-4 mt-6">filtre pelas tecnologias utilizadas: </h3>
                <ul className="techs-list flex flex-wrap items-center">
                    <li className="mr-6 text-center portfolio-filter-title">
                        <strong><small>FILTRAR</small></strong>
                    </li>
                    {
                        techs.map(tech => (
                            <li onClick={ () => this.filterProjects(tech.slug) } key={ tech.slug } className={ 'mr-6' + (this.state.filter === tech.slug ? ' active' : '') }>
                                <img src={ tech.logo } alt={ tech.name } height="30" />
                                <small>{ tech.name }</small>
                            </li>
                        ))
                    }
                </ul>
        
                <div className="flex flex-wrap mt-4">
                    { this.state.filteredProjects && this.state.filteredProjects.map(project => ( 
                            <div className="w-full mb-4" key={ project.url }>
                                <Project project={ project } techs={ techs } key={ project.image }></Project>
                            </div>
                        ))
                    }
                </div>
            </Panel>
        )
    }
}