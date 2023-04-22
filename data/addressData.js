const { info } = require('../constants');

module.exports = [
  {
    id: '01',
    icon: '/images/contact/phone-call 1.png',
    title: 'Phone',
    info: (
      <>
        <p>
          <a
            href={`tel:${info.phone}`}
            className='text-gray-lite text-lg dark:text-[#A6A6A6] '
          >
            {info.phone}
          </a>
        </p>
      </>
    ),
    bg: '#FCF4FF',
  },
  {
    id: '02',
    icon: '/images/contact/email 1.png',
    title: 'Email',
    info: (
      <>
        <p>
          <a
            href={`mailto:${info.email}`}
            className='text-gray-lite text-lg dark:text-[#A6A6A6] '
          >
            {info.email}
          </a>
        </p>
      </>
    ),
    bg: '#EEFBFF',
  },
  {
    id: '03',
    icon: '/images/contact/map 1.png',
    title: 'Address ',
    info: (
      <>
        <p className='text-gray-lite text-lg dark:text-[#A6A6A6] '>
          Maount View, Oval
        </p>
        <p className='text-gray-lite text-lg dark:text-[#A6A6A6] '>
          Road, New York, USA
        </p>
      </>
    ),
    bg: '#F2F4FF',
  },
];
