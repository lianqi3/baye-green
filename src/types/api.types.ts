import { PageLoading } from './../components/PageLoading/Styled'
import { ListResponse } from '@/request/type'

export interface LoginRequest {
  wallet_address?: string
}

export interface LoginResponse {
  user_id: number
  username: string
  nickname: string
  avatar_img: string
  truename: string
  address: string
  open_status: number
  open_time: number
  login_num: number
  is_login: number
  is_frozen: number
  is_del: number
  inviter_username: string
  group_id: number
  group_name: string
  is_team: number
  buy_num: number
  team_buy_num: number
  token: string
}

export interface ListRequest {
  limit: number
  page: number
}

export interface LimitRequest {
  page: number
}
export interface DestructionResponse {
  order_money: string
  address: string
}

export interface PairResponse {
  symbol: Array<string>
  price: number
  pr: string
}

export interface AssetsInfoResponse {
  account: {
    baye: string
  }
  income: {
    count_income: string
    power_income: string
    reward_income: string
  }
}
export interface AssetsInfoType {
  id: number
  icon: number
  en_name: string
  is_user_recharge: number
  is_atm: number
  is_transfer: number
  is_exchange: number
  balance: number
  other_balance: string
  demo: string
  contract_address: string
  wallet_address: string
  baye_sys: {
    en_name: string
    exchange_rate: string
    contract_address: string
    wallet_address: string
    demo: string
  }
}

export interface AssetListRequest {
  page: number
  limit: number
  operation_type: number
}
export interface AssetsListResponse {
  account: string
  amount: string
  created_at: string
  msg: string
  type: string
  user: string
}

export interface TeamInfoResponse {
  invite_url: string
  team_num: number
  zhitui: number
  jiantui: number
  my_zy_usdt: number
  my_team_usdt: number
  my_team_area: number
}

export interface TeamListResponse {
  user_id: number
  address: string
  create_time: string
  group_id: number
  buy_num: string
}

export interface PledgeInfoResponse {
  order_money_usdt: number // 质押总量
  maxmum_deposit: number
  minimum_deposit: number
  usdt: {
    yester_money: number // 昨日收益
    total_money: number // 累计收益
    prepare: string // 预计收益
  }
  token: {
    yester_money: number
    total_money: number
    prepare: string
  }
  pledge_msg: string // 质押信息
}
export interface PledgeListResponse {
  order_id: number
  add_time: string // 添加时间
  order_money: number // 质押数量
  order_money_usdt: number
  pay_sys: number
  return_count_day: number
  money_type_name: string // 质押币种
}

export interface RechargeRequest {
  type?: string
  money_type?: string
  money?: string
  hash?: string
}

export interface RechargeResponse {
  contract_address: string
  order_money: string
  wallet_address: string
}

export type TransferRequest = {
  type: number // 1显示信息 2确定转出
  order_money: string // 转入金额
  toaddress: string // 转入地址
  money_type: number // 2 usdt
}
export type WithdrawalRequest = {
  money: string
  money_type: number
}
export type ExchangeRequest = {
  type: number
  order_money: string
}
export type ChartInfoResponse = {
  id: number
  money_type: number
  today: string
  hour: number
  v: number
  vscc: number
  sv: string
  color: string
}
// ==========================================================================================================

export interface Pledge {
  coin: string // 币种
  num: string // 数量
  coin_other: string | null // 第二币种
  num_other: string | null // 第二币种数量
}
export interface Withdrawal {
  coin: string // 币种
  amount: string // 数量
}
export interface Exchange {
  from: string // 被兑换币种
  to: string // 兑换成币种
  trans_byss_amount: string // 被兑换币种数量
  trans_usdt_amount: string // 可兑换成币种数量(按被兑换市价计算得出)
}

export interface Transfer {
  receive: string // 转入地址、接收地址
  coin: string //	转账币种
  amount: string //	转账数量
}

export interface Invite {
  invite_code: string
}

export interface LinkInfoType {
  browser_url: string // 区块浏览器
  chain_id: number
  rpc_url: string
  web: string
}

export interface NoticeType {
  created_at: string
  id: number
  title: string
}

export interface OverviewResponse {
  height: string
  total_baye: string
}

export interface RankResponse {
  power: number
  user: string
}
export interface BuyInfo {
  abi: string
  address: string // 付款地址
  contract_address: string // 合约地址
  price: number // 金额
}

export interface MinerResponse {
  baye_buy_info: BuyInfo
  buy_info: BuyInfo
  count_power: number
  fuel_detail: {
    rate: number
    surplus: string
  }
  id: number
  invalid_power: number
  pledge_info: {
    abi: string
    address: string // 付款地址
    contract_address: string // 合约地址
    price: number // 金额
    usdt_amount: string
  }
  pledge_usdt: number
  valid_power: number
}

export interface MinerLogsParams {
  page: number
  type: string
}

export interface MinerLogsResponse {
  account: string
  amount: string
  created_at: string
  power: number
  type: string
}

export interface BuyMinerParams {
  id: number
  power: string
  amount: string
  account: string
  sn: string
  hash: string
}

export interface accountInfoType {
  created_at: string
  group_name: string
  login_time: string
  node_name: string
  uid: string
  user: string
}

export interface TeamCountType {
  listNum: number
  miner: { count_price: number; count_power: number }
  push_num: number
  teamNum: number
}

export interface MinerPoolType {
  address: string
  count_power: number
  count_price: number
  created_at: string
}
