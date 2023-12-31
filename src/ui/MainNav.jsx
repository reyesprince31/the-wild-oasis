import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";
import styled from "styled-components";

const menuList = [
  {
    svg: <HiOutlineHome />,
    name: "Home",
    link: "/dashboard",
  },
  {
    svg: <HiOutlineCalendarDays />,
    name: "Bookings",
    link: "/bookings",
  },
  {
    svg: <HiOutlineHomeModern />,
    name: "Cabins",
    link: "/cabins",
  },
  {
    svg: <HiOutlineUsers />,
    name: "Users",
    link: "/users",
  },
];

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        {menuList.map((menu, i) => (
          <li key={i}>
            <StyledNavLink to={menu.link}>
              {menu.svg}
              <span>{menu.name}</span>
            </StyledNavLink>
          </li>
        ))}
        <StyledNavLink to="/settings">
          <HiOutlineCog6Tooth />
          <span>Settings</span>
        </StyledNavLink>
      </NavList>
    </nav>
  );
}

export default MainNav;
