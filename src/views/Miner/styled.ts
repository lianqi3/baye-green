import styled, { css, createGlobalStyle } from 'styled-components'
import minerBg from '@/static/minerBg.png'

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
  background: url(${minerBg}) 0 0 no-repeat #000000;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 1349px;
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

export const MinerBox = styled.div`
  margin-top: 4.95em;
  padding: 0 3%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.1em 8%;
  div {
    display: grid;
    height: 52px;
    align-items: center;
    padding: 15px 0 0px 37%;
    span {
      &:first-child {
        font-size: 12px;
        line-height: 12px;
      }
      &:last-child {
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
      }
    }
  }
`

export const Fuel = styled.div`
  margin-top: 3.5em;
  text-align: center;
  height: 306px;
  .num {
    margin-top: 10px;
    font-size: 9px;
    font-weight: bold;
    color: #1bff00;
    line-height: 9px;
  }
  .progress {
    font-size: 24px;
    font-weight: bold;
    color: #00ff0e;
    margin-top: 38px;
    line-height: 24px;
  }
`
export const Pledge = styled.div`
  margin-bottom: 41px;
  margin-top: 36px;
  height: 271px;
  .tab {
    --title-font-size: 14px;
    --active-line-height: 4px;
    --active-line-color: #32ff00;
    --active-title-color: #fff;
    --fixed-active-line-width: 3px;
    --content-padding: 15px 5%;
    .adm-tabs-header {
      border: none;
    }
    .adm-tabs-tab {
      padding: 7px 0px 9px;
    }
    .adm-tabs-header {
      width: 74%;
    }
  }
  .balance {
    font-size: 15px;
    display: grid;
    padding-left: 5px;
    padding-right: 15px;
    margin-top: 15px;
    gap: 5px;
    div {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      white-space: nowrap;
      .text {
        font-size: 13px;
        font-weight: 400;
      }
      .num {
        text-align: right;
      }
      span {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }
  }
  .pledge {
    margin-top: 36px;
    display: flex;
    gap: 3%;
    .info {
      font-size: 12px;
      width: 50%;
    }
    .btn {
      --text-color: #fff;
      height: 35px;
      font-size: 18px;
      font-weight: bold;
      width: 44%;
      text-align: center;
      border: none;
    }
  }
`

export const InputGroup = styled.div`
  display: flex;
  padding: 12px 14px;
  border: solid 1px #29d100;
  border-radius: 6px;
  font-size: 16px;
  align-items: center;
  .input {
    --font-size: 16px;
    --color: #fff;
    min-height: auto;
  }
  .unit {
    text-align: center;
    padding-left: 10px;
    font-weight: bold;
    border-left: solid 1px #29d100;
    width: 50px;
  }
`
export const MinerLogs = styled.div`
  .logs {
    margin-top: 31px;
    padding: 0 5%;
    .row {
      padding: 11px 0;
      display: flex;
      justify-content: space-around;
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
  }
`
