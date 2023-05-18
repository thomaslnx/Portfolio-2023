import styled from 'styled-components';

export const Container = styled.section`
  padding-top: var(--vspace-4);
  padding-bottom: var(--vspace-3);

  .row {
    width: 92%;
    max-width: var(--width-grid-max);
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    display: block;
    flex: 1 1 0%;
    padding: 0 var(--gutter);
  }

  .wide {
    max-width: var(--width-wide);
  }

  .about-info {
    --gutter: 0;
    width: 100%;
    align-items: center;
  }

  .about-info__pic {
    object-fit: cover;
    margin: 0;
    vertical-align: bottom;
  }

  .about-info__text {
    margin-left: -4rem;
    padding: var(--vspace-2) 10vw var(--vspace-2) 0;

    p {
      line-height: 1.4;
    }
  }

  .about-info__text .text-pretitle {
    margin-bottom: var(--vspace-1);
  }

  .about-info__text .btn {
    margin-top: var(--vspace-2);
    margin-bottom: 0;
  }

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

  .text-pretitle.with-line {
    color: var(--color-1);
    padding-left: 6rem;
    transform: translateX(-6rem);
  }

  .text-pretitle.with-line::before {
    content: '';
    display: block;
    height: 1px;
    width: 4rem;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    left: 0;
  }

  .text-huge-title {
    --text-huge: 10.8rem;
    font-size: var(--text-huge);
    line-height: 1.074;
    margin-top: 0;
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

  .attention-getter {
    font-family: var(--font-1);
    font-weight: 300;
    font-size: var(--text-md);
    line-height: var(--vspace-1_25);
    color: var(--color-text-dark);
  }

  .about-expertise {
    padding-top: calc(6 * var(--space));
  }

  .about-expertise .skills-list {
    list-style: none;
    margin-top: var(--vspace-1);
    margin-left: 0;
  }

  .about-expertise .skills-list li {
    display: inline-block;
    padding: 0;
  }

  .about-expertise .skills-list li:not(:last-child)::after {
    content: ', ';
    padding-right: 10px;
  }

  .about-timelines {
    --timeline-left-padding: var(--vspace-1_75);
    --timeline-top-adjust: var(--vspace-0_5);
    padding-top: var(--vspace-3);
  }

  .about-timelines .text-pretitle {
    margin-left: var(--timeline-left-padding);
  }

  .timeline {
    margin-top: var(--vspace-1_25);
    padding-top: 1vw;
    position: relative;
  }

  .timeline::before {
    content: '';
    display: block;
    width: 1px;
    height: calc(100% - var(--timeline-top-adjust));
    background-color: var(--color-border);
    position: absolute;
    top: var(--timeline-top-adjust);
    left: 3px;
  }

  .timeline__block {
    padding-left: var(--timeline-left-padding);
    padding-bottom: var(--vspace-0_5);
    position: relative;
  }

  .timeline__block:last-child {
    padding-bottom: 0;
  }

  .timeline__bullet {
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: var(--color-1);
    position: absolute;
    top: var(--timeline-top-adjust);
    left: 0;
  }

  .timeline__title {
    font-family: var(--font-1);
    font-weight: 500;
    font-size: var(--text-lg);
    margin-top: 0;
    margin-bottom: var(--vspace-0_125);
  }

  .timeline__meta {
    font-family: var(--font-1);
    font-weight: 300;
    font-size: calc(var(--text-size) * 1.1053);
    margin-top: 0;
    margin-bottom: var(--vspace-0_125);
  }

  .timeline__timeframe {
    font-size: var(--text-xs);
    line-height: var(--vspace-0_75);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--color-text-light);
    margin-top: -0.2rem;
  }

  @media screen and (max-width: 400px) {
    .about-timelines {
      --timeline-left-padding: var(--vspace-1);
    }

    .about-timelines .column + .column {
      margin-top: var(--vspace-1_5);
    }

    .column {
      flex: none;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 600px) {
    .about-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 3rem;
      width: 100%;
    }

    .about-timelines .column + .column {
      margin-top: var(--vspace-1_5);
    }

    .about-info .about-info__text {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 3rem 0 0 0;
      width: 100%;
    }

    .column {
      flex: none;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding: 0;
    }
  }

  @media (min-width: 601px) and (max-width: 800px) {
    .about-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 5rem;
      width: 100%;
    }

    .about-info .about-info__text {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 3rem 0 0 0;
      width: 100%;
    }

    .about-timelines {
      --timeline-left-padding: var(--vspace-1_5);
    }

    .about-timelines .column + .column {
      margin-top: var(--vspace-1_5);
    }

    .column {
      flex: none;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    .about-timelines {
      --timeline-left-padding: var(--vspace-1_25);
    }

    .column {
      flex: none;
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      padding: 0;
    }
  }

  @media (min-width: 1001px) and (max-width: 1200px) {
    .about-info {
      --gutter: 1.6rem;
      width: 100%;
      max-width: 800px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .about-info .about-info__text {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 3rem 0 0 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 1300px) {
    .about-info__text {
      padding: var(--vspace-2) 8rem var(--vspace-1_5) 0;
    }
  }
`;
