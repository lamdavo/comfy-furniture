import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  return (
    <Wrapper className="page-100">
      <section>
        <h1> 404 </h1>
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className="btn">
          Return to Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    text-transform: none;
  }

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default NotFound;
