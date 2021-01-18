import styled, { css } from "styled-components";

  const Button = styled.button`
    margin: 10px;
    padding: 20px;

    ${(props) =>
        props.darkMode &&
        css`
            background: gray;
        `}
  `;

  export default Button;