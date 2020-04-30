import styled from "styled-components";
import { rem } from "../../../utils/style.util";

export const Container = styled.div`
  padding: ${rem(10)} ${rem(20)};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Duolgo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

export const MessageSpace = styled.div`
  height: ${rem(21)};
  display: block;
  margin-top: ${5};
`;