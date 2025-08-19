// Por enquanto, esse JS é básico. Mais tarde podemos adicionar:
// - Scroll suave
// - Tema escuro/claro
// - Menu mobile interativo

document.addEventListener("DOMContentLoaded", () => {
  console.log("Yago Dev: Site carregado com sucesso!");
});
document.addEventListener("DOMContentLoaded", () => {
  console.log("Yago Dev: Site carregado");

  const form = document.querySelector('.form-contato');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      if (!email.includes("@") || !email.includes(".")) {
        alert("Digite um e-mail válido.");
        return;
      }

      // Substitua pelo seu número do WhatsApp (sem espaços, traços ou parênteses)
      const numeroWhatsApp = "5538988217302";

      // Monta a mensagem com encodeURIComponent para evitar erros
      const texto = `Olá, me chamo ${nome} (Email: ${email}) e gostaria de falar sobre:%0A${mensagem}`;
      const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

      // Redireciona para o WhatsApp
      window.open(url, '_blank');

      // Limpa o formulário
      form.reset();
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("bgVideo");
  const source = video.querySelector("source");

  const videos = [
    "videos/bgtec.mp4",
    "videos/bgtec2.mp4",
    "videos/bgtec3.mp4"
  ];

  let index = 0;
  let trocaTimeout;

  function tocarVideoAtual() {
    source.src = videos[index];
    video.load();

    video.play()
      .then(() => {
        // Vídeo tocando normalmente
      })
      .catch((err) => {
        console.warn("Erro ao tentar dar play no vídeo:", err);
      });

    clearTimeout(trocaTimeout);
    trocaTimeout = setTimeout(trocarVideo, 60000); // troca a cada 60 segundos
  }

  function trocarVideo() {
    index = (index + 1) % videos.length;
    tocarVideoAtual();
  }

  // Inicia o primeiro vídeo
  tocarVideoAtual();
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("hamburger");
  const nav = document.querySelector("nav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
});