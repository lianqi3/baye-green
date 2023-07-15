import { apiChartInfo } from '@/request/api'
import { create } from 'zustand'
import { ChartInfoResponse } from '@/types/api.types'
interface ChartStore {
  chartInfo: any | undefined
  chartInfoDefault: any | null
  chartOptions: any | null
  getChartInfo: () => Promise<void>
}

const chartStore = create<ChartStore>()((set, get) => ({
  chartInfo: undefined,
  chartInfoDefault: null,
  chartOptions: null,
  getChartInfo: async () => {
    const res = await apiChartInfo()
    const dataArr: any[] = []
    const data2Arr: number[] = []
    const labels: string[] = []
    res.data.map((item: ChartInfoResponse) => {
      const items = {
        name: item.today,
        pv: item.v,
        amt: item.v,
      }
      dataArr.push(items)
      data2Arr.push(item.v)
      labels.push(item.today.toString())
    })
    set({ chartInfo: dataArr })
    const config = {
      labels: labels, // X 轴标签
      datasets: [
        {
          label: '价格', // 数据集标签
          data: data2Arr, // 数据值
          fill: false, // 不填充区域下方
          backgroundColor: 'rgba(0, 123, 255, 0.2)', // 数据集背景颜色
          borderColor: 'rgba(0, 123, 255, 1)', // 数据集边框颜色
          borderWidth: 1, // 数据集边框宽度
        },
      ],
    }
    const options = {
      responsive: true,
      scales: {
        x: {
          type: 'category', // 将 x 轴的类型设置为 'category'
          labels: labels, // 设置 x 轴的标签
          position: 'bottom',
        },
        y: {
          ticks: {
            callback: function (value: any) {
              return value.toFixed(8) // 保留 8 位小数
            },
          },
        },
      },
      plugins: {
        zoom: {
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'xy',
          },
          pan: {
            enabled: true,
            mode: 'xy',
          },
        },
      },
    }
    set({ chartOptions: options })
    set({ chartInfoDefault: config })
  },
}))

export default chartStore
