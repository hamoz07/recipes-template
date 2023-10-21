import VisitBtn from "./VisitBtn";
import { Data } from "./data/ITEMdata";
const menuItem = () => {
  return (
    <>
      {Data.map((Item, i) => (
        <>
          <div className="menu_item d-grid" key={i}>
            <img src={Item.recipeImg} alt="" />
            <div className="main-text_item">
              <div className="menu_item-text">
                <span>{Item.titleOfItem}</span>
                <div>{Item.descOfItem}</div>
              </div>
              <div className="prices">
                <span className="newPrice">{Item.newPrice}</span>
                <span className="oldPrice">{Item.oldPrice}</span>
              </div>
              <VisitBtn visitText={"Order Now"} />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default menuItem;
