import Language from "./Language";
import { data } from "../data/data";
const Card = () => {
  return (
    <div className="card">
      <h1>Language</h1>
      <div>
        {data.map((item) => (
          <Language {...item} />
        ))}
      </div>
    </div>
  );
};
export default Card;
