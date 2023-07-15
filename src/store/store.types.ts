import { LoginResponse } from '@/types/api.types'

interface userInfoType {
  id: number // 用户id
  username: string // 钱包地址
  my_invite_code: string // 我的邀请码
  fuel: number // 燃料
  power: number // 算力
  user_id: number
  createtime: number
  expiretime: number
  expires_in: number
  achievement: string
  invite_id: number // 邀请人ID
}
