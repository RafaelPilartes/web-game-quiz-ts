const data = [
  {
    category: 'Janeth Pilartes',
    questions: [
      {
        question: 'Nome completo?',
        options: [
          'Janeth Adelaide Airosa Quila',
          'Janeth Quila Airosa Adelaide',
          'Janeth Adelaide Airosa Quila Pilartes',
          'Janeth Sia Airosa Da Silva'
        ],
        answer: 'Janeth Adelaide Airosa Quila Pilartes',
        tip: 'É uma tag de uma letra apenas'
      },
      {
        question: 'Comida favorita?',
        options: [
          'FastFood',
          'Arroz com feijão',
          'Bacalhau com natas',
          'Caldeirada'
        ],
        answer: 'FastFood',
        tip: 'É uma tag de uma letra apenas'
      },
      {
        question: 'Qual Cantor/a favorito/a?',
        options: ['Pérola', 'Anselmo Ralph', 'XxxTentacion', 'Sia'],
        answer: 'Sia',
        tip: 'Hyperlink Reference'
      },
      {
        question: 'País dos sonhos',
        options: ['Portugal', 'Londres', 'Dubai', 'Maldivas'],
        answer: 'Londres'
      },
      {
        question: 'O quanto ela ama o seu namorado?',
        options: [
          'Ama muito',
          'Só está apaixonada',
          'Infinitamente e mais além',
          'É só uma curtição'
        ],
        answer: 'Infinitamente e mais além'
      },
      {
        question: 'Desejos exóticos?',
        options: [
          'Viajar pelo mundo',
          'Tranzar no espelho do ultimo andar',
          'Ganhar na loteria',
          'Ganhar misse África'
        ],
        answer: 'Tranzar no espelho do ultimo andar'
      }
    ]
  },
  {
    category: 'HTML',
    questions: [
      {
        question: 'Qual tag cria um parágrafo?',
        options: ['<p>', '<h1>', '<text>', '<ul>'],
        answer: '<p>',
        tip: 'É uma tag de uma letra apenas'
      },
      {
        question: 'Qual atributo adiciona um link para a tag a?',
        options: ['alt', 'href', 'src', 'link'],
        answer: 'href',
        tip: 'Hyperlink Reference'
      },
      {
        question: 'As listas não ordenadas tem a tag de:',
        options: ['<ol>', '<ul>', '<li>', '<list>'],
        answer: '<ul>'
      },
      {
        question: 'Qual atributo deixa o input obrigatório?',
        options: ['placeholder', 'value', 'required', 'maxlength'],
        answer: 'required'
      },
      {
        question: 'A tag semântica indicada para rodapés é a:',
        options: ['div', 'main', 'section', 'footer'],
        answer: 'footer'
      }
    ]
  },
  {
    category: 'CSS',
    questions: [
      {
        question: 'Qual regra altera a cor de um elemento?',
        options: ['color', 'background-color', 'font-size', 'transition'],
        answer: 'color',
        tip: 'Cor em inglês'
      },
      {
        question: 'Para aumentar a fonte de um elemento utilizamos:',
        options: ['font', 'text-transform', 'font-size', 'hover'],
        answer: 'font-size'
      },
      {
        question: 'A posição que deixa um elemento fixo é a:',
        options: ['static', 'absolute', 'fixed', 'relative'],
        answer: 'fixed'
      }
    ]
  },
  {
    category: 'JavaScript',
    questions: [
      {
        question: 'O que é Vanilla JavaScript?',
        options: [
          'JavaScript puro',
          'Uma biblioteca JavaScript',
          'Um framework JavaScript',
          'Um compilador de JavaScript'
        ],
        answer: 'JavaScript puro'
      },
      {
        question: 'Com qual instrução declaramos uma constante em JavaScript?',
        options: ['const', 'let', 'var', 'define'],
        answer: 'const'
      },
      {
        question: 'Qual dos tipos de dado a seguir não existe em JavaScript?',
        options: ['string', 'number', 'boolean', 'float'],
        answer: 'float'
      },
      {
        question: 'Qual dos métodos a seguir seleciona um elemento?',
        options: ['querySelector', 'parseInt', 'sort', 'reduce'],
        answer: 'querySelector'
      },
      {
        question:
          'Qual destas propriedades da a quantidade de elementos de um array?',
        options: ['qty', 'length', 'items', 'index'],
        answer: 'length'
      }
    ]
  }
]

export default data
