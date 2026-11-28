const perguntas = [
  {
    pergunta: "Qual destas ideias descreve melhor o civismo?",
    opcoes: [
      { texto: "Ser simpático apenas com quem conhecemos.", correta: false, explicacao: "A consideração pelos outros também inclui quem não conhecemos." },
      { texto: "Cuidar da vida em comum através das nossas escolhas.", correta: true, explicacao: "O civismo liga os nossos gestos aos seus efeitos nas outras pessoas." },
      { texto: "Cumprir regras apenas quando alguém está a ver.", correta: false, explicacao: "A responsabilidade não depende de estarmos a ser observados." }
    ]
  },
  {
    pergunta: "Numa loja, dão-te troco a mais. Reparas antes de sair. O que fazes?",
    opcoes: [
      { texto: "Guardo-o porque o erro não foi meu.", correta: false, explicacao: "Aproveitar um engano transfere o custo para outra pessoa." },
      { texto: "Peço ainda mais, já que ninguém reparou.", correta: false, explicacao: "Aumentar o erro prejudica mais quem o terá de resolver." },
      { texto: "Aviso quem me atendeu e devolvo a diferença.", correta: true, explicacao: "A honestidade também aparece quando corrigir o engano não nos favorece." }
    ]
  },
  {
    pergunta: "Quem deve ter a sua dignidade respeitada?",
    opcoes: [
      { texto: "Todas as pessoas.", correta: true, explicacao: "A Declaração Universal dos Direitos Humanos parte da igualdade em dignidade e direitos." },
      { texto: "Só as pessoas que nunca se enganam.", correta: false, explicacao: "A dignidade humana não é um prémio por comportamento perfeito." },
      { texto: "Só quem tem a mesma opinião que nós.", correta: false, explicacao: "Uma opinião diferente não retira dignidade a ninguém." }
    ]
  },
  {
    pergunta: "Num trabalho de grupo, uma pessoa tem dificuldade em acompanhar a conversa. O que ajuda o grupo a incluí-la?",
    opcoes: [
      { texto: "Decidir tudo por ela sem a ouvir.", correta: false, explicacao: "Decidir pela pessoa retira-lhe a possibilidade de participar nas escolhas." },
      { texto: "Retirá-la do grupo para acabar mais depressa.", correta: false, explicacao: "Excluir para ganhar tempo não resolve a dificuldade de participação." },
      { texto: "Perguntar como pode participar e combinar tarefas em conjunto.", correta: true, explicacao: "Perguntar e organizar o trabalho com a pessoa cria espaço para o seu contributo." }
    ]
  },
  {
    pergunta: "Qual destas ações também é participação cívica?",
    opcoes: [
      { texto: "Deixar todas as decisões para outras pessoas.", correta: false, explicacao: "A participação envolve dar algum contributo para os assuntos comuns." },
      { texto: "Apresentar uma proposta numa reunião da comunidade.", correta: true, explicacao: "Participar também pode ser propor, colaborar e ajudar a decidir." },
      { texto: "Achar que só conta participar no dia das eleições.", correta: false, explicacao: "Votar é importante, mas existem outras formas de intervir na vida em comum." }
    ]
  },
  {
    pergunta: "Vês uma torneira de um jardim público a perder muita água. Está avariada. O que é mais útil?",
    opcoes: [
      { texto: "Avisar os responsáveis pelo espaço para a repararem.", correta: true, explicacao: "Comunicar um problema ajuda quem tem responsabilidade e meios para o resolver." },
      { texto: "Abri-la ainda mais, porque a água não é minha.", correta: false, explicacao: "Ser um recurso partilhado é razão para o cuidar, não para o desperdiçar." },
      { texto: "Forcá-la com uma ferramenta que não sabes usar.", correta: false, explicacao: "Uma intervenção sem saber como fazer pode agravar a avaria." }
    ]
  },
  {
    pergunta: "Respeitar alguém que pensa de outra forma significa o quê?",
    opcoes: [
      { texto: "Ouvir e discordar sem humilhar a pessoa.", correta: true, explicacao: "Respeitar não exige concordar. Podemos defender ideias e direitos sem humilhar." },
      { texto: "Concordar com tudo, mesmo com uma injustiça.", correta: false, explicacao: "A tolerância não exige aceitar injustiças nem abandonar as nossas convicções." },
      { texto: "Impedir a pessoa de falar só porque discorda.", correta: false, explicacao: "O desacordo, por si só, não justifica silenciar a outra pessoa." }
    ]
  },
  {
    pergunta: "Vais usar um número sobre o consumo de água numa apresentação. Encontraste-o numa imagem sem data nem fonte. O que fazes?",
    opcoes: [
      { texto: "Uso-o porque a imagem parece profissional.", correta: false, explicacao: "Um aspeto cuidado não confirma que a informação seja correta." },
      { texto: "Aumento o número para chamar mais a atenção.", correta: false, explicacao: "Alterar um dado para impressionar cria informação enganadora." },
      { texto: "Procuro a fonte original e verifico a data e o contexto.", correta: true, explicacao: "A origem, a data e o contexto ajudam a perceber o que aquele número significa." }
    ]
  },
  {
    pergunta: "Quem tem um papel no cuidado com aquilo que é comum?",
    opcoes: [
      { texto: "Só quem recebe dinheiro para o limpar.", correta: false, explicacao: "A existência de profissionais não elimina a responsabilidade de quem usa o espaço." },
      { texto: "Pessoas e instituições, com responsabilidades diferentes.", correta: true, explicacao: "Podemos cuidar e comunicar problemas: as instituições também têm deveres e meios próprios." },
      { texto: "Só a pessoa que o usou por último.", correta: false, explicacao: "O cuidado com o que é comum não pertence apenas a uma pessoa." }
    ]
  },
  {
    pergunta: "Numa reunião, há duas propostas para usar um espaço comum. Como podemos tomar uma decisão mais informada?",
    opcoes: [
      { texto: "Ouvir as razões de cada proposta e comparar os efeitos.", correta: true, explicacao: "Deliberar envolve considerar razões e alternativas antes de decidir." },
      { texto: "Aceitar automaticamente a proposta de quem grita mais.", correta: false, explicacao: "Falar mais alto não torna uma proposta mais adequada." },
      { texto: "Excluir da conversa quem discorda da nossa proposta.", correta: false, explicacao: "Excluir o desacordo impede a comparação de ideias e necessidades." }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('teste-container');
  if (!container) return;

  let perguntaAtual = 0;
  let pontuacao = 0;
  let respostasUtilizador = [];

  // Restaurar estado
  const estadoGuardado = sessionStorage.getItem('estado_teste');
  if (estadoGuardado) {
    const estado = JSON.parse(estadoGuardado);
    perguntaAtual = estado.perguntaAtual;
    pontuacao = estado.pontuacao;
    respostasUtilizador = estado.respostasUtilizador;
  }

  function renderizarPergunta() {
    if (perguntaAtual >= perguntas.length) {
      renderizarResultado();
      return;
    }

    const p = perguntas[perguntaAtual];
    let html = `
      <div class="pergunta-container">
        <span class="progresso">Pergunta ${perguntaAtual + 1} de 10</span>
        <h2 tabindex="-1" id="titulo-pergunta">${p.pergunta}</h2>
        <div class="opcoes-teste">
    `;

    p.opcoes.forEach((opcao, index) => {
      html += `<button class="opcao-teste" data-index="${index}">${opcao.texto}</button>`;
    });

    html += `</div><div class="explicacao-teste" id="explicacao"></div></div>`;
    container.innerHTML = html;

    const botoes = container.querySelectorAll('.opcao-teste');
    botoes.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(btn.dataset.index);
        const opcaoEscolhida = p.opcoes[index];
        
        // Desativar todos os botões
        botoes.forEach(b => b.disabled = true);
        
        // Registar resposta
        if (opcaoEscolhida.correta) pontuacao++;
        respostasUtilizador.push({ pergunta: perguntaAtual, correta: opcaoEscolhida.correta });

        // Mostrar explicação
        const explicacaoDiv = document.getElementById('explicacao');
        explicacaoDiv.style.display = 'block';
        explicacaoDiv.innerHTML = `<strong>${opcaoEscolhida.correta ? 'Certo!' : 'A rever:'}</strong> ${opcaoEscolhida.explicacao}`;
        
        // Adicionar botão próxima
        const btnProx = document.createElement('button');
        btnProx.className = 'btn btn-verde';
        btnProx.style.marginTop = '1rem';
        btnProx.textContent = perguntaAtual === 9 ? 'Ver resultado' : 'Próxima pergunta';
        btnProx.addEventListener('click', () => {
          perguntaAtual++;
          salvarEstado();
          renderizarPergunta();
        });
        explicacaoDiv.appendChild(btnProx);
      });
    });
  }

  function renderizarResultado() {
    let mensagem = "";
    if (pontuacao <= 4) mensagem = "Há mais situações para descobrir. Este é um bom ponto de partida. Revê as explicações e volta a experimentar.";
    else if (pontuacao <= 7) mensagem = "Estás no bom caminho. Já identificas vários gestos importantes. Explora as respostas que te surpreenderam.";
    else mensagem = "Bom olho para o civismo. Reconheces muitas escolhas que ajudam a viver juntos. Agora experimenta um desses gestos.";

    let html = `
      <div class="resultado-teste" style="text-align: center;">
        <h2>O teu resultado</h2>
        <p style="font-size: 3rem; font-weight: 700; color: var(--verde-tinta); margin: 1rem 0;">${pontuacao} / 10</p>
        <p>${mensagem}</p>
        <div style="margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
          <button class="btn btn-azul" onclick="location.reload()">Repetir o teste</button>
          <a href="situacoes.html" class="btn btn-verde">Explorar situações</a>
        </div>
        <div style="margin-top: 2rem; text-align: left;">
          <h3>Revisão das respostas</h3>
          <ul style="list-style: none; padding: 0;">
    `;

    respostasUtilizador.forEach((res, i) => {
      const p = perguntas[res.pergunta];
      const opcaoCorreta = p.opcoes.find(o => o.correta);
      html += `
        <li style="margin-bottom: 1rem; padding: 1rem; background: #fff; border-radius: 8px; border-left: 4px solid ${res.correta ? 'var(--verde-folha)' : 'var(--tomate)'};">
          <strong>Pergunta ${i + 1}: ${res.correta ? 'Certo' : 'A rever'}</strong><br>
          <em>Resposta certa: ${opcaoCorreta.texto}</em><br>
          <span style="font-size: 0.9rem;">${opcaoCorreta.explicacao}</span>
        </li>
      `;
    });

    html += `</ul></div></div>`;
    container.innerHTML = html;
    
    const titulo = container.querySelector('h2');
    if (titulo) { titulo.setAttribute('tabindex', '-1'); titulo.focus(); }
  }

  function salvarEstado() {
    sessionStorage.setItem('estado_teste', JSON.stringify({
      perguntaAtual, pontuacao, respostasUtilizador
    }));
  }

  renderizarPergunta();
});