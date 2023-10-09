import styled from 'styled-components'

export const Container = styled.section`
  .text-pretitle {
    font-family: var(--font-1);
    font-size: var(--text-sm);
    font-weight: 400;
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin-top: 0;
    margin-left: 0.2rem;
    margin-bottom: var(--vspace-0_5);
    position: relative;
  }

  .contact-top {
    padding-top: var(--vspace-5);
    border-top: 1px solid var(--color-border);
  }

  .contact-top .h1 {
    margin-top: 0;
  }

  .contact-bottom {
    padding-bottom: var(--vspace-3);
    margin-top: var(--vspace-3);
    border-bottom: 1px solid var(--color-border);
  }

  .contact-bottom .text-pretitle {
    margin-bottom: var(--vspace-0_125);
  }

  .contact-links,
  .contact-social {
    font-size: var(--text-md);
    font-weight: 300;
    line-height: var(--vspace-1_25);
    color: var(--color-text-light);
  }

  .contact-links a,
  .contact-social a {
    color: var(--color-text-light);
  }

  .contact-links a:focus,
  .contact-links a:hover,
  .contact-social a:focus,
  .contact-social a:hover {
    color: var(--color-1);
  }

  .contact-social {
    list-style: none;
    margin-left: 0;
  }

  .contact-social li {
    display: inline-block;
    padding-left: 0;
  }

  .contact-social li::after {
    content: ',';
    padding-right: 10px;
  }

  .contact-social li:last-child::after {
    display: none;
  }

  .btn {
    margin-bottom: var(--vspace-0_5);

    --btn-height: var(--vspace-btn);
    display: inline-block;
    font-family: var(--font-1);
    font-weight: 600;
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.35em;
    height: var(--btn-height);
    line-height: calc(var(--btn-height) - 2px);
    padding: 0 3.6rem;
    margin: 0 0.4rem var(--vspace-0_5) 0;
    color: var(--color-btn-text);
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    background-color: var(--color-btn);
    border: 1px solid var(--color-btn);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .btn:focus,
  .btn:hover {
    background-color: var(--color-btn-hover);
    border-color: var(--color-btn-hover);
    color: var(--color-btn-hover-text);
    outline: 0;
  }

  .btn.u-fullwidth {
    width: 100%;
    margin-right: 0;
  }

  .btn--medium {
    --btn-height: calc(var(--vspace-btn) + 0.8rem);
  }

  .contact-btn {
    margin-left: auto;
    margin-right: 5vw;
  }

  @media screen and (max-width: 1200px) {
    .contact-btn {
        margin-top: var(--vspace-0_5);
        margin-left: 0;
        margin-right: 0;
    }
  }

  @media screen and (min-width: 1201px) {
    .mid-lg {
      padding-left: 40px;
      padding-right: 0;
    }
  }

  @media screen and (max-width: 800px) {
    .contact-top {
        padding-top: var(--vspace-4);
    }
  } 
`