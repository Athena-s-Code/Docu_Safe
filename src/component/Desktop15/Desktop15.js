import "./Desktop15.css";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import Footer from "../Footer/Footer";
import GradientButton from "../UI/GradientButton";

function Desktop15() {
  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Hygiene Solution"
        image="dataHygiene.png"
        alt="image of data hygiene solution"
      ></HeadingBox>
      <div className="container15">
        <div className="heading_container15">
          <div className="heading_item15">
            <h3>
              <span className="underline">Data Hygiene Solution</span>
            </h3>
          </div>
        </div>

        <div className="top_container15">
          <div className="item_container15">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="/desktop3/desktop15/desktop4"
              height="48px"
              buttonText="Data Duplication detect"
            />
          </div>
          <div className="item_container15">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)" // Start color
              endGradientColor="rgb(5, 167, 244)"
              link="/desktop3/desktop15/desktop5"
              height="48px"
              buttonText="Data validation"
            />
          </div>
        </div>
        <div className="bottom_container15">
          <div className="item_container_last15">
            <div className="button_container_15">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                link="/desktop3"
                buttonText="< Back"
              />
            </div>
            <div className="button_container_15">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                link="#"
                buttonText="Next >"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Desktop15;
