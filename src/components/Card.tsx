import Language from "./Language";
import { data } from "../data/data";
const Card = () => {
  return (
    <div className="card">
      <h1>My skills in web development</h1>
      <div className="langWrapper">
        {data.map((item, index) => (
          <Language {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Card;
