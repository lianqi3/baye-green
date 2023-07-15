import styled, { css } from 'styled-components'
import { THEME } from '@/config/config'
import bgImg from '@/static/topBg.png'
import bodyBg from '@/static/bg.png'
import noticeBg from '@/static/noticeBg.png'
export const BodyContent = styled.div`
  background: url(${bodyBg}) 0 0 no-repeat #000000;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 1504px;
`
export const TopNav = styled.div`
  position: absolute;
  height: 250px;
  width: 100%;
  padding: 48px 16px 10px;
  display: flex;
  justify-content: space-between;
  .linkWallet {
    padding: 5px 6px;
    border: none;
    height: 32px;
    border-radius: 4px 4px 4px 4px;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: ${THEME.white};
    line-height: 16px;
  }
  .languageBtn {
    display: flex;
    gap: 2px;
    align-items: center;
    border: none;
    height: 28px;
    border-radius: 4px;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    color: ${THEME.white};
    span {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  }
`

export const Content = styled.div`
  position: relative;
  top: 61px;
  padding: 16px 0;
  .paddingContent {
    padding: 0 16px;
  }
  .banner {
    height: 167px;
    position: relative;
    .adm-page-indicator-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
    }
    .adm-page-indicator-dot-active {
      background-color: #548e43;
    }
  }
`

export const Menu = styled.div`
  margin-top: 39px;
  display: flex;
  justify-content: space-between;
  padding: 0 7%;
  font-weight: bold;
  height: 7em;
  font-size: 14px;
  font-family: Source Han Sans CN-Regular, Source Han Sans CN;
  color: #fff;
  a {
    display: block;
    height: 100%;
    padding-bottom: 0.2em;
    align-self: flex-end;
    display: flex;
    align-items: end;
    width: 20%;
    justify-content: center;
  }
  .adm-image {
    margin-bottom: 12px;
  }
`

const coinTd = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  div,
  span {
    flex: 1;
    text-align: center;
  }
`

const linearText = css`
  background: linear-gradient(0deg, #00ff06 0.537109375%, #d1fecd 98.6328125%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const ListContent = styled.div`
  margin-top: 3em;
  padding: 8px 10%;
  .title {
    font-size: 15px;
    font-weight: bold;
    line-height: 16px;
    margin-bottom: 16px;
  }
  .lis_box {
    height: 143px;
    .th {
      font-size: 14px;
      font-weight: bold;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      color: #989fb1;
      line-height: 12px;
      ${linearText}
      ${coinTd}
    }
  }
`

const tdList = css`
  padding: 20px 16px;
  display: grid;
  .td {
    ${coinTd}
  }
`

export const CoinTd = styled.div`
  display: grid;
  margin-top: 1.4em;
  gap: 3.2em;
  .td {
    ${coinTd}
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    div {
      text-align: center !important;
    }
    .coin {
      font-size: 12px;
    }
    .up {
      color: #0aff08;
    }
    .down {
      color: #ff9100;
      /* ::before {
          content: '-';
        } */
    }
  }
`

const wholeb = css`
  .title {
    ${linearText}
    font-weight: bold;
    text-align: center;
    font-size: 17px;
  }
`

export const Overview = styled.div`
  ${wholeb}
  margin-top: 3.2em;
  .overview-box {
    margin-top: 4.4em;
    padding: 0 5%;
    display: grid;
    gap: 2em 19%;
    grid-template-columns: repeat(2, 1fr);
    .box {
      display: grid;
      align-items: center;
      color: #fff;
      padding-top: 1.4em;
      padding-left: 28%;
      height: 4.8em;
      gap: 1px;
      span {
        &:first-child {
          font-size: 11px;
          line-height: 11px;
        }
        &:last-child {
          font-size: 20px;
          line-height: 20px;
        }
      }
    }
  }
`

export const Rank = styled.div`
  ${wholeb}
  position: relative;
  top: 18.4em;
  .rank {
    position: relative;
    color: #fff;
    top: 7em;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    div {
      text-align: center;
      position: relative;
      flex: 1;
      &.tow {
        right: 10%;
        font-size: 10px;
        line-height: 10px;
      }
      &.three {
        left: 8.5%;
        font-size: 10px;
        line-height: 10px;
        text-align: center;
      }
      &.one {
        font-size: 14px;
        line-height: 14px;
        top: 2em;
        right: 1%;
      }
    }
  }
`

const tdCss = css`
  &:first-child {
    width: 20%;
  }
  &:not(:first-child) {
    width: 40%;
    text-align: center;
  }
`

export const RankList = styled.div`
  position: relative;
  top: 13em;
  padding: 0.5em 9%;
  .th {
    ${linearText}
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 17px;
    div {
      ${tdCss}
    }
  }
  .td {
    display: grid;
    gap: 1.6em;
    padding: 4px 0;
    div {
      height: 1.6em;
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        ${tdCss}
        &:first-child {
          ${linearText}
        }
      }
    }
  }
`
export const LanguageContent = styled.div`
  display: grid;
  div {
    padding: 16px;
    font-size: 14px;
    text-align: center;
    color: #939393;
    &.active {
      font-size: 15px;
      color: #000;
    }
  }
`
export const Notice = styled.div`
  margin-top: 24px;
  height: 32px;
  background: url(${noticeBg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .notice-list {
    line-height: 32px;
    color: #ffffff;
    padding: 0 15px;
    .notice-item {
      width: 100%;
      height: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box {
        align-items: center;
        display: flex;
        gap: 5px;
      }
    }
  }
`
