import { useState } from "react";

interface LanguageProps {
  name: string;
  img: string;
  link: string;
}
const Language = ({ name, img, link }: LanguageProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="cardWrapper" onClick={() => setShow(!show)}>
      <div className={!show ? "cardTop show" : "cardTop"}>
        <img src={img} alt="lang" />
        <h3>{name}</h3>
      </div>
      <div className={show ? "cardBottom show" : "cardBottom"}>
        <a href={link} target="_blank" onClick={(e) => e.stopPropagation()}>
          See the website
        </a>
      </div>
    </div>
  );
};
export default Language;
