import React, { useEffect, Suspense, useState } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from '@/router'
import { useWeb3React } from '@web3-react/core'
import { changeNetwork } from '@/web3'
import Loading from '@/components/Loading/Loading'
import PageLoading from '@/components/PageLoading'

import { injected } from '@/web3/connectors'
import { LoadingProvider } from '@/components/Loading/LoadingContext'
import { createGlobalStyle } from 'styled-components'
import mainStore from '@/store'
import { useTranslation } from 'react-i18next'
import { ConfigProvider, setDefaultConfig } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import BindSuper from '@/components/BindSuper'
import { getQueryString } from '@/utils'

function App() {
  const { login, outLogin, bind, getLinkInfo, linkInfo } = mainStore()
  const { activate, chainId, account, error } = useWeb3React()
  const { i18n } = useTranslation()
  const location = useLocation()
  const [code, setCode] = useState<string>()
  const hasWeb3 = Boolean(window.web3) || Boolean(window.ethereum)
  const [CHAINID, setChainId] = useState()
  useEffect(() => {
    getLinkInfo()
  }, [])

  useEffect(() => {
    const id: any = linkInfo?.chain_id
    setChainId(id)
  }, [linkInfo])

  useEffect(() => {
    const locale: any = localStorage.getItem('locale') ?? 'zh'

    if (locale === 'zh') {
      setDefaultConfig({
        locale: zhCN,
      })
    } else {
      setDefaultConfig({
        locale: enUS,
      })
    }
    i18n.changeLanguage(locale)
  }, [i18n.language])

  // 链接钱包
  useEffect(() => {
    console.log(22222222)
    if (!CHAINID) return
    activate(
      injected,
      (err) => {
        console.error(err)
        changeNetwork(CHAINID)
      },
      false,
    ).then(() => {
      if (chainId !== CHAINID) {
        changeNetwork(CHAINID).then(() => {
          window.location.reload()
        })
      }
    })
  }, [chainId])
  // 监听切换

  const handleChainChanged = async () => {
    if (!CHAINID) return
    outLogin()
    await activate(injected, undefined, true).catch((error) => {
      console.error('链改变后链接钱包失败', error)
    })
    await changeNetwork(CHAINID)
  }

  const handleAccountsChanged = (accounts: string[]) => {
    console.log('钱包切换监听')
    if (accounts.length > 0) {
      activate(injected, undefined, true).catch((error) => {
        console.error('钱包变更后链接钱包失败', error)
      })
    }
  }

  useEffect(() => {
    console.log(3333333333)
    const value = getQueryString('code')
    if (value) {
      setCode(value)
    }
  }, [location])

  if (hasWeb3) {
    window.ethereum.on('chainChanged', handleChainChanged)
    window.ethereum.on('accountsChanged', handleAccountsChanged)
  }

  // 钱包切换刷新
  useEffect(() => {
    if (!hasWeb3) return
    window.ethereum.on('accountsChanged', () => {
      outLogin()
      window.location.reload()
    })

    if (account) {
      window.localStorage.setItem('address', account)
      login({
        address: account,
      })
    }
  }, [account, chainId, code])
  const GlobalStyle = createGlobalStyle`
  /* body{
    background:#000000
  } */
`
  return (
    <ConfigProvider locale={enUS}>
      <LoadingProvider>
        <GlobalStyle />
        {/* {bind && <BindSuper />} */}
        <Suspense fallback={<PageLoading />}>{useRoutes(routes)}</Suspense>
        <Loading />
      </LoadingProvider>
    </ConfigProvider>
  )
}

export default App
