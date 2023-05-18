import styled from 'styled-components';

export const Container = styled.header`
  --box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06), 0 2px 2px rgba(0, 0, 0, 0.06),
    0 4px 4px rgba(0, 0, 0, 0.06), 0 8px 8px rgba(0, 0, 0, 0.06);
  z-index: 100;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  /* --------------------------
  ** ## Desktop main navigation
  *  --------------------------
  */

  .row {
    width: 92%;
    max-width: var(--width-grid-max);
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
  }

  .wide {
    max-width: var(--width-wide);
  }

  .column {
    display: block;
    flex: 1 1 0%;
    padding: 0 var(--gutter);
  }

  /*
  -----------------
  ## Mobile
  -----------------
  */

  .header-mobile {
    z-index: 101;
    display: none;
    height: var(--header-height);
    background-color: var(--color-body);
    box-shadow: var(--box-shadow);
    border-bottom: 1px solid var(--color-border);
  }

  /* --------------------------
  ** ## Main navigation
  *  --------------------------
  */

  .mobile-home-link a,
  .main-nav a {
    display: block;
    font-size: 10px;
    font-weight: 400;
    line-height: var(--header-height);
    text-transform: uppercase;
    letter-spacing: 0.35em;
    color: var(--color-white);
    transition-property: color, background-color;
  }

  .mobile-home-link a:focus,
  .mobile-home-link a:hover,
  .main-nav a:focus,
  .main-nav a:hover {
    color: var(--color-1);
  }

  .mobile-home-link {
    display: inline-block;
    position: relative;
  }

  .mobile-home-link a {
    padding: 0 0.4rem;
    margin-left: 2.4rem;
  }

  .main-nav {
    padding: 0;
  }

  .main-nav a {
    padding: 0 2rem 0 2.4rem;
  }

  .main-nav .current a {
    background-color: var(--color-gray-9);
  }

  .main-nav ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    margin: 0;
    padding: 0;
    background-color: var(--color-body);
    border-width: 1px;
    border-color: var(--color-border);
    border-style: none solid solid solid;
  }

  .main-nav li {
    flex: 1 1 0%;
    padding-left: 0;
    border-right: 1px solid var(--color-border);
  }

  .main-nav li:last-child {
    border-right: none;
  }

  /* --------------------------
  ** ## Mobile menu toogle
  *  --------------------------
  */

  .mobile-menu-toggle {
    display: block;
    width: var(--header-height);
    height: var(--header-height);
    position: absolute;
    top: 0;
    right: 0.8rem;
  }

  .mobile-menu-toggle span {
    display: block;
    width: 24px;
    height: 1px;
    background-color: var(--color-white);
    transition: background-color 1.1s ease-in-out;
    margin-top: -1px;
    text-shadow: none;
    color: transparent;
    position: absolute;
    right: 20px;
    top: 50%;
    bottom: auto;
    left: auto;
  }

  .mobile-menu-toggle span::before,
  .mobile-menu-toggle span::after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    position: absolute;
    left: 0;
  }

  // ## When some menu item is clicked

  .mobile-menu-toggle.is-clicked span {
    background-color: rgba(255, 255, 255, 0);
    transition: background-color 0.4s ease-in-out;
  }

  .mobile-menu-toggle.is-clicked span::before,
  .mobile-menu-toggle.is-clicked span::after {
    background-color: white;
    transition-delay: 0.2s, 0.2s;
  }

  .mobile-menu-toggle.is-clicked span::before {
    top: 0;
    transform: rotate(45deg);
    transition: top 0.4s ease-in-out 0s, transform 0.4s ease-in-out 0.6s;
  }

  .mobile-menu-toggle.is-clicked span::after {
    bottom: 0;
    transform: rotate(-45deg);
    transition: bottom 0.4s ease-in-out 0s, transform 0.4s ease-in-out 0.6s;
  }

  /* -------------------------------------------------------------------
 * responsive: site-header
 * -------------------------------------------------------------------
*/

  @media screen and (max-width: 1000px) {
    .main-nav-wrap {
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    .s-header {
      height: var(--header-height);
    }

    .header-mobile {
      display: block;
    }

    .main-nav-wrap {
      transform: scaleY(0);
      transform-origin: center top;
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
      background-color: var(--color-body);
      border-bottom: 1px solid var(--color-border);
      box-shadow: var(--box-shadow);
    }

    .main-nav {
      padding: var(--vspace-1) 0 var(--vspace-1_5);
      transform: translateY(0);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s,
        visibility 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0s,
        transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
    }

    .main-nav a {
      font-family: var(--font-2);
      font-size: var(--text-md);
      font-weight: 400;
      line-height: var(--vspace-0_875);
      text-transform: none;
      letter-spacing: 0;
      padding: var(--vspace-0_5) 2.8rem;
      color: var(--color-text);
    }

    .main-nav a:focus,
    .main-nav a:hover {
      color: var(--color-white);
    }

    .main-nav .current a {
      background-color: transparent;
      color: var(--color-1);
    }

    .main-nav ul {
      display: block;
      background-color: transparent;
      text-align: left;
      margin: 0;
      border: none;
    }

    .main-nav ul li {
      display: block;
      border: none;
    }

    .main-nav ul li:first-child {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .main-nav-wrap {
      padding: 0;
    }
  }
`;
