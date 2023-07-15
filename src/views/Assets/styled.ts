import styled, { css, createGlobalStyle } from 'styled-components'
import imgBg from '@/static/assetsBg.png'

export const GlobalStyle = createGlobalStyle`
  body{
    color: #FFF;
  }
  .title{
    background: linear-gradient(0deg, #00FF06 0.537109375%, #D1FECD 98.6328125%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 15px;
    font-weight: bold;
    color: #F2F2F2;
    line-height: 15px;
    padding: 10px;
    text-align: center;
  }
`

export const Content = styled.div`
  background: url(${imgBg}) 0 0 no-repeat #000000;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 813.6px;
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

export const AssetsContent = styled.div`
  margin-top: 31px;
  .balance {
    height: 74px;
    margin-top: 25px;
    display: flex;
    font-size: 16px;
    font-weight: bold;
    justify-content: space-between;
    padding-left: 19%;
    padding-right: 7%;
    align-items: center;
  }
  .withdraw-btn {
    font-size: 14px;
    float: right;
    width: 22%;
    margin-top: 11px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    padding-left: 7%;
  }
  .income {
    gap: 17%;
    display: flex;
    padding: 0 2.5%;
    margin-top: 53px;
    height: 95px;
    justify-content: space-between;
    .box {
      flex: 1;
      gap: 16%;
      text-align: center;
      padding-top: 49px;
      div {
        &:first-child {
          margin-bottom: 2px;
          font-size: 14px;
          font-weight: bold;
          line-height: 14px;
        }
        &:last-child {
          font-size: 12px;
          line-height: 12px;
        }
      }
    }
  }
`
export const Logs = styled.div`
  margin-top: 27px;
  padding: 0 5%;
  .logs {
    margin-top: 27px;
  }
  .row {
    padding: 11px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .adm-grid-item {
      flex: 1;
      &:not(:first-child, :last-child) {
        text-align: center;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
  .list {
    height: 239px;
    overflow-y: scroll;
  }
`
