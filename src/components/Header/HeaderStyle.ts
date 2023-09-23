import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0px 10px 80px;

  @media only screen and (max-width: 768px) {
    justify-content: space-between;
    margin: 5px 15px 0px 15px;

    p.title {
      display: none;
    }
  }
`;

export const Title = styled.p`
  margin-right: 10px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  text-align: center;

  &.responsive_nav {
    transform: translateY(0);
  }

  @media only screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    background-color: #cc8bf2;
    color: #000;
    transition: transform 0.3s ease-in-out;
    z-index: 2;
    transform: translateY(-100%);

    &.responsive_nav {
      transform: translateY(0);
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    font-size: 1.25rem;

    li:hover {
      border-bottom: #000;
    }
  }
`;

export const NavItem = styled.li`
  a::after {
    content: "";
    display: flex;
    position: relative;
    width: 0%;
    height: 2px;
    background-color: white;
    transition: 0.4s ease-in-out;
  }

  a:hover::after {
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  visibility: hidden;
  opacity: 0;

  &.nav-close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  @media only screen and (max-width: 768px) {
    visibility: visible;
    opacity: 1;
  }
`;
