
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for changing the theme.
  dest: {
    namespace: '/alems-new'               // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Alems New'                   // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'alemsabic',                  // --> your github username (where your repo is hosted)
      repo: 'alems-new',                  // --> your github repo name
    }
  },
});