import React, { memo, useEffect, useState } from 'react'
import PageModel from '../PageModel'
import { Input, Toast } from 'antd-mobile'
import { InputSuffix } from './styled'
import mainStore from '@/store'
import { useWeb3React } from '@web3-react/core'

const BindSuper: React.FC = () => {
  const { account } = useWeb3React()
  const { bind, login } = mainStore()
  const [value, setValue] = useState<string>('')

  const modalMethod = () => {
    if (!value) {
      Toast.show({
        content: '请输入邀请码',
      })
      return
    }
    login({
      address: account as string,
    })
  }

  return (
    <PageModel visible={bind} method={modalMethod} isClose={false}>
      <React.Fragment>
        <div className='title'>绑定推荐人</div>
        <InputSuffix>
          <Input
            value={value}
            type='text'
            placeholder='请输入邀请码'
            onChange={(val: any) => {
              setValue(val)
            }}
            style={{
              '--color': '#222222',
              '--font-size': '14px',
              '--placeholder-color': '#B0C9BD',
            }}
          />
        </InputSuffix>
      </React.Fragment>
    </PageModel>
  )
}

export default memo(BindSuper)
