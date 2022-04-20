import styled from "styled-components";

export const SideBarWrapper = styled.div`
display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const IMG = styled.img`
  height: 60px;
  cursor: pointer;
`;
export const SBList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  transition: 300ms;
  height: ${({isOpen}) => (isOpen ? '300px' : '0px')};
`;
export const SBLItem = styled.li`
border-radius: 50%;
  height: 24px;
  width: 24px;
  list-style: none;
`;
export const PlusNote = styled.div `
`