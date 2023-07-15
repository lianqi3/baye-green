import styled, { css, createGlobalStyle } from 'styled-components'
import inviteBg from '@/static/inviteBg.png'

export const GlobalStyle = createGlobalStyle`
  body{
    color: #FFF;
  }
`

export const Content = styled.div`
  background: url(${inviteBg}) 0 0 no-repeat #000000;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 796px;
  padding: 2.7em 4%;

  .pageTitle {
    text-align: center;
    color: #fff;
    font-weight: bold;
    height: 34px;
    line-height: 34px;
    font-size: 20px;
    display: flex;
    align-items: center;
    div {
      width: 100%;
      padding-right: 6%;
    }
  }
`
export const InviteBox = styled.div`
  position: relative;
  top: 215px;
  padding: 0 4%;
  text-align: center;
  .title {
    font-weight: bold;
    font-size: 30px;
  }
  .info {
    margin-top: 10px;
    font-size: 14px;
  }
  .qrCode {
    padding: 9px;
    background: #fff;
    width: min-content;
    margin: 29px auto;
  }
  .invite-box {
    display: flex;
    gap: 10px;
    font-size: 13px;
    justify-content: center;
    align-items: center;
    .link {
      width: 66%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .copy-btn {
      border-radius: 40px;
      background-color: #00ff00;
      padding: 0 10px;
    }
  }
  .info-box {
    font-size: 14px;
    font-weight: bold;
    width: 75%;
    text-align: left;
    padding-left: 7%;
    margin-top: 45px;
  }
`
