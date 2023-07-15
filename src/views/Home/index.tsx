import React, { memo, useEffect, useState } from 'react'
import { Image, Toast, Popup, Swiper } from 'antd-mobile'
import { changeNetwork } from '@/web3'
import {
  TopNav,
  Content,
  Menu,
  ListContent,
  CoinTd,
  BodyContent,
  LanguageContent,
  Notice,
  Overview,
  Rank,
  RankList,
} from './styled'
import { DownOutline, SoundOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { Link } from 'react-router-dom'
import { formatStrAddress } from '@/utils'
import mainStore from '@/store'
import { useTranslation } from 'react-i18next'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as Tooltipchart,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltipchart, Legend)

const Home: React.FC = () => {
  const {
    address,
    pair,
    getPair,
    getNotice,
    noticeList,
    getOverviewBlock,
    overviewBlock,
    getRank,
    rank,
  } = mainStore()
  const CHAINID = Number(process.env.REACT_APP_CHAIN_ID)
  const [visible, setVisible] = useState<boolean>(false)
  const { i18n, t } = useTranslation()
  const [showChart, setShowChart] = useState<boolean>(false)

  useEffect(() => {
    // 获取币对
    getPair()
    // 获取公告
    getNotice({ page: 1 })
    // 全网概览
    getOverviewBlock()
    // 全网算力排行
    getRank()
  }, [])

  const linkWallet = () => {
    /**
     * @method 链接钱包
     */

    if (address) {
      const textarea = document.createElement('textarea')
      textarea.value = address
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      Toast.show({
        content: t('copySuccess'),
      })
    } else {
      changeNetwork(CHAINID)
    }
  }

  function changeLocal(val: string) {
    setVisible(false)
    if (i18n.language == val) return
    i18n.changeLanguage(val)
    localStorage.setItem('locale', val)
  }

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!address) {
      event.preventDefault() // 阻止默认的页面跳转行为
      Toast.show({
        content: t('qingShiYongDappLiuLanQiFangWen'),
      })
    }
  }

  return (
    <BodyContent>
      <Popup
        closeOnMaskClick
        bodyStyle={{
          borderRadius: '18px 18px 0 0',
        }}
        visible={visible}
        onMaskClick={() => {
          setVisible(false)
        }}
        onClose={() => {
          setVisible(false)
        }}
      >
        <LanguageContent>
          <div>
            <div
              className={`language-item ${i18n.language === 'tw' ? 'active' : ''}`}
              onClick={() => changeLocal('tw')}
            >
              繁体中文
            </div>
            <div
              className={`language-item ${i18n.language === 'en' ? 'active' : ''}`}
              onClick={() => changeLocal('en')}
            >
              English
            </div>
            <div
              className={`language-item ${i18n.language === 'hi' ? 'active' : ''}`}
              onClick={() => changeLocal('hi')}
            >
              हिंदी
            </div>
            <div
              className={`language-item ${i18n.language === 'id' ? 'active' : ''}`}
              onClick={() => changeLocal('id')}
            >
              bahasa Indonesia
            </div>
            <div
              className={`language-item ${i18n.language === 'ja' ? 'active' : ''}`}
              onClick={() => changeLocal('ja')}
            >
              日本
            </div>
            <div
              className={`language-item ${i18n.language === 'ko' ? 'active' : ''}`}
              onClick={() => changeLocal('ko')}
            >
              한국인
            </div>
          </div>
        </LanguageContent>
      </Popup>
      <TopNav>
        <div className='linkWallet' onClick={linkWallet}>
          {address ? formatStrAddress(4, 4, address) : t('linkWallet')}
        </div>
        <div className='languageBtn' onClick={() => setVisible(true)}>
          {i18n.language == 'en' && 'English'}
          {i18n.language == 'tw' && '繁体中文'}
          {i18n.language == 'ko' && '한국인'}
          {i18n.language == 'ja' && '日本'}
          {i18n.language == 'id' && 'bahasa Indonesia'}
          {i18n.language == 'hi' && 'हिंदी'}
          <DownOutline fontSize={10} color='#fff' />
        </div>
      </TopNav>

      <Content>
        <div className='paddingContent'>
          <Swiper autoplay className='banner' loop>
            <Swiper.Item key={1}>
              <Image src={require('@/static/banner.png')} width={'100%'} height={'100%'} />
            </Swiper.Item>
          </Swiper>
          <Notice>
            <Swiper
              autoplay
              className='notice-list'
              loop
              indicator={() => null}
              direction='vertical'
            >
              {noticeList.map((item, index) => {
                return (
                  <Swiper.Item key={index}>
                    <div className='notice-item'>
                      <div className='box'>
                        <SoundOutline />
                        {item.title}
                      </div>
                      <UnorderedListOutline />
                    </div>
                  </Swiper.Item>
                )
              })}
            </Swiper>
          </Notice>
        </div>
        <Menu>
          <Link to={'/miner'} onClick={handleClick}>
            矿机
          </Link>
          <Link to={'/assets'} onClick={handleClick}>
            资产
          </Link>
          <Link to={'/minerPool'} onClick={handleClick}>
            矿池
          </Link>
          <Link to={'/Team'} onClick={handleClick}>
            邀请
          </Link>
        </Menu>
        <ListContent>
          <div className='lis_box'>
            <div className='th'>
              <span>{t('TradingPair')}</span>
              <span>{t('LastPrice')}</span>
              <span>{t('rangeAbility')}</span>
            </div>
            <CoinTd onClick={() => setShowChart(!showChart)}>
              {pair &&
                pair.map((item, index) => {
                  return (
                    <div className={'td'} key={index}>
                      <div>
                        <span>{item.symbol[0].toUpperCase()}</span>
                        <span className={'font-normal coin'}>/{item.symbol[1].toUpperCase()}</span>
                      </div>
                      <div>{item.price}</div>
                      <div className={Number(item.pr) >= 0 ? 'up' : 'down'}>{item.pr}%</div>
                    </div>
                  )
                })}
            </CoinTd>
          </div>
        </ListContent>
        <Overview>
          <div className='title'>全网概览</div>
          <div className='overview-box'>
            <div className='box'>
              <span>当前区块高度</span>
              <span>{overviewBlock?.height}</span>
            </div>
            <div className='box'>
              <span>昨天全网收益(CU)</span>
              <span>1555555</span>
            </div>
            <div className='box'>
              <span>总量(CU)</span>
              <span>1555555亿</span>
            </div>
            <div className='box'>
              <span>全网总算力(T)</span>
              <span>1555555</span>
            </div>
          </div>
        </Overview>
        <Rank>
          <div className='title'>全网算力排行</div>
          <div className='rank'>
            <div className='tow'>
              <div>{rank && rank[1].power}</div>
              <div>{rank && rank[1].user}</div>
            </div>
            <div className='one'>
              <div>{rank && rank[0].power}</div>
              <div>{rank && rank[0].user}</div>
            </div>
            <div className='three'>
              <div>{rank && rank[2].power}</div>
              <div>{rank && rank[2].user}</div>
            </div>
          </div>
          <RankList>
            <div className='th'>
              <div>排名</div>
              <div>算力(T)</div>
              <div>地址</div>
            </div>
            <div className='td'>
              <div>
                <span>4</span>
                <span>{rank && rank[3].power}</span>
                <span>{rank && rank[3].user}</span>
              </div>
              <div>
                <span>5</span>
                <span>{rank && rank[4].power}</span>
                <span>{rank && rank[4].user}</span>
              </div>
              <div>
                <span>6</span>
                <span>{rank && rank[5].power}</span>
                <span>{rank && rank[5].user}</span>
              </div>
            </div>
          </RankList>
        </Rank>
      </Content>
    </BodyContent>
  )
}

export default memo(Home)
