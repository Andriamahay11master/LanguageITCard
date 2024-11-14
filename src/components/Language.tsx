interface LanguageProps {
  name: string;
  img: string;
  link: string;
}
const Language = ({ name, img, link }: LanguageProps) => {
  return (
    <div className="cardWrapper">
      <img src={img} alt="lang" />
      <h3>{name}</h3>
      <a href={link}>See the website</a>
    </div>
  );
};
export default Language;
