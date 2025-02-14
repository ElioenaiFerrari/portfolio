import { MdOutlineBusinessCenter, MdOutlineSchool } from 'react-icons/md';

export const info = {
  phone: 'Confidential',
  location: 'Espírito Santo - Brazil',
  email: 'elioenaiferrari@gmail.com',
  birthday: 'May, 28, 1999',
  fullName: 'Elioenai Ferrari',
  profession: 'Backend Engineer',
  instagram_url: 'https://www.instagram.com/elioenai_ferrari/',
  linkedIn_url: 'https://www.linkedin.com/in/elioenai-ferrari',
  dev_url: 'https://dev.to/elioenaiferrari',
  colab_url: 'https://8bits-colab.vercel.app/',
  github_url: 'https://github.com/ElioenaiFerrari',
  aboutMe:
    'Passionate Backend Development with 5+ years of experience blending the software with programming skills to deliver an immersive and engaging user experience through efficient and effective solutions. proactive feature optimization, and relentless debugging.',
  services: [
    {
      id: '1',
      icon: '/images/icons/code.svg',
      title: 'Web Development',
      des: 'Building and maintaining websites and web applications using programming languages and frameworks.',
      color: '#269FFF',
      bg: '#F3FAFF',
    },
    {
      id: '2',
      icon: '/images/icons/robot.svg',
      title: 'Automatization',
      des: 'Extracting data from websites automatically using bots or software tools.',
      color: '#099',
      bg: '#F3FAFF',
    },
    {
      id: '3',
      icon: '/images/icons/blockchain.svg',
      title: 'Blockchain',
      des: 'Decentralized digital ledger technology enabling secure and transparent transactions without intermediaries.',
      color: '#F97B22',
      bg: '#F3FAFF',
    },
    {
      id: '4',
      icon: '/images/icons/chatbot.svg',
      title: 'Chatbots',
      des: 'Construction service that incorporates NLU, NLP, and NLC, enabling advanced natural language understanding and processing capabilities in just three lines of code.',
      color: '#A459D1',
      bg: '#F3FAFF',
    },
  ],
  resume: [
    {
      id: 1,
      title: 'Education',
      icon: <MdOutlineSchool />,
      items: [
        {
          id: 1,
          date: '2019-2021',
          title: 'System Analysis - Bachelor Degree',
          place: 'Unisales, Vitória, ES',
          bg: '#FFF4F4',
        },
        {
          id: 2,
          date: '2023-2024',
          title: 'Software Engineering - Postgraduate Degree',
          place: 'Estácio, Vila Velha, ES',
          bg: '#EEF5FA',
        },
      ].reverse(),
    },
    {
      id: 2,
      title: 'Experience',
      icon: <MdOutlineBusinessCenter />,
      items: [
        {
          id: 1,
          date: '2019-2020',
          title: 'Intern',
          place: 'Unisales',
          bg: '#EEF5FA',
        },

        {
          id: 2,
          date: '2020-2020',
          title: 'Software Engineer',
          place: 'Tecnovix',
          bg: '#F2F4FF',
        },
        {
          id: 3,
          date: '2020-2021',
          title: 'Leader Sofware Engineer',
          place: 'Intelliway',
          bg: '#EEF5FA',
        },
        {
          id: 4,
          date: '2021-2022',
          title: 'Senior Software Engineer',
          place: 'CI&T',
          bg: '#F2F4FF',
        },
        {
          id: 5,
          date: '2022-2024',
          title: 'Senior Sofware Engineer',
          place: 'Pagar.me | Stone CO',
          bg: '#EEF5FA',
        },
        {
          id: 6,
          date: '2024-2025',
          title: 'Senior Sofware Engineer',
          place: 'iFood',
          bg: '#F2F4FF',
        },
        {
          id: 7,
          date: '2025-Current',
          title: 'Senior Sofware Engineer',
          place: 'Firstbase',
          bg: '#EEF5FA',
        },
      ].reverse(),
    },
  ],
  skillLevels: [
    {
      id: 1,
      color: '#FF6464',
      name: 'Backend Development',
      number: '100',
    },
    {
      id: 2,
      color: '#9272D4',
      name: 'Frontend Development',
      number: '75',
    },
    {
      id: 3,
      color: '#5185D4',
      name: 'Mobile Development',
      number: '60',
    },
    {
      id: 4,
      color: '#CA56F2',
      name: 'Automatization',
      number: '80',
    },
    {
      id: 5,
      color: '#1B9C85',
      name: 'Chatbots',
      number: '90',
    },
  ],
  skillTags: [
    'Elixir',
    'Golang',
    'Rust',
    'Node.js',
    'Python',
    'Machine Learning',
    'DataDog',
    'Software Architecture',
    'Svelte',
  ],
  portfolio: [
    {
      id: '0',
      tag: 'Web',
      title: 'Remember the day',
      img: '/images/work_images/remember-the-day.svg',
      bg: '#FFF0F0',
      client: 'Any',
      stack: 'Elixir, Phoenix, LiveView, TailwindCSS',
      link: 'https://remember-the-day.fly.dev',
      linkText: 'Share Your Special Memories',
      description:
        'Create, store and share your most beautiful moments in a unique and meaningful way. Your memories deserve to be preserved in style.',
    },
    {
      id: '1',
      tag: 'Web',
      title: 'Calculadora de investimentos',
      img: '/images/work_images/investment_calculator.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'HTML, CSS, Javascript',
      link: 'https://elioenaiferrari.github.io/investment_calculator/',
      linkText: 'Calculadora de investimentos',
      description: 'Calcula rendimento parcial de investimentos.',
    },
    // {
    //   id: "2",
    //   tag: "Web",
    //   title: "White Dwarf",
    //   img: "/images/work_images/white-dwarf.png",
    //   bg: "#FFF0F0",
    //   client: "Personal",
    //   stack: "Next.js, Redis",
    //   link: "https://white-dwarf.vercel.app/",
    //   linkText: "White Dwarf",
    //   description: "",
    // },
    // {
    //   id: "3",
    //   tag: "Web",
    //   title: "Dachshund",
    //   img: "/images/work_images/dachshund.png",
    //   bg: "#FFF0F0",
    //   client: "Personal",
    //   stack: "Next.js, Go",
    //   link: "https://dachshund-mailer.vercel.app/",
    //   linkText: "Dachshund",
    //   description: "",
    // },
    {
      id: '4',
      tag: 'Web',
      title: '8bits Colab',
      img: '/images/work_images/8bits.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Next.js',
      link: 'https://8bits-colab.vercel.app/',
      linkText: '8bits',
      description: '',
    },
    {
      id: '5',
      tag: 'Automatization',
      title: 'Instagram Bot',
      img: '/images/work_images/insta-bot.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Go',
      link: 'https://github.com/ElioenaiFerrari/insta-bot',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '6',
      tag: 'Lib',
      title: 'IBM Watson Assistant',
      img: '/images/work_images/ibm-watson-assistant.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Elixir',
      link: 'https://hex.pm/packages/ibm_watson_assistant',
      linkText: 'Docs',
      description: '',
    },
    {
      id: '7',
      tag: 'Studies/Ideas',
      title: 'Rolling Game Study',
      img: '/images/work_images/rolling.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Rust',
      link: 'https://github.com/ElioenaiFerrari/rolling',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '8',
      tag: 'Studies/Ideas',
      title: '3D Secure Protocol',
      img: '/images/work_images/three-ds.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Rust',
      link: 'https://github.com/ElioenaiFerrari/three_ds',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '9',
      tag: 'Lib',
      title: 'Krueger',
      img: '/images/work_images/krueger.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Go',
      link: 'https://github.com/ElioenaiFerrari/krueger',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '10',
      tag: 'Studies/Ideas',
      title: 'Malamute',
      img: '/images/work_images/malamute.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Go',
      link: 'https://github.com/ElioenaiFerrari/malamute',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '11',
      tag: 'Lib',
      title: 'Enum',
      img: '/images/work_images/enum.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Go',
      link: 'https://github.com/ElioenaiFerrari/enum',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '12',
      tag: 'Studies/Ideas',
      title: 'Micro Frontends',
      img: '/images/work_images/micro-frontends.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Javascript',
      link: 'https://github.com/ElioenaiFerrari/micro-frontends',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '13',
      tag: 'Studies/Ideas',
      title: 'CQRS',
      img: '/images/work_images/cqrs.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Node.js, Go, Mongo, Postgres',
      link: 'https://github.com/ElioenaiFerrari/cqrs',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '14',
      tag: 'Studies/Ideas',
      title: 'Wordcloud with masks',
      img: '/images/work_images/wordcloud.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Python',
      link: 'https://github.com/ElioenaiFerrari/wordcloud',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '15',
      tag: 'Studies/Ideas',
      title: 'Security Dog',
      img: '/images/work_images/security-dog.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Go, Vue.js, Postgres, Redis',
      link: 'https://www.linkedin.com/posts/elioenai-ferrari_boa-noite-evolu%C3%A7%C3%A3o-do-projeto-security-activity-6946599104370110464-T_eH/?utm_source=share&utm_medium=member_desktop',
      linkText: 'Demo',
      description: '',
    },
    {
      id: '16',
      tag: 'Studies/Ideas',
      title: 'Descentralized Ballot Box (Blockchain)',
      img: '/images/work_images/ballot-box.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Go, SQLite',
      link: 'https://github.com/8BITS-COLAB/ballot-box',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '17',
      tag: 'Studies/Ideas',
      title: 'USA Housing Linear Regression',
      img: '/images/work_images/linear-regression.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Go, SQLite',
      link: 'https://github.com/ElioenaiFerrari/linear-regression/blob/master/src/main.ipynb',
      linkText: 'Source Code',
      description: '',
    },
    {
      id: '18',
      tag: 'Studies/Ideas',
      title: 'Audio Player',
      img: '/images/work_images/audio-player.png',
      bg: '#FFF0F0',
      client: 'Personal',
      stack: 'Javascript',
      link: 'https://github.com/ElioenaiFerrari/audio-player',
      linkText: 'Source Code',
      description: '',
    },
  ],
  blog: [
    // {
    //   id: '1',
    //   img: '/images/blog_images/rotation-keys.png',
    //   date: 'Mar, 14, 2023',
    //   category: 'Code',
    //   title: 'Rotation keys in Golang',
    //   bg: '#FCF4FF',
    //   description:
    //     'Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ',
    // },
  ],
};
