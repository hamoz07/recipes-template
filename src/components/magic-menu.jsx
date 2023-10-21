import Item from "./menuItem.jsx";
import Headline from "./headline.jsx";

const Magic_menu = () => {
  return (
    <div className="magic-menu">
      <Headline
        headline="Explore Our Foods"
        pitem={true}
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        completeDesc="Mauris feugiat erat tellus. Far
        far away, behind the word mountains, there live the blind texts. Separated they live in."
      />
      <div className="d-flex gap-3 flex-wrap justify-content-center align-items-baseline">
        <Item/>
      </div>
    </div>
  );
};

export default Magic_menu;
