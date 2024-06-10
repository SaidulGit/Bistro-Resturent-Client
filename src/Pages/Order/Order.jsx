import { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../Components/UseHooks/UseMenu";
import OrderTabs from "./OrderTabs";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["dessert", "soup", "drinks", "salad", "pizza"];
  const { category } = useParams();
  const initialindex = categories.indexOf(category);
  const [tabIndex, setTabindex] = useState(initialindex);
  const [menu] = UseMenu();
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Food Order</title>
      </Helmet>
      <Cover img={orderCover} title="order Food"></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
        </TabList>
        <TabPanel>
          <OrderTabs items={dessert}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soup}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={salad}></OrderTabs>
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizza}></OrderTabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
