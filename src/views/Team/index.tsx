import React, { memo, useEffect, useState } from 'react'
import { LeftOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'
import { Content, GlobalStyle, InviteBox } from './styled'
import minerPool from '@/store/minerPool'
import QRCode from 'qrcode.react'
import { getInviteLink } from '@/request/api'
import { Toast } from 'antd-mobile'
import { t } from 'i18next'

const Miner: React.FC = () => {
  interface infoType {
    qrcode: string
    uid: string
    url: string
  }
  const navigate = useNavigate()
  const { getAccount, accountInfo, getTeamCount, teamCount, getDataList, dataList } = minerPool()
  const [linkInfo, setLinkInfo] = useState<infoType>()
  useEffect(() => {
    getInviteLink().then((res) => {
      setLinkInfo(res.data)
    })
  }, [])

  function copy(link: any) {
    const textarea = document.createElement('textarea')
    textarea.value = link
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    Toast.show({
      content: t('copySuccess'),
    })
  }
  return (
    <Content>
      <GlobalStyle />
      <div className='pageTitle'>
        <LeftOutline onClick={() => navigate('/')} color='#1bff00' />
        <div>邀请</div>
      </div>
      <InviteBox>
        <div className='title'>Invite friends</div>
        <div className='info'>
          Friends pledge to buy computing powerthe boss easily get commission
        </div>
        <div className='qrCode'>
          <QRCode
            value={linkInfo?.qrcode || ''} // 生成二维码的内容
            size={130} // 二维码的大小
            fgColor='#000' // 二维码的颜色
          />
        </div>
        <div className='invite-box'>
          <div className='link'>Registe link: {linkInfo?.url}</div>
          <div className='copy-btn' onClick={() => copy(linkInfo?.url)}>
            copy
          </div>
        </div>
        <div className='info-box'>Long Press to identify the QR code or save</div>
      </InviteBox>
    </Content>
  )
}

export default memo(Miner)
