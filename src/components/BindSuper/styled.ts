import styled from 'styled-components'
import { THEME } from '@/config/config'
export const InputSuffix = styled.div`
  margin-top: 21px;
  background: #f1f3ff;
  border-radius: 4px 4px 4px 4px;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 20px;
  font-size: 14px;
  font-weight: 500;
  color: #222222;
  &.exchange_input {
    display: grid;
    gap: 15px;
    .group_input {
      display: flex;
      align-items: center;
    }
    .exchange_info {
      text-align: right;
      font-size: 12px;
      color: ${THEME.mainColor};
      line-height: 12px;
    }
  }
`
