function getSatisfacao(valor) {
  switch (valor) {
    case "otimo":
      return "Ótimo"
    case "bom":
      return "Bom"
    case "regular":
      return "Regular"
    case "ruim":
      return "Ruim"
    case "pessimo":
      return "Péssimo"
    default:
      return ""
  }
}

function enviar() {
  const atendimento = document.querySelector('input[name="atendimento"]:checked').value;
  const ambiente = document.querySelector('input[name="ambiente"]:checked').value;
  const cardapio = document.querySelector('input[name="cardapio"]:checked').value;
  const custo = document.querySelector('input[name="custo"]:checked').value;
  const qualidade = document.querySelector('input[name="qualidade"]:checked').value;

  const containerQuestaoAtendimento = document.getElementById("container-questao-atendimento");
  const containerQuestaoAmbiente = document.getElementById("container-questao-ambiente");
  const containerQuestaoCardapio = document.getElementById("container-questao-cardapio");
  const containerQuestaoCusto = document.getElementById("container-questao-custo");
  const containerQuestaoQualidade = document.getElementById("container-questao-qualidade");

  const respostaAtendimento = document.createElement('div')
  const respostaAnteriorAtendimento = document.getElementById("resposta-atendimento");
  if(respostaAnteriorAtendimento) {
    respostaAnteriorAtendimento.remove()
  }
  respostaAtendimento.innerHTML = `Sua avaliação para Atendiamento: ${getSatisfacao(atendimento)}`
  respostaAtendimento.style.color = 'crimson'
  respostaAtendimento.style.fontSize = '20px'
  respostaAtendimento.style.fontWeight = 'bold'
  respostaAtendimento.setAttribute("id", "resposta-atendimento")
  containerQuestaoAtendimento.append(respostaAtendimento)

  const respostaAmbiente = document.createElement('div')
  const respostaAnteriorAmbiente = document.getElementById("resposta-ambiente");
  if(respostaAnteriorAmbiente) {
    respostaAnteriorAmbiente.remove()
  }
  respostaAmbiente.innerHTML = `Sua avaliação para Ambiente: ${getSatisfacao(ambiente)}`
  respostaAmbiente.style.color = 'crimson'
  respostaAmbiente.style.fontSize = '20px'
  respostaAmbiente.style.fontWeight = 'bold'
  respostaAmbiente.setAttribute("id", "resposta-ambiente")
  containerQuestaoAmbiente.append(respostaAmbiente)

  const respostaCardapio = document.createElement('div')
  const respostaAnteriorCardapio = document.getElementById("resposta-cardapio");
  if(respostaAnteriorCardapio) {
    respostaAnteriorCardapio.remove()
  }
  respostaCardapio.innerHTML = `Sua avaliação para Cardápio: ${getSatisfacao(cardapio)}`
  respostaCardapio.style.color = 'crimson'
  respostaCardapio.style.fontSize = '20px'
  respostaCardapio.style.fontWeight = 'bold'
  respostaCardapio.setAttribute("id", "resposta-cardapio")
  containerQuestaoCardapio.append(respostaCardapio)

  const respostaCusto = document.createElement('div')
  const respostaAnteriorCusto = document.getElementById("resposta-custo");
  if(respostaAnteriorCusto) {
    respostaAnteriorCusto.remove()
  }
  respostaCusto.innerHTML = `Sua avaliação para Custo: ${getSatisfacao(custo)}`
  respostaCusto.style.color = 'crimson'
  respostaCusto.style.fontSize = '20px'
  respostaCusto.style.fontWeight = 'bold'
  respostaCusto.setAttribute("id", "resposta-custo")
  containerQuestaoCusto.append(respostaCusto)

  const respostaQualidade = document.createElement('div')
  const respostaAnteriorQualidade = document.getElementById("resposta-qualidade");
  if(respostaAnteriorQualidade) {
    respostaAnteriorQualidade.remove()
  }
  respostaQualidade.innerHTML = `Sua avaliação para Qualidade: ${getSatisfacao(qualidade)}`
  respostaQualidade.style.color = 'crimson'
  respostaQualidade.style.fontSize = '20px'
  respostaQualidade.style.fontWeight = 'bold'
  respostaQualidade.setAttribute("id", "resposta-qualidade")
  containerQuestaoQualidade.append(respostaQualidade)
}