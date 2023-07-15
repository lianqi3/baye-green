import styled, { css, createGlobalStyle } from 'styled-components'
import imgBg from '@/static/minerPoolBg.png'

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
  .grade {
    margin-top: 51px;
    display: flex;
    gap: 10px;
    align-items: center;
    .info {
      div {
        font-weight: bold;
        &:first-child {
          color: #fff;
          font-size: 14px;
          line-height: 14px;
        }
        &:last-child {
          color: #90ff27;
          font-size: 18px;
        }
      }
    }
  }
`

export const MinerData = styled.div`
  margin-top: 89px;
  display: grid;
  gap: 26px;
  .box {
    display: flex;
    align-items: center;
    .box-child {
      width: 31%;
      display: flex;
      align-items: center;
      height: 55px;
      gap: 5%;
    }
    .num {
      color: #00ff00;
      font-size: 18px;
      font-weight: bold;
      width: 56%;
      text-align: center;
    }
  }
  .box1 {
    margin-left: 4.7%;
  }
  .box2 {
    margin-left: 5%;
  }
  .box3 {
    margin-left: 4%;
  }
`

export const Logs = styled.div`
  margin-top: 45px;

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
