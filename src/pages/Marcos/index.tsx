'use client'

import anime from 'animejs'

import { MutableRefObject, useRef, useState, useEffect } from 'react'

import Loader from '@components/Loader'
import Circles from '@components/Circles'
import Header from '@components/Header'
import Intro from '@components/Intro'
import About from '@components/About'
import Works from '@components/Works'
import SayHello from '@components/SayHello'
import Footer from '@components/Footer'

import pageScroll from '@src/utils/pageScroll'
import scrollSpy from '@src/utils/scrollSpy'
import viewAnimate from '@src/utils/viewAnimate'
import worksLightbox from '@src/utils/worksModals'


import { MainContent, PageContent } from '../../marcosStyles'

const Marcos: React.FC = (): JSX.Element => {
  const preloadRef = useRef<MutableRefObject<null>>(null)

  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('visible')
  const [display, setDisplay] = useState<'none' | 'flex'>('flex')
  const [menuIsClicked, setMenuIsClicked] = useState<boolean>(false)
  const [menuIsOpen, setMenuIsOpen] = useState<boolean | undefined>(false)
  const [htmlTargets, setHtmlTargets] = useState<NodeListOf<HTMLElement>>()
  const [trigger, setTrigger] = useState<NodeListOf<HTMLElement>>()
  const [toggleButton, setToggleButton] = useState<Element | null>()
  const [mainNavWrap, setMainNavWrap] = useState<Element | null>()
  const [siteBody, setSiteBody] = useState<HTMLBodyElement | null>()
  const [worksModals, setWorksModals] = useState<NodeListOf<HTMLElement>>()

  useEffect(() => {
    setHtmlTargets(window.document.querySelectorAll('.target-section'));
    setTrigger(window.document.querySelectorAll('.smoothscroll'))
    setToggleButton(window.document.querySelector('.mobile-menu-toggle'))
    setMainNavWrap(window.document.querySelector('.main-nav-wrap'))
    setSiteBody(window.document.querySelector('body'))
    setWorksModals(window.document.querySelectorAll('.folio-list__item-link'))

    const sectionBlocks: NodeListOf<HTMLElement> = window.document.querySelectorAll('[data-animate-block]')

    const timeLine = anime
      .timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false
      })
      .add({
        target: '#loader',
        opacity: 0,
        duration: 1000,
        begin: () => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
          })
        }
      })
      .add({
        targets: '#preloader',
        opacity: 0,
        complete: () => {
          if (preloadRef.current) {
            setVisibility('hidden')
            setDisplay('none')
          }
        }
      })
      .add(
        {
          targets: '.s-header',
          translateY: [-100, 0],
          opacity: [0, 1],
        },
        '-=200'
      )
      .add({
        targets: ['.s-intro .text-pretitle', '.s-intro .text-huge-title'],
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(400),
      })
      .add({
        targets: '.circles span',
        keyframes: [
          {
            opacity: [0, 0.3],
          },
          {
            opacity: [0.3, 0.1],
            delay: anime.stagger(100, { direction: 'reverse' }),
          },
        ],
        delay: anime.stagger(100, { direction: 'reverse' }),
      })
      .add({
        targets: '.intro-social li',
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { direction: 'reverse' }),
      })
      .add(
        {
          targets: '.intro-scrolldown',
          translateY: [100, 0],
          opacity: [0, 1],
        },
        '-=800'
      );

      (function ssPreloader() {
        window.addEventListener('load', () => {
          window.document.querySelector('html')?.classList.remove('no-js')
          window.document.querySelector('html')?.classList.add('js')
          window.document.querySelector('html')?.classList.remove('ss-preload')
          window.document.querySelector('html')?.classList.add('ss-loaded')

          window.document.querySelectorAll('.ss-animated').forEach((item) => {
            item.classList.remove('ss-animated')
          })

          window.removeEventListener('load', ssPreloader)
        })

        timeLine.play()
      })()

      viewAnimate(sectionBlocks)
  }, [])

  useEffect(() => {
    htmlTargets !== undefined && scrollSpy(htmlTargets);
    if (trigger !== undefined && typeof window !== 'undefined') pageScroll(trigger);
    worksModals !== undefined && worksLightbox(worksModals);

    const menuClickedEventListener = (event: Event) => {
      event.preventDefault();

      toggleButton?.classList.toggle('is-clicked');
      siteBody?.classList.toggle('menu-is-open');
    };
    
    const menuLinkEventListener = () => {
      if (window.matchMedia('(max-width: 800px)').matches) {
        toggleButton?.classList.toggle('is-clicked');
        siteBody?.classList.toggle('menu-is-open');
      }
    };

    mainNavWrap?.querySelectorAll('.main-nav a').forEach((link) => {
      link.addEventListener('click', menuLinkEventListener);
    });

    const menuResizeContainer = () => {
      if (window.matchMedia('(min-width: 801px)').matches) {
        if (window.document.body.classList.contains('menu-is-open')) {
          siteBody?.classList.remove('menu-is-open');
        }

        if (toggleButton?.classList.contains('is-clicked')) {
          toggleButton?.classList.remove('is-clicked');
        }
      }
    };

    toggleButton?.addEventListener('click', menuClickedEventListener);
    window.addEventListener('resize', menuResizeContainer);

    if (trigger !== undefined && typeof window !== 'undefined') pageScroll(trigger);

    return () => {
      toggleButton?.removeEventListener('click', menuClickedEventListener);

      mainNavWrap?.querySelectorAll('.main-nav a').forEach((link) => {
        link.removeEventListener('click', menuLinkEventListener);
      });
    };
  }, [
    trigger,
    htmlTargets,
    menuIsClicked,
    menuIsOpen,
    toggleButton,
    mainNavWrap,
    siteBody,
    worksModals,
  ]);

  return (
    <main>
      <Loader display={display} visibility={visibility} />
      <PageContent className="s-pagewrap">
        <Circles />
        <Header menuIsClicked={menuIsClicked} />
        <MainContent className="s-content">
          <Intro />
          <About />
          <Works />
          <SayHello />
        </MainContent>
        <Footer />
      </PageContent>
    </main>
  )
}

export default Marcos