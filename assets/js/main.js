// Используем переводы из translations.js если доступны, иначе используем встроенные
const translations = (typeof allTranslations !== 'undefined') ? allTranslations : {
  ru: {
    brandName: 'Колледж ИГУ им. Касыма Тыныстанова',
    brandSub: 'Каракол, Кыргызстан',
    navPrograms: 'Программы',
    navNews: 'Новости',
    navEvents: 'События',
    navCampus: 'Студентам',
    navLectures: 'Лекции',
    navSchedule: 'Расписание',
    navChat: 'Чат',
    navApply: 'Поступить',
    heroEyebrow: 'Колледж ИГУ',
    heroTitle: 'Образование в Караколе',
    heroLead: 'Государственный колледж Иссык-Кульского государственного университета имени Касыма Тыныстанова в Караколе. Прикладные программы, практика и поддержка студентов.',
    heroPrimary: 'Поступить и посетить',
    heroSecondary: 'Свежие новости',
    metaProgramsLabel: 'Программ подготовки',
    metaProgramsValue: '21',
    metaStudentsLabel: 'Студентов',
    metaStudentsValue: '1130',
    metaCityLabel: 'Город',
    metaCityValue: 'Каракол',
    cardLabel: 'О колледже',
    cardTitle: 'Практика и профессии',
    cardText: 'Прикладные специальности, дуальное обучение, наставники из индустрии и современные лаборатории.',
    tagApplied: 'Прикладные науки',
    tagTech: 'Техника',
    tagService: 'Сервис',
    newsEyebrow: 'Жизнь колледжа',
    newsTitle: 'Новости и достижения',
    newsLead: 'Успехи студентов, проекты с партнёрами и обновления кампуса.',
    studentsEyebrow: 'Студенты',
    studentsTitle: 'Наша команда',
    studentsLead: 'Активные и целеустремлённые студенты, которые строят будущее.',
    eventsEyebrow: 'Будьте на связи',
    eventsTitle: 'События и встречи',
    eventsLead: 'Открытые лекции, мастер-классы и ярмарки карьеры для студентов и абитуриентов.',
    academicsEyebrow: 'Программы',
    academicsTitle: 'Специальности и профили',
    academicsLead: 'Выберите направление: педагогика, IT, сервис, медицина, аграрные и инженерные дисциплины.',
    specialtiesEyebrow: 'Специальности',
    specialtiesTitle: 'Специальности и сроки обучения',
    campusEyebrow: 'Кампус',
    campusTitle: 'Учёба и быт в Караколе',
    campusLead: 'Учебные корпуса, лаборатории, библиотека и общежития рядом с горами и озером Иссык-Куль.',
    ctaEyebrow: 'Шаг к поступлению',
    ctaTitle: 'Присоединяйтесь к колледжу',
    ctaLead: 'Оставьте заявку, запишитесь на день открытых дверей или получите консультацию по программам.',
    ctaPrimary: 'Оставить заявку',
    ctaSecondary: 'Записаться на визит',
    ctaNoteTitle: 'Почему выбирают нас',
    footerName: 'Колледж ИГУ',
    footerSub: 'Имени Касыма Тыныстанова, Каракол',
    footerTop: 'Наверх',
    footerNews: 'Новости',
    footerEvents: 'События',
    footerAcademics: 'Программы',
    footerNote: 'Демонстрационный сайт для колледжа ИКГУ им. К. Тыныстанова.',
    ctaList: [
      'Лучший колледж в городе',
      '21 специальностей',
      'Профильные знания',
      'Опытные преподаватели',
      'Упор на практику'
    ],
    campusCards: [
      {
        title: 'Библиотека и ИТ-доступ',
        desc: 'Электронные ресурсы, читальные залы и компьютеры для проектной работы.',
        link: 'Узнать о ресурсах'
      },
      {
        title: 'Общежития и поддержка',
        desc: 'Места в общежитии, кураторы групп и студенческие клубы.',
        link: 'Условия проживания'
      },
      {
        title: 'Лаборатории и мастерские',
        desc: 'Практические занятия в медицинских, педагогических и технических кабинетах.',
        link: 'Посмотреть базы практик'
      }
    ]
  },
  ky: {
    brandName: 'К. Тыныстанов атындагы ЫКМУ колледжи',
    brandSub: 'Каракол, Кыргызстан',
    navPrograms: 'Программалар',
    navNews: 'Жаңылыктар',
    navEvents: 'Иш-чаралар',
    navCampus: 'Студенттерге',
    navLectures: 'Лекциялар',
    navSchedule: 'Жетиш',
    navChat: 'Чат',
    navApply: 'Кабыл алуу',
    heroEyebrow: 'ЫКМУ колледжи',
    heroTitle: 'Караколда билим',
    heroLead: 'Каракол шаарындагы К. Тыныстанов атындагы Ысык-Көл мамлекеттик университетинин колледжи. Практикалык программалар, өндүрүштүк практика жана студенттик колдоо.',
    heroPrimary: 'Кабыл алуу жана визит',
    heroSecondary: 'Жаңылыктарды көрүү',
    metaProgramsLabel: 'Программалар',
    metaProgramsValue: '21',
    metaStudentsLabel: 'Студенттер',
    metaStudentsValue: '1130',
    metaCityLabel: 'Шаар',
    metaCityValue: 'Каракол',
    cardLabel: 'Колледж тууралуу',
    cardTitle: 'Практика жана кесиптер',
    cardText: 'Дуалдык окутуу, өндүрүштүк практика жана заманкы жабдылган кабинеттер.',
    tagApplied: 'Колдонмо илимдер',
    tagTech: 'Техника',
    tagService: 'Сервис',
    newsEyebrow: 'Колледж жаңылыктары',
    newsTitle: 'Жаңылыктар жана жетишкендиктер',
    newsLead: 'Студенттик долбоорлор, өнөктөштөр менен биргелешкен иштер жана кампустагы жаңылоолор.',
    studentsEyebrow: 'Студенттер',
    studentsTitle: 'Биздин команда',
    studentsLead: 'Активдүү жана максаттуу студенттер, алар келечекти куруп жатышат.',
    eventsEyebrow: 'Кошулуңуз',
    eventsTitle: 'Иш-чаралар жана жолугушуулар',
    eventsLead: 'Ачык лекциялар, мастер-класстар жана карьера күндөрү.',
    academicsEyebrow: 'Программалар',
    academicsTitle: 'Адистиктер',
    academicsLead: 'Педагогика, IT, сервис, медицина, агрардык жана инженердик багыттар.',
    specialtiesEyebrow: 'Адистиктер',
    specialtiesTitle: 'Адистиктер жана окуу мөөнөтү',
    campusEyebrow: 'Кампус',
    campusTitle: 'Караколдогу студенттик жашоо',
    campusLead: 'Окуу корпустары, лабораториялар, китепкана жана жатакана — тоолор менен көлдүн жанында.',
    ctaEyebrow: 'Кабыл алуу кадамы',
    ctaTitle: 'Колледжге кошулуңуз',
    ctaLead: 'Өтүнмө калтырыңыз, ачык эшик күнүнө катталыңыз же программа боюнча кеңеш алыңыз.',
    ctaPrimary: 'Өтүнмө калтыруу',
    ctaSecondary: 'Визитке катталуу',
    ctaNoteTitle: 'Эмне үчүн биз',
    footerName: 'ЫКМУ колледжи',
    footerSub: 'К. Тыныстанов атындагы, Каракол',
    footerTop: 'Жогору',
    footerNews: 'Жаңылыктар',
    footerEvents: 'Иш-чаралар',
    footerAcademics: 'Программалар',
    footerNote: 'К. Тыныстанов атындагы ЫКМУ колледжине арналган демо сайт.',
    ctaList: [
      'Шаарда эң мыкты колледж',
      '21 адистик',
      'Адистик билим',
      'Тажрыйбалуу окутуучулар',
      'Практикалык максат'
    ],
    campusCards: [
      {
        title: 'Китепкана жана IT мүмкүнчүлүк',
        desc: 'Электрондук ресурстар, окуу залдары жана долбоорлор үчүн компьютерлер.',
        link: 'Ресурстарды көрүү'
      },
      {
        title: 'Жатакана жана колдоо',
        desc: 'Жатаканада орундар, кураторлор жана студенттик клубдар.',
        link: 'Жашоо шарттары'
      },
      {
        title: 'Лабораториялар жана устаканалар',
        desc: 'Медициналык, педагогикалык жана техникалык кабинеттерде практика.',
        link: 'Практика базалары'
      }
    ]
  },
  en: {
    brandName: 'College of Issyk-Kul State University (Kasym Tynystanov)',
    brandSub: 'Karakol, Kyrgyzstan',
    navPrograms: 'Programs',
    navNews: 'News',
    navEvents: 'Events',
    navCampus: 'Student Life',
    navLectures: 'Lectures',
    navSchedule: 'Schedule',
    navChat: 'Chat',
    navApply: 'Apply',
    heroEyebrow: 'IKSU College',
    heroTitle: 'Education in Karakol',
    heroLead: 'State college of Issyk-Kul State University named after Kasym Tynystanov in Karakol. Applied programs, practice, and student support.',
    heroPrimary: 'Apply & Visit',
    heroSecondary: 'Latest news',
    metaProgramsLabel: 'Programs',
    metaProgramsValue: '21',
    metaStudentsLabel: 'Students',
    metaStudentsValue: '1130',
    metaCityLabel: 'City',
    metaCityValue: 'Karakol',
    cardLabel: 'About the college',
    cardTitle: 'Practice and professions',
    cardText: 'Applied majors, dual training, industry mentors, and modern labs.',
    tagApplied: 'Applied science',
    tagTech: 'Technology',
    tagService: 'Service',
    newsEyebrow: 'Campus life',
    newsTitle: 'News and highlights',
    newsLead: 'Student successes, partner projects, and campus updates.',
    studentsEyebrow: 'Students',
    studentsTitle: 'Our team',
    studentsLead: 'Active and driven students building the future.',
    eventsEyebrow: 'Stay connected',
    eventsTitle: 'Events and meetups',
    eventsLead: 'Open lectures, workshops, and career fairs for students and applicants.',
    academicsEyebrow: 'Programs',
    academicsTitle: 'Majors and tracks',
    academicsLead: 'Choose pedagogy, IT, service, healthcare, agrarian, or engineering paths.',
    specialtiesEyebrow: 'Specialties',
    specialtiesTitle: 'Majors and study duration',
    campusEyebrow: 'Campus',
    campusTitle: 'Study and life in Karakol',
    campusLead: 'Classrooms, labs, library, and dorms near the mountains and Issyk-Kul lake.',
    ctaEyebrow: 'Next step',
    ctaTitle: 'Join the college',
    ctaLead: 'Submit an application, sign up for an open day, or get program guidance.',
    ctaPrimary: 'Submit application',
    ctaSecondary: 'Book a visit',
    ctaNoteTitle: 'Why students choose us',
    footerName: 'IKSU College',
    footerSub: 'Named after Kasym Tynystanov, Karakol',
    footerTop: 'Back to top',
    footerNews: 'News',
    footerEvents: 'Events',
    footerAcademics: 'Programs',
    footerNote: 'Demo website for IKSU College.',
    ctaList: [
      'Best college in the city',
      '21 specialties',
      'Specialized knowledge',
      'Experienced instructors',
      'Focus on practice'
    ],
    campusCards: [
      {
        title: 'Library and IT access',
        desc: 'E-resources, reading rooms, and computers for project work.',
        link: 'View resources'
      },
      {
        title: 'Dorms and support',
        desc: 'Housing options, group advisors, and student clubs.',
        link: 'Housing details'
      },
      {
        title: 'Labs and workshops',
        desc: 'Hands-on practice in medical, pedagogical, and technical labs.',
        link: 'See practice bases'
      }
    ]
  }
};

const newsItems = {
  ru: [
    {
      title: 'Студенты колледжа заняли призовое место в IT-хакатоне',
      blurb: 'Команда разработала сервис для туризма на Иссык-Куле и получила поддержку партнёров.',
      category: 'Технологии',
      meta: 'Каракол'
    },
    {
      title: 'Запущен дуальный проект с медучреждениями города',
      blurb: 'Студенты медколледжа проходят практику под руководством наставников.',
      category: 'Медицина',
      meta: 'Городская больница'
    },
    {
      title: 'Педагогический профиль обновил методический центр',
      blurb: 'Новые лаборатории для раннего развития и инклюзивного образования.',
      category: 'Педагогика',
      meta: 'Учебный корпус №2'
    }
  ],
  ky: [
    {
      title: 'Колледж студенттери IT-хакатондо байге алышты',
      blurb: 'Команда Ысык-Көлдөгү туризм үчүн сервис түзүп, өнөктөштөрдүн колдоосун алды.',
      category: 'Технология',
      meta: 'Каракол'
    },
    {
      title: 'Шаардагы медмекемелер менен дуалдык долбоор башталды',
      blurb: 'Медициналык багыттын студенттери практиканы наставниктер менен өтүүдө.',
      category: 'Медицина',
      meta: 'Шаардык оорукана'
    },
    {
      title: 'Педагогикалык борбор жаңырды',
      blurb: 'Эрте өнүктүрүү жана инклюзивдүү билим берүү үчүн лабораториялар ачылды.',
      category: 'Педагогика',
      meta: '2-окуу корпусу'
    }
  ],
  en: [
    {
      title: 'College team wins prize at IT hackathon',
      blurb: 'Students built a tourism service for Issyk-Kul and secured partner support.',
      category: 'Technology',
      meta: 'Karakol'
    },
    {
      title: 'Dual program launched with city medical centers',
      blurb: 'Healthcare students train alongside mentors in clinics.',
      category: 'Healthcare',
      meta: 'City Hospital'
    },
    {
      title: 'Teaching center upgrades labs',
      blurb: 'New spaces for early childhood and inclusive education practice.',
      category: 'Pedagogy',
      meta: 'Academic Building #2'
    }
  ]
};

const events = {
  ru: [
    { date: 'Дек 18', title: 'День открытых дверей', desc: 'Экскурсии по корпусам, консультации по приёму и общежитиям.', link: '#' },
    { date: 'Дек 22', title: 'Мастер-класс по туризму', desc: 'Преподаватели и партнеры расскажут о практике в сфере сервиса.', link: '#' },
    { date: 'Янв 10', title: 'Ярмарка карьеры', desc: 'Встреча с работодателями Каракола и региона Иссык-Куль.', link: '#' }
  ],
  ky: [
    { date: 'Дек 18', title: 'Ачык эшик күнү', desc: 'Корпустар боюнча экскурсия, кабыл алуу жана жатакана боюнча кеңеш.', link: '#' },
    { date: 'Дек 22', title: 'Туризм боюнча мастер-класс', desc: 'Окутуучулар жана өнөктөштөр практика тууралуу айтып беришет.', link: '#' },
    { date: 'Янв 10', title: 'Карьера жарманкеси', desc: 'Каракол жана Ысык-Көлдөгү иш берүүчүлөр менен жолугушуу.', link: '#' }
  ],
  en: [
    { date: 'Dec 18', title: 'Open Day', desc: 'Campus tours plus admission and dorm guidance.', link: '#' },
    { date: 'Dec 22', title: 'Tourism workshop', desc: 'Faculty and partners on service-industry practice.', link: '#' },
    { date: 'Jan 10', title: 'Career fair', desc: 'Meet employers from Karakol and the Issyk-Kul region.', link: '#' }
  ]
};

const programs = {
  ru: [
    { name: 'Педагогика', area: 'Дошкольное образование, начальные классы, инклюзивные практики.' },
    { name: 'Информационные технологии', area: 'Разработка, сети, системное администрирование и кибербезопасность.' },
    { name: 'Туризм и сервис', area: 'Организация туров, гостиничный сервис и ивент-менеджмент.' },
    { name: 'Медицина', area: 'Сестринское дело и основы общественного здравоохранения.' },
    { name: 'Аграрные технологии', area: 'Агрономия, переработка продуктов и экология региона.' },
    { name: 'Инженерные специальности', area: 'Энергетика, монтаж и обслуживание оборудования.' }
  ],
  ky: [
    { name: 'Педагогика', area: 'Мектепке чейинки жана башталгыч класстар, инклюзивдүү методдор.' },
    { name: 'Маалыматтык технологиялар', area: 'Разработка, тармактар, системалык администрлөө жана коопсуздук.' },
    { name: 'Туризм жана сервис', area: 'Тур уюштуруу, мейманкана сервис жана иш-чараларды башкаруу.' },
    { name: 'Медицина', area: 'Медайымдык иш жана коомдук саламаттыктын негиздери.' },
    { name: 'Агрардык технологиялар', area: 'Агрономия, продуктуларды кайра иштетүү жана экология.' },
    { name: 'Инженердик багыттар', area: 'Энергетика, жабдууларды монтаждоо жана тейлөө.' }
  ],
  en: [
    { name: 'Pedagogy', area: 'Early childhood, primary education, and inclusive practices.' },
    { name: 'Information Technology', area: 'Development, networking, system admin, and cybersecurity.' },
    { name: 'Tourism & Service', area: 'Tour operations, hospitality service, and event management.' },
    { name: 'Healthcare', area: 'Nursing and foundations of public health.' },
    { name: 'Agricultural Technology', area: 'Agronomy, food processing, and regional ecology.' },
    { name: 'Engineering', area: 'Energy systems, installation, and equipment maintenance.' }
  ]
};

const specialties = {
  ru: [
    { code: '050709', name: 'Преподавание в начальных классах', qualification: 'Учитель начальных классов', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '080106', name: 'Финансы (по отраслям)', qualification: 'Финансист', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '080110', name: 'Экономика и бухгалтерский учет (по отраслям)', qualification: 'Бухгалтер', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '100201', name: 'Туризм', qualification: 'Специалист по туризму', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '140212', name: 'Электроснабжение (по отраслям)', qualification: 'Техник', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '190604', name: 'Техническое обслуживание и ремонт автомобильного транспорта', qualification: 'Техник', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '190701', name: 'Организация перевозок и управление на транспорте', qualification: 'Техник', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '230109', name: 'Программное обеспечение вычислительной техники и автоматизированных систем', qualification: 'Техник-программист', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '050303', name: 'Иностранный язык (английский)', qualification: 'Учитель английского языка', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' },
    { code: '080108', name: 'Банковское дело', qualification: 'Специалист банковского дела', duration9: 'на базе 9 класса — 2 года 10 мес.', duration11: 'на базе 11 класса — 1 год 10 мес.' }
  ],
  ky: [],
  en: [
    { code: '050709', name: 'Primary education teaching', qualification: 'Primary school teacher', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '080106', name: 'Finance (by industries)', qualification: 'Finance specialist', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '080110', name: 'Economics and accounting (by industries)', qualification: 'Accountant', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '100201', name: 'Tourism', qualification: 'Tourism specialist', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '140212', name: 'Power supply (by industries)', qualification: 'Technician', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '190604', name: 'Vehicle maintenance and repair', qualification: 'Technician', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '190701', name: 'Transport operations and management', qualification: 'Technician', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '230109', name: 'Software for computing tech and automated systems', qualification: 'Software technician', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '050303', name: 'Foreign language (English)', qualification: 'English teacher', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' },
    { code: '080108', name: 'Banking', qualification: 'Banking specialist', duration9: 'After grade 9 — 2 years 10 months', duration11: 'After grade 11 — 1 year 10 months' }
  ]
};

let newsGrid, eventList, programsWrap, specialtiesWrap, campusGrid, ctaList, langSelect;

function initDOMElements() {
  newsGrid = document.querySelector('[data-news-grid]');
  eventList = document.querySelector('[data-event-list]');
  programsWrap = document.querySelector('[data-pillars]');
  specialtiesWrap = document.querySelector('[data-specialties]');
  campusGrid = document.querySelector('[data-campus-grid]');
  ctaList = document.querySelector('[data-cta-list]');
  langSelect = document.getElementById('lang-select');
}

function setupBrandLink() {
  const brand = document.querySelector('.brand');
  if (!brand) return;

  const goHome = () => { window.location.href = 'index.html'; };
  brand.setAttribute('role', 'link');
  brand.setAttribute('tabindex', '0');
  brand.style.cursor = 'pointer';

  brand.addEventListener('click', goHome);
  brand.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goHome();
    }
  });
}

function createNewsCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <span class="category">${item.category}</span>
    <h3>${item.title}</h3>
    <p>${item.blurb}</p>
    <p class="meta">${item.meta}</p>
  `;
  return card;
}

function renderNews(lang) {
  if (!newsGrid) return;
  newsGrid.innerHTML = '';
  newsItems[lang].forEach((item) => newsGrid.appendChild(createNewsCard(item)));
}

function createEvent(item, lang) {
  const wrapper = document.createElement('article');
  wrapper.className = 'event';
  const detailsLabel = lang === 'ru' ? 'Подробнее' : lang === 'ky' ? 'Толугураак' : 'Details';
  wrapper.innerHTML = `
    <div class="date">${item.date}</div>
    <div>
      <p class="title">${item.title}</p>
      <p class="desc">${item.desc}</p>
    </div>
    <a class="cta-link" href="${item.link}">${detailsLabel}</a>
  `;
  return wrapper;
}

function renderEvents(lang) {
  if (!eventList) return;
  eventList.innerHTML = '';
  events[lang].forEach((item) => eventList.appendChild(createEvent(item, lang)));
}

function createProgramCard(program, lang) {
  const card = document.createElement('article');
  card.className = 'pillar-card';
  const focusLabel = lang === 'ru' ? 'Профиль' : lang === 'ky' ? 'Багыт' : 'Focus';
  card.innerHTML = `
    <p class="category">${focusLabel}</p>
    <h3>${program.name}</h3>
    <p class="area">${program.area}</p>
  `;
  return card;
}

function renderPrograms(lang) {
  if (!programsWrap) return;
  programsWrap.innerHTML = '';
  programs[lang].forEach((program) => programsWrap.appendChild(createProgramCard(program, lang)));
}

function createSpecialtyCard(item, lang) {
  const card = document.createElement('article');
  card.className = 'specialty-card';
  const after9 = lang === 'ky' ? '9-класстан кийин' : lang === 'en' ? 'After grade 9' : 'После 9 класса';
  const after11 = lang === 'ky' ? '11-класстан кийин' : lang === 'en' ? 'After grade 11' : 'После 11 класса';
  card.innerHTML = `
    <div class="specialty-top">
      <p class="category">${item.code}</p>
      <p class="specialty-qual">${item.qualification}</p>
    </div>
    <h4>${item.name}</h4>
    <div class="specialty-durations">
      <div>
        <p class="meta-label">${after9}</p>
        <p class="meta-value">${item.duration9}</p>
      </div>
      <div>
        <p class="meta-label">${after11}</p>
        <p class="meta-value">${item.duration11}</p>
      </div>
    </div>
  `;
  return card;
}

function renderSpecialties(lang) {
  if (!specialtiesWrap) return;
  specialtiesWrap.innerHTML = '';
  const list = specialties[lang] && specialties[lang].length ? specialties[lang] : specialties.ru;
  list.forEach((spec) => specialtiesWrap.appendChild(createSpecialtyCard(spec, lang)));
}

function createCampusCard(card) {
  const node = document.createElement('article');
  node.className = 'campus-card';
  node.innerHTML = `
    <h3>${card.title}</h3>
    <p>${card.desc}</p>
    <a class="text-link" href="#">${card.link}</a>
  `;
  return node;
}

function renderCampus(lang) {
  if (!campusGrid) return;
  campusGrid.innerHTML = '';
  const cards = (translations[lang] && Array.isArray(translations[lang].campusCards))
    ? translations[lang].campusCards
    : (translations.ru && Array.isArray(translations.ru.campusCards)) ? translations.ru.campusCards : [];
  cards.forEach((card) => campusGrid.appendChild(createCampusCard(card)));
}

function renderCtaList(lang) {
  if (!ctaList) {
    console.warn('ctaList element not found');
    return;
  }
  ctaList.innerHTML = '';
  const list = (translations[lang] && Array.isArray(translations[lang].ctaList))
    ? translations[lang].ctaList
    : (translations.ru && Array.isArray(translations.ru.ctaList)) ? translations.ru.ctaList : [];
  
  console.log('Rendering ctaList:', list);
  
  list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ctaList.appendChild(li);
  });
}

function setText(selector, value) {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  // Update document language attribute for accessibility and SEO
  document.documentElement.setAttribute('lang', lang);
  
  // Single pass for all data-i18n elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      // Use textContent instead of innerHTML for security
      el.textContent = t[key];
    }
  });

  // Render dynamic content (reduced calls)
  renderNews(lang);
  renderEvents(lang);
  renderPrograms(lang);
  renderSpecialties(lang);
  renderCampus(lang);
  renderCtaList(lang);
}

// Performance optimizations and security improvements
// ===================================================

// Debounce utility for throttling events
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility for rate-limiting events
function throttle(func, limit = 300) {
  let lastFunc, lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Request Animation Frame for smooth animations
function createAnimationFrame(callback) {
  let id = null;
  return function execute(...args) {
    if (id) cancelAnimationFrame(id);
    id = requestAnimationFrame(() => {
      callback(...args);
      id = null;
    });
  };
}

// Performance: Cache DOM queries
const domCache = {
  navToggle: null,
  navLinks: null,
  langSelect: null,
  themeToggle: null,
  get(selector) {
    if (!this[selector]) {
      this[selector] = document.querySelector(selector);
    }
    return this[selector];
  },
  clear() {
    Object.keys(this).forEach(key => {
      if (key !== 'get' && key !== 'clear') {
        this[key] = null;
      }
    });
  }
};

function setupNavToggle() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!toggle || !navLinks) return;

  // Use passive event listener for better scroll performance
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  }, { passive: true });
}

function setupNavDropdown() {
  const dropdown = document.querySelector('.nav-dropdown');
  if (!dropdown) return;
  const toggle = dropdown.querySelector('.dropdown-toggle');
  const menu = dropdown.querySelector('.dropdown-menu');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    dropdown.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const willOpen = !dropdown.classList.contains('open');
    dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(willOpen));
  }, { passive: false });

  // Close when clicking outside dropdown
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      closeMenu();
    }
  }, { passive: true });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  }, { passive: true });
}

function setupLanguageSwitcher(defaultLang = 'ru') {
  const langSelect = document.getElementById('lang-select');
  if (!langSelect) return;
  
  langSelect.value = defaultLang;
  
  // Use debounce to prevent rapid re-renders
  const handleLanguageChange = debounce((lang) => {
    applyTranslations(lang);
    // Save language preference for 30 days
    localStorage.setItem('preferredLanguage', lang);
  }, 100);

  langSelect.addEventListener('change', (e) => {
    handleLanguageChange(e.target.value);
  }, { passive: true });
}

function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  
  if (!themeToggle) return;
  
  // Theme is already applied by inline script in <head>, just update icon
  const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
  updateThemeIcon(currentTheme);
  
  // Use throttle for theme toggle to prevent multiple rapid toggles
  const handleThemeToggle = throttle(() => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  }, 500);

  themeToggle.addEventListener('click', handleThemeToggle, { passive: true });
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  
  const icon = themeToggle.querySelector('.theme-icon');
  if (icon) {
    icon.textContent = theme === 'light' ? '☀️' : '🌙';
  }
}

function setupTestimonialsReveal() {
  const cards = document.querySelectorAll('.testimonial-card');
  if (!cards.length) return;

  const prefersNoHover = window.matchMedia('(hover: none)').matches;

  if (prefersNoHover && 'IntersectionObserver' in window) {
    // Optimize with viewport-based loading
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Stop observing after visible
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px 100px 0px' });

    cards.forEach((card) => observer.observe(card));
  }

  // Use throttle to prevent excessive event handling
  const handleInteraction = throttle(() => {
    // Event handling with throttle
  });

  // Keep cards visible once revealed; avoid hiding on mouse leave
  cards.forEach((card) => {
    const show = () => card.classList.add('is-visible');
    card.addEventListener('mouseenter', show, { passive: true });
    card.addEventListener('focusin', show, { passive: true });
  });
}

function setupRevealAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const selectors = [
    '.hero__content',
    '.hero__visual',
    '.panel',
    '.section',
    '.card-grid > *',
    '.specialties-grid > *',
    '.campus-grid > *',
    '.event-list > *',
    '.testimonial-card',
    '.news-items > *',
    '.pillars > *',
    '.cta__note',
    '.specialties__header'
  ];

  const elements = selectors.flatMap((sel) => Array.from(document.querySelectorAll(sel)));
  if (!elements.length) return;

  // Adapt settings for mobile devices
  const isMobile = window.innerWidth <= 760;
  const observerOptions = {
    threshold: isMobile ? 0.02 : 0.05,
    rootMargin: isMobile ? '0px 0px 100px 0px' : '0px 0px 50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Slight delay for smoother staggered animation
        requestAnimationFrame(() => {
          entry.target.classList.add('is-visible');
        });
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  elements.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

function initContactMenu() {
  const menu = document.getElementById('contact-menu');
  const wrapper = document.getElementById('contact-actions');
  if (!menu || !wrapper) return;

  const primaryBtn = wrapper.querySelector('[data-contact-intent="apply"]');
  const secondaryBtn = wrapper.querySelector('[data-contact-intent="visit"]');
  const closeBtn = wrapper.querySelector('[data-contact-close]');
  const msgEl = document.getElementById('contact-menu-message');
  const telegramLink = document.getElementById('contact-telegram');
  const whatsappLink = document.getElementById('contact-whatsapp');
  const emailLink = document.getElementById('contact-email');

  const copy = {
    apply: 'Здравствуйте, хочу оставить заявку!',
    visit: 'Здравствуйте, хочу записаться на визит'
  };

  const subject = encodeURIComponent('Заявка в колледж');

  const buildLinks = (message) => {
    const encoded = encodeURIComponent(message);
    telegramLink.href = `https://t.me/Jessiebro?text=${encoded}`;
    whatsappLink.href = `https://wa.me/996707197465?text=${encoded}`;
    emailLink.href = `mailto:azamatdzeldenov07@gmail.com?subject=${subject}&body=${encoded}`;
    msgEl.textContent = message;
  };

  const openMenu = (intent) => {
    buildLinks(intent === 'visit' ? copy.visit : copy.apply);
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
  };

  const closeMenu = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
  };

  primaryBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu('apply');
  });

  secondaryBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu('visit');
  });

  closeBtn?.addEventListener('click', closeMenu);

  document.addEventListener('click', (e) => {
    if (!menu.classList.contains('is-open')) return;
    if (!wrapper.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

function setupBurgerMenu() {
  const burgerToggle = document.getElementById('burger-toggle');
  const burgerMenu = document.getElementById('burger-menu');
  
  if (!burgerToggle || !burgerMenu) {
    console.error('Burger menu or toggle not found in DOM');
    return;
  }

  // Save initial menu markup to allow safe restoration if DOM was wiped
  const initialMenuHTML = burgerMenu.innerHTML;

  // Helper to (re)bind all handlers for the current burger DOM
  const bindBurgerHandlers = () => {
    const closeTriggers = burgerMenu.querySelectorAll('[data-burger-close]');
    const menuLinks = burgerMenu.querySelectorAll('.burger-menu__link');

    closeTriggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        closeMenu();
      });
    });

    // Handle burger menu dropdown
    const burgerDropdownToggle = burgerMenu.querySelector('.burger-menu__dropdown-toggle');
    if (burgerDropdownToggle) {
      burgerDropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isExpanded = burgerDropdownToggle.getAttribute('aria-expanded') === 'true';
        burgerDropdownToggle.setAttribute('aria-expanded', String(!isExpanded));
        console.log('Dropdown toggled. Expanded:', !isExpanded);
      });
      const dropdownContent = burgerMenu.querySelector('.burger-menu__dropdown-content');
      if (dropdownContent) {
        dropdownContent.addEventListener('click', (e) => {
          e.stopPropagation();
        });
      }
    }

    // Close menu only for regular links (not dropdown toggle or dropdown links)
    menuLinks.forEach((link) => {
      if (!link.classList.contains('burger-menu__dropdown-toggle')) {
        link.addEventListener('click', closeMenu);
      }
    });
  };

  const openMenu = () => {
    // If for any reason menu content became empty, restore it and rebind handlers
    const nav = burgerMenu.querySelector('.burger-menu__nav');
    if (!nav || nav.children.length === 0) {
      console.warn('Burger menu content missing. Restoring initial markup.');
      burgerMenu.innerHTML = initialMenuHTML;
      bindBurgerHandlers();
    }
    console.log('Opening burger menu');
    burgerMenu.classList.add('is-open');
    burgerToggle.setAttribute('aria-expanded', 'true');
    burgerMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    console.log('Closing burger menu');
    burgerMenu.classList.remove('is-open');
    burgerToggle.setAttribute('aria-expanded', 'false');
    burgerMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  burgerToggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Burger toggle clicked. Menu is open:', burgerMenu.classList.contains('is-open'));
    if (burgerMenu.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Initial bind for existing DOM
  bindBurgerHandlers();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && burgerMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });
}

function init() {
  initDOMElements();
  setupBrandLink();
  const savedLang = localStorage.getItem('preferredLanguage');
  const defaultLang = (savedLang && translations[savedLang]) ? savedLang : 'ru';
  applyTranslations(defaultLang);
  setupNavToggle();
  setupNavDropdown();
  setupLanguageSwitcher(defaultLang);
  setupThemeToggle();
  setupTestimonialsReveal();
  setupRevealAnimations();
  initContactMenu();
  setupBurgerMenu();
  setupDocumentHandlers();
}

// Обработчики для документов
function setupDocumentHandlers() {
  const documentCards = document.querySelectorAll('.document-card__files');
  
  if (!documentCards.length) return;
  
  // Пример: добавляем обработчики для каждой категории документов
  // Это можно использовать для загрузки реальных документов с сервера
  documentCards.forEach(card => {
    const category = card.getAttribute('data-category');
    // Здесь можно добавить функциональность загрузки документов
  });
}

// Функция для скачивания документа
function downloadDocument(url, fileName) {
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName || 'document';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', init);
