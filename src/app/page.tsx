import Header from "./components/header";
import Image from "next/image"; // Using next/image for better optimization

export default function Home() {
  return (
    <div className="mainContainer">
      <div className="homeHeader">
        <Header />
      </div>
      <div>
        <div className="mainHeading">My Portfolio</div>
        <div className="profile-pic">
          <Image src="/profile.jpg" alt="Profile Picture" width={400} height={400} />
        </div>
        <h2 className="heading2">
          <span className="myName">Hello, I'm</span>
          <br /> Owais Khan
        </h2>
        <p className="descriptionHome">
          A person formally engaged in learning, especially <br /> one enrolled in a school or college; pupil: a student <br />
          at Yale. Any person who studies, investigates, or performs <br /> research in a university or college setting.
          A person who is engaged.
        </p>
      </div>
    </div>
  );
}
