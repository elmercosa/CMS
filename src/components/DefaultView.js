import styled from "styled-components";
export const View = styled.div`
  margin-left: 215px;
`;

export const Section = styled.div`
  margin-right: 15px;
  margin-bottom: 10px;
  padding: 20px 40px;
  background: white;
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  box-shadow: 0px 10px 40px 0px rgba(138, 149, 158, 0.2);
  max-height: calc(100vh - 140px);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const SectionTitle = styled.h1`
  margin-left: 15px;
`;
