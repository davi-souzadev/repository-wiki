import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 50%;
/*   border: 1px solid red;
 */
  h3 {
    font-size: 2rem;
    color: #fafafa;
  }

  p {
    color: #fafafa70;
    margin-bottom: 1.25rem;
  }

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin-top: 1.25rem;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    padding: 5px;
    margin-top: 1.25rem;
    text-decoration: none;
    color: #fafafa;
  }

  .remove {
    margin-top: 1.25rem;
    text-decoration: none;
    color: #ff0050cc;
  }
`