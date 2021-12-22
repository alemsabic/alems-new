import { getRenderer } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/content/theme.ts';installTheme();
import { codeSelection } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { reloadOnChange } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/serve/reload.js';reloadOnChange();
import { ToCPrevNext } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';
import { GithubSearch } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { TabSelector } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/tabs/selector.js';
import { CollapseControl } from '/Users/alemsabic/Desktop/GitHub/alems-new/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';

const components = {
  'q4NO4pV4FH4YEuvhZjuyHQ==': ToCPrevNext,
  'QVYrw0TUxKL7INpg7NTvXQ==': GithubSearch,
  'sEl5hQaHR50+E0MGwrWXpA==': ToCToggle,
  'Pyf25Qaz08nRs88UbK1LAQ==': DarkModeSwitch,
  'vimArz9GyCrk4IGnjVBBew==': ConfigTransport,
  '0C4oJELZF0/+Uvo3v0zuxw==': TabSelector,
  'lgvcntBLRvN1aSLv7CyVXg==': CollapseControl
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
