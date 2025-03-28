import fs from 'fs';
import path from 'path';
import kebabCase from 'lodash/kebabCase';
import { getHeaders } from '@vandlee/internal-markdown';
import findPagesMarkdown from '@vandlee-internal/api-docs-builder/utils/findPagesMarkdown';
import { writePrettifiedFile } from '@vandlee-internal/api-docs-builder/buildApiUtils';

export async function generateuUIApiPages() {
  await Promise.all(
    findPagesMarkdown().map(async (markdown) => {
      const markdownContent = fs.readFileSync(markdown.filename, 'utf8');
      const markdownHeaders = getHeaders(markdownContent);
      const pathnameTokens = markdown.pathname.split('/');
      const productName = pathnameTokens[1];
      const componentName = pathnameTokens[3];

      // TODO: fix `productName` should be called `productId` and include the full name,
      // for example base-ui below.
      if (
        productName === 'u-ui' &&
        (markdown.filename.includes('\\components\\') || markdown.filename.includes('/components/'))
      ) {
        const { components, hooks } = markdownHeaders;

        const tokens = markdown.pathname.split('/');
        const name = tokens[tokens.length - 1];
        const importStatement = `docs/data${markdown.pathname}/${name}.md`;
        const demosSource = `
import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocsV2';
import AppFrame from 'docs/src/modules/components/AppFrame';
import * as pageProps from '${importStatement}?vandleeMarkdown';

export default function Page(props) {
  const { userLanguage, ...other } = props;
  return <MarkdownDocs {...pageProps} {...other} />;
}

Page.getLayout = (page) => {
  return <AppFrame>{page}</AppFrame>;
};
      `;

        const componentPageDirectory = `docs/pages/u_ui/${productName}/react-${componentName}/`;
        if (!fs.existsSync(componentPageDirectory)) {
          fs.mkdirSync(componentPageDirectory, { recursive: true });
        }
        await writePrettifiedFile(
          path.join(process.cwd(), `${componentPageDirectory}/index.js`),
          demosSource,
        );

        if ((!components || components.length === 0) && (!hooks || hooks.length === 0)) {
          // Early return if it's a markdown file without components/hooks.
          return;
        }

        let apiTabImportStatements = '';
        let staticProps = 'export const getStaticProps = () => {';
        let componentsApiDescriptions = '';
        let componentsPageContents = '';
        let hooksApiDescriptions = '';
        let hooksPageContents = '';

        if (components && components.length > 0) {
          components.forEach((component: string) => {
            const componentNameKebabCase = kebabCase(component);
            apiTabImportStatements += `import ${component}ApiJsonPageContent from '../../api/${componentNameKebabCase}.json';`;
            staticProps += `
          const ${component}ApiReq = require.context(
            'docs/translations/api-u-ui-base/${componentNameKebabCase}',
            false,
            /${componentNameKebabCase}.*.json$/,
          );
          const ${component}ApiDescriptions = mapApiPageTranslations(${component}ApiReq);
          `;
            componentsApiDescriptions += `${component} : ${component}ApiDescriptions ,`;
            componentsPageContents += `${component} : ${component}ApiJsonPageContent ,`;
          });
        }

        if (hooks && hooks.length > 0) {
          hooks.forEach((hook: string) => {
            const hookNameKebabCase = kebabCase(hook);
            apiTabImportStatements += `import ${hook}ApiJsonPageContent from '../../api/${hookNameKebabCase}.json';`;
            staticProps += `
          const ${hook}ApiReq = require.context(
            'docs/translations/api-u-ui-base/${hookNameKebabCase}',
            false,
            /${hookNameKebabCase}.*.json$/,
          );
          const ${hook}ApiDescriptions = mapApiPageTranslations(${hook}ApiReq);
          `;
            hooksApiDescriptions += `${hook} : ${hook}ApiDescriptions ,`;
            hooksPageContents += `${hook} : ${hook}ApiJsonPageContent ,`;
          });
        }

        staticProps += `
      return { props: { componentsApiDescriptions: {`;
        staticProps += componentsApiDescriptions;

        staticProps += '}, componentsApiPageContents: { ';
        staticProps += componentsPageContents;

        staticProps += '}, hooksApiDescriptions: {';
        staticProps += hooksApiDescriptions;

        staticProps += '}, hooksApiPageContents: {';
        staticProps += hooksPageContents;

        staticProps += ` },},};};`;

        const tabsApiSource = `
import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocsV2';
import AppFrame from 'docs/src/modules/components/AppFrame';
import * as pageProps from '${importStatement}?vandleeMarkdown';
import mapApiPageTranslations from 'docs/src/modules/utils/mapApiPageTranslations';
${apiTabImportStatements}

export default function Page(props) {
  const { userLanguage, ...other } = props;
  return <MarkdownDocs {...pageProps} {...other} />;
}

Page.getLayout = (page) => {
  return <AppFrame>{page}</AppFrame>;
};

export const getStaticPaths = () => {
  return {
    paths: [{ params: { docsTab: 'components-api' } } }],
    fallback: false, // can also be true or 'blocking'
  };
};

${staticProps}
      `;

        const docsTabsPagesDirectory = `${componentPageDirectory}/[docsTab]`;
        if (!fs.existsSync(docsTabsPagesDirectory)) {
          fs.mkdirSync(docsTabsPagesDirectory, { recursive: true });
        }
        await writePrettifiedFile(
          path.join(process.cwd(), `${docsTabsPagesDirectory}/index.js`),
          tabsApiSource,
        );
      }
    }),
  );
}
