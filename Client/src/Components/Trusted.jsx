import styled from "styled-components";

function Trusted() {
  return (
    <Wrapper className="brand-section">
      <div className="container">
        <h3>Trusted by 100+ Premium Companies</h3>

        <div className="brand-section-slider">
          <div className="slide">
            <img
              src={
                "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
              }
            />
          </div>
          <div className="slide">
            <img
              src={
                "https://1000logos.net/wp-content/uploads/2021/07/Jio-Logo.png"
              }
            />
          </div>
          <div className="slide">
            <img
              src={
                "https://i.pinimg.com/736x/80/e2/59/80e2599b680c6eab603049c564896568.jpg"
              }
            />
          </div>
          <div className="slide">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgF7Ps5xvXZdwKnl6qZ3XvYVv6wYqa1ksFw&usqp=CAU"
              }
            />
          </div>
          <div className="slide">
            <img
              src={
                "https://lh3.googleusercontent.com/3bXLbllNTRoiTCBdkybd1YzqVWWDRrRwJNkVRZ3mcf7rlydWfR13qJlCSxJRO8kPe304nw1jQ_B0niDo56gPgoGx6x_ZOjtVOK6UGIr3kshpmTq46pvFObfJ2K0wzoqk36MWWSnh0y9PzgE7PVSRz6Y"
              }
            />
          </div>
          <div className="slide">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qJMz8tRNB1LibNB15mxo7PbDPbkyV5rUHg&usqp=CAU"
              }
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text1};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    mix-blend-mode: darken;
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    flex-direction: row;

    .slide {
      margin: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }
  }
`;
export default Trusted;
