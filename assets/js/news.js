// ========================================
// Страница новостей в стиле Telegram
// ========================================

// Данные новостей с поддержкой видео
// Добавьте свои новости в этот массив
const newsData = [
  {
    id: 1,
    title: 'Золотая и бронзовая награды для Кыргызстана 🇰🇬',
    excerpt: 'Наша студентка Өмүрбекова Алтынай из группы КИЯ-22 завоевала золотую и бронзовую медали на первенстве мира по армрестлингу в Болгарии.',
    content: `Золотая и бронзовая награды для Кыргызстана 🇰🇬🇰🇬🇰🇬

В Болгарии на первенстве мира по армрестлингу наша студентка из группы КИЯ-22 Өмүрбекова Алтынай вписала своё имя в историю. 🥳🇰🇬

Она завоевала золотую медаль на левую руку и стала бронзовым призёром на правую руку в весовой категории до 45 кг.

Алтынай поздравляем с победой в мировом первенстве! Ты показала невероятную силу духа и мастерство. Желаем, чтобы эта победа стала стартом для еще более грандиозных свершений, а здоровье и вера в себя всегда были твоими спутниками!

ИГУ колледж гордится своей спортсменкой.`,
    media: {
      type: 'image',
      url: 'assets/images/news/WhatsApp Image 2025-12-17 at 14.13.00.jpeg'
    },
    date: '17 декабря 2025'
  }
];

// ========================================
// Система подсчёта просмотров
// ========================================

class ViewsCounter {
  constructor() {
    this.storageKey = 'news_views';
    this.sessionKey = 'news_viewed_session';
    this.initStorage();
  }

  initStorage() {
    if (!localStorage.getItem(this.storageKey)) {
      const initialViews = {};
      newsData.forEach(news => {
        initialViews[news.id] = this.getRandomInitialViews();
      });
      localStorage.setItem(this.storageKey, JSON.stringify(initialViews));
    }
  }

  getRandomInitialViews() {
    return Math.floor(Math.random() * 500) + 100;
  }

  getViews(newsId) {
    const views = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
    return views[newsId] || 0;
  }

  incrementViews(newsId) {
    const sessionViewed = JSON.parse(sessionStorage.getItem(this.sessionKey) || '[]');
    
    if (!sessionViewed.includes(newsId)) {
      const views = JSON.parse(localStorage.getItem(this.storageKey) || '{}');
      views[newsId] = (views[newsId] || 0) + 1;
      localStorage.setItem(this.storageKey, JSON.stringify(views));
      
      sessionViewed.push(newsId);
      sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionViewed));
      
      return views[newsId];
    }
    
    return this.getViews(newsId);
  }

  formatViews(count) {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1).replace('.0', '') + 'M';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1).replace('.0', '') + 'K';
    }
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}

const viewsCounter = new ViewsCounter();

// ========================================
// Инициализация страницы
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  renderNewsFeed();
  setupModalHandlers();
  setupIntersectionObserver();
});

// ========================================
// Рендеринг ленты новостей
// ========================================

function renderNewsFeed() {
  const feed = document.getElementById('news-feed');
  
  feed.innerHTML = newsData.map((news, index) => {
    const views = viewsCounter.getViews(news.id);
    const formattedViews = viewsCounter.formatViews(views);
    
    return `
      <article class="news-post" data-id="${news.id}" style="animation-delay: ${index * 0.1}s">
        <div class="news-post-media">
          ${renderMedia(news.media, true)}
        </div>
        <div class="news-post-body">
          <h2 class="news-post-title">${news.title}</h2>
          <p class="news-post-text">${news.excerpt}</p>
          <div class="news-post-meta">
            <span class="news-post-date">${news.date}</span>
            <span class="news-post-views">
              <span class="views-icon">👁</span>
              <span class="views-count">${formattedViews}</span>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join('');

  feed.querySelectorAll('.news-post').forEach(post => {
    post.addEventListener('click', () => {
      const newsId = parseInt(post.dataset.id);
      openNewsModal(newsId);
    });
  });
}

// ========================================
// Рендеринг медиа (изображение/видео)
// ========================================

function renderMedia(media, isLazy = false) {
  if (media.type === 'video') {
    return `
      <video 
        ${isLazy ? 'preload="none"' : 'preload="metadata"'}
        ${media.poster ? `poster="${media.poster}"` : ''}
        controls
        ${isLazy ? 'loading="lazy"' : ''}
      >
        <source src="${media.url}" type="video/mp4">
        Ваш браузер не поддерживает видео.
      </video>
    `;
  }
  
  return `
    <img 
      src="${media.url}" 
      alt="Изображение новости"
      ${isLazy ? 'loading="lazy"' : ''}
    >
  `;
}

// ========================================
// Модальное окно
// ========================================

function openNewsModal(newsId) {
  const news = newsData.find(n => n.id === newsId);
  if (!news) return;

  const newViews = viewsCounter.incrementViews(newsId);
  const formattedViews = viewsCounter.formatViews(newViews);

  const modal = document.getElementById('news-modal');
  const mediaContainer = document.getElementById('news-modal-media');
  const title = document.getElementById('news-modal-title');
  const content = document.getElementById('news-modal-content');
  const date = document.getElementById('news-modal-date');
  const viewsElement = document.querySelector('#news-modal-views .views-count');

  mediaContainer.innerHTML = renderMedia(news.media, false);
  title.textContent = news.title;
  content.textContent = news.content;
  date.textContent = news.date;
  viewsElement.textContent = formattedViews;

  // Блокируем прокрутку фона
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = 'hidden';
  document.body.style.paddingRight = scrollbarWidth + 'px';
  
  modal.classList.add('active');
  // Скроллим модальное окно к верху
  modal.scrollTop = 0;

  updatePostViews(newsId, formattedViews);
}

function updatePostViews(newsId, formattedViews) {
  const post = document.querySelector(`.news-post[data-id="${newsId}"]`);
  if (post) {
    const viewsCount = post.querySelector('.views-count');
    if (viewsCount) {
      viewsCount.textContent = formattedViews;
    }
  }
}

// ========================================
// Обработчики модального окна
// ========================================

function setupModalHandlers() {
  const modal = document.getElementById('news-modal');
  const closeBtn = document.getElementById('close-news-modal');
  const backdrop = document.getElementById('modal-backdrop');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    
    const video = modal.querySelector('video');
    if (video) {
      video.pause();
    }
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// ========================================
// Intersection Observer для анимаций
// ========================================

function setupIntersectionObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.news-post').forEach(post => {
    post.style.animationPlayState = 'paused';
    observer.observe(post);
  });
}
