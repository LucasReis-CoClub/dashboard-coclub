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
  colors: [colorsGraph.purple],
  chartArea: {
    width: '80%',
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
  height: 2400,
  bold: false
}
