import { SiteConfig } from '@/payload-types';

async function createSiteConfig() {
  const siteConfig: Partial<SiteConfig> = {
    whatsapp: '(48) 99611-8451',
    links: [
      {
        type: 'instagram',
        url: 'https://www.instagram.com/gatildosresgatados/',
        id: '67edc8895c948122792758c8'
      },

      {
        type: 'facebook',
        url: 'https://www.facebook.com/profile.php?id=100094782124026',
        id: '67edc88b5c948122792758ca'
      },

      {
        type: 'tiktok',
        url: 'https://www.tiktok.com/@gatildosresgatados',
        id: '67edc898da0c2e592c90f127'
      }
    ]
  };

  return siteConfig;
}

export default await createSiteConfig();
