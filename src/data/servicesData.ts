import destination from '../../public/services/destination.jpg';
import advice from '../../public/services/advice.jpg';
import support from '../../public/services/support.jpg';

export const servicesData = [
  {
    src: destination,
    alt: 'Image of a beautiful destination',
    title: 'Diverse Destinations',
    description: 'Access to a wide range of domestic and international locations.',
    rowSpan: 'md:row-span-2', // Classe opzionale per il layout
  },
  {
    src: advice,
    alt: 'Image of travel advice',
    title: 'Expert Travel Advice',
    description: 'Tips and guides to enhance your travel experience.',
    rowSpan: '', // Nessuna classe aggiuntiva
  },
  {
    src: support,
    alt: 'Image of travel support',
    title: 'Comprehensive Travel Support',
    description: '24/7 customer service to assist you before, during, and after your trip.',
    rowSpan: '', // Nessuna classe aggiuntiva
  },
];