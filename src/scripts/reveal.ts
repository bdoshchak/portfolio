import { animate, inView, stagger } from 'motion';

const DUR  = 0.55;
const EASE = [0.25, 0.1, 0.25, 1] as [number,number,number,number];
const Y    = 22;

function prep(els: Element[]) {
  els.forEach(el => {
    (el as HTMLElement).style.opacity = '0';
    (el as HTMLElement).style.transform = `translateY(${Y}px)`;
  });
}

/** Reveal each matched element individually when it scrolls into view. */
export function revealEach(selector: string, delay = 0) {
  const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (!els.length) return;
  prep(els);
  els.forEach(el => {
    inView(el, () => {
      animate(el, { opacity: 1, transform: 'translateY(0px)' },
        { duration: DUR, delay, easing: EASE });
    }, { amount: 0.2 });
  });
}

/** Reveal children with stagger when the parent group scrolls into view. */
export function revealGroup(
  groupSelector: string,
  childSelector: string,
  stepDelay = 0.1,
) {
  document.querySelectorAll(groupSelector).forEach(group => {
    const children = Array.from(group.querySelectorAll<HTMLElement>(childSelector));
    if (!children.length) return;
    prep(children);
    inView(group, () => {
      animate(children,
        { opacity: 1, transform: 'translateY(0px)' },
        { duration: DUR, delay: stagger(stepDelay), easing: EASE });
    }, { amount: 0.1 });
  });
}
