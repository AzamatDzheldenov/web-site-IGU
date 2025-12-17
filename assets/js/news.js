// JavaScript для страницы новостей

// Данные новостей
const newsData = [
  {
    id: 1,
    title: 'День открытых дверей ИКГУ 2025',
    excerpt: 'Приглашаем всех желающих на День открытых дверей! Познакомьтесь с нашими программами обучения, преподавателями и студентами.',
    content: `Уважаемые абитуриенты и родители!

Иссык-Кульский Государственный Университет приглашает вас на День открытых дверей, который состоится 20 января 2025 года.

В программе мероприятия:
• Презентация образовательных программ
• Экскурсия по территории университета
• Встреча с преподавателями и студентами
• Консультации по вопросам поступления
• Мастер-классы от ведущих специалистов

Начало мероприятия в 10:00. Регистрация участников с 9:30.

Мы ждем вас по адресу: г. Каракол, ул. Университетская, 1

Для предварительной регистрации свяжитесь с нами по телефону: +996 XXX XXX XXX`,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop',
    date: '10 декабря 2025'
  },
  {
    id: 2,
    title: 'Студенты ИКГУ заняли призовые места на республиканской олимпиаде',
    excerpt: 'Наши студенты показали отличные результаты на республиканской олимпиаде по программированию, завоевав золотую и серебряную медали.',
    content: `Поздравляем наших талантливых студентов!

В минувшие выходные в столице прошла республиканская олимпиада по программированию среди студентов высших учебных заведений Кыргызстана.

Команда ИКГУ в составе:
• Азамат Токтогулов (3 курс, специальность "Информатика") - 🥇 Золотая медаль
• Айжан Сулайманова (2 курс, специальность "Программирование") - 🥈 Серебряная медаль
• Бекжан Эргешов (4 курс, специальность "Информационные технологии") - участник

Студенты решали сложные алгоритмические задачи и демонстрировали навыки программирования на различных языках.

Руководитель команды, старший преподаватель кафедры информатики Марат Асанович отметил высокий уровень подготовки наших студентов и их целеустремленность.

Желаем нашим студентам дальнейших успехов и новых побед!`,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop',
    date: '8 декабря 2025'
  },
  {
    id: 3,
    title: 'Новогодний концерт и награждение лучших студентов',
    excerpt: 'Университет провел традиционный новогодний концерт с награждением студентов, отличившихся в учебе, науке и общественной деятельности.',
    content: `Праздничное настроение в ИКГУ!

Вчера в актовом зале университета состоялся традиционный новогодний концерт, посвященный завершению первого семестра 2024-2025 учебного года.

В торжественной обстановке были награждены:
📚 Отличники учебы - 45 студентов
🔬 Победители научных конференций - 12 студентов
🏆 Активисты студенческого самоуправления - 8 человек
🎭 Участники творческих коллективов - 15 студентов

Концертная программа включала:
• Выступление студенческого хора
• Танцевальные номера от творческого коллектива "Ala-Too"
• Театральные миниатюры
• Музыкальные композиции от талантливых студентов

Ректор университета поздравил всех присутствующих с наступающим Новым годом и пожелал успехов в учебе и личной жизни.

Спасибо всем участникам и организаторам за прекрасный праздник!`,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&h=600&fit=crop',
    date: '5 декабря 2025'
  }
];

// Инициализация
let currentSlide = 0;
let slideInterval;

document.addEventListener('DOMContentLoaded', () => {
  renderSlider();
  renderNewsList();
  initSliderControls();
  startAutoSlide();
  setupModalHandlers();
});

// Рендер карусели
function renderSlider() {
  const slider = document.getElementById('news-slider');
  const dots = document.getElementById('slider-dots');
  
  slider.innerHTML = newsData.map((news, index) => `
    <div class="slider-slide" data-id="${news.id}">
      <img src="${news.image}" alt="${news.title}">
      <div class="slider-overlay">
        <h3>${news.title}</h3>
        <p>${news.excerpt}</p>
      </div>
    </div>
  `).join('');

  dots.innerHTML = newsData.map((_, index) => `
    <button class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></button>
  `).join('');

  // Клики на слайды
  slider.querySelectorAll('.slider-slide').forEach(slide => {
    slide.addEventListener('click', () => {
      const newsId = parseInt(slide.dataset.id);
      openNewsModal(newsId);
    });
  });

  // Клики на точки
  dots.querySelectorAll('.slider-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      goToSlide(index);
      resetAutoSlide();
    });
  });
}

// Рендер списка новостей
function renderNewsList() {
  const list = document.getElementById('news-list');
  
  list.innerHTML = newsData.map(news => `
    <div class="news-item" data-id="${news.id}">
      <img src="${news.image}" alt="${news.title}" class="news-item-image">
      <div class="news-item-content">
        <div class="news-item-date">${news.date}</div>
        <h3 class="news-item-title">${news.title}</h3>
        <p class="news-item-excerpt">${news.excerpt}</p>
      </div>
    </div>
  `).join('');

  // Клики на новости
  list.querySelectorAll('.news-item').forEach(item => {
    item.addEventListener('click', () => {
      const newsId = parseInt(item.dataset.id);
      openNewsModal(newsId);
    });
  });
}

// Управление слайдером
function initSliderControls() {
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');

  prevBtn.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
    resetAutoSlide();
  });

  nextBtn.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
    resetAutoSlide();
  });
}

// Переход к слайду
function goToSlide(index) {
  const slider = document.getElementById('news-slider');
  const dots = document.querySelectorAll('.slider-dot');
  const totalSlides = newsData.length;

  // Циклическая прокрутка
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  // Анимация
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Обновление точек
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

// Автопрокрутка
function startAutoSlide() {
  slideInterval = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000); // Каждые 5 секунд
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

// Открытие модала новости
function openNewsModal(newsId) {
  const news = newsData.find(n => n.id === newsId);
  if (!news) return;

  const modal = document.getElementById('news-modal');
  const title = document.getElementById('news-modal-title');
  const image = document.getElementById('news-modal-image');
  const meta = document.getElementById('news-modal-meta');
  const content = document.getElementById('news-modal-content');

  title.textContent = news.title;
  image.src = news.image;
  image.alt = news.title;
  meta.textContent = news.date;
  content.textContent = news.content;

  modal.classList.add('active');
}

// Обработчики модала
function setupModalHandlers() {
  const modal = document.getElementById('news-modal');
  const closeBtn = document.getElementById('close-news-modal');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  // Закрытие по клику на фон
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  // Закрытие по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
    }
  });
}
