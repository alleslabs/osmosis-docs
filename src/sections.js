import {
  OsmosisCore,
  LocalOsmosis,
  Network,
  Cosmwasm,
  Beaker,
  Osmojs,
  Telescope,
} from './icons';

const SECTIONS = [
  // no sections for default section, i.e; home
  {
    id: 'default',
    section: false,
  },
  {
    id: 'guides',
    section: false,
  },

  // Core Development
  {
    name: 'Osmosis Core',
    id: 'osmosis-core',
    icon: OsmosisCore,
    section: 'core-sdk',
  },
  {
    name: 'Local Osmosis',
    id: 'localosmosis',
    icon: LocalOsmosis,
    section: 'core-sdk',
  },
  {
    name: 'Networks',
    id: 'networks',
    icon: Network,
    section: 'core-sdk',
  },
  //Cosmwasm
  {
    name: 'Cosmwasm',
    id: 'cosmwasm',
    icon: Cosmwasm,
    section: 'cosmwasm',
  },
  {
    name: 'Beaker',
    id: 'beaker',
    icon: Beaker,
    section: 'cosmwasm',
  },

  // UI SDKs
  {
    name: 'OsmoJS',
    id: 'osmojs',
    icon: Osmojs,
    section: 'ui-sdk',
  },
  {
    name: 'Telescope',
    id: 'telescope',
    icon: Telescope,
    section: 'ui-sdk',
  },

];

const MULTI_SECTIONS = [
  [
    {
      name: 'Osmosis Core',
      section: 'core-sdk',
      description: 'Osmosis Chain Development documentation.',
    },
    {
      name: 'CosmWasm',
      section: 'cosmwasm',
      description:
        'Building and interacting with Smart contracts on Osmosis.',
    },
    {
      name: 'Frontend SDKs',
      section: 'ui-sdk',
      description:
        'Libraries & UI components to build on top of Osmosis.',
    }

  ],
  [
    {
      name: 'Osmosis Core',
      section: 'mobile-core',
      isNew: true,
      description: 'Osmosis Chain Development documentation.',
    },
    {
      name: 'Prebuilt SDK',
      section: 'mobile-sdk',
      description: 'Use our pre-built mobile SDK, ready to go',
    }
  ]
];

export { SECTIONS, MULTI_SECTIONS };
