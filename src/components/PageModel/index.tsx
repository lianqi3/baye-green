import React, { memo } from 'react'
import { Modal, SpinLoading } from 'antd-mobile'
import { ModalContent, ModelBtn, PageModelStyled } from './styled'
import { CloseCircleOutline } from 'antd-mobile-icons'
interface PropsTypes {
  children: React.ReactNode | null
  visible: boolean
  isClose?: boolean
  onClose?: (show: boolean) => void
  method: (() => void) | null
  btnLoading?: boolean
}

const PageModel: React.FC<PropsTypes> = ({
  children,
  visible,
  onClose,
  method,
  isClose = true,
  btnLoading,
}) => {
  const closeModel = () => {
    onClose ? onClose(false) : ''
  }

  const handleButton = () => {
    if (method && typeof method === 'function') {
      method()
    }
  }
  return (
    <PageModelStyled>
      <Modal
        bodyClassName='model-content'
        visible={visible}
        closeOnAction={true}
        onClose={() => {
          closeModel()
        }}
        content={
          <ModalContent>
            {isClose ? (
              <CloseCircleOutline
                className='close'
                fontSize='20px'
                color='#A9ABB1'
                onClick={() => closeModel()}
              />
            ) : (
              ''
            )}
            <React.Fragment key='model'>{children}</React.Fragment>
            {btnLoading ? (
              <ModelBtn>
                <div className={'flex justify-center items-center'}>
                  <SpinLoading style={{ '--size': '18px' }} color='white' />
                </div>
              </ModelBtn>
            ) : (
              <ModelBtn onClick={handleButton}>确定</ModelBtn>
            )}
          </ModalContent>
        }
      ></Modal>
    </PageModelStyled>
  )
}

export default memo(PageModel)
