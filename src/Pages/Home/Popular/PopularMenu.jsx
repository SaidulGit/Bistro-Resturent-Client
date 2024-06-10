
import SectionTitle from "../../Shared/SectionTitle";
import MenuItem from "../../Shared/Menuitems/MenuItem";
import UseMenu from "../../../Components/UseHooks/UseMenu";

const PopularMenu = () => {
 const [menu] = UseMenu();
 const popular = menu.filter(item => item.category === 'popular')


  return (
    <div>     
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-4">
        {
          popular.map(item => <MenuItem 
            key={item._id} 
            item={item}>
            </MenuItem> )
        }
      </div>
    </div>
  );
};

export default PopularMenu;
