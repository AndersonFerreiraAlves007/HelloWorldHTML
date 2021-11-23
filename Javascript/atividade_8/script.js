function fillHeader() {
  document.querySelector('header nav ul :nth-child(1) a').innerHTML = 'Sobre'
  document.querySelector('header nav ul :nth-child(2) a').innerHTML = 'Subespécies'
  document.querySelector('header nav ul :nth-child(3) a').innerHTML = 'Reprodução'
  document.querySelector('header nav ul :nth-child(4) a').innerHTML = 'Hábitos'
  document.querySelector('header nav ul :nth-child(5) a').innerHTML = 'Curiosidades'
}

function fillSectionSobre() {
  document.querySelector('#section-sobre > h2').innerHTML = 'Sobre'
  document.querySelector('#section-sobre :nth-child(2)').innerHTML = 'O tigre (Panthera tigris) é um animal mamífero, carnívoro e excelente predador. Eles representam os maiores felinos da natureza.'
  document.querySelector('#section-sobre :nth-child(3)').innerHTML = 'Hoje, os tigres são encontrados na região da Ásia, mas eles possuíam maior distribuição pelo planeta. Porém, com a crescente destruição de seus habitats e a caça intensa, ficaram restritos a alguns pontos do continente asiático.'
}

function fill() {
  fillHeader()
  fillSectionSobre()
}

fill()