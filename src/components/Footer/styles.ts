import styled from 'styled-components'

export const Container = styled.section`
  margin-top: auto;
  padding-top: var(--vspace-1);
  padding-bottom: var(--vspace-3);
  color: var(--color-text-light);

  .row {
    position: relative;
  }

  .ss-copyright {
    margin-top: calc(var(--vspace-0_25) * -1);
    margin-right: 5.2rem;
    line-height: var(--vspace-0_875);
  }

  .ss-copyright span {
    font-size: var(--text-sm);
    display: inline-block;
  }

  .ss-go-top {
    z-index: 40;
    position: absolute;
    top: calc(var(--vspace-1) * -1);
    right: var(--gutter);
  }

  .ss-go-top a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: 0 none;
    height: calc(1.625 * var(--space));
    width: var(--vspace-1_5);
    background-color: var(--color-body);
    position: relative;
    border: 1px solid var(--color-text);
  }

  .ss-go-top a:focus,
  .ss-go-top a:hover {
    background-color: white;
    border-color: white;
  }

  .ss-go-top a:focus svg path,
  .ss-go-top a:hover svg path {
    fill: black;
  }

  .ss-go-top svg {
    height: var(--vspace-0_5);
    width: var(--vspace-0_5);
    transition: all 0.3s ease-in-out;
  }

  .ss-go-top svg path {
    fill: white;
  }
`