module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '6911f3301a2e47268b09d95f3cd4f8ac',

  // if you want to restrict pages to a single notion workspace (optional)
  rootNotionSpaceId: 'alejandroakbal',

  // basic site info (required)
  name: 'Documentation - Rule 34 App',
  domain: 'docs.r34.app',
  author: 'Alejandro Akbal',

  // open graph metadata (optional)
  description: 'Documentation for the Rule 34 App',
  socialImageTitle: 'Rule 34 App',
  socialImageSubtitle: 'Browse the most popular Rule 34 Hentai Porn',

  // social usernames (optional)
  twitter: 'Rule34App',
  github: 'Rule-34',
  linkedin: null,

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://cdn.statically.io/img/raw.githubusercontent.com/h=512,w=512,q=90/Rule-34/Brand/main/src/assets/Rule_34_Logo_Fixed_Transparency.png',
  defaultPageCover:
    'https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fgradients_8.png?table=block&id=6911f330-1a2e-4726-8b09-d95f3cd4f8ac&cache=v2',
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
