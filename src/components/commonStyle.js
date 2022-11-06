import styled from "styled-components";
import { Theme } from "../assets/theme";

const CardContainer = styled.div`
  .cardHeader {
    background: ${Theme.secondaryBlue};
    color: ${Theme.white};
    padding: 5px;
    border-radius: 15px 15px 0 0;
    text-align: center;
    font-family: "Roboto Slab", serif;
  }
  .listContent {
    box-shadow: 0 -1px 4px 0 rgba(23, 23, 23, 0.32);
    border-radius: 0 0 15px 15px;
  }
  .profileImage {
    width: 42px;
    height: 42px;
    border-radius: 25px;
  }
  .userDetails {
    text-align: start;
    padding-left: 0px;
  }
  .userExperience {
    color: ${Theme.secondaryDark};
    font-family: "Roboto Slab", serif;
    font-size: 12px;
  }
  .userName {
    font-family: "Roboto Slab", serif;
    color: ${Theme.primaryBlack};
    font-size: 14px;
    font-weight: 700;
  }
  .menuIcon {
    cursor: pointer;
    text-align: end;
  }
  .userList {
    border-top: 1px solid ${Theme.borderGray};
    align-items: center;
  }
  .popupContainer {
    border: 1px solid ${Theme.borderGray} !important;
    box-shadow: 0 0px 3px 0 rgba(23, 23, 23, 0.32) !important;
  }
  .popList {
    cursor: pointer;
    border-bottom: 1px solid ${Theme.borderGray};
  }
  .kingIcon {
    position: absolute;
    bottom: 0;
    right: 21px;
    border-radius: 47px;
    font-size: 8px;
    height: 15px;
    font-weight: 700;
    display: flex;
    justify-content: 14px;
    justify-content: center;
    align-items: center;
    width: 15px;
    background: ${Theme.darkBlue};
    color: ${Theme.white};
  }
  .kingPosition {
    position: relative;
  }
`;

const DynButton = styled.div`
  .btnContainer {
    font-family: "Roboto Slab", serif;
    background: ${Theme.primaryBlue};
    &:active {
      background: ${Theme.primaryBlue};
    }
  }

  .smallButton {
    background: ${Theme.secondaryBlue};
    height: 31px;
    padding: 5px;
    font-size: 12px;
    width: 100%;
    border: none;
    &:active {
      background: ${Theme.secondaryBlue};
    }
  }
`;

const AccordionContainer = styled.div`
  .accordion-body {
    padding: 0px;
  }
  .accordion-button {
    padding: 10px;
    border-radius: 8px !important;
    background: ${Theme.darkBlue};
    color: ${Theme.white};
    font-family: "Roboto Slab", serif;
    &:focus {
      box-shadow: none;
    }
  }
  .accordion-header {
    border-radius: 8px;
  }
  .accordion-item {
    border-radius: 8px;
    margin-bottom: 20px;
    border: none;
  }
  .accordion-button:not(.collapsed) {
    border-radius: 8px 8px 0px 0px !important;
  }
  .accordion-button::after {
    display: none;
  }
  .accordion-button:not(.collapsed)::after {
    display: none;
  }

  .subHeader {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-family: "Roboto Slab", serif;
  }

  .roundIcon {
    font-size: 17px;
    border: 2px solid;
    border-radius: 25px;
    height: 20px;
    width: 20px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 1px;
  }

  .noDataFound {
    text-align: center;
    border-right: 0.5px solid ${Theme.borderGray};
    border-bottom: 0.5px solid ${Theme.borderGray};
    border-left: 0.5px solid ${Theme.borderGray};
    border-radius: 0 0 8px 8px;
  }
`;

const popupContent = {
  boxShadow: "0 0px 3px 0 rgba(23, 23, 23, 0.32) !important",
  borderRadius: "12px",
  background: "white",
  left: "-30px",
};

const popupCover = {
  border: `1px solid ${Theme.borderGray}`,
  borderRadius: "12px",
};

const popupList = {
  cursor: "pointer",
  borderTop: `1px solid ${Theme.borderGray}`,
};

export {
  CardContainer,
  DynButton,
  AccordionContainer,
  popupContent,
  popupCover,
  popupList,
};
