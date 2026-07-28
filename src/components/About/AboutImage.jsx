import profileImage from "../../assets/images/profile.png";

const AboutImage = () => {
  return (
    <div className="about__image-wrapper">
      <div className="about__image">
        <img
          src={profileImage}
          alt="Ganesh Prajapat"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutImage;