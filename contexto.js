document.addEventListener('DOMContentLoaded', () => {
  const contextoId = document.body.dataset.contexto;
  if (!contextoId) return;

  const situacao1 = document.getElementById('situacao-1');
  const situacao2 = document.getElementById('situacao-2');
  const conclusao = document.getElementById('conclusao');
  const botoesOpcao = document.querySelectorAll('.opcao-btn');
  const btnProxima = document.querySelectorAll('.btn-proxima');
  const btnRecomecar = document.querySelector('.btn-recomecar');

  // Restaurar progresso
  const progresso = sessionStorage.getItem('progresso_' + contextoId);
  if (progresso === 'situacao2') {
    if (situacao1) situacao1.style.display = 'none';
    if (situacao2) situacao2.style.display = 'block';
  } else if (progresso === 'conclusao') {
    if (situacao1) situacao1.style.display = 'none';
    if (situacao2) situacao2.style.display = 'none';
    if (conclusao) conclusao.style.display = 'block';
  }

  botoesOpcao.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const container = btn.closest('.situacao-container');
      const opcoesContainer = container.querySelector('.opcoes');
      const resultadoContainer = container.querySelector('.resultado');
      const isCorreta = btn.dataset.correta === 'true';
      
      // Esconder opções
      opcoesContainer.style.display = 'none';
      
      // Configurar resultado
      resultadoContainer.style.display = 'block';
      resultadoContainer.classList.add(isCorreta ? 'certo' : 'errado');
      
      // Mostrar texto específico
      const textosResultado = container.querySelectorAll('.resultado-texto');
      textosResultado.forEach(t => t.classList.remove('ativo'));
      
      const textoId = 'resultado-' + btn.dataset.opcao;
      const textoAtivo = container.querySelector('#' + textoId);
      if (textoAtivo) textoAtivo.classList.add('ativo');

      // Foco no título do resultado
      const tituloResultado = resultadoContainer.querySelector('h3');
      if (tituloResultado) {
        tituloResultado.setAttribute('tabindex', '-1');
        tituloResultado.focus();
      }
    });
  });

  btnProxima.forEach(btn => {
    btn.addEventListener('click', () => {
      if (situacao1) situacao1.style.display = 'none';
      if (situacao2) {
        situacao2.style.display = 'block';
        // Focar no título da nova situação
        const titulo = situacao2.querySelector('h2');
        if (titulo) {
          titulo.setAttribute('tabindex', '-1');
          titulo.focus();
        }
      }
      sessionStorage.setItem('progresso_' + contextoId, 'situacao2');
    });
  });

  const btnVerOutros = document.querySelector('.btn-ver-outros');
  if (btnVerOutros) {
    btnVerOutros.addEventListener('click', () => {
      if (situacao2) situacao2.style.display = 'none';
      if (conclusao) {
        conclusao.style.display = 'block';
        const tituloConc = conclusao.querySelector('h2');
        if (tituloConc) {
          tituloConc.setAttribute('tabindex', '-1');
          tituloConc.focus();
        }
      }
      sessionStorage.setItem('progresso_' + contextoId, 'conclusao');
    });
  }

  if (btnRecomecar) {
    btnRecomecar.addEventListener('click', () => {
      sessionStorage.removeItem('progresso_' + contextoId);
      if (situacao1) situacao1.style.display = 'block';
      if (situacao2) situacao2.style.display = 'none';
      if (conclusao) conclusao.style.display = 'none';
      
      // Resetar opções e resultados
      document.querySelectorAll('.opcoes').forEach(el => el.style.display = 'flex');
      document.querySelectorAll('.resultado').forEach(el => el.style.display = 'none');
    });
  }
});