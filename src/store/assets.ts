import { apiAssetInfo, apiAssetList } from '@/request/api'
import { create } from 'zustand'
import { AssetsInfoResponse, AssetsListResponse, LimitRequest } from '@/types/api.types'
import { ListResponse } from '@/components/VirtualList'

interface AssetsStore {
  assetsInfo: AssetsInfoResponse | null
  assetList: AssetsListResponse[] | null
  getAssetsInfo: () => Promise<void>
  getAssetList: (params: LimitRequest) => Promise<void>
}

const assetsStore = create<AssetsStore>()((set, get) => ({
  assetsInfo: null,
  assetList: null,
  getAssetsInfo: async () => {
    const res = await apiAssetInfo()
    set({ assetsInfo: res.data })
  },
  getAssetList: async ({ page }) => {
    const res: any = await apiAssetList({ page })
    set({ assetList: res.data.data })
  },
}))

export default assetsStore
