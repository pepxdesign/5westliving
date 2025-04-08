import HeroContent from "../components/home/hero/HeroContent";

const heroData = {
  title: "Privacy Policy",
  text: null,
};

function PrivacyPolicy() {
  return (
    <div className="aximo-all-section bg-light4">
      <div
        className="aximo-hero-section4 privacy-hero-bg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <HeroContent heroData={heroData} />
            </div>
          </div>
        </div>
      </div>

      <div className="aximo-hero-section5">
        <div className="container privacy-policy">
          <div className="aximo-hero-content5 team-grid-header">
            <h2>Collection, Use and Disclosure Purposes</h2>
            <p>
              We only collect Personal Data from you, such as first and last
              name, phone number and e-mail address, when you register to
              receive information from us. We may use your personal information
              to contact you from time to time to inform you about our products
              and services, including future product offerings. This may be in
              the form of e-mail, telephone or mail.Any personal information
              that is supplied voluntarily by you, such as your name, address,
              phone number and e-mail address, is kept strictly confidential and
              is not shared or distributed to anyone. This information is used
              only for the purpose of contacting you upon your request.
            </p>
            <p className="paragraph-title">Aggregate Information</p>
            <p>
              Aggregate information is anonymous data such as your IP address,
              domain name, and web browser type. This information is collected
              to diagnose problems with the web server, and to assess the kinds
              of visitors this site receives in order to improve the experience
              for website visitors. None of this data is Personally Identifiable
              information. When you visit Woodbridge.ca you are anonymous and
              remain that way unless you choose to register to receive
              information from us.
            </p>
            <p className="paragraph-title">Opting Out</p>
            <p>
              You can opt out of receiving further communication from us at any
              time. To opt out of receiving marketing information, e-mail us an
              unsubscribe request at www.5westliving.ca
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
