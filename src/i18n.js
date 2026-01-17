import { createI18n } from 'vue-i18n'

const messages = {
  uz: {
    nav: {
      about: 'Biz haqimizda',
      services: 'Xizmatlar',
      repairTypes: "Ta'mir turlari",
      benefits: 'Afzalliklar',
      projects: 'Loyihalar',
      process: 'Jarayon',
      reviews: 'Sharhlar',
      contact: 'Aloqa',
    },
    header: {
      cta: 'Bezpulat konsultatsiya',
      tagline: "Interyer va ta'mirlash studiyasi",
    },
    hero: {
      eyebrow: 'HomeDesign studiyasi',
      title: "Toshkent va viloyatlarda sifatli ta'mir va interyer yechimlari",
      subtitle:
        "Dizayn, ta'mirlash va mebel yechimlarini bir joyda. Siz xohlagan uslubda, belgilangan muddatda va shaffof smeta bilan.",
      primary: 'Loyiha boshlash',
      secondary: "Portfolio ko'rish",
      floatingTitle: 'Premium materiallar',
      floatingSubtitle: "Ta'minotchilar tarmog'i 50+ brend",
      stats: {
        experience: 'Yillik tajriba',
        projects: 'Tayyor loyiha',
        satisfaction: 'Mijoz mamnunligi',
      },
    },
    about: {
      eyebrow: 'Biz haqimizda',
      title: 'Vaqtingizni qadrlaydiganlar uchun zamonaviy yechimlar',
      subtitle:
        "2017-yildan beri yuqori sifat standartlari va aniq jarayonlar bilan xizmat ko'rsatamiz.",
      paragraphs: [
        "HomeDesign - bu vaqtni qadrlaydigan, uslub va sifatni yuqori baholaydigan mijozlar uchun zamonaviy kompaniya.",
        "Biz turar joy va tijoriy obyektlar uchun professional ta'mir va bezatish xizmatlariga ixtisoslashganmiz.",
        "Bizning ustuvor yo'nalishimiz - to'liq ta'mir xizmatlari: rejalashtirishdan yakuniy topshirishgacha.",
      ],
    },
    services: {
      eyebrow: 'Xizmatlar',
      title: 'Kompleks yondashuv bilan yakuniy natija',
      subtitle: "Uy, ofis yoki tijoriy loyiha uchun to'liq xizmatlar to'plami.",
      more: 'Batafsil',
      list: [
        {
          title: 'Interyer dizayn',
          description: "3D vizualizatsiya, reja va materiallar tanlovi bilan to'liq dizayn paketi.",
        },
        {
          title: "Ta'mirlash ishlari",
          description: "Kapital va kosmetik ta'mir, sifat nazorati va kafolatli topshirish.",
        },
        {
          title: 'Avtor nazorati',
          description: 'Har bir bosqichda dizayner nazorati va smetani optimallashtirish.',
        },
        {
          title: 'Mebel va dekor',
          description: "Individual mebel, tekstil va dekor elementlari bo'yicha komplektatsiya.",
        },
        {
          title: 'Smart uy integratsiyasi',
          description: 'Yoritish, iqlim va xavfsizlik tizimlarini yagona boshqaruvga ulash.',
        },
        {
          title: 'Konsultatsiya',
          description: "Maydon tahlili, stil yo'nalishi va byudjet bo'yicha maslahatlar.",
        },
      ],
    },
    repairTypes: {
      eyebrow: "Ta'mir turlari",
      title: "Ta'mirning asosiy yo'nalishlari",
      subtitle: "Kosmetik, kapital va dizayn yondashuvi bo'yicha xizmatlar.",
      list: [
        {
          title: 'Kosmetik ta\'mir',
          duration: 'Muddat: 20 kundan boshlab',
          items: [
            'Eski oboy, bo\'yoq, plitka va pol qoplamalarni demontaj qilish',
            'Pol qoplamasi va plitka yotqizish',
            'Devor va shiplarni bo\'yash yoki rulon materiallar bilan bezatish',
            'Chiroqlar, lyustralar, kalit va rozetkalarni o\'rnatish',
            'Santexnika montaji: unitaz, rakovina, dush kabina, moyka',
          ],
        },
        {
          title: 'Kapital ta\'mir',
          duration: null,
          items: [
            'Rejalashtirish va devorlarni qayta qurish, demontaj ishlari',
            'Eshik va derazalarni almashtirish',
            'Tekislash, shpaklyovka, gruntovka, bo\'yash, stiajka ishlari',
            'Elektr, isitish, suv va kanalizatsiya tizimlarini to\'liq yangilash',
            'Yakuniy bezak: oboy, plitka, parket, natyajnoy potolok va boshqalar',
            'Tozalash va chiqindilarni olib chiqish',
          ],
        },
        {
          title: 'Interyer dizayn',
          duration: null,
          items: [
            'Individual dizayn loyiha ishlab chiqish',
            'Mebel, yoritish va dekorni tanlash hamda joylashtirish',
            'Funktsional va estetik yechimlar yaratish',
            'Zamonaviy trendlarni interyerga integratsiya qilish',
            'Materiallar, ranglar va teksturalarni moslashtirish',
            'Zamonaviy va klassik uslublarni uyg\'unlashtirish',
          ],
        },
      ],
    },
    benefits: {
      eyebrow: 'Afzalliklar',
      title: 'Materiallar va xizmatlar bo\'yicha kuchli baza',
      subtitle: "Tejamkorlik va sifatni birlashtiradigan hamkorlik tizimi.",
      list: [
        {
          title: 'Vygodli narxlar',
          description: 'Katta hajmli xaridlar uchun ulgurji narxlar orqali iqtisod qiling.',
        },
        {
          title: 'Keng assortiment',
          description: 'Barcha kerakli materiallar bir joyda.',
        },
        {
          title: 'Sifat nazorati',
          description: 'Faqat sertifikatlangan va ishonchli mahsulotlar.',
        },
        {
          title: 'Konsultatsiyalar',
          description: 'Material tanlash va hisob-kitob bo\'yicha yordam.',
        },
        {
          title: 'Yetkazib berish',
          description: 'Obyektga tez va ishonchli yetkazib berish.',
        },
      ],
    },
    estimate: {
      eyebrow: 'Smeta tekshiruvi',
      title: "Smetangizni bepul tekshirib beramiz",
      subtitle:
        "Mutaxassislar smetani tekshiradi, xatolarni topadi va xarajatlarni optimallashtirish bo'yicha tavsiyalar beradi.",
      bullets: [
        'Smetadagi barcha pozitsiyalarni tahlil qilamiz',
        'Xatolik va noaniqliklarni tekshiramiz',
        'Xarajatlarni kamaytirish bo\'yicha maslahat beramiz',
        'Tekshiruv natijasini yuboramiz',
      ],
    },
    offer: {
      eyebrow: 'Aksiya',
      title: 'Birinchi buyurtmaga 10% chegirma',
      subtitle:
        "Bu bizning ishonchingiz uchun minnatdorchilik. Uy-joyingizni yanada qulay va zamonaviy qilishda yordam beramiz.",
    },
    projects: {
      eyebrow: 'Loyihalar',
      title: "Har bir loyiha - o'ziga xos hikoya",
      subtitle: 'Biz yaratgan interyerlar zamonaviylik, ergonomika va shaxsiy uslubni birlashtiradi.',
      list: [
        { title: 'Nordic Loft', style: 'Skandinaviya minimalizmi' },
        { title: 'Warm Family', style: 'Shahar kvartirasi' },
        { title: 'Modern Classic', style: 'Klassik va zamonaviy' },
        { title: 'Calm Beige', style: 'Bej palitra' },
        { title: 'Light Studio', style: "Yorug'lik va tekstura" },
        { title: 'Cozy Kitchen', style: 'Oshxona va dining' },
      ],
    },
    process: {
      eyebrow: 'Jarayon',
      title: '5 bosqichli aniq jarayon',
      subtitle: 'Loyihangizni boshidan oxirigacha boshqaramiz.',
      steps: [
        {
          title: 'Bepul konsultatsiya',
          text: "Talablaringizni tinglaymiz, obyektni ko'zdan kechiramiz va reja tuzamiz.",
        },
        {
          title: 'Dizayn konsepsiya',
          text: 'Moodboard, rejalashtirish, 3D vizualizatsiya va materiallar tanlovi.',
        },
        {
          title: 'Smeta va shartnoma',
          text: 'Xarajatlar shaffof hisoblanadi, muddat va kafolatlar belgilanadi.',
        },
        {
          title: "Ta'mirlash",
          text: 'Malakali ustalar va nazorat bilan barcha ishlar sifatli bajariladi.',
        },
        {
          title: 'Yakuniy topshirish',
          text: 'Obyekt toza holatda topshiriladi, kafolat hujjatlari beriladi.',
        },
      ],
    },
    reviews: {
      eyebrow: 'Mijozlar fikri',
      title: 'Bizga ishonch bildirganlar',
      subtitle: 'Har bir loyiha - alohida yondashuv va shaffof hamkorlik.',
      list: [
        {
          name: 'Madina Q.',
          role: 'Yashash xonasi dizayni',
          text: "HomeDesign jamoasi barcha ishlarni o'z vaqtida va juda toza bajardi. Natija kutganimizdan ham yaxshiroq!",
        },
        {
          name: 'Aziz B.',
          role: 'Ofis interyeri',
          text: "Dizayn yechimi zamonaviy, funksional va jamoamiz uchun qulay bo'ldi. Jarayon to'liq nazoratda edi.",
        },
        {
          name: 'Gulnoza R.',
          role: '3 xonali kvartira',
          text: "Smetada yashirin xarajatlar bo'lmagan, materiallar sifatli. Tavsiya qilaman.",
        },
      ],
    },
    contact: {
      eyebrow: 'Aloqa',
      title: 'Bugunoq loyihangizni boshlang',
      subtitle: "Biz sizning g'oyalaringizni aniq reja va chiroyli dizaynga aylantiramiz.",
      info: [
        { label: 'Telefon', value: '+998 99 053 69 26' },
        { label: 'Email', value: 'info@domremont.uz' },
        { label: 'Ish vaqti', value: 'Du - Yak 08:00 - 22:00' },
      ],
      form: {
        name: 'Ismingiz',
        namePlaceholder: 'Ism familiya',
        phone: 'Telefon raqam',
        phonePlaceholder: '+998',
        service: 'Xizmat turi',
        note: 'Izoh',
        notePlaceholder: 'Loyiha haqida qisqacha',
        submit: "So'rov yuborish",
        options: ['Interyer dizayn', "Ta'mirlash", 'Konsultatsiya'],
      },
    },
    footer: {
      sections: "Bo'limlar",
      contact: 'Aloqa',
      text:
        "Interyer dizayn va ta'mirlash bo'yicha to'liq xizmatlar. Sifatli materiallar, aniq muddat va kafolat.",
      phone: '+998 99 053 69 26',
      email: 'info@domremont.uz',
      copyright: '© 2024 HomeDesign. Barcha huquqlar himoyalangan.',
    },
  },
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      repairTypes: 'Виды ремонта',
      benefits: 'Преимущества',
      projects: 'Проекты',
      process: 'Процесс',
      reviews: 'Отзывы',
      contact: 'Контакты',
    },
    header: {
      cta: 'Бесплатная консультация',
      tagline: 'Студия интерьера и ремонта',
    },
    hero: {
      eyebrow: 'Студия HomeDesign',
      title: 'Качественный ремонт квартир в Ташкенте и области',
      subtitle:
        'Дизайн, ремонт и мебельные решения в одном месте. В нужном стиле, в срок и с прозрачной сметой.',
      primary: 'Начать проект',
      secondary: 'Смотреть портфолио',
      floatingTitle: 'Премиальные материалы',
      floatingSubtitle: 'Сеть поставщиков 50+ брендов',
      stats: {
        experience: 'Лет опыта',
        projects: 'Готовых проектов',
        satisfaction: 'Довольных клиентов',
      },
    },
    about: {
      eyebrow: 'О нас',
      title: 'Современная компания для тех, кто ценит время и качество',
      subtitle: 'С 2017 года придерживаемся высоких стандартов и точных процессов.',
      paragraphs: [
        'HomeDesign — современная компания для людей, которые ценят свое время и тонкое чувство стиля.',
        'Мы специализируемся на профессиональном ремонте и отделке жилых и коммерческих помещений.',
        'Приоритет — ремонт под ключ: от планирования до финальной сдачи объекта.',
      ],
    },
    services: {
      eyebrow: 'Услуги',
      title: 'Комплексный подход и финальный результат',
      subtitle: 'Полный спектр услуг для дома, офиса или коммерческого проекта.',
      more: 'Подробнее',
      list: [
        {
          title: 'Дизайн интерьера',
          description: 'Полный пакет дизайна с 3D-визуализацией, планировкой и подбором материалов.',
        },
        {
          title: 'Ремонтные работы',
          description: 'Капитальный и косметический ремонт, контроль качества и гарантия.',
        },
        {
          title: 'Авторский надзор',
          description: 'Контроль дизайнера на каждом этапе и оптимизация сметы.',
        },
        {
          title: 'Мебель и декор',
          description: 'Комплектация с индивидуальной мебелью, текстилем и декором.',
        },
        {
          title: 'Интеграция умного дома',
          description: 'Объединяем свет, климат и безопасность в единую систему.',
        },
        {
          title: 'Консультация',
          description: 'Анализ пространства, выбор стиля и рекомендации по бюджету.',
        },
      ],
    },
    repairTypes: {
      eyebrow: 'Виды ремонта',
      title: 'Основные форматы ремонта',
      subtitle: 'Косметический, капитальный и дизайн-подход.',
      list: [
        {
          title: 'Косметический ремонт',
          duration: 'Сроки: от 20 дней',
          items: [
            'Удаление старых обоев, краски, плитки, напольных покрытий',
            'Монтаж напольного покрытия, укладка плитки на полу или стенах',
            'Окраска стен и потолков, оклейка рулонными материалами',
            'Монтаж светильников, люстр, выключателей, розеток',
            'Монтаж сантехники: унитаз, раковина, биде, душевая, мойка',
          ],
        },
        {
          title: 'Капитальный ремонт',
          duration: null,
          items: [
            'Демонтаж перегородок, перепланировка',
            'Замена дверей, окон, балконных блоков',
            'Выравнивание поверхностей, штукатурка, грунтовка, покраска, стяжка',
            'Монтаж коммуникаций: электропроводка, отопление, водоснабжение, водоотведение',
            'Косметические работы: обои, плитка, паркет, натяжные потолки, другие материалы',
            'Комплексная уборка с вывозом мусора',
          ],
        },
        {
          title: 'Дизайн интерьера',
          duration: null,
          items: [
            'Разработка индивидуального дизайн-проекта',
            'Подбор и расстановка мебели, освещения, декора',
            'Создание функциональных и эстетичных решений',
            'Внедрение современных тенденций',
            'Выбор материалов, цветовых решений и текстур',
            'Сочетание современных и классических подходов',
          ],
        },
      ],
    },
    benefits: {
      eyebrow: 'Преимущества',
      title: 'Сильная база материалов и сервиса',
      subtitle: 'Экономия, ассортимент и проверенное качество.',
      list: [
        {
          title: 'Выгодные цены',
          description: 'Закупайтесь по оптовым ценам и экономьте на объемах.',
        },
        {
          title: 'Широкий ассортимент',
          description: 'Все необходимые материалы в одном месте.',
        },
        {
          title: 'Качество',
          description: 'Только проверенные и сертифицированные продукты.',
        },
        {
          title: 'Консультации',
          description: 'Помощь в выборе материалов и расчетах.',
        },
        {
          title: 'Доставка',
          description: 'Быстрая и надежная доставка до объекта.',
        },
      ],
    },
    estimate: {
      eyebrow: 'Проверка сметы',
      title: 'Бесплатная проверка вашей сметы',
      subtitle: 'Наши эксперты проверят расчет и дадут рекомендации по оптимизации затрат.',
      bullets: [
        'Анализируем все позиции в смете',
        'Проверяем на ошибки и неточности',
        'Даем советы по снижению затрат',
        'Отправляем результат проверки',
      ],
    },
    offer: {
      eyebrow: 'Акция',
      title: 'Скидка 10% на первый заказ',
      subtitle: 'Наш способ поблагодарить вас за выбор и помочь сделать пространство уютнее.',
    },
    projects: {
      eyebrow: 'Проекты',
      title: 'Каждый проект - своя история',
      subtitle: 'Наши интерьеры объединяют современность, эргономику и индивидуальный стиль.',
      list: [
        { title: 'Nordic Loft', style: 'Скандинавский минимализм' },
        { title: 'Warm Family', style: 'Городская квартира' },
        { title: 'Modern Classic', style: 'Классика и современность' },
        { title: 'Calm Beige', style: 'Бежевая палитра' },
        { title: 'Light Studio', style: 'Свет и текстуры' },
        { title: 'Cozy Kitchen', style: 'Кухня и dining' },
      ],
    },
    process: {
      eyebrow: 'Процесс',
      title: 'Прозрачный процесс из 5 этапов',
      subtitle: 'Ведем проект от начала до финальной сдачи.',
      steps: [
        {
          title: 'Бесплатная консультация',
          text: 'Выслушаем запрос, осмотрим объект и составим план.',
        },
        {
          title: 'Дизайн-концепция',
          text: 'Moodboard, планировки, 3D-визуализация и подбор материалов.',
        },
        {
          title: 'Смета и договор',
          text: 'Прозрачный расчет бюджета, сроки и гарантии.',
        },
        {
          title: 'Ремонт',
          text: 'Работы выполняют мастера, процесс под контролем.',
        },
        {
          title: 'Сдача проекта',
          text: 'Объект сдаем в чистом виде с гарантийными документами.',
        },
      ],
    },
    reviews: {
      eyebrow: 'Отзывы',
      title: 'Нам доверяют',
      subtitle: 'Каждый проект — индивидуальный подход и прозрачное сотрудничество.',
      list: [
        {
          name: 'Мадина К.',
          role: 'Дизайн гостиной',
          text: 'Команда HomeDesign сдала все в срок и очень аккуратно. Результат превзошел ожидания!',
        },
        {
          name: 'Азиз Б.',
          role: 'Интерьер офиса',
          text: 'Современное и функциональное решение, процесс полностью под контролем.',
        },
        {
          name: 'Гульноза Р.',
          role: 'Квартира 3 комнаты',
          text: 'Без скрытых расходов, материалы качественные. Рекомендую.',
        },
      ],
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Начнем ваш проект уже сегодня',
      subtitle: 'Превратим вашу идею в четкий план и красивый интерьер.',
      info: [
        { label: 'Телефон', value: '+998 99 053 69 26' },
        { label: 'Email', value: 'info@domremont.uz' },
        { label: 'График работы', value: 'Пн-Вс 08:00 - 22:00' },
      ],
      form: {
        name: 'Ваше имя',
        namePlaceholder: 'Имя и фамилия',
        phone: 'Телефон',
        phonePlaceholder: '+998',
        service: 'Тип услуги',
        note: 'Комментарий',
        notePlaceholder: 'Коротко о проекте',
        submit: 'Отправить заявку',
        options: ['Дизайн интерьера', 'Ремонт', 'Консультация'],
      },
    },
    footer: {
      sections: 'Разделы',
      contact: 'Контакты',
      text: 'Полный спектр услуг по дизайну и ремонту. Качественные материалы, сроки и гарантия.',
      phone: '+998 99 053 69 26',
      email: 'info@domremont.uz',
      copyright: '© 2024 HomeDesign. Все права защищены.',
    },
  },
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      repairTypes: 'Repair types',
      benefits: 'Benefits',
      projects: 'Projects',
      process: 'Process',
      reviews: 'Reviews',
      contact: 'Contact',
    },
    header: {
      cta: 'Free consultation',
      tagline: 'Interior & renovation studio',
    },
    hero: {
      eyebrow: 'HomeDesign studio',
      title: 'Quality apartment renovation in Tashkent and region',
      subtitle:
        'Design, renovation, and furniture solutions in one place. The style you want, on schedule, with a clear estimate.',
      primary: 'Start a project',
      secondary: 'View portfolio',
      floatingTitle: 'Premium materials',
      floatingSubtitle: '50+ supplier brands',
      stats: {
        experience: 'Years experience',
        projects: 'Completed projects',
        satisfaction: 'Client satisfaction',
      },
    },
    about: {
      eyebrow: 'About',
      title: 'A modern company for clients who value time and quality',
      subtitle: 'Since 2017 we follow high standards and clear processes.',
      paragraphs: [
        'HomeDesign is a modern company for people who value their time and have a refined sense of style.',
        'We specialize in professional renovation and finishing for residential and commercial spaces.',
        'Our priority is turnkey renovation: from planning to final handover.',
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'End-to-end approach with a finished result',
      subtitle: 'Full service set for home, office, or commercial spaces.',
      more: 'Details',
      list: [
        {
          title: 'Interior design',
          description: 'Full design package with 3D visuals, planning, and material selection.',
        },
        {
          title: 'Renovation works',
          description: 'Major and cosmetic renovation, quality control, and warranty.',
        },
        {
          title: 'Author supervision',
          description: 'Designer control at every stage and budget optimization.',
        },
        {
          title: 'Furniture & decor',
          description: 'Custom furniture, textiles, and decor packages.',
        },
        {
          title: 'Smart home integration',
          description: 'Connect lighting, climate, and security into one system.',
        },
        {
          title: 'Consultation',
          description: 'Space analysis, style direction, and budget guidance.',
        },
      ],
    },
    repairTypes: {
      eyebrow: 'Repair types',
      title: 'Core renovation formats',
      subtitle: 'Cosmetic, capital, and design-focused services.',
      list: [
        {
          title: 'Cosmetic renovation',
          duration: 'Timeline: from 20 days',
          items: [
            'Removal of old wallpaper, paint, tiles, and floor coverings',
            'Flooring installation and tiling on floors or walls',
            'Painting walls and ceilings, applying roll materials',
            'Installation of lights, switches, and sockets',
            'Plumbing installation: toilet, sink, bidet, shower, kitchen sink',
          ],
        },
        {
          title: 'Capital renovation',
          duration: null,
          items: [
            'Demolition of partitions and re-planning',
            'Replacement of doors, windows, balcony blocks',
            'Surface leveling, plaster, primer, paint, screed',
            'Installation of utilities: wiring, heating, water supply, drainage',
            'Finishing works: wallpaper, tile, parquet, stretch ceilings, materials',
            'Final cleaning and waste removal',
          ],
        },
        {
          title: 'Interior design',
          duration: null,
          items: [
            'Creation of a bespoke design project',
            'Furniture, lighting, and decor selection and layout',
            'Functional and aesthetic solutions',
            'Implementation of modern trends',
            'Material, color, and texture selection',
            'Mix of modern and classic approaches',
          ],
        },
      ],
    },
    benefits: {
      eyebrow: 'Benefits',
      title: 'Strong materials and service base',
      subtitle: 'Savings, assortment, and proven quality.',
      list: [
        {
          title: 'Better pricing',
          description: 'Wholesale prices and savings on large volumes.',
        },
        {
          title: 'Wide assortment',
          description: 'All essential materials in one place.',
        },
        {
          title: 'Quality control',
          description: 'Only certified and trusted products.',
        },
        {
          title: 'Consultations',
          description: 'Help with material selection and estimates.',
        },
        {
          title: 'Delivery',
          description: 'Fast and reliable delivery to your site.',
        },
      ],
    },
    estimate: {
      eyebrow: 'Estimate check',
      title: 'Free estimate review',
      subtitle: 'We validate your estimate and suggest cost optimizations.',
      bullets: [
        'We analyze all line items',
        'Check for errors and inaccuracies',
        'Provide cost reduction tips',
        'Send the review result',
      ],
    },
    offer: {
      eyebrow: 'Offer',
      title: '10% discount on your first order',
      subtitle: 'Our way to thank you and make your space even more comfortable.',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Every project tells a story',
      subtitle: 'Our interiors combine modernity, ergonomics, and personal style.',
      list: [
        { title: 'Nordic Loft', style: 'Scandinavian minimalism' },
        { title: 'Warm Family', style: 'City apartment' },
        { title: 'Modern Classic', style: 'Classic and modern' },
        { title: 'Calm Beige', style: 'Beige palette' },
        { title: 'Light Studio', style: 'Light and texture' },
        { title: 'Cozy Kitchen', style: 'Kitchen and dining' },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'A clear 5-step process',
      subtitle: 'We manage your project from start to finish.',
      steps: [
        {
          title: 'Free consultation',
          text: 'We gather requirements, inspect the site, and plan the work.',
        },
        {
          title: 'Design concept',
          text: 'Moodboard, layouts, 3D visualization, and materials selection.',
        },
        {
          title: 'Estimate & contract',
          text: 'Transparent costs, timelines, and warranties.',
        },
        {
          title: 'Renovation',
          text: 'Skilled masters with quality supervision.',
        },
        {
          title: 'Final handover',
          text: 'We deliver the space clean with warranty documentation.',
        },
      ],
    },
    reviews: {
      eyebrow: 'Reviews',
      title: 'Trusted by clients',
      subtitle: 'Every project is a tailored approach and transparent collaboration.',
      list: [
        {
          name: 'Madina Q.',
          role: 'Living room design',
          text: 'HomeDesign delivered on time and very neatly. The result exceeded expectations!',
        },
        {
          name: 'Aziz B.',
          role: 'Office interior',
          text: 'Modern, functional solution. The process was fully controlled.',
        },
        {
          name: 'Gulnoza R.',
          role: '3-room apartment',
          text: 'No hidden costs, quality materials. Highly recommend.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Start your project today',
      subtitle: 'We turn your idea into a clear plan and a beautiful interior.',
      info: [
        { label: 'Phone', value: '+998 99 053 69 26' },
        { label: 'Email', value: 'info@domremont.uz' },
        { label: 'Hours', value: 'Mon-Sun 08:00 - 22:00' },
      ],
      form: {
        name: 'Your name',
        namePlaceholder: 'Full name',
        phone: 'Phone number',
        phonePlaceholder: '+998',
        service: 'Service type',
        note: 'Note',
        notePlaceholder: 'Brief project details',
        submit: 'Send request',
        options: ['Interior design', 'Renovation', 'Consultation'],
      },
    },
    footer: {
      sections: 'Sections',
      contact: 'Contact',
      text: 'Full service interior design and renovation. Quality materials, clear timelines, and warranty.',
      phone: '+998 99 053 69 26',
      email: 'info@domremont.uz',
      copyright: '© 2024 HomeDesign. All rights reserved.',
    },
  },
}

const savedLocale = typeof window !== 'undefined' ? window.localStorage.getItem('locale') : null

export default createI18n({
  legacy: false,
  locale: savedLocale || 'uz',
  fallbackLocale: 'uz',
  globalInjection: true,
  messages,
})
