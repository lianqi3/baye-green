import {
  Exchange,
  Invite,
  LoginRequest,
  LoginResponse,
  ListRequest,
  Pledge,
  Transfer,
  Withdrawal,
  PairResponse,
  AssetsInfoResponse,
  AssetListRequest,
  AssetsListResponse,
  TeamInfoResponse,
  TeamListResponse,
  PledgeInfoResponse,
  PledgeListResponse,
  RechargeRequest,
  RechargeResponse,
  TransferRequest,
  WithdrawalRequest,
  ExchangeRequest,
  ChartInfoResponse,
  LimitRequest,
  MinerLogsParams,
  BuyMinerParams,
} from '@/types/api.types'
import request from './index'
import { ListResponse, Response } from './type'
// 获取链接
export function getLink(): Promise<Response<LoginResponse>> {
  return request.get({
    url: '/overview/link',
  })
}

// 登录
export function apiLogin(params: LoginRequest): Promise<Response<LoginResponse>> {
  return request.post({
    url: '/user/login',
    params,
  })
}

// 获取公告
export function getContentList(params: LimitRequest): Promise<Response> {
  return request.get({
    url: '/content/list',
    params,
  })
}

// 获取交易对
export function apiPair(): Promise<Response> {
  return request.get({
    url: '/market/symbol',
  })
}

// 获取全网概览
export function getOverview(): Promise<Response> {
  return request.get({
    url: '/overview/block',
  })
}

// 获取全网算力排行
export function getRankList(): Promise<Response> {
  return request.get({
    url: '/overview/ranking',
  })
}
// 获取矿机信息
export function getMinerInfo(): Promise<Response> {
  return request.get({
    url: '/miner',
  })
}
// 获取矿机明细
export function getMinerLogs(params: MinerLogsParams): Promise<ListResponse> {
  return request.get({
    url: '/miner/record',
    params,
  })
}

// 购买矿机
export function buyMiner(params: BuyMinerParams): Promise<ListResponse> {
  return request.post({
    url: '/miner/buy',
    params,
  })
}

// 账户
export function apiAssetInfo(): Promise<Response<AssetsInfoResponse>> {
  return request.get({
    url: '/assets/account',
  })
}

// 资产明细
export function apiAssetList(
  params: LimitRequest,
): Promise<Response<ListResponse<AssetsListResponse>>> {
  return request.get({
    url: '/assets/logs',
    params,
  })
}

// 获取用户信息
export function getAccountInfo(): Promise<Response> {
  return request.get({
    url: '/account/info',
  })
}

// 获取统计信息
export function getTeamCountData(): Promise<Response> {
  return request.get({
    url: '/team/statistics',
  })
}

// 获取矿机明细
export function getTeamList(params: LimitRequest): Promise<Response> {
  return request.get({
    url: '/team/list',
    params,
  })
}

export function getInviteLink(): Promise<Response> {
  return request.get({
    url: '/account/link',
  })
}

export function apiTeamList(
  params: ListRequest,
): Promise<Response<ListResponse<TeamListResponse>>> {
  return request.post({
    url: '/user/Team/lists',
    params,
  })
}

// 获取公共信息
export function commonInfo(): Promise<Response> {
  return request.post({
    url: '/common/info',
  })
}

export function apiTeamInfo(): Promise<Response<TeamInfoResponse>> {
  return request.post({
    url: '/user/Team/index',
  })
}

export function apiPledgeInfo(): Promise<Response<PledgeInfoResponse>> {
  return request.post({
    url: '/Invest/Invest_Pledge_usd/home',
  })
}

export function apiPledgeList(
  params: ListRequest,
): Promise<Response<ListResponse<PledgeListResponse>>> {
  return request.post({
    url: '/Invest/Invest_Pledge_usd/getOrderList',
    params,
  })
}
// 质押
export function apiPledge(params: { order_money: string }): Promise<Response> {
  return request.post({
    url: '/Invest/Invest_Pledge_usd/sysOrderCreateNew',
    params,
  })
}
// 充值

export function apiRecharge(params: RechargeRequest): Promise<Response<RechargeResponse>> {
  return request.post({
    url: '/user/Recharge/autoRecharge',
    params,
  })
}
export function apiTransfer(params: TransferRequest): Promise<Response> {
  return request.post({
    url: '/invest/Money_Exchange/index',
    params,
  })
}

export function apiWithdrawal(params: WithdrawalRequest): Promise<Response> {
  return request.post({
    url: '/user/Withdraw/atm',
    params,
  })
}

export function apiExchange(params: ExchangeRequest): Promise<Response> {
  return request.post({
    url: '/invest/Money_Exchange/exchange',
    params,
  })
}

export function apiChartInfo(): Promise<Response<ChartInfoResponse[]>> {
  return request.post({
    url: '/invest/home/getTokens',
  })
}
// ===========================================================================================================

// 资产
export function assetInfo(): Promise<Response> {
  return request.post({
    url: '/asset/info',
  })
}

// 挖矿收益
export function minerEarn(): Promise<Response> {
  return request.post({
    url: '/miner/earn',
  })
}
// 提现
export function withdrawal(data: Withdrawal): Promise<Response> {
  return request.post({
    url: '/finance/withdrawal',
    data,
  })
}
// 兑换
export function exchange(data: Exchange): Promise<Response> {
  return request.post({
    url: '/finance/exchange',
    data,
  })
}
// 复投明细
export function reenterLog(data: ListRequest): Promise<ListResponse> {
  return request.post({
    url: '/asset/reenter_log',
    data,
  })
}

// 转账
export function setTransfer(data: Transfer): Promise<ListResponse> {
  return request.post({
    url: '/finance/transfer',
    data,
  })
}

// 绑定上级
export function addBindSuper(data: Invite): Promise<Response> {
  return request.post({
    url: '/user/bind_super',
    data,
  })
}
