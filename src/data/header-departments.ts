import { NavigationLink } from '../app/shared/interfaces/navigation-link';

export const departments: NavigationLink[] = [
    {label: 'Electrical', url: '/shop/catalog', menu: {
        type: 'menu',
        items: [
            {label: 'Soldering Equipment', url: '/shop/catalog'},
            {label: 'Light Bulbs', url: '/shop/catalog'},
            {label: 'Batteries', url: '/shop/catalog'},
            {label: 'Light Fixtures', url: '/shop/catalog'},
            {label: 'Warm Floor', url: '/shop/catalog'},
            {label: 'Generators', url: '/shop/catalog'},
            {label: 'UPS', url: '/shop/catalog'}
        ]
    }},
    {label: 'Power Machinery',        url: '/shop/catalog'},
    {label: 'Measurement',            url: '/shop/catalog'},
    {label: 'Clothes & PPE',          url: '/shop/catalog'},
    {label: 'Plumbing',               url: '/shop/catalog'},
    {label: 'Storage & Organization', url: '/shop/catalog'},
    {label: 'Welding & Soldering',    url: '/shop/catalog'}
];
