import React, { memo, useEffect } from 'react'
import { Tabs, Input, Grid } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import assetsStore from '@/store/assets'
import { AssetsContent, Content, GlobalStyle, Logs } from './styled'

const Assets: React.FC = () => {
  const navigate = useNavigate()
  const { getAssetsInfo, assetsInfo, getAssetList, assetList } = assetsStore()
  useEffect(() => {
    getAssetsInfo()
    getAssetList({ page: 1 })
  }, [])
  return (
    <Content>
      <GlobalStyle />
      <div className='pageTitle'>
        <LeftOutline onClick={() => navigate('/')} color='#1bff00' />
        <div>资产</div>
      </div>
      <AssetsContent>
        <div className='title'>账户余额</div>
        <div className='balance'>
          <span>BAYE</span>
          <span>{assetsInfo?.account.baye}</span>
        </div>
        <div className='withdraw-btn'>提币</div>
        <div className='income'>
          <div className='box'>
            <div>{assetsInfo?.income.count_income}</div>
            <div>累计收益(BAYE)</div>
          </div>
          <div className='box'>
            <div>{assetsInfo?.income.power_income}</div>
            <div>剩余燃料(USDT)</div>
          </div>
          <div className='box'>
            <div>{assetsInfo?.income.reward_income}</div>
            <div>昨天收益(BAYE)</div>
          </div>
        </div>
      </AssetsContent>
      <Logs>
        <div className='title'>资产明细</div>
        <div className='logs'>
          <Grid columns={3} gap={8} className='row'>
            <Grid.Item>时间</Grid.Item>
            <Grid.Item>数量(BAYE)</Grid.Item>
            <Grid.Item>类型</Grid.Item>
          </Grid>
          <div className='list'>
            {assetList &&
              assetList.map((item, index) => {
                return (
                  <Grid columns={3} gap={8} className='row' key={index}>
                    <Grid.Item>{item.created_at}</Grid.Item>
                    <Grid.Item>{item.amount}</Grid.Item>
                    <Grid.Item>{item.msg}</Grid.Item>
                  </Grid>
                )
              })}
          </div>
        </div>
      </Logs>
    </Content>
  )
}

export default memo(Assets)
