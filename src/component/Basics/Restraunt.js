
// ---------------------------Without Hook-----------------------------------------

// import React, { useState } from 'react';
// import './style.css';
// import Menu from './MenueAPI';
// import MenuCard from './MenuCard';

// const Restaurant = () => {
//   const [menuData, setMenuData] = useState(Menu);

//   const filterItem = (category) => {
//     if (category === 'all') {
//       setMenuData(Menu);
//       return;
//     }
    
//     const updatedList = Menu.filter((curElement) => {
//       return curElement.category === category;
//     });

//     setMenuData(updatedList);
//   };

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='btn-group'>
//           <button className='btn-group__item' onClick={() => filterItem('breakfast')}>breakfast</button>
//           <button className='btn-group__item' onClick={() => filterItem('lunch')}>lunch</button>
//           <button className='btn-group__item' onClick={() => filterItem('evening')}>evening</button>
//           <button className='btn-group__item' onClick={() => filterItem('dinner')}>dinner</button>
//           <button className='btn-group__item' onClick={() => filterItem('sweets')}>sweets</button>
//           <button className='btn-group__item' onClick={() => filterItem('all')}>all</button>
//         </div>
//       </nav>
//       <MenuCard menuData={menuData} />
//     </>
//   );
// };

// export default Restaurant;


// ---------------------------------Use this code more efficient-------------------------

import React, { useState } from 'react';
import './style.css';
import Menu from './MenueAPI';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniquelist= [
  ...new Set(Menu.map((curElement)=>{

  return curElement.category;
})
),"all"
]
console.log(uniquelist);


const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList]=useState(uniquelist);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuData(Menu);
      return;
    }
    
    const updatedList = Menu.filter((curElement) => {
      return curElement.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
