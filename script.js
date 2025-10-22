document.addEventListener("DOMContentLoaded", () => {
  const paginas = document.querySelectorAll(".pagina");
  const btnComecar = document.getElementById("btnComecar");

  function mostrarPagina(id) {
    paginas.forEach(p => p.classList.remove("ativa"));
    document.getElementById(id).classList.add("ativa");
  }

  // Botão da capa
  btnComecar.addEventListener("click", () => mostrarPagina("pagina1"));

  // Botões Próximo e Anterior
  document.querySelectorAll(".btn-proximo").forEach(btn => {
    btn.addEventListener("click", () => {
      mostrarPagina(btn.dataset.proxima);
    });
  });

  document.querySelectorAll(".btn-anterior").forEach(btn => {
    btn.addEventListener("click", () => {
      mostrarPagina(btn.dataset.anterior);
    });
  });

  // Botão Voltar ao início
  document.querySelectorAll(".btn-voltar-inicio").forEach(btn => {
    btn.addEventListener("click", () => mostrarPagina("capa"));
    
  });
   
    // ====== EMAILJS CONFIGURAÇÃO ======
    emailjs.init("jZi-uGRtlAAxS4Ca8"); 

    document.getElementById("formulario").addEventListener("submit", function(e) {
        e.preventDefault();
        

        //LOG DE DIAGNÓSTICO: Se você vir esta menagem, o JS está rodando!
         console.log("Evento de SUBMIT capturado. Tentando enviar via EmailJS");

        emailjs.sendForm("service_kqk0dg8", "template_lcctpce", this)
            .then(() => {
                alert("✨ Formulário enviado com sucesso! Em breve entraremos em contato.");
                this.reset();
                mostrarPagina("capa");
            })
            .catch((error) => {
              //LOG DE ERRO: Se você vir esta mensagem, a falha é nas chaves de API.
                console.error("ERRO NA API DO EMAILJS:", error);
                alert("❌ Ocorreu um erro ao enviar o formulário. Tente novamente.");
            });
      });
 
  });
