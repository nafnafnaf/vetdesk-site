// Central site configuration. Replace every placeholder before going live.
export const site = {
  name: 'VetDesk',
  url: 'https://vetdesk.gr',
  email: 'info@vetdesk.gr', // TODO: real address
  phoneDisplay: '+30 690 000 0000', // TODO
  viber: 'viber://chat?number=%2B306938025100',
  whatsapp: 'https://wa.me/306900000000', // TODO
  // Leave empty to fall back to a mailto: link. Otherwise POST target (Formspree, own endpoint, etc.)
  formEndpoint: 'https://formspree.io/f/xaeeygyg',
  socials: [
    { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/vetdesk' }, // TODO
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/vet_desk' },
    { id: 'viber', label: 'Viber', href: 'viber://chat?number=%2B306938025100' },
    { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@vetdesk' }, // TODO
  ],
} as const;
