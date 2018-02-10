import serialize from 'serialize-javascript';
import { isProd } from '../';
import { preloadedStateWindowKey } from '../../common/constants';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const commonScripts = [assets.manifest.js, assets.vendor.js, assets.client.js]
  .map(js => `<script src="${js}"${isProd ? '' : ' crossorigin'}></script>`)
  .join('');

export const sendHtmlResponse = (req, res) => {
  const { appMarkup, appState, helmet } = res.locals;

  // const bundles = getBundles(stats, modules);
  // const jsChunks = bundles.filter(bundle => bundle.file.endsWith('.js'));
  // const cssChunks = bundles.filter(bundle => bundle.file.endsWith('.css'));

  res.status(200).send(
    html`
<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charSet='utf-8' />
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${
      assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
    }
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">${appMarkup}</div>
    <script>
      window.${preloadedStateWindowKey} = ${serialize(appState, {
      isJSON: true
    })};
    </script>
    ${commonScripts}
  </body>
</html>
  `
  );
};
