import Header from "../components/header";

export default function Contact() {
  return (
    <div className="contactPage">
      <Header />
      <div>
        <h1 className="heading3">Contact</h1>
        <p className="contactPara">Feel free to contact me using the following details:</p>
        <ul className="contactList">
          <li>Email: owaiskhanshab1223@gmail.com</li>
          <li>Phone: 03342834096</li>
          <li>Address: Precent 35 Street 15 Villa 59</li>
        </ul>
        <p className="contactPara">I am always open to discussing new projects or opportunities.</p>
        <p className="contactPara">
          Note: This is a static version of my contact page. Actual contact <br /> form implementation depends on your backend
          technology and frontend framework.
        </p>
      </div>
    </div>
  );
}
