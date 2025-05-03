// Função para rolar suavemente para o elemento ao ser clicado no cabeçalho
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Efeito de animação para vídeos (aparecem à medida que o usuário rola a página)
const videoItems = document.querySelectorAll('.video-item');

// Função para rolar suavemente para a seção "Sobre"
const sobreSection = document.querySelector('.sobre');

// Função para adicionar/remover a classe de animação à medida que a seção entra na tela
const onScroll = () => {
  // Verifica se a seção "Sobre" está visível e aplica a animação
  if (isElementInViewport(sobreSection)) {
    sobreSection.classList.add('visible');
  } else {
    sobreSection.classList.remove('visible');
  }

  // Verifica a visibilidade de outros elementos, como vídeos
  videoItems.forEach(item => {
    if (isElementInViewport(item)) {
      item.classList.add('visible');
    }
  });
};

// Verificar se o elemento está na área visível da tela
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Chama a função de animação quando o usuário rolar a página
window.addEventListener('scroll', onScroll);
onScroll(); // Chama para verificar os elementos visíveis no carregamento da página