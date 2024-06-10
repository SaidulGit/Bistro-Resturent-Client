import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../Shared/Cover/Cover'
import Menuimg from '../../../assets/menu/banner3.jpg'
import dessertimg from '../../../assets/menu/dessert-bg.jpeg'
import soupimg from '../../../assets/menu/soup-bg.jpg'
import saladimg from '../../../assets/menu/salad-bg.jpg'
import pizzaimg from '../../../assets/menu/pizza-bg.jpg'
import UseMenu from '../../../Components/UseHooks/UseMenu'
import MenuCategory from '../../MenuCategory/MenuCategory'
import SectionTitle from '../../Shared/SectionTitle'

const Menu = () => {
  const [menu] = UseMenu();
  const soup = menu.filter(item=> item.category === 'soup')
  const dessert = menu.filter(item=> item.category === 'dessert')
  const offered = menu.filter(item=> item.category === 'offered')
  const salad = menu.filter(item=> item.category === 'salad')
  const pizza = menu.filter(item=> item.category === 'pizza')


  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menubar</title>
        </Helmet>
        <Cover img={Menuimg} title={'our menu'}></Cover>
        <SectionTitle subHeading="Don't Miss" heading="Today's offer"></SectionTitle>
        <MenuCategory items={offered} title='offered'></MenuCategory>
        <MenuCategory items={dessert} title='dessert'img={dessertimg} ></MenuCategory>
        <MenuCategory items={soup} title='soup'img={soupimg} ></MenuCategory>
        <MenuCategory items={pizza} title='pizza'img={pizzaimg} ></MenuCategory>
        <MenuCategory items={salad} title='salad'img={saladimg} ></MenuCategory>
       
        
    </div>
  )
}

export default Menu