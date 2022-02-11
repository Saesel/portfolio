import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem 3rem;
  border-radius: 0.25rem;
  background-color: var(--dark-grey);
  border: 1px solid var(--grey);

  h2 {
    margin-bottom: 1rem;
    font-size: 1.6rem;
    text-align: center;
  }
`;

export const FormContent = styled.form`
  margin-top: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  h2,
  label,
  input {
    color: var(--white);
  }

  label {
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 0.75rem 0.5rem;
    border-radius: 0.25rem;
    outline: none;
    border: none;
    background-color: var(--grey);
    color: var(--white);
    transition: 400ms;
    user-select: auto;

    ::selection {
      background-color: var(--primary);
    }
  }

  textarea {
    width: 360px;
    margin-bottom: 1.5rem;
    resize: none;
  }

  input[value] {
    width: 100%;
    padding: 1rem;
    cursor: pointer;
    background-color: var(--primary);
    transition: all 400ms ease;

    :hover {
      background-color: #5b6eae;
    }
  }
`;
