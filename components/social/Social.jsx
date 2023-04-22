import { FaDev, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';
import { info } from '../../constants';

const Social = () => {
  const socialContent = [
    {
      id: 1,
      link: info.github_url,
      icon: <FaGithub />,
      iconClass: 'text-[#000]',
    },
    {
      id: 2,
      link: info.instagram_url,
      icon: <FaInstagram />,
      iconClass: 'text-[#C13584]',
    },
    {
      id: 3,
      link: info.dev_url,
      icon: <FaDev />,
      iconClass: 'text-[#000]',
    },

    {
      id: 4,
      link: info.linkedIn_url,
      icon: <FaLinkedinIn />,
      iconClass: 'text-[#0072b1]',
    },
    {
      id: 5,
      link: info.colab_url,
      icon: <MdCode />,
      iconClass: 'text-[#7159c1]',
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          target='_blank'
          rel='noopener noreferrer'
          key={item.id}
        >
          <span className={`socialbtn ${item.iconClass}`}>{item.icon}</span>
        </a>
      ))}
    </>
  );
};

export default Social;
