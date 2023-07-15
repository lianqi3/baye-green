import React, { memo } from 'react'
import * as Styled from './Style'
import { t } from 'i18next'
const EmptyList: React.FC = () => {
  return (
    <Styled.EmptyContainer>
      <div className='text-black'>{t('zanWuShuJu')}</div>
    </Styled.EmptyContainer>
  )
}

export default memo(EmptyList)
