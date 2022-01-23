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

    @media (max-width: 426px) {
      max-width: 85%;
    }
  }
`;

export const ProfilesContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 150px;

  @media (max-width: 426px) {
    flex-direction: column;
    gap: 2rem;
  }
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

  h3 {
    margin: 1rem 0 0 0;
  }

  :hover {
    opacity: 1;
  }
`;
