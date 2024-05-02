import type { GridContentItem } from '../../sections/grid-content.astro';

export const openSourceProjects: GridContentItem[] = [
  {
    title: 'Player',
    stage: 1,
    href: '/player',
    stars: { owner: 'vidstack', repo: 'vidstack' },
    description: 'UI component library for building video and audio players for the web.',
  },
  {
    title: 'Captions',
    stage: 1,
    href: 'https://github.com/vidstack/media-captions',
    description: 'Modern media captions parser and renderer. Supports VTT, SRT, and SSA.',
  },
  {
    title: 'Icons',
    stage: 1,
    href: '/icons',
    description: 'Beautifully hand-crafted collection of media icons designed for players.',
  },
  {
    title: 'Plyr',
    stage: 'Archived',
    stars: { owner: 'sampotts', repo: 'plyr' },
    href: 'https://github.com/sampotts/plyr',
    description: 'Simple, lightweight, accessible and customizable media player.',
  },
  {
    title: 'Vime',
    stage: 'Archived',
    stars: { owner: 'vime-js', repo: 'vime' },
    href: 'https://github.com/vime-js/vime',
    description: 'Customizable, extensible, accessible and framework-agnostic media player.',
  },
];
