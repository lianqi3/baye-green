import React, { memo, useEffect } from 'react'
import { Tabs, Input, Grid } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { Content, GlobalStyle, Logs, MinerData } from './styled'
import minerPool from '@/store/minerPool'

const Miner: React.FC = () => {
  const navigate = useNavigate()
  const { getAccount, accountInfo, getTeamCount, teamCount, getDataList, dataList } = minerPool()
  useEffect(() => {
    getAccount()
    getTeamCount()
    getDataList({ page: 1 })
  }, [])
  return (
    <Content>
      <GlobalStyle />
      <div className='pageTitle'>
        <LeftOutline onClick={() => navigate('/')} color='#1bff00' />
        <div>矿池</div>
      </div>
      <div className='grade'>
        <img src={require('@/static/logo.png')} width={'54px'} height={'54px'} />
        <div className='info'>
          <div>当前等级</div>
          <div>LV.{accountInfo?.group_name}</div>
        </div>
      </div>
      <MinerData>
        <div className='topBox box'>
          <div className='box-child'>
            <div className='num'>{teamCount?.teamNum}</div>
            <div>矿机数量</div>
          </div>
          <div className='box-child box1'>
            <div className='num'>{teamCount?.push_num}</div>
            <div>映射矿机</div>
          </div>
          <div className='box-child'></div>
        </div>
        <div className='topBox box'>
          <div className='box-child'>
            <div className='num'>{teamCount?.listNum}</div>
            <div>共识矿机</div>
          </div>
          <div className='box-child box1'>
            <div className='num'>{teamCount?.miner.count_price}</div>
            <div>矿池质押</div>
          </div>
          <div className='box-child box3'>
            <div className='num'>{teamCount?.miner.count_power}</div>
            <div>矿池算力</div>
          </div>
        </div>
      </MinerData>
      <Logs>
        <div className='title'>矿机明细</div>

        <div className='logs'>
          <Grid columns={3} gap={8} className='row'>
            <Grid.Item>注册时间</Grid.Item>
            <Grid.Item>钱包地址</Grid.Item>
            <Grid.Item>质押(BAYE)</Grid.Item>
            <Grid.Item>算力(CU)</Grid.Item>
          </Grid>
          <div className='list'>
            {dataList &&
              dataList.map((item, index) => {
                return (
                  <Grid columns={3} gap={8} className='row' key={index}>
                    <Grid.Item>{item.created_at}</Grid.Item>
                    <Grid.Item>{item.address}</Grid.Item>
                    <Grid.Item>{item.count_price}</Grid.Item>
                    <Grid.Item>{item.count_power}</Grid.Item>
                  </Grid>
                )
              })}
          </div>
        </div>
      </Logs>
    </Content>
  )
}

export default memo(Miner)
