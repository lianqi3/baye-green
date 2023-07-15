import { apiTeamInfo, apiTeamList } from '@/request/api'
import { create } from 'zustand'
import { ListRequest, TeamInfoResponse, TeamListResponse } from '@/types/api.types'
import { ListResponse } from '@/components/VirtualList'

interface TeamStore {
  teamInfo: TeamInfoResponse | null
  teamList: ListResponse<TeamListResponse> | null
  getTeamInfo: () => Promise<void>
  getTeamList: (params: ListRequest) => Promise<void>
}

const teamStore = create<TeamStore>()((set, get) => ({
  teamInfo: null,
  teamList: null,
  getTeamInfo: async () => {
    const res = await apiTeamInfo()
    set({ teamInfo: res.data })
  },
  getTeamList: async ({ page, limit }) => {
    const res = await apiTeamList({ page, limit })
    set({ teamList: res.data })
  },
}))

export default teamStore
