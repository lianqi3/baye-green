import {
  getAccountInfo,
  getTeamCountData,
  getMinerInfo,
  getMinerLogs,
  getTeamList,
} from '@/request/api'
import { accountInfoType, MinerPoolType, TeamCountType } from '@/types/api.types'
import { create } from 'zustand'

interface AppStore {
  accountInfo: accountInfoType | null
  teamCount: TeamCountType | null
  dataList: MinerPoolType[] | null
  getAccount: () => Promise<void>
  getTeamCount: () => Promise<void>
  getDataList: (params: { page: number }) => Promise<void>
}

const minerPoolStore = create<AppStore>((set, get) => ({
  accountInfo: null,
  teamCount: null,
  dataList: null,
  getAccount: async () => {
    const { data } = await getAccountInfo()
    set({ accountInfo: data })
  },
  getTeamCount: async () => {
    const { data } = await getTeamCountData()
    set({ teamCount: data })
  },
  getDataList: async ({ page }) => {
    const { data } = await getTeamList({ page })
    set({ dataList: data.data })
  },
}))
export default minerPoolStore
