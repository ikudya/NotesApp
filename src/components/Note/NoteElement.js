import styled from "styled-components";


export const NoteWrapper = styled.div `
  padding: 25px;
  height: 280px;
  width: 260px;
  display: flex;
  flex-direction: column;
  background-color: blueviolet;
  border-radius: 30px;
`
export const NoteText = styled.textarea`
  flex: 1;
  resize: none;
  background-color: transparent;
  font-size: 1rem;
  line-height: 1.875rem;
  outline: none;
  border: none;
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
`

export const Text = styled.p`
  
`

