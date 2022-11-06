import styled from "styled-components";
import { Theme } from "../assets/theme";

const CategoryContainer = styled.div`
  .cardTitle {
    color: ${Theme.primaryBlue};
    font-family: 'Roboto Slab', serif;
    font-size: 22px;
    font-weight: 600;
    height: 60px;
    display: flex;
    font-family: 'Roboto Slab', serif;
    align-items: center;
    @media (max-width: 468px) {
    font-size: 18px;
    height: 40px;
    }
  }
  .addNextBtn {
    text-align: end;
    height: 60px;
  }
  .cardSider {
    border-right: 1px solid ${Theme.borderGray};
  }
  .cardBetween {
    justify-content: space-between;
  }

  .cardLeftBorder {
    display: flex;
    justify-content: center;
    border-right: 0.3px solid ${Theme.borderGray};
    border-bottom: 0.3px solid ${Theme.borderGray};
    border-left: 0.3px solid ${Theme.borderGray};
    padding-bottom: 20px;
    padding-top: 20px;
    @media (max-width: 468px) {
      border-bottom: none;
    }
  }

  .cardRightBorder {
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
    padding-top: 20px;
    border-right: 0.3px solid ${Theme.borderGray};
    border-bottom: 0.3px solid ${Theme.borderGray};
    border-left: 0.3px solid ${Theme.borderGray};
    @media (max-width: 468px) {
      border-bottom: none;
      border-right: none;
    }
  }

  .sideCard {
    padding-bottom: 20px;
    padding-top: 23px;
  }

  .subCard {
    width: 85%;
    @media (max-width: 468px) {
    width: 100%;
      }
  }
  .subSideCard {
    width: 88%;
    border-right: 1px solid ${Theme.borderGray};
    padding-right: 20px;
    @media (max-width: 468px) {
        width: 100% ;
        border-right: none;
        padding-right: 0px;
      }
  }
 
}
`;

const HeaderLineContainer = styled.div`
  .betweenLine {
    h2 {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #000;
      line-height: 0.1em;
      margin: 10px 0 20px;
    }

    h2 infoSteps {
      background: #fff;
      padding: 0 10px;
    }
  }
  .createContent {
    display: flex;
    justify-content: center;
  }
  .tick-Active {
    background: ${Theme.darkBlue};
  }
  .tickView {
    width: 30px;
    height: 30px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Theme.white};
    font-family: "Roboto Slab", serif;
  }
  .tick-normal {
    background: ${Theme.borderGray};
  }
  .stepView-active {
    font-family: "Roboto Slab", serif;
    color: ${Theme.secondaryBlue};
    font-size: 16px;
    font-weight: 700;
  }
  .statusView-active {
    font-family: "Roboto Slab", serif;
    color: ${Theme.darkBlue};
    font-size: 16px;
    font-weight: 700;
  }
  .infoSteps {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .emptyLineActive {
    height: 2px;
    background: ${Theme.darkBlue};
    width: 100%;
  }
  .emptyLine {
    height: 2px;
    background: ${Theme.borderGray};
    width: 100%;
  }
  .align-center {
    display: flex;
    align-items: center;
  }
  .previewContent {
    display: flex;
    justify-content: center;
  }
  .removePadding {
    @media (max-width: 468px) {
      padding: 0px !important;
    }
  }
`;

export { CategoryContainer, HeaderLineContainer };
