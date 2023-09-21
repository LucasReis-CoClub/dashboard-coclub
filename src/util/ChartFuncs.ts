import { colorsGraph } from 'styles/colors'

export function generateChartData (data: any[][]) {
  return data.map((row, index) => {
    if (index === 0) {
      return row
    }

    const color = colorsGraph.order[(index - 1) % colorsGraph.order.length]
    return [...row, color]
  })
}
