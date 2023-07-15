import { apiLogin, apiPair, getLink, getContentList, getOverview, getRankList } from '@/request/api'
import { create } from 'zustand'
import { Toast } from 'antd-mobile'
import {
  LoginResponse,
  PairResponse,
  LinkInfoType,
  NoticeType,
  OverviewResponse,
  RankResponse,
} from '@/types/api.types'

interface AppStore {
  token: string | null
  address: string | null
  userInfo: LoginResponse | null
  loginStatus: boolean
  bind: boolean
  pair: PairResponse[] | null
  linkInfo: LinkInfoType | null
  noticeList: NoticeType[]
  login: (params: { address: string }) => Promise<void>
  getPair: () => Promise<void>
  outLogin: () => void
  getLinkInfo: () => Promise<void>
  getNotice: (params: { page: number }) => Promise<void>
  overviewBlock: OverviewResponse | null
  getOverviewBlock: () => Promise<void>
  rank: RankResponse[] | null
  getRank: () => Promise<void>
}

const mainStore = create<AppStore>()((set, get) => ({
  token: null,
  loginStatus: false,
  bind: false,
  address: null,
  userInfo: null,
  pair: null,
  onAlphaMarketTickerRender: null,
  commonInfoInfo: null,
  assetsInfo: null,
  linkInfo: null,
  noticeList: [], // 公告信息
  overviewBlock: null, // 全网概览
  rank: null, // 全网算力排行
  minerData: null,
  login: async (params) => {
    try {
      const res: any = await apiLogin({
        wallet_address: params.address,
      })
      window.localStorage.setItem('token', res.data.token)
      set({ loginStatus: true })
      set({ userInfo: res.data })
      set({ address: params.address })
      set({ bind: false })
    } catch (e: any) {
      if (e.code === -2) {
        set({ bind: true })
      }
      Toast.show({
        content: e.msg,
      })
      get().outLogin()
    }
  },
  outLogin: () => {
    console.log('退出登录')
    localStorage.removeItem('token')
    set({ userInfo: null })
    set({ token: null })
    set({ address: null })
  },
  getPair: async () => {
    const res = await apiPair()
    set({ pair: res.data })
  },
  getLinkInfo: async () => {
    const res: any = await getLink()
    set({ linkInfo: res.data })
  },
  getNotice: async (params) => {
    getContentList({ page: params.page }).then((res) => {
      set({ noticeList: res.data.data })
    })
  },
  getOverviewBlock: async () => {
    const res: any = await getOverview()
    set({ overviewBlock: res.data })
  },
  getRank: async () => {
    const { data } = await getRankList()

    set({ rank: data })
  },
}))

export default mainStore
