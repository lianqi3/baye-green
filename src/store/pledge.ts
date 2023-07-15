import { apiPledgeInfo, apiPledgeList } from '@/request/api'
import { create } from 'zustand'
import { ListRequest, PledgeInfoResponse, PledgeListResponse } from '@/types/api.types'
import { ListResponse } from '@/components/VirtualList'

interface PledgeStore {
  pledgeInfo: PledgeInfoResponse | null
  pledgeList: ListResponse<PledgeListResponse> | null
  getPledgeInfo: () => Promise<void>
  getPledgeList: (params: ListRequest) => Promise<void>
}

const pledgeStore = create<PledgeStore>()((set, get) => ({
  pledgeInfo: null,
  pledgeList: null,
  getPledgeInfo: async () => {
    const res = await apiPledgeInfo()
    set({ pledgeInfo: res.data })
  },
  getPledgeList: async ({ page, limit }) => {
    const res = await apiPledgeList({ page, limit })
    set({ pledgeList: res.data })
  },
}))

export default pledgeStore
