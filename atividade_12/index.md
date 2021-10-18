Questão 1

O Cascading Style Sheets é uma linguagem utilizada para especificar como um documento é apresentado ao usuário. 
Geralmente esse documento é um arquivo de texto estruturado utilizando uma linguam de marcação, a principal seria o HTML, mas pode ser SVG ou XML. O CSS, estiliza o conteudo do documento, geralmente uma página web, definindo fonts, cores, layout, e disposição de elementos, espaçamentos e muitas outras propriedades que
mudem o comportamento visual de elementos do documento, como os elementos HTML.

Questao 2

Um folhas de estilos em CSS é formado por regras. Essas regras são formadas pelo emparelhamento de um seletor e um bloco de declarações de estilos. Basicamente, a definição dos estilos aplicados a quais elementos. O seletor é que define quais elementos serão afetas por essa regras. O bloco vem após o seletor e é formado por um conjunto de chaves "{}", que contem eu seu interior as declarações de estilos aplicadas a esse seletor. pode haver uma ou mais declarações, sendo que uma decflaração é formado pelo emparelhamento de uma propriedade, caractere de 2 pontos e o valor dessa propriedade.

Questao 4

Para explicar isso é importante definir 2 conceitos importantes. O primeiro conceito é o de cascata, bacicamente esse conceito faz com que as regras ou estilos definidos depois na folhas de estilo tenham prioridade. O segundo conceito é o de especificidade, dessa forma os seletores com maiores especificidades tem maior precedencia que outros. Como regra geral, seletores "id" possuim maior especificidade que os de classe, e estes por sua possuem maior especificidade que os seletores de elementos. Alem disso, existe a precedencia com relação ao fato de o css ser de um arquivo externo, inline ou interno. Os estilos inline, definidos atraves do atributo style, possuem maior precedencia que os estilos aplicados usando css interno, na tag style, que por sua vez possui maior precedencia que os estilos aplicados por um arquivo externo.

Questão 5

Depende. Depende se a atribuição anterior tem maior ou menor especificidade. Caso a atribuição anterior, possua a mesma especificidade, a mesma especificidade, então ela será invalidada(substituida), caso contrario, ou seja tenha uma especificidade maior, então ela irá prevalecer.