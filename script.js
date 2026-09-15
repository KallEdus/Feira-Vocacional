const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

const universe = [
    ["Programação", "Transformar raciocínio em instruções que um computador consegue executar.", "Código"],
    ["Inteligência Artificial", "Criar sistemas capazes de analisar dados, reconhecer padrões, gerar conteúdo e apoiar decisões.", "IA"],
    ["Desenvolvimento Web", "Construir interfaces, serviços e plataformas que funcionam pela internet.", "Web"],
    ["Desenvolvimento Mobile", "Criar aplicativos pensados para a experiência, limitações e possibilidades dos dispositivos móveis.", "Mobile"],
    ["Desenvolvimento de Jogos", "Unir código, arte, regras, física e interação para construir experiências digitais.", "Games"],
    ["Banco de Dados", "Organizar informações para que sistemas possam guardar, relacionar, consultar e proteger dados.", "Dados"],
    ["Engenharia de Requisitos", "Descobrir o que realmente precisa ser construído antes de começar a construir.", "Requisitos"],
    ["Arquitetura de Software", "Definir como as partes de um sistema serão organizadas, conectadas e preparadas para crescer.", "Arquitetura"],
    ["Segurança da Informação", "Reduzir riscos e proteger aplicações, dados, identidades e pessoas.", "Segurança"],
    ["Redes", "Fazer computadores, servidores, celulares e dispositivos trocarem informações.", "Redes"],
    ["Computação em Nuvem", "Usar infraestrutura e serviços sob demanda para armazenar, processar e disponibilizar aplicações.", "Cloud"],
    ["IoT", "Conectar objetos e sensores ao software para coletar informações e automatizar ações.", "IoT"],
    ["Robótica", "Combinar software, sensores e atuadores para que máquinas percebam o ambiente e executem ações.", "Robótica"],
    ["DevOps", "Automatizar e aproximar desenvolvimento, testes, implantação e operação de sistemas.", "DevOps"],
    ["Testes de Software", "Verificar comportamentos, encontrar falhas e aumentar a confiança antes e depois de uma entrega.", "Qualidade"],
    ["UX/UI", "Pensar na experiência de uso e transformar funcionalidades em interfaces claras, acessíveis e agradáveis.", "Design"],
    ["Sistemas Distribuídos", "Dividir responsabilidades entre serviços conectados para construir soluções maiores e resilientes.", "Distribuídos"],
    ["Ciência de Dados", "Explorar dados para encontrar padrões, gerar conhecimento e apoiar decisões.", "Dados"],
    ["Gestão de Projetos", "Organizar objetivos, pessoas, prioridades, prazos, riscos e entregas.", "Gestão"],
    ["Empreendedorismo", "Identificar oportunidades e transformar tecnologia em produtos, serviços ou novos negócios.", "Negócios"]
];
const map = $("#nodes"), universeModal = $("#universeModal"), universeInfo = $("#universeSelected");
const universeDescriptions = {
    "Programação": "É a base para dar comportamento às ideias. Você aprende lógica, algoritmos, estruturas de dados e diferentes formas de organizar código para que uma solução seja compreensível, eficiente e capaz de evoluir.",
    "Inteligência Artificial": "IA reúne programação, dados e modelos matemáticos para criar sistemas que reconhecem padrões, fazem previsões, geram conteúdo e auxiliam pessoas em diferentes tarefas. É uma área que exige curiosidade e pensamento crítico.",
    "Desenvolvimento Web": "É o universo dos sites, plataformas e serviços acessados pela internet. Envolve interfaces, servidores, APIs, bancos de dados, autenticação, desempenho e tudo o que precisa acontecer para uma experiência funcionar de ponta a ponta.",
    "Desenvolvimento Mobile": "Aplicativos precisam considerar telas menores, sensores, conectividade, bateria, desempenho e hábitos de uso. É uma área em que software encontra uma experiência extremamente próxima da rotina das pessoas.",
    "Desenvolvimento de Jogos": "Um jogo é um sistema interativo: regras, estados, física, personagens, sons, gráficos e código precisam responder às ações do jogador. É uma das áreas em que engenharia e criatividade ficam muito próximas.",
    "Banco de Dados": "Quase todo sistema precisa lembrar alguma coisa. Bancos de dados ajudam a armazenar, organizar, relacionar, consultar e proteger informações de forma confiável, desde cadastros simples até grandes volumes de dados.",
    "Engenharia de Requisitos": "Antes de decidir como construir, é preciso descobrir o que as pessoas realmente precisam. Entrevistas, histórias de usuário, modelos e critérios de aceitação ajudam a transformar necessidades em uma direção clara para o projeto.",
    "Arquitetura de Software": "É pensar no sistema como um conjunto de partes que precisam trabalhar bem juntas. Uma boa arquitetura facilita manutenção, segurança, crescimento, integração com outros serviços e evolução do produto.",
    "Segurança da Informação": "Segurança acompanha o software desde a ideia. Autenticação, autorização, criptografia, proteção de dados, análise de vulnerabilidades e boas práticas ajudam a reduzir riscos e preservar a confiança de quem usa o sistema.",
    "Redes": "A internet não é mágica: são dispositivos e serviços trocando informações por redes. Entender endereçamento, protocolos, comunicação e infraestrutura ajuda a compreender o caminho que os dados percorrem.",
    "Computação em Nuvem": "A nuvem permite utilizar servidores, armazenamento, bancos e outros serviços sem depender de uma única máquina local. Isso ajuda aplicações a crescer, receber atualizações e atender diferentes volumes de usuários.",
    "IoT": "Internet das Coisas conecta objetos físicos ao mundo digital. Sensores capturam informações, software interpreta esses dados e dispositivos podem responder automaticamente a diferentes situações.",
    "Robótica": "Robôs precisam perceber, decidir e agir. Software interpreta sensores, controla motores e executa estratégias, criando uma ponte entre o mundo físico e os algoritmos.",
    "DevOps": "Construir software não termina quando o código está pronto. DevOps aproxima desenvolvimento e operação, usando automação, integração contínua, monitoramento e processos que tornam entregas mais rápidas e confiáveis.",
    "Testes de Software": "Qualidade não significa apenas procurar erros no final. Testes unitários, de integração, interface e automação ajudam a descobrir comportamentos inesperados e dão mais segurança para evoluir o sistema.",
    "UX/UI": "Uma solução pode ser tecnicamente excelente e ainda assim difícil de usar. UX olha para a experiência completa; UI trabalha a apresentação e os componentes da interface. As duas áreas aproximam tecnologia das pessoas.",
    "Sistemas Distribuídos": "Aplicações grandes podem ser compostas por diferentes serviços trabalhando em conjunto. Isso abre possibilidades de escala e organização, mas também traz desafios de comunicação, consistência, disponibilidade e observabilidade.",
    "Ciência de Dados": "Dados sozinhos não são respostas. Ciência de Dados combina programação, estatística e análise para transformar conjuntos de informações em evidências, padrões e insights que podem apoiar decisões.",
    "Gestão de Projetos": "Projetos precisam de direção. Planejamento, prioridades, comunicação, acompanhamento, riscos e organização ajudam equipes a transformar uma ideia em entregas reais sem perder de vista o objetivo.",
    "Empreendedorismo": "Software pode resolver uma necessidade de uma empresa, de uma comunidade ou de milhares de pessoas. Empreendedorismo ajuda a reconhecer oportunidades, validar ideias e pensar em valor, sustentabilidade e impacto."
};
universe.forEach(u => {
    const n = document.createElement("button");

    n.className = "node";
    n.textContent = u[0];

    n.onclick = () => {
        // Remove o estado ativo dos outros boxes
        $$(".node").forEach(x => x.classList.remove("active"));

        // Marca o box selecionado
        n.classList.add("active");

        // Pega a descrição correspondente
        const text = universeDescriptions[u[0]] || u[1];

        // Abre o modal com as informações
        $("#uniModalTag").textContent = u[2].toUpperCase();
        $("#uniModalTitle").textContent = u[0];
        $("#uniModalText").textContent = text;

        universeModal.classList.add("show");
    };

    map.appendChild(n);
});
if ($("#universeOpen")) $("#universeOpen").onclick = () => { $("#uniModalTag").textContent = "VISÃO GERAL"; $("#uniModalTitle").textContent = "Um universo inteiro além do código."; $("#uniModalText").textContent = "Engenharia de Software conecta programação, dados, inteligência artificial, segurança, interfaces, arquitetura, robótica, cloud e muitas outras áreas. A ideia é entender como essas peças trabalham juntas para transformar necessidades reais em tecnologia."; universeModal.classList.add("show") }; if ($("#universeClose")) $("#universeClose").onclick = () => universeModal.classList.remove("show"); if (universeModal) universeModal.onclick = e => { if (e.target === universeModal) universeModal.classList.remove("show") };
const disciplines = [
    ["01", "PROGRAMAÇÃO", "Você desenvolve raciocínio lógico e aprende a transformar uma ideia em um conjunto organizado de instruções. É onde algoritmos, estruturas de dados e boas práticas começam a ganhar forma.", ["Lógica", "Algoritmos", "Estruturas de dados", "Orientação a objetos"]],
    ["02", "ENGENHARIA DE REQUISITOS", "Antes de abrir o editor de código, você aprende a entender quem precisa da solução, qual é o objetivo e como transformar necessidades em funcionalidades claras.", ["Entrevistas", "Histórias de usuário", "Modelagem", "Critérios de aceitação"]],
    ["03", "BANCO DE DADOS", "Sistemas precisam lembrar. Você aprende como estruturar informações, relacioná-las e consultá-las com segurança e eficiência.", ["SQL", "Modelagem", "Relacionamentos", "NoSQL"]],
    ["04", "INTELIGÊNCIA ARTIFICIAL", "Dados e algoritmos podem ser usados para reconhecer padrões, prever comportamentos, automatizar tarefas e criar novas formas de interação.", ["Machine Learning", "Dados", "Modelos", "IA generativa"]],
    ["05", "DESENVOLVIMENTO WEB", "Você entende o que acontece entre o clique do usuário e os serviços que trabalham nos bastidores de uma aplicação online.", ["Front-end", "Back-end", "APIs", "Responsividade"]],
    ["06", "DESENVOLVIMENTO MOBILE", "Aplicativos levam software para perto das pessoas. Você considera interfaces, desempenho, conectividade, sensores e diferentes dispositivos.", ["Android", "Apps", "Interfaces", "APIs"]],
    ["07", "DESENVOLVIMENTO DE JOGOS", "Games mostram como lógica, interação e criatividade podem trabalhar juntas. Regras, física, estados e sistemas criam experiências que respondem ao jogador.", ["Lógica", "Física", "Game design", "Interação"]],
    ["08", "ARQUITETURA DE SOFTWARE", "Quando sistemas crescem, organização importa. Você aprende a pensar em componentes, responsabilidades, padrões, integrações e estratégias para evolução.", ["Padrões", "Componentes", "Microsserviços", "Escalabilidade"]],
    ["09", "SEGURANÇA", "Dados e sistemas precisam ser protegidos. A formação pode abordar práticas para reduzir vulnerabilidades e criar aplicações mais confiáveis.", ["Autenticação", "Criptografia", "Vulnerabilidades", "Privacidade"]],
    ["10", "TESTES DE SOFTWARE", "Uma solução confiável precisa ser verificada. Testes ajudam a descobrir falhas, validar comportamentos e permitir mudanças com mais segurança.", ["Unitários", "Integração", "Automação", "Qualidade"]],
    ["11", "REDES E CLOUD", "Aplicações precisam de infraestrutura para funcionar e se comunicar. Redes e computação em nuvem ajudam a entender essa camada invisível.", ["Protocolos", "Servidores", "Cloud", "Infraestrutura"]],
    ["12", "EXPERIÊNCIA E INTERAÇÃO", "Tecnologia precisa ser compreendida por pessoas. Interfaces, acessibilidade e experiência ajudam a transformar funcionalidade em algo realmente utilizável.", ["UX", "UI", "Acessibilidade", "Usabilidade"]]
];
function setupDisciplineCarousel() {
    const container = $("#disciplineGrid");

    container.innerHTML = `
        <div class="discipline-track">
            ${disciplines.map(d => `
                <article class="discipline-slide">
                    <span class="num">${d[0]}</span>

                    <h3>${d[1]}</h3>

                    <p>${d[2]}</p>

                    <div class="tags">
                        ${d[3].map(x => `<span>${x}</span>`).join("")}
                    </div>
                </article>
            `).join("")}
        </div>

        <button class="discipline-prev" aria-label="Disciplina anterior">
            ←
        </button>

        <button class="discipline-next" aria-label="Próxima disciplina">
            →
        </button>

        <div class="discipline-dots">
            ${disciplines.map((_, i) => `
                <button
                    class="discipline-dot ${i === 0 ? "active" : ""}"
                    data-index="${i}"
                    aria-label="Ir para disciplina ${i + 1}">
                </button>
            `).join("")}
        </div>

        <div class="discipline-counter">
            <span id="disciplineCurrent">01</span>
            <span>/</span>
            <span>${String(disciplines.length).padStart(2, "0")}</span>
        </div>
    `;

    const track = container.querySelector(".discipline-track");
    const slides = [...container.querySelectorAll(".discipline-slide")];
    const dots = [...container.querySelectorAll(".discipline-dot")];
    const prev = container.querySelector(".discipline-prev");
    const next = container.querySelector(".discipline-next");
    const current = container.querySelector("#disciplineCurrent");

    let index = 0;

    function update(i) {
        index = Math.max(0, Math.min(i, disciplines.length - 1));

        track.style.transform = `translateX(-${index * 100}%)`;

        dots.forEach((dot, j) => {
            dot.classList.toggle("active", j === index);
        });

        current.textContent =
            String(index + 1).padStart(2, "0");
    }

    next.onclick = () => {
        update(
            index < disciplines.length - 1
                ? index + 1
                : 0
        );
    };

    prev.onclick = () => {
        update(
            index > 0
                ? index - 1
                : disciplines.length - 1
        );
    };

    dots.forEach(dot => {
        dot.onclick = () => {
            update(Number(dot.dataset.index));
        };
    });

    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", e => {
        endX = e.changedTouches[0].clientX;

        const distance = startX - endX;

        if (Math.abs(distance) < 50) return;

        if (distance > 0) {
            next.click();
        } else {
            prev.click();
        }
    });
}

setupDisciplineCarousel();

const creations = [
    ["", "ROBÓTICA", "Construa sistemas que percebem o ambiente, tomam decisões e movimentam mecanismos. Sensores, programação e eletrônica se encontram em projetos que você consegue ver funcionando."],
    ["", "APLICATIVOS", "Imagine um aplicativo que resolva uma necessidade real: organizar tarefas, facilitar um serviço, ensinar alguma coisa ou criar uma experiência nova. A ideia começa simples e pode crescer muito."],
    ["", "GAMES", "Crie regras, personagens, desafios e mundos interativos. Um game é uma oportunidade de experimentar lógica, design, programação e narrativa em um mesmo projeto."],
    ["", "PLATAFORMAS", "Construa sistemas acessados pelo navegador, com usuários, dados, serviços e diferentes níveis de acesso trabalhando juntos."],
    ["", "INTELIGÊNCIA ARTIFICIAL", "Use dados e modelos para reconhecer padrões, gerar conteúdo, automatizar tarefas ou criar novas formas de interação entre pessoas e sistemas."],
    ["", "CASAS INTELIGENTES", "Conecte sensores, iluminação, temperatura e outros dispositivos para criar ambientes que respondem automaticamente ao que acontece ao redor."],
    ["", "SISTEMAS AUTOMOTIVOS", "Software está presente em veículos modernos, desde entretenimento e conectividade até assistência, sensores e controle de diferentes funções."],
    ["", "SEGURANÇA DIGITAL", "Crie soluções pensando desde cedo em autenticação, privacidade, proteção de informações e redução de riscos."],
    ["", "SISTEMAS EMPRESARIAIS", "Transforme processos manuais em sistemas que ajudam equipes a organizar informações, acompanhar operações e tomar decisões."],
    ["", "CIDADES INTELIGENTES", "Tecnologia pode apoiar mobilidade, energia, iluminação, coleta de dados e serviços públicos quando diferentes sistemas conseguem trabalhar juntos."],
    ["", "SISTEMAS CONECTADOS", "Faça dispositivos compartilharem informações por redes e serviços digitais, criando experiências que continuam funcionando mesmo quando as partes estão distantes."],
    ["", "EXPERIÊNCIAS DIGITAIS", "Misture tecnologia, criatividade, interação e design para criar produtos que não são apenas funcionais, mas também claros, acessíveis e agradáveis de usar."]
];
function setupCreationCarousel() {
    const container = $("#creationGrid");

    container.innerHTML = `
        <div class="creation-track">
            ${creations.map((c, i) => `
                <article class="creation-slide">

                    <span class="creation-number">
                        ${String(i + 1).padStart(2, "0")}
                    </span>

                    <div class="creation-icon">
                        ${c[0]}
                    </div>

                    <h3>${c[1]}</h3>

                    <p>${c[2]}</p>

                </article>
            `).join("")}
        </div>

        <button class="creation-prev" aria-label="Possibilidade anterior">
            ←
        </button>

        <button class="creation-next" aria-label="Próxima possibilidade">
            →
        </button>

        <div class="creation-dots">
            ${creations.map((_, i) => `
                <button
                    class="creation-dot ${i === 0 ? "active" : ""}"
                    data-index="${i}"
                    aria-label="Ir para possibilidade ${i + 1}">
                </button>
            `).join("")}
        </div>

        <div class="creation-counter">
            <span id="creationCurrent">01</span>
            <span>/</span>
            <span>${String(creations.length).padStart(2, "0")}</span>
        </div>
    `;

    const track = container.querySelector(".creation-track");
    const dots = [...container.querySelectorAll(".creation-dot")];
    const prev = container.querySelector(".creation-prev");
    const next = container.querySelector(".creation-next");
    const current = container.querySelector("#creationCurrent");

    let index = 0;

    function update(i) {
        index = Math.max(0, Math.min(i, creations.length - 1));

        track.style.transform =
            `translateX(-${index * 100}%)`;

        dots.forEach((dot, j) => {
            dot.classList.toggle(
                "active",
                j === index
            );
        });

        current.textContent =
            String(index + 1).padStart(2, "0");
    }

    next.onclick = () => {
        update(
            index < creations.length - 1
                ? index + 1
                : 0
        );
    };

    prev.onclick = () => {
        update(
            index > 0
                ? index - 1
                : creations.length - 1
        );
    };

    dots.forEach(dot => {
        dot.onclick = () => {
            update(Number(dot.dataset.index));
        };
    });

    let startX = 0;
    let endX = 0;

    track.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener("touchend", e => {
        endX = e.changedTouches[0].clientX;

        const distance = startX - endX;

        if (Math.abs(distance) < 50) return;

        if (distance > 0) {
            next.click();
        } else {
            prev.click();
        }
    });
}

setupCreationCarousel();


const projects = [
    ["Aplicativo mobile", "Uma experiência pensada para resolver uma tarefa do cotidiano com poucos toques.", "Mobile + APIs", "Uma necessidade vira uma interface simples; por trás dela, APIs, dados e regras trabalham para entregar uma resposta rápida ao usuário."],
    ["Sistema web", "Uma plataforma que reúne informações, usuários e funcionalidades em um só lugar.", "Web + Banco de dados", "A interface apresenta a experiência, enquanto serviços e banco de dados cuidam das informações e das regras do sistema."],
    ["Jogo", "Um mundo interativo no qual cada ação do jogador produz uma resposta.", "Game + Lógica", "Regras, estados, personagens, física e interface são combinados para criar uma experiência que pode ser jogada, testada e aprimorada."],
    ["Chatbot", "Uma interface capaz de conversar, orientar e encontrar informações de forma natural.", "IA + Dados", "O sistema recebe uma pergunta, interpreta o contexto, consulta ou processa informações e devolve uma resposta para a pessoa."],
    ["Automação", "Software assumindo tarefas repetitivas que antes dependiam de intervenção manual.", "IoT + Automação", "Sensores ou eventos iniciam o processo; regras e software tomam decisões e dispositivos executam as ações necessárias."],
    ["Robô", "Uma máquina que percebe o ambiente e reage de acordo com aquilo que foi programado.", "Robótica + Software", "Sensores fornecem dados, o programa interpreta essas informações e motores ou atuadores transformam decisões em movimento."],
    ["Sistema IoT", "Objetos conectados enviando dados para uma aplicação ou serviço.", "IoT + Cloud", "Dispositivos coletam informações, a rede transporta os dados e serviços podem armazenar, analisar e apresentar resultados."],
    ["Plataforma educacional", "Tecnologia usada para organizar conteúdos, atividades, acompanhamento e interação.", "Web + Dados + UX", "O desafio é unir informação, navegação, acessibilidade e dados em uma experiência que ajude a pessoa a aprender com mais autonomia."]
];
const plist = $("#projectList"), pres = $("#projectResult");
projects.forEach((p, i) => { const b = document.createElement("button"); b.className = "project-btn"; b.textContent = p[0]; b.onclick = () => { $$(".project-btn").forEach(x => x.classList.remove("active")); b.classList.add("active"); pres.innerHTML = `<span>${p[2]}</span><h3>${p[0]}</h3><p class="project-summary">${p[1]}</p><div class="project-flow"><b>IDEIA</b><i>→</i><b>TECNOLOGIA</b><i>→</i><b>EXPERIÊNCIA</b></div><p class="project-detail">${p[3]}</p>` }; plist.appendChild(b) });

const timeline = [
    ["01", "ENTENDER", "Tudo começa com perguntas: quem precisa da solução, por que ela é importante e o que precisa mudar?"],
    ["02", "IDEALIZAR", "A equipe transforma necessidades em possibilidades, compara caminhos e escolhe uma direção para experimentar."],
    ["03", "PLANEJAR", "Funcionalidades, dados, arquitetura, tecnologias, tarefas e prioridades começam a ganhar uma estrutura."],
    ["04", "DESENVOLVER", "É hora de construir. Código, integração e colaboração transformam decisões em uma versão que pode ser testada."],
    ["05", "TESTAR", "A equipe procura comportamentos inesperados, verifica requisitos e melhora aquilo que ainda não está funcionando bem."],
    ["06", "PUBLICAR", "Quando a solução está pronta para aquele momento, ela chega aos usuários e começa a gerar novos aprendizados."],
    ["07", "EVOLUIR", "Software não é uma obra parada. Novas necessidades, usuários e tecnologias fazem o sistema continuar mudando."]
];
$("#timeline").innerHTML = timeline.map(x => `<article class="time-item reveal"><span class="n">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join("");

const careers = [
    ["Desenvolvedor de Software", "Constrói funcionalidades e integrações, escreve código, corrige falhas e participa da evolução de produtos digitais.", "Código, APIs, bancos, testes e colaboração"],
    ["Engenheiro de Software", "Pensa além da funcionalidade: arquitetura, qualidade, manutenção, escalabilidade e decisões técnicas de longo prazo.", "Sistemas confiáveis e sustentáveis"],
    ["Desenvolvedor Front-end", "Cria a camada com a qual as pessoas interagem, conectando interface, acessibilidade, dados e experiência.", "Web e experiência do usuário"],
    ["Desenvolvedor Back-end", "Constrói serviços, regras de negócio, APIs e integrações que fazem aplicações funcionarem por trás da interface.", "Dados, serviços e lógica de negócio"],
    ["Desenvolvedor Full Stack", "Transita entre interface e servidor, entendendo como diferentes partes de uma aplicação se conectam.", "Visão ampla do produto"],
    ["Desenvolvedor Mobile", "Cria aplicativos considerando dispositivos, desempenho, conectividade e hábitos de uso.", "Experiências para smartphones e tablets"],
    ["DevOps / Cloud", "Automatiza entregas e ajuda aplicações a funcionar de forma observável, segura e escalável.", "Infraestrutura, automação e confiabilidade"],
    ["Engenheiro de Dados", "Constrói caminhos para coletar, organizar, transformar e disponibilizar dados para sistemas e análises.", "Dados confiáveis e acessíveis"],
    ["Machine Learning", "Trabalha com modelos que aprendem padrões a partir de dados para previsão, classificação ou geração.", "Dados, modelos e experimentação"],
    ["Segurança da Informação", "Analisa riscos e ajuda a proteger aplicações, redes, identidades e informações.", "Redução de riscos e proteção de ativos"],
    ["Arquiteto de Software", "Define estruturas, padrões e decisões que ajudam sistemas complexos a crescer sem perder organização.", "Visão sistêmica e decisões técnicas"],
    ["QA / Qualidade", "Cria estratégias para verificar software, automatizar testes e aumentar a confiança nas entregas.", "Qualidade antes e depois da publicação"],
    ["Games / Tech Art", "Une programação, sistemas interativos e ferramentas para criar experiências de jogo.", "Tecnologia aplicada à criatividade"],
    ["IoT / Sistemas Embarcados", "Desenvolve software que conversa diretamente com sensores, dispositivos e equipamentos.", "Software conectado ao mundo físico"],
    ["Analista de Sistemas", "Entende processos e necessidades e ajuda a conectar o negócio às soluções de tecnologia.", "Necessidades transformadas em sistemas"],
    ["Product Manager", "Ajuda a definir prioridades e direcionar produtos para resolver necessidades reais dos usuários.", "Produto, pessoas e estratégia"],
    ["Tech Lead", "Apoia decisões técnicas e a evolução da equipe, mantendo o projeto alinhado ao objetivo do produto.", "Direção técnica e colaboração"],
    ["Empreendedor de Tecnologia", "Transforma uma oportunidade em produto ou serviço, validando ideias e buscando gerar valor.", "Tecnologia, negócio e impacto"]
];

const careerGrid = $("#careerGrid");

careerGrid.innerHTML = `
    <div class="career-carousel">
        <div class="career-track">
            ${careers.map((x, i) => `
                <article class="career reveal">
                    <small>${String(i + 1).padStart(2, "0")}</small>
                    <h3>${x[0]}</h3>
                    <p>${x[1]}</p>

                    <div class="career-focus">
                        <b>NO DIA A DIA</b>
                        <span>${x[2]}</span>
                    </div>
                </article>
            `).join("")}
        </div>

        <button class="career-prev" aria-label="Carreira anterior">
            ←
        </button>

        <button class="career-next" aria-label="Próxima carreira">
            →
        </button>

        <div class="career-dots">
            ${careers.map((_, i) => `
                <button 
                    class="career-dot ${i === 0 ? "active" : ""}" 
                    data-index="${i}"
                    aria-label="Ir para carreira ${i + 1}">
                </button>
            `).join("")}
        </div>

        <div class="career-counter">
            <span id="careerCurrent">01</span>
            <span>/</span>
            <span>${String(careers.length).padStart(2, "0")}</span>
        </div>
    </div>
`;

const careerTrack = $(".career-track");
const careerCards = $$(".career");
const careerDots = $$(".career-dot");
const careerPrev = $(".career-prev");
const careerNext = $(".career-next");
const careerCurrent = $("#careerCurrent");

let careerIndex = 0;

function updateCareerCarousel(index) {
    careerIndex = Math.max(0, Math.min(index, careers.length - 1));

    careerTrack.style.transform = `translateX(-${careerIndex * 100}%)`;

    careerDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === careerIndex);
    });

    careerCurrent.textContent = String(careerIndex + 1).padStart(2, "0");

    careerCards.forEach(card => {
        card.classList.remove("open");
    });
}

careerNext.onclick = () => {
    updateCareerCarousel(
        careerIndex < careers.length - 1
            ? careerIndex + 1
            : 0
    );
};

careerPrev.onclick = () => {
    updateCareerCarousel(
        careerIndex > 0
            ? careerIndex - 1
            : careers.length - 1
    );
};

careerDots.forEach(dot => {
    dot.onclick = () => {
        updateCareerCarousel(Number(dot.dataset.index));
    };
});

/* Navegação pelo teclado */
document.addEventListener("keydown", e => {
    if (e.key === "ArrowRight") {
        updateCareerCarousel(
            careerIndex < careers.length - 1
                ? careerIndex + 1
                : 0
        );
    }

    if (e.key === "ArrowLeft") {
        updateCareerCarousel(
            careerIndex > 0
                ? careerIndex - 1
                : careers.length - 1
        );
    }
});

/* Swipe para celular */
let careerStartX = 0;
let careerEndX = 0;

careerTrack.addEventListener("touchstart", e => {
    careerStartX = e.touches[0].clientX;
});

careerTrack.addEventListener("touchend", e => {
    careerEndX = e.changedTouches[0].clientX;

    const distance = careerStartX - careerEndX;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
        updateCareerCarousel(
            careerIndex < careers.length - 1
                ? careerIndex + 1
                : 0
        );
    } else {
        updateCareerCarousel(
            careerIndex > 0
                ? careerIndex - 1
                : careers.length - 1
        );
    }
});


const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible") }), { threshold: .12 });
$$(".reveal").forEach(e => io.observe(e));

window.addEventListener("scroll", () => { $("#progress").style.width = (scrollY / (document.body.scrollHeight - innerHeight) * 100) + "%" });
document.addEventListener("mousemove", e => { $(".cursor-glow").style.left = e.clientX + "px"; $(".cursor-glow").style.top = e.clientY + "px" });
$("#menuBtn").onclick = () => $(".navbar").classList.toggle("open");
$$("nav a").forEach(a => a.onclick = () => $(".navbar").classList.remove("open"));

/* =========================================
   05.1 — EXPLORADOR DE LINGUAGENS
========================================= */

const languageData = {

    Python: {
        category: "LINGUAGEM",
        description:
            "Uma linguagem conhecida pela sintaxe simples e por sua enorme presença em automação, análise de dados, inteligência artificial, ciência e desenvolvimento de aplicações.",
        code:
            'print("Olá, mundo!")'
    },

    JavaScript: {
        category: "LINGUAGEM",
        description:
            "Uma das principais linguagens da Web. Permite criar interfaces interativas, aplicações completas e experiências dinâmicas no navegador.",
        code:
            'console.log("Olá, mundo!");'
    },

    TypeScript: {
        category: "LINGUAGEM",
        description:
            "Uma extensão do JavaScript que adiciona tipagem estática e recursos que ajudam a estruturar aplicações maiores e mais complexas.",
        code:
            'const mensagem: string = "Olá, mundo!";'
    },

    Java: {
        category: "LINGUAGEM",
        description:
            "Uma linguagem amplamente utilizada em sistemas corporativos, aplicações de grande escala e desenvolvimento de software orientado a objetos.",
        code:
            'System.out.println("Olá, mundo!");'
    },

    C: {
        category: "LINGUAGEM",
        description:
            "Uma linguagem fundamental para compreender memória, estruturas de dados, sistemas operacionais e programação de baixo nível.",
        code:
            '#include <stdio.h>\n\nprintf("Olá, mundo!");'
    },

    "C++": {
        category: "LINGUAGEM",
        description:
            "Uma linguagem de alto desempenho utilizada em jogos, sistemas complexos, aplicações gráficas e software que exige controle detalhado dos recursos.",
        code:
            '#include <iostream>\n\nstd::cout << "Olá, mundo!";'
    },

    Kotlin: {
        category: "LINGUAGEM",
        description:
            "Uma linguagem moderna utilizada principalmente no ecossistema Android e também em aplicações multiplataforma e backend.",
        code:
            'fun main() {\n    println("Olá, mundo!")\n}'
    },

    SQL: {
        category: "LINGUAGEM",
        description:
            "Uma linguagem voltada para trabalhar com bancos de dados, permitindo consultar, organizar, inserir e manipular informações.",
        code:
            'SELECT * FROM usuarios;'
    }

};


const languageButtons =
    document.querySelectorAll(".language-btn");

const languageCategory =
    document.getElementById("languageCategory");

const languageTitle =
    document.getElementById("languageTitle");

const languageDescription =
    document.getElementById("languageDescription");

const languageCode =
    document.getElementById("languageCode");

const languageFile =
    document.getElementById("languageFile");


languageButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language =
            button.dataset.language;

        const data =
            languageData[language];

        if (!data) return;


        /* Remove o estado ativo dos outros botões */

        languageButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        /* Ativa o botão selecionado */

        button.classList.add("active");


        /* Atualiza o conteúdo do painel */

        languageCategory.textContent =
            data.category;

        languageTitle.textContent =
            language;

        languageDescription.textContent =
            data.description;

        languageCode.textContent =
            data.code;

        languageFile.textContent =
            language;


        /* No celular, centraliza o botão selecionado */

        if (window.innerWidth <= 700) {

            button.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest"
            });

        }

    });

});