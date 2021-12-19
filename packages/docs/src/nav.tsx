import React from 'react'
import CIcon from '@coreui/icons-react'

const nav = [
  {
    name: 'Getting Started',
    to: '/getting-started/',
    items: [
      {
        name: 'Introduction',
        to: '/getting-started/introduction/',
      },
    ],
  },
  {
    name: 'Layout',
    to: '/layout/',
    icon: (
      <CIcon
        customClassName="nav-icon text-primary"
        icon={[
          '512 512',
          '<path fill="var(--ci-primary-color, currentColor)" d="M16,64V448H496V64ZM464,240H192V96H464ZM192,272H312V416H192ZM48,96H160V416H48ZM344,416V272H464V416Z" class="ci-primary"></path>',
        ]}
        width={64}
        height={64}
      />
    ),
    items: [
      {
        name: 'Breakpoints',
        to: '/layout/breakpoints/',
      },
      {
        name: 'Containers',
        to: '/layout/containers/',
      },
      {
        name: 'Grid',
        to: '/layout/grid/',
      },
      {
        name: 'Columns',
        to: '/layout/columns/',
      },
      {
        name: 'Gutter',
        to: '/layout/gutters/',
      },
    ],
  },
  {
    name: 'Forms',
    to: '/forms/',
    items: [
      {
        name: 'Overview',
        to: '/forms/overview/',
      },
      {
        name: 'Form Control',
        to: '/forms/form-control/',
      },
      {
        name: 'Select',
        to: '/forms/select/',
      },
      {
        name: 'Checks & Radios',
        to: '/forms/checks-radios/',
      },
      {
        name: 'Range',
        to: '/forms/range/',
      },
      {
        name: 'Input Group',
        to: '/forms/input-group/',
      },
      {
        name: 'Floating Labels',
        to: '/forms/floating-labels/',
      },
      {
        name: 'Layout',
        to: '/forms/layout/',
      },
      {
        name: 'Validation',
        to: '/forms/validation/',
      },
    ],
  },
  {
    name: 'Components',
    to: '/components/',
    items: [
      {
        name: 'Accordion',
        to: '/components/accordion/',
      },
      {
        name: 'Alert',
        to: '/components/alert/',
      },
      {
        name: 'Badge',
        to: '/components/badge/',
      },
      {
        name: 'Breadcrumb',
        to: '/components/breadcrumb/',
      },
      {
        name: 'Button',
        to: '/components/button/',
      },
      {
        name: 'Button Group',
        to: '/components/button-group/',
      },
      {
        name: 'Card',
        to: '/components/card/',
      },
      {
        name: 'Carousel',
        to: '/components/carousel/',
      },
      {
        name: 'Close Button',
        to: '/components/close-button/',
      },
      {
        name: 'Collapse',
        to: '/components/collapse/',
      },
      {
        name: 'Dropdown',
        to: '/components/dropdown/',
      },
      {
        name: 'Image',
        to: '/components/image/',
      },
      {
        name: 'List Group',
        to: '/components/list-group/',
      },
      {
        name: 'Modal',
        to: '/components/modal/',
      },
      {
        name: 'Navs & Tabs',
        to: '/components/navs-tabs/',
      },
      {
        name: 'Navbar',
        to: '/components/navbar/',
      },
      {
        name: 'Offcanvas',
        to: '/components/offcanvas/',
      },
      {
        name: 'Pagination',
        to: '/components/pagination/',
      },
      {
        name: 'Placeholder',
        to: '/components/placeholder/',
      },
      {
        name: 'Popover',
        to: '/components/popover/',
      },
      {
        name: 'Progress',
        to: '/components/progress/',
      },
      {
        name: 'Spinner',
        to: '/components/spinner/',
      },
      {
        name: 'Table',
        to: '/components/table/',
      },
      {
        name: 'Toast',
        to: '/components/toast/',
      },
      {
        name: 'Tooltip',
        to: '/components/tooltip/',
      },
    ],
  },
]

export default nav
