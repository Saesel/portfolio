import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: 0 auto;
  text-align: center;

  p {
    width: 640px;
    margin: 1rem auto;
    color: var(--text);
    font-family: "Rubik";
  }
`;

export const ProfilesContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 150px;
`;

export const Profile = styled.div`
  display: block;
  opacity: 0.7;

  i {
    font-size: 30px;
    padding: 1rem;
    border-radius: 50%;
    background-color: var(--dark-grey);
    color: var(--primary);
  }

  a {
    color: var(--text);
    font-family: "Rubik";
  }

  :hover {
    opacity: 1;
  }
`;
