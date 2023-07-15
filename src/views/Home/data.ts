export interface commonTypes {
  byss_price: string // UNSS质押价
  byss_market_price: string // UNSS市场价
  baye_price: string // UNL质押价
  baye_market_price: string // UNL市场价
  address: string // UNL质押地址
  contract: string // UNL合约地址
  total_output_byss: number // UNSS产出对应质押阶段：>100W为第二阶段， >200万为第三阶段
  pledge_step: number // 质押阶段
  pledge_byss_rate: number // 质押UNSS比列
  on_user_max_pledge: number // 个人最多可质押(U)
}

export interface Destruction {
  address: string // 销毁地址
  amount: number // 销毁数量
  created_at: string // 销毁时间
}

export interface Symbols {
  pr: number // 涨跌幅
  symbol: string // 交易对
  price: string // 最新价
}
