import styled from "styled-components";

export const Container = styled.section`
  background-color: red;
`;

export const ServicesContainer = styled.ul`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Service = styled.li`
  width: 350px;
  height: 240px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 0.25rem;
  border: 1px solid var(--grey);
  border-bottom: 5px solid var(--primary);
  background-color: #212121;
  transition: 400ms;
  opacity: 0.7;

  :hover {
    transform: translateY(-8px);
    opacity: 1;
  }
`;
