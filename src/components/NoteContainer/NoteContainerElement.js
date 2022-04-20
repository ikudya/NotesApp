import styled from "styled-components";


export const NotesContainer = styled.div `
   height: 100%;
`;
export const H2 = styled.h2 `

`;
export const NoteContainerNotes = styled.div`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-y: scroll;
  
  ::-webkit-scrollbar{
    width: 8px;
  }
  ::-webkit-scrollbar-track {

    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: lightgrey;
    transition: 300ms;
  }
  ::-webkit-scrollbar-thumb:hover{
    background-color: gray;
  }
`;
