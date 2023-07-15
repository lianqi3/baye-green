import { getMinerInfo, getMinerLogs } from '@/request/api'
import { MinerLogsResponse, MinerResponse } from '@/types/api.types'
import { Toast } from 'antd-mobile'
import { create } from 'zustand'

interface AppStore {
  minerData: MinerResponse | null
  minerLogs: MinerLogsResponse[] | null
  hasMore: boolean
  getMiner: () => Promise<void>
  getMinerData: (params: { page: number; type: string }) => Promise<void>
}

const minerStore = create<AppStore>((set, get) => ({
  minerData: null,
  minerLogs: null,
  hasMore: true,
  getMiner: async () => {
    const { data } = await getMinerInfo()
    set({ minerData: data[0] })
  },
  getMinerData: async ({ page, type }) => {
    Toast.show({
      icon: 'loading',
      content: '加载中…',
      duration: 0,
    })
    const { data }: any = await getMinerLogs({ page, type })
    Toast.clear()
    const list: any = get().minerLogs
    console.log(list)

    if (list && list.length == data.total) {
      set({ hasMore: false })
    }
    if (data.current_page == 1) set({ minerLogs: data.data })
    else set({ minerLogs: (list ?? []).concat(data.data) })
  },
}))
export default minerStore
