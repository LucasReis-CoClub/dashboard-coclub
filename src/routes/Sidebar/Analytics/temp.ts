import { GoogleChartOptions } from 'react-google-charts'
import { colorsGraph } from 'styles/colors'

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
  ['Mês', 'Total de Usuários'],
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
  backgroundColor: '',
  legend: {
    position: 'top',
    textStyle: { fontSize: 12, color: colorsGraph.titleAxis },
    alignment: 'center'
  },
  chartArea: { width: '85%', height: '80%' },
  colors: [colorsGraph.red],
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
  bar: { groupWidth: '25' },
  legend: { position: 'none' },
  backgroundColor: '',
  colors: [colorsGraph.blue],
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
  height: ((dataUE.length - 1) / 2) * 100,
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

/* interesses principais */

export const dataMainInterest = [
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
  height: ((dataMainInterest.length - 1) / 2) * 100,
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

/* novos membros */

export const dataNewMembers = [
  ['mês', 'Total de Usuários'],
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
  backgroundColor: '',
  // height:
  height: 400,
  chartArea: {
    width: '95%',
    height: '80%'
  },
  legend: {
    position: 'bottom'
  },
  colors: [colorsGraph.red],
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
  }
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
export const dataOld = [
  ['mês', 'Total de Usuários'],
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

export const dataNew = [
  ['mês', 'Total de Usuários'],
  ['jan', 9],
  ['fev', 1],
  ['mar', 3],
  ['abr', 4],
  ['mai', 1],
  ['jun', 5],
  ['jul', 2],
  ['ago', 2],
  ['set', 4],
  ['out', 0],
  ['nov', 5],
  ['dez', 4]
]

export const dataConnDiff = {
  old: dataOld,
  new: dataNew
}

export const optionsConn: GoogleChartOptions = {
  backgroundColor: '',
  // height:
  height: 400,
  chartArea: {
    width: '65%',
    height: '80%'
  },
  legend: {
    alignment: 'center'
  },
  colors: [colorsGraph.red],
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
  }
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
//
//
//
//
//
