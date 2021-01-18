import styled, { css } from "styled-components";

  const Button = styled.button`
    margin: 10px;
    padding: 20px;
    border: 2px solid red;
    cursor: pointer;

    ${(props) =>
        props.darkMode &&
        css`
            background: gray;
        `}
  `;

    const SalesButton = styled(Button)`
        background-color: orange;
        font-weight: bolder;
    `;
  
  export { SalesButton };
  export default Button;