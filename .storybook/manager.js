import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

addons.setConfig({
  panelPosition: 'right',
  theme: create({
    base: 'light',
    brandTitle: 'Papillon Arts Components',
    brandUrl: 'https://github.com/papillonarts/papillonarts',
    brandImage: 'https://avatars.githubusercontent.com/u/81188645',
  }),
})
