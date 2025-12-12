import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className='header'>
        <div className='links'>
          <NavLink to={"/"}><p className='para'>Home</p></NavLink>
          <NavLink to={"/registration"}>Registration</NavLink>
          <NavLink to ={"/product"}>Product</NavLink>
        </div>
      </header>
  )
}
export default Header;
