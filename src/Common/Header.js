import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
        <div className='links'>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/registration"}>Registration</NavLink>
          <NavLink to={"/product"}>Product</NavLink>
        </div>
      </header>
  )
}
export default Header;