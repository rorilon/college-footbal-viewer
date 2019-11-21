import React from "react";
import styled from "styled-components";

const TextTh = styled.th`
  padding: 0.75rem;
  vertical-align: middle !important;
  text-align: center;
`;

export default function Conference({ conference, handleClick }) {
  return (
    <tr onClick={handleClick}>
      <TextTh>{conference.abbreviation}</TextTh>
      <TextTh>{conference.name}</TextTh>
      <TextTh>{conference.short_name}</TextTh>
    </tr>
  );
}
