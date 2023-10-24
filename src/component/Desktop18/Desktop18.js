import "./Desktop18.css";
import Header from "../Header/Header";
import HeadingBox from "../HeadingBox/HeadingBox";
import Footer from "../Footer/Footer";
import GradientButton from "../UI/GradientButton";

function Desktop18() {
  return (
    <div>
      <Header />
      <HeadingBox
        text="Data Hygiene Solution"
        image="dataHygiene.png"
        alt="image of data hygiene solution"
      ></HeadingBox>
      <div className="container18">
        <div className="heading_container18">
          <div className="heading_item18">
            <h3>
              <span className="underline">Data Validation</span>
            </h3>
          </div>
        </div>

        <div className="top_container18">
          <div className="item_container18">
            <input
              type="file"
              accept=".pdf"
              style={{ display: "none" }} // Hide the default file input
              onChange={{}}
              ref={{}}
            />
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              onClick={{}}
              height="48px"
              buttonText="Browse"
            />
          </div>
        </div>
        <div className="middle_container18">
          <div className="item_container_middle18">
            <GradientButton
              startGradientColor="rgb(10, 111, 168)"
              endGradientColor="rgb(5, 167, 244)"
              link="#"
              onClick={{}}
              height="48px"
              width="300px"
              buttonText="Validate"
            />
          </div>
        </div>
        <div className="bottom_container18">
          <div className="item_container_last18">
            <div className="button_container_18">
              <GradientButton
                startGradientColor="rgb(10, 111, 168)" // Start color
                endGradientColor="rgb(5, 167, 244)"
                height="48px"
                width="160px"
                link="/desktop3/desktop15"
                buttonText="< Back"
              />
            </div>
            <div className="button_container_18">
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

export default Desktop18;
