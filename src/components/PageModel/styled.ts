import styled from 'styled-components'
import { THEME } from '@/config/config'
export const PageModelStyled = styled.div`
  .model-content {
    padding: 20px 16px;
    padding-bottom: 28px;
    .adm-modal-content {
      padding: 0;
    }
  }
`

export const ModalContent = styled.div`
  .close {
    position: absolute;
    top: 12px;
    right: 12px;
  }
  .title {
    font-size: 16px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #222222;
    text-align: center;
  }
  .relative {
    position: relative;
  }
  .info {
    margin-top: 8px;
    margin-bottom: 12px;
    font-size: 12px;
    color: ${THEME.mainColor};
    &.center {
      text-align: center;
      margin-top: 16px;
      margin-bottom: 0px;
    }
  }
`

export const ModelBtn = styled.button`
  margin-top: 21px;
  width: 100%;
  height: 44px;
  background: ${THEME.mainColor};
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  font-size: 14px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  color: #ffffff;
  line-height: 14px;
`
