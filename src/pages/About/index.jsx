import Button from "../../Components/Button/Button";
import asset from "../../asset/about2.jpg";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeadphones,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <>
      <div className="AboutPageMainContainer flex flex-col justify-center items-center">
        <div className="backgroundfilter"></div>
        <div className="contentCont ">
          <h1 className="h1PicCard">About Us</h1>
          <p className="pPicCard">
            A great platform to buy, sell and rent your properties without any
            agent or commissions. Here, we believe in the transformative power
            of technology to simplify and enhance your real estate journey. Our
            mission is to empower you with the tools and information you need to
            make informed decisions when it comes to buying, selling, renting,
            or investing in real estate. We have a dedicated team of real estate
            enthusiasts, tech-savvy professionals, and industry experts who have
            come together to revolutionize the way you experience real estate.
            With a shared passion for simplifying the complex world of property
            transactions, we've created a platform that puts you at the center
            of every real estate endeavor.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 h-96 w-full mb-10 pt-0">
        <img
          src={asset}
          class=" aboutimg object-cover w-1/7 h-64 sm:h-80 aspect-w-16 aspect-h-9 "
          alt="No Image found"
        />

        <div className="h-full w-1/3 flex flex-col justify-center items-start ">
          <strong className=" text-2xl">
            Efficiency. Transparency. Control.
          </strong>
          <p>
            We developed a platform for the Real Estate marketplace that allows
            buyers and sellers to easily execute a transaction on their own. The
            platform drives efficiency, cost transparency and control into the
            hands of the consumers. Hously is Real Estate Redefined.
          </p>
          <Button
            btn="bg-orange-300 hover:bg-orange-400 mt-4 "
            title="Learn More"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full mb-10 gap-3">
        <h1 className=" text-orange-400 text-4xl ">How It Works!</h1>
        <p>
          A great plateform to buy, sell and rent your properties without any
          agent or commisions.
        </p>
      </div>
      <div className="flex justify-center items-center mb-20 gap-20 ">
        <div className=" flex flex-col justify-center items-center text-center w-96 ">
          <div className="FAIcons">
            <FontAwesomeIcon icon={faHome} />
          </div>
          <h1 className="text-2xl">Evaluate Property</h1>
          <p>
            If the distribution of letters and words is random, the reader will
            not be distracted from making.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center w-96">
          <div className="FAIcons">
            <FontAwesomeIcon icon={faHeadphones} />
          </div>
          <h1 className="text-2xl">Meeting with Agent</h1>
          <p>
            If the distribution of letters and words is random, the reader will
            not be distracted from making.
          </p>
        </div>
        <div className=" flex flex-col justify-center items-center text-center w-96">
          <div className="FAIcons">
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <h1 className="text-2xl">Close the Deal</h1>
          <p>
            If the distribution of letters and words is random, the reader will
            not be distracted from making.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-full w-full mb-10 gap-3">
        <h1 className=" text-orange-400 text-4xl ">
          Have Question ? Get in touch!
        </h1>
        <p>
          A great plateform to buy sell and rent your properties without any
          agent or commissions.
        </p>
        <Button
          btn="bg-orange-300 hover:bg-orange-400 mt-4 "
          title="Contact Us"
        />
      </div>
    </>
  );
};

export default About;
