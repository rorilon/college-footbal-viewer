import React from "react";
import styled from "styled-components";
const LogoImg = styled.img`
  height: 50px;
`;
const TextTh = styled.th`
  padding: 0.75rem;
  vertical-align: middle !important;
  text-align: center;
`;

export default function Team({ team, handleClick }) {
  return (
    <tr onClick={handleClick}>
      <th hidden={window.innerWidth < 350}>
        <LogoImg
          src={team.logos && team.logos.length !== 0 ? team.logos[0] : ""}
        />
      </th>
      <TextTh>{team.abbreviation}</TextTh>
      <TextTh>{team.school}</TextTh>
      <TextTh hidden={window.innerWidth < 350}>{team.mascot}</TextTh>
      <TextTh hidden={window.innerWidth < 350}>{team.division}</TextTh>
      <TextTh>{team.conference}</TextTh>
    </tr>
  );
}
