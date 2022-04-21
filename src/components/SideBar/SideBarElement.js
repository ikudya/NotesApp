import styled from "styled-components";

export const SideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media screen and (max-width: 480px) {
    gap: 30px;
    flex-direction: row;
    align-items: center;
}
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
  transition: 0.5s ease-in-out;
  height: ${({isOpen}) => (isOpen ? '300px' : '0px')};
  @media screen and (max-width: 480px){
    flex-direction: row;
    height: auto;
    width: ${({isOpen}) => (isOpen ? '300px' : '0px')};
  }
`;
export const SBLItem = styled.li`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  list-style: none;
  
  
`;
export const PlusNote = styled.div`
`