import { GoogleChartOptions } from 'react-google-charts'
import { colorsGraph } from 'styles/colors'

export const defaultOptions: GoogleChartOptions = {
  backgroundColor: '',
  chartArea: { width: '85%', height: '80%' }, // default
  bar: { groupWidth: '25' },
  legend: {
    position: 'top',
    textStyle: { fontSize: 12, color: colorsGraph.titleAxis },
    alignment: 'center'
  },
  hAxis: {
    textStyle: {
      fontSize: 11,
      color: colorsGraph.titleAxis,
      bold: false
    }
  },
  vAxis: {
    textStyle: {
      fontSize: 13,
      color: colorsGraph.titleAxis,
      bold: false
    }
  },
  bold: false,
  annotations: {
    textStyle: {
      fontSize: 15 // Adjust the font size as needed
    }
  },
  tooltip: { textStyle: { fontSize: 13 } }
}

const chartArea = {
  barChart: {
    chartArea: {
      width: '70%',
      top: 20,
      bottom: 1,
      left: 150
    }
  },
  lineChart: {
    chartArea: {
      width: '95%',
      height: '80%'
    }
  }
}

export const data = [
  {
    title: 'Funcionários cadastrados',
    value: 3.789,
    date: null,
    stonks: {
      text: '+15%',
      positive: true
    }
  },
  {
    title: 'Mensagens trocadas',
    value: 233.908,
    date: 'Nov/22',
    stonks: null
  },
  {
    title: 'Média de conexões por colaborador',
    value: 102,
    date: null,
    stonks: {
      text: '+22%',
      positive: true
    }
  },
  {
    title: 'Interesses ativos ',
    value: 78,
    date: null,
    stonks: {
      text: '-10%',
      positive: false
    }
  },
  {
    title: 'Interesses ativos ',
    value: 78,
    date: null,
    stonks: {
      text: '-10%',
      positive: false
    }
  },
  {
    title: 'Interesses ativos ',
    value: 78,
    date: null,
    stonks: {
      text: '-10%',
      positive: false
    }
  }
]

export const dataGraph = [
  ['Mês', 'Total'],
  ['jan', 1000],
  ['fev', 1170],
  ['mar', 660],
  ['abr', 1030],
  ['mai', 124],
  ['jun', 521],
  ['jul', 51],
  ['ago', 1030],
  ['set', 12],
  ['out', 654],
  ['nov', 456],
  ['dez', 124]
]

export const options: GoogleChartOptions = {
  ...defaultOptions,
  legend: { position: 'none' },
  backgroundColor: '',
  colors: [colorsGraph.blue],
  ...chartArea.barChart,
  hAxis: {
    textStyle: {
      fontSize: 11,
      color: colorsGraph.titleAxis,
      bold: false
    },
    textPosition: 'none'
  },
  vAxis: {
    textStyle: {
      fontSize: 13,
      color: colorsGraph.titleAxis,
      bold: false
    }
  },
  bold: false,
  annotations: {
    textStyle: {
      fontSize: 15 // Adjust the font size as needed
    }
  }
}

/* usuarios engajados */
export const dataUE = [
  [
    'Element',
    'Density',
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify'
    }
  ],
  ['João Silva Santos', 100, 100],
  ['Pedro Roberto Euclides', 95, 95],
  ['Mario Fernandes ', 93, 93],
  ['Roberto Soares de Oliveira', 84, 84],
  ['Maria Paula Ortiz', 80, 80],
  ['Caue Rocha Andrade', 60, 60],
  ['Fernanda Monteiro de Sá', 55, 55],
  ['Joana Rocha', 51, 51],
  ['Natalia Silva', 10, 10],
  ['João Silva Santos', 100, 100],
  ['Pedro Roberto Euclides', 95, 95],
  ['Mario Fernandes ', 93, 93],
  ['Roberto Soares de Oliveira', 84, 84],
  ['Maria Paula Ortiz', 80, 80],
  ['Caue Rocha Andrade', 60, 60],
  ['Fernanda Monteiro de Sá', 55, 55],
  ['Joana Rocha', 51, 51],
  ['Natalia Silva', 10, 10],
  ['João Silva Santos', 100, 100],
  ['Pedro Roberto Euclides', 95, 95],
  ['Mario Fernandes ', 93, 93],
  ['Roberto Soares de Oliveira', 84, 84],
  ['Maria Paula Ortiz', 80, 80],
  ['Caue Rocha Andrade', 60, 60],
  ['Fernanda Monteiro de Sá', 55, 55],
  ['Joana Rocha', 51, 51],
  ['Natalia Silva', 10, 10],
  ['João Silva Santos', 100, 100],
  ['Pedro Roberto Euclides', 95, 95],
  ['Mario Fernandes ', 93, 93],
  ['Roberto Soares de Oliveira', 84, 84],
  ['Maria Paula Ortiz', 80, 80],
  ['Caue Rocha Andrade', 60, 60],
  ['Fernanda Monteiro de Sá', 55, 55],
  ['Joana Rocha', 51, 51],
  ['Natalia Silva', 10, 10],
  ['João Silva Santos', 100, 100],
  ['Pedro Roberto Euclides', 95, 95],
  ['Mario Fernandes ', 93, 93],
  ['Roberto Soares de Oliveira', 84, 84],
  ['Maria Paula Ortiz', 80, 80],
  ['Caue Rocha Andrade', 60, 60],
  ['Fernanda Monteiro de Sá', 55, 55],
  ['Joana Rocha', 51, 51],
  ['Natalia Silva', 10, 10],
  ['João Silva Santos', 100, 100],
  ['Pedro Roberto Euclides', 95, 95],
  ['Mario Fernandes ', 93, 93],
  ['Roberto Soares de Oliveira', 84, 84],
  ['Maria Paula Ortiz', 80, 80],
  ['Caue Rocha Andrade', 60, 60],
  ['Fernanda Monteiro de Sá', 55, 55],
  ['Joana Rocha', 51, 51],
  ['Natalia Silva', 10, 10]
]

export const optionsUE: GoogleChartOptions = {
  ...defaultOptions,
  bar: { groupWidth: '25' },
  legend: { position: 'none' },
  colors: [colorsGraph.blue],
  ...chartArea.barChart,
  height: ((dataUE.length - 1) / 2) * 100,
  annotations: {
    textStyle: {
      fontSize: 15 // Adjust the font size as needed
    }
  }
}

//
//
//
//
//

/* interesses principais */

export const dataMainInterest = [
  [
    'Interesses',
    'Total',
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify'
    }
  ],
  ['Séries', 100, 100],
  ['Filmes', 95, 95],
  ['Futebol ', 93, 93],
  ['Viagens', 84, 84],
  ['Comidas', 80, 80],
  ['Jogos de Tabuleiro', 60, 60],
  ['Happy Hour', 55, 55],
  ['Futevôlei', 51, 51],
  ['Surf', 10, 10]
]

export const optionsMainInterest: GoogleChartOptions = {
  ...defaultOptions,
  ...chartArea.barChart,
  colors: [colorsGraph.purple],
  legend: { position: 'none' },
  height: ((dataMainInterest.length - 1) / 2) * 100
}

//
//
//
//
//

/* novos membros */

export const dataNewMembers = [
  ['mês', 'Total'],
  ['jan', 10],
  ['fev', 3],
  ['mar', 35],
  ['abr', 24],
  ['mai', 21],
  ['jun', 15],
  ['jul', 32],
  ['ago', 12],
  ['set', 24],
  ['out', 10],
  ['nov', 8],
  ['dez', 6]
]

export const optionsNewMembers: GoogleChartOptions = {
  ...defaultOptions,
  height: 450,
  ...chartArea.lineChart,
  colors: [colorsGraph.red]
}
//
//
//
//
//

//
//
//
//
//

/* novos membros */
export const dataConnDiff = [
  [
    'Usuário',
    'Pedido de amizade enviado',
    { sourceColumn: 0, role: 'annotation', type: 'string', calc: 'stringify' }, // Adicione uma coluna de anotações
    'Pedido de amizade aceito',
    { sourceColumn: 0, role: 'annotation', type: 'string', calc: 'stringify' } // Adicione uma coluna de anotações
  ],
  ['João Silva Santos', 50, 50, 46, 46], // Adicione valores de anotação correspondentes
  ['Pedro Roberto Euclides', 46, 46, 28, 28],
  ['Mario Fernandes', 43, 43, 10, 10],
  ['Roberto Soares de Oliviera', 42, 42, 40, 40],
  ['Maria Paula Ortiz', 32, 32, 8, 8],
  ['Caue Rocha Andrade', 24, 24, 16, 16],
  ['Fernanda Monteiro de Sá', 20, 20, 10, 10],
  ['Joana Rocha', 18, 18, 3, 3],
  ['Natalia Silva', 10, 10, 4, 4],
  ['Maria Paula Ortiz', 3, 3, 1, 1],
  ['João Silva Santos', 50, 50, 46, 46], // Adicione valores de anotação correspondentes
  ['Pedro Roberto Euclides', 46, 46, 28, 28],
  ['Mario Fernandes', 43, 43, 10, 10],
  ['Roberto Soares de Oliviera', 42, 42, 40, 40],
  ['Maria Paula Ortiz', 32, 32, 8, 8],
  ['Caue Rocha Andrade', 24, 24, 16, 16],
  ['Fernanda Monteiro de Sá', 20, 20, 10, 10],
  ['Joana Rocha', 18, 18, 3, 3],
  ['Natalia Silva', 10, 10, 4, 4],
  ['Maria Paula Ortiz', 3, 3, 1, 1]
]

export const optionsConn: GoogleChartOptions = {
  ...defaultOptions,
  bar: { groupWidth: '35' },
  chartArea: {
    width: '65%',
    height: '80%',
    top: 20,
    bottom: 1
  },
  colors: [colorsGraph.darkCian, colorsGraph.cian],
  height: ((dataConnDiff.length - 1) / 2) * 120
}
//
//
//
//
//

//
//
//
//
//

/* localidade */

export const dataGeo = [
  ['Country', 'Population', 'Area Percentage'],
  ['France', 65700000, 50],
  ['Germany', 81890000, 27],
  ['Poland', 38540000, 23]
]

export const optionsGeo = {
  displayMode: 'markers',
  colorAxis: {
    colors: ['green', 'blue']
  }
}

export const dataCities = [
  [
    'Cidades',
    'Total de Usuários',
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify'
    }
  ],
  ['São Paulo', 250, 250],
  ['Belo Horizonte', 120, 120],
  ['Salvador', 200, 200],
  ['Fortaleza', 150, 150],
  ['Porto Alegre', 110, 110],
  ['São Paulo', 250, 250],
  ['Belo Horizonte', 120, 120],
  ['Salvador', 200, 200],
  ['Fortaleza', 150, 150],
  ['Porto Alegre', 110, 110],
  ['São Paulo', 250, 250],
  ['Belo Horizonte', 120, 120],
  ['Salvador', 200, 200],
  ['Fortaleza', 150, 150],
  ['Porto Alegre', 110, 110],
  ['São Paulo', 250, 250],
  ['Belo Horizonte', 120, 120],
  ['Salvador', 200, 200],
  ['Fortaleza', 150, 150],
  ['Porto Alegre', 110, 110]
]

export const optionsCities: GoogleChartOptions = {
  bar: { groupWidth: '25' },
  legend: { position: 'none' },
  backgroundColor: '',
  colors: [colorsGraph.purple],
  chartArea: {
    width: '70%',
    top: 20,
    bottom: 1,
    left: 150
  },
  hAxis: {
    textStyle: {
      fontSize: 11,
      color: colorsGraph.titleAxis,
      bold: false
    },
    textPosition: 'none'
  },
  vAxis: {
    textStyle: {
      fontSize: 13,
      color: colorsGraph.titleAxis,
      bold: false
    }
  },
  height: ((dataCities.length - 1) / 2) * 100,
  bold: false,
  annotations: {
    textStyle: {
      fontSize: 15 // Adjust the font size as needed
    }
  }
}
//
//
//
//
//
