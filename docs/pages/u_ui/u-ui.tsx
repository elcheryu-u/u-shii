import BrandingCssVarsProvider from 'docs/src/BrandingCssVarsProvider';
import AppHeaderBanner from 'docs/src/components/banner/AppHeaderBanner';
import UIHero from 'docs/src/components/productUI/UIHero';
import AppHeader from 'docs/src/layouts/AppHeader';
import Head from 'docs/src/modules/components/Head';

export default function uUi() {
  return (
    <BrandingCssVarsProvider>
      <Head
        title="ui: React components"
        description="ui is an open-source React component library"
      />
      <AppHeaderBanner />
      <AppHeader gitHubRepository="https://github.com" />
      <main id="main-content">
        <UIHero />
      </main>
    </BrandingCssVarsProvider>
  );
}
