import React from 'react';
// -------------------------------------Use this-------------------------------------
const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          {menuList.map((curElement) => (
            <button className='btn-group__item' onClick={() => filterItem(curElement)}>{curElement}</button>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

//------------------------------------------ Without Hook Scenerio-------------------------------------

  // {/* <button className='btn-group__item' onClick={() => filterItem('breakfast')}>breakfast</button> */}
        // {/* <button className='btn-group__item' onClick={() => filterItem('lunch')}>lunch</button>
        //   <button className='btn-group__item' onClick={() => filterItem('evening')}>evening</button>
        //   <button className='btn-group__item' onClick={() => filterItem('dinner')}>dinner</button>
        //   <button className='btn-group__item' onClick={() => filterItem('sweets')}>sweets</button>
        //   <button className='btn-group__item' onClick={() => filterItem('all')}>all</button> */}