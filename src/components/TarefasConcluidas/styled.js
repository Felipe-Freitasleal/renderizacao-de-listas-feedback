import styled from "styled-components";

export const Tarefa = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 6px 8px;
  background-color: white;
  color: grey;
 
`;

export const ListaContainer = styled.div`
  width: 400px;
  
  display: flex;
  flex-direction: column;
  overflow: auto;
`;