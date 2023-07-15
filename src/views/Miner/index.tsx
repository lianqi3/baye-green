import React, { memo, useEffect, useState } from 'react'
import { Tabs, Input, Grid, DotLoading, Button, InfiniteScroll } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { Content, Fuel, GlobalStyle, InputGroup, MinerBox, MinerLogs, Pledge } from './styled'
import mainStore from '@/store'
import minerStore from '@/store/miner'
import { decimal } from '@/utils'
import useContract from '@/hooks/useContract'
import { useWeb3React } from '@web3-react/core'
import { buyMiner } from '@/request/api'
import { BigNumber, ethers } from 'ethers'

const Miner: React.FC = () => {
  const navigate = useNavigate()
  const { getTokenAmount, writeContract } = useContract() // web3操作方法
  const { account, library } = useWeb3React()
  const { loginStatus } = mainStore()
  const { getMiner, minerData, getMinerData, hasMore, minerLogs } = minerStore()
  const [minersValue, setMinersValue] = useState<string>('')
  const [balance, setBalance] = useState<string>('')
  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)
  const [pageType, setPageType] = useState<string>('power')

  useEffect(() => {
    if (!loginStatus) return
    getMiner()
  }, [loginStatus])

  useEffect(() => {
    if (minerData) getBalance(minerData.buy_info.contract_address)
  }, [minerData])

  useEffect(() => {
    getMinerData({ page, type: pageType })
  }, [pageType])

  async function loadMore() {
    setPage(page + 1)
  }

  async function getBalance(contract: any) {
    /**
     * @method 获取Baye余额
     */
    const params: any = {
      contract,
      decimal: 18,
      account: account,
      provider: library,
    }
    const { data } = await getTokenAmount(params)
    setBalance(data.TokenAmount)
  }

  function changeTab(val: string) {
    const num = Number(val)
    setBalance('')
    if (num == 1) {
      getBalance(minerData?.buy_info.contract_address)
      setPageType('power')
    }
    if (num == 2) {
      getBalance(minerData?.pledge_info.contract_address)
      setPageType('pledge')
    }
    if (num == 3) {
      getBalance(minerData?.pledge_info.contract_address)
      setPageType('fuel')
    }
  }

  function confirmPledge() {
    const param: any = {
      id: minerData?.id,
      power: minersValue,
      amount: minersValue,
      account: 'usdt',
    }
    buyMiner(param).then(async (res: any) => {
      const data = res.data
      if (res.code === 1) {
        setIsDisabled(true)
        const amountNum: BigNumber = ethers.utils.parseEther(data.amount.toString())
        const config: any = [data.address, amountNum]
        writeContract({
          method: 'transfer',
          contract: data.contract_address,
          provider: library,
          config,
        })
          .then(() => {
            getMiner()
            setPage(1)
            setIsDisabled(false)
          })
          .catch((ele) => {
            console.log(ele)

            setIsDisabled(false)
          })
      }
    })
  }

  return (
    <Content>
      <GlobalStyle />
      <div className='pageTitle'>
        <LeftOutline onClick={() => navigate('/')} color='#1bff00' />
        <div>矿机</div>
      </div>
      <MinerBox>
        <div>
          <span>当前拥有矿机</span>
          <span>{minerData?.count_power} CU</span>
        </div>
        <div>
          <span>当前质押资产</span>
          <span>{minerData?.pledge_usdt} CUDT</span>
        </div>
        <div>
          <span>收益中的矿机</span>
          <span>{minerData?.valid_power} CU</span>
        </div>
        <div>
          <span>未激活的矿机</span>
          <span>{minerData?.invalid_power} CU</span>
        </div>
      </MinerBox>
      <Fuel>
        <div className='title'>当前燃料</div>
        <div className='num'>{minerData?.fuel_detail.surplus} USDT</div>
        <div className='progress'>{decimal(Number(minerData?.fuel_detail.rate) * 100, 2)}%</div>
      </Fuel>
      <Pledge>
        <Tabs
          className='tab'
          activeLineMode='fixed'
          style={{
            '--fixed-active-line-width': '28px',
          }}
          onChange={(val) => changeTab(val)}
        >
          <Tabs.Tab title='购买矿机' key='1' className='tab-item'>
            <InputGroup>
              <Input
                className='input'
                placeholder='请输入购买矿机CU数'
                value={minersValue}
                onChange={(val) => setMinersValue(val)}
              />
              <div className='unit'>CU</div>
            </InputGroup>
            <div className='balance'>
              <div>
                <span>当前可用:</span>
                <span className='num'>{balance ? balance : <DotLoading color='white' />} USDT</span>
              </div>
              <div>
                <span>预计支付:</span>
                <span className='num'>
                  {decimal(Number(minerData?.buy_info.price) * Number(minersValue), 4)} USDT
                </span>
              </div>
            </div>
            <div className='pledge'>
              <div className='info'>
                注：购买矿机最低算力为 1CU，购买好矿机后要去质押激活才能享受收益。
              </div>
              <Button className='btn' disabled={isDisabled} onClick={() => confirmPledge()}>
                确认质押
              </Button>
            </div>
          </Tabs.Tab>
          <Tabs.Tab title='质押激活' key='2'>
            <InputGroup>
              <Input
                className='input'
                placeholder='请输入激活CU数'
                value={minersValue}
                onChange={(val) => setMinersValue(val)}
              />
              <div className='unit'>CU</div>
            </InputGroup>
            <div className='balance'>
              <div>
                <span>当前可用:</span>
                <span className='num'>{balance ? balance : <DotLoading color='white' />} BAYE</span>
              </div>
              <div>
                <span>预计支付:</span>
                <span className='num'>
                  {decimal(Number(minerData?.pledge_info.price) * Number(minersValue), 4)} BAYE
                  <span className='text'>≈ {decimal(100 * Number(minersValue), 4)} USDT</span>
                </span>
              </div>
            </div>
            <div className='pledge'>
              <div className='info'>
                注：购买矿机最低算力为 1CU，购买好矿机后要去质押激活才能享受收益。
              </div>
              <Button className='btn'>确认激活</Button>
            </div>
          </Tabs.Tab>
          <Tabs.Tab title='添加燃料' key='3'>
            <InputGroup>
              <Input
                className='input'
                placeholder='请输入BAYE数量'
                value={minersValue}
                onChange={(val) => setMinersValue(val)}
              />
              <div className='unit'>全部</div>
            </InputGroup>
            <div className='balance'>
              <div>
                <span>当前可用:</span>
                <span className='num'>{balance ? balance : <DotLoading color='white' />} BAYE</span>
              </div>
              <div>
                <span>预计支付:</span>
                <span className='num'>
                  {minersValue} BAYE
                  <span className='text'>
                    ≈ {decimal(Number(minerData?.pledge_info.usdt_amount) * Number(minersValue), 4)}
                    USDT
                  </span>
                </span>
              </div>
            </div>
            <div className='pledge'>
              <div className='info'>
                注：购买矿机最低算力为 1CU，购买好矿机后要去质押激活才能享受收益。
              </div>
              <Button className='btn'>添加燃料</Button>
            </div>
          </Tabs.Tab>
        </Tabs>
      </Pledge>
      <MinerLogs>
        <div className='title'>矿机明细</div>
        <div className='logs'>
          <Grid columns={3} gap={8} className='row'>
            <Grid.Item>时间</Grid.Item>
            <Grid.Item>算力</Grid.Item>
            <Grid.Item>数量</Grid.Item>
            <Grid.Item>明细</Grid.Item>
          </Grid>
          <div className='list'>
            {minerLogs &&
              minerLogs.map((item, index) => {
                return (
                  <Grid columns={3} gap={8} className='row' key={index}>
                    <Grid.Item>{item.created_at}</Grid.Item>
                    <Grid.Item>{item.power}</Grid.Item>
                    <Grid.Item>{item.amount + ' ' + item.account.toUpperCase()}</Grid.Item>
                    <Grid.Item>
                      {item.type === 'power'
                        ? '购买矿机'
                        : item.type === 'pledge'
                        ? '质押激活'
                        : '添加燃料'}
                    </Grid.Item>
                  </Grid>
                )
              })}

            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} threshold={30} />
          </div>
        </div>
      </MinerLogs>
    </Content>
  )
}

export default memo(Miner)
