// Логика для страницы лекций по иностранным языкам

// Хранилище плейлистов
let playlists = [
  {
    id: 1,
    title: 'Английский для начинающих',
    description: 'Базовая грамматика, фонетика и лексика английского языка.',
    icon: '🇬🇧',
    videos: []
  },
  {
    id: 2,
    title: 'Разговорная практика',
    description: 'Диалоги, ролевые игры и практика устной речи на английском.',
    icon: '🗣️',
    videos: []
  }
];

let nextPlaylistId = 3;

document.addEventListener('DOMContentLoaded', () => {
  // Модальные окна
  const videoModal = document.getElementById('video-modal');
  const articleModal = document.getElementById('article-modal');
  const docModal = document.getElementById('doc-modal');
  const playlistModal = document.getElementById('playlist-modal');
  const playlistViewModal = document.getElementById('playlist-view-modal');

  const addVideoBtn = document.getElementById('add-video-btn');
  const addArticleBtn = document.getElementById('add-article-btn');
  const addDocBtn = document.getElementById('add-doc-btn');
  const addPlaylistBtn = document.getElementById('add-playlist-btn');

  const closeVideoModal = document.getElementById('close-video-modal');
  const closeArticleModal = document.getElementById('close-article-modal');
  const closeDocModal = document.getElementById('close-doc-modal');
  const closePlaylistModal = document.getElementById('close-playlist-modal');
  const closePlaylistViewModal = document.getElementById('close-playlist-view-modal');

  const cancelVideo = document.getElementById('cancel-video');
  const cancelArticle = document.getElementById('cancel-article');
  const cancelDoc = document.getElementById('cancel-doc');
  const cancelPlaylist = document.getElementById('cancel-playlist');

  // Загрузка плейлистов в селект
  updatePlaylistSelect();

  // Открытие модальных окон
  if (addVideoBtn) {
    addVideoBtn.addEventListener('click', () => {
      videoModal.classList.add('active');
    });
  }

  if (addArticleBtn) {
    addArticleBtn.addEventListener('click', () => {
      articleModal.classList.add('active');
    });
  }

  if (addDocBtn) {
    addDocBtn.addEventListener('click', () => {
      docModal.classList.add('active');
    });
  }

  if (addPlaylistBtn) {
    addPlaylistBtn.addEventListener('click', () => {
      playlistModal.classList.add('active');
    });
  }

  // Закрытие модальных окон
  const closeModal = (modal) => {
    modal.classList.remove('active');
  };

  if (closeVideoModal) {
    closeVideoModal.addEventListener('click', () => closeModal(videoModal));
  }

  if (closeArticleModal) {
    closeArticleModal.addEventListener('click', () => closeModal(articleModal));
  }

  if (closeDocModal) {
    closeDocModal.addEventListener('click', () => closeModal(docModal));
  }

  if (closePlaylistModal) {
    closePlaylistModal.addEventListener('click', () => closeModal(playlistModal));
  }

  if (closePlaylistViewModal) {
    closePlaylistViewModal.addEventListener('click', () => closeModal(playlistViewModal));
  }

  if (cancelVideo) {
    cancelVideo.addEventListener('click', () => closeModal(videoModal));
  }

  if (cancelArticle) {
    cancelArticle.addEventListener('click', () => closeModal(articleModal));
  }

  if (cancelDoc) {
    cancelDoc.addEventListener('click', () => closeModal(docModal));
  }

  if (cancelPlaylist) {
    cancelPlaylist.addEventListener('click', () => closeModal(playlistModal));
  }

  // Закрытие по клику на фон
  [videoModal, articleModal, docModal, playlistModal, playlistViewModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });

  // Закрытие по Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      [videoModal, articleModal, docModal, playlistModal, playlistViewModal].forEach(modal => {
        if (modal && modal.classList.contains('active')) {
          closeModal(modal);
        }
      });
    }
  });

  // Обработка просмотра плейлиста
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('playlist-view') || e.target.closest('.playlist-view')) {
      const btn = e.target.classList.contains('playlist-view') ? e.target : e.target.closest('.playlist-view');
      const playlistId = parseInt(btn.dataset.playlistId);
      openPlaylistView(playlistId);
    }
  });

  // Переключение типа видео
  const videoTypeRadios = document.querySelectorAll('input[name="video-type"]');
  const youtubeUrlGroup = document.getElementById('youtube-url-group');
  const videoFileGroup = document.getElementById('video-file-group');
  const youtubePlaylistGroup = document.getElementById('youtube-playlist-group');

  videoTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'youtube') {
        youtubeUrlGroup.style.display = 'block';
        videoFileGroup.style.display = 'none';
        youtubePlaylistGroup.style.display = 'none';
      } else if (e.target.value === 'local') {
        youtubeUrlGroup.style.display = 'none';
        videoFileGroup.style.display = 'block';
        youtubePlaylistGroup.style.display = 'none';
      } else if (e.target.value === 'youtube-playlist') {
        youtubeUrlGroup.style.display = 'none';
        videoFileGroup.style.display = 'none';
        youtubePlaylistGroup.style.display = 'block';
      }
    });
  });

  // Обработка формы создания плейлиста
  const playlistForm = document.getElementById('playlist-form');
  if (playlistForm) {
    playlistForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const title = document.getElementById('playlist-title').value;
      const desc = document.getElementById('playlist-desc').value;
      const icon = document.getElementById('playlist-icon').value;
      const videoUrlsText = document.getElementById('playlist-videos').value;

      // Парсинг YouTube URL (по одной на строку)
      const videoUrls = videoUrlsText
        .split('\n')
        .map(url => url.trim())
        .filter(url => url.length > 0);

      const videos = [];
      
      // Извлекаем информацию о каждом видео
      for (const url of videoUrls) {
        const videoId = extractYouTubeId(url);
        if (videoId) {
          videos.push({
            id: videoId,
            title: `Видео ${videos.length + 1}`,
            thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            src: `https://www.youtube.com/embed/${videoId}`,
            duration: 'YouTube'
          });
        }
      }

      const newPlaylist = {
        id: nextPlaylistId++,
        title: title,
        description: desc,
        icon: icon,
        videos: videos
      };

      playlists.push(newPlaylist);

      // Создание карточки плейлиста
      const playlistCard = createPlaylistCard(newPlaylist);
      document.getElementById('playlist-grid').appendChild(playlistCard);

      // Обновление селекта
      updatePlaylistSelect();

      // Закрытие модального окна и очистка формы
      closeModal(playlistModal);
      playlistForm.reset();
      
      alert(`Плейлист "${title}" успешно создан с ${videos.length} видео!`);
    });
  }

  // Обработка формы добавления видео
  const videoForm = document.getElementById('video-form');
  if (videoForm) {
    videoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('video-title').value;
      const desc = document.getElementById('video-desc').value;
      const duration = document.getElementById('video-duration').value;
      const videoType = document.querySelector('input[name="video-type"]:checked').value;
      const playlistId = document.getElementById('video-playlist').value;
      
      let videoSrc = '';
      if (videoType === 'youtube') {
        const youtubeUrl = document.getElementById('youtube-url').value;
        const videoId = extractYouTubeId(youtubeUrl);
        videoSrc = `https://www.youtube.com/embed/${videoId}`;
      } else if (videoType === 'youtube-playlist') {
        const playlistUrl = document.getElementById('youtube-playlist-url').value;
        const ytPlaylistId = extractYouTubePlaylistId(playlistUrl);
        videoSrc = `https://www.youtube.com/embed/videoseries?list=${ytPlaylistId}`;
      } else {
        const videoFile = document.getElementById('video-file').files[0];
        if (videoFile) {
          videoSrc = URL.createObjectURL(videoFile);
        }
      }

      const videoData = {
        title,
        desc,
        duration,
        src: videoSrc,
        type: videoType
      };

      // Если выбран плейлист, добавляем видео в него
      if (playlistId) {
        const playlist = playlists.find(p => p.id === parseInt(playlistId));
        if (playlist) {
          playlist.videos.push(videoData);
          updatePlaylistCard(playlist);
        }
      }

      // Создание карточки видео (с информацией о плейлисте)
      const playlistName = playlistId ? playlists.find(p => p.id === parseInt(playlistId))?.title : null;
      const videoCard = createVideoCard(title, desc, duration, videoSrc, videoType, playlistName);
      document.getElementById('video-grid').appendChild(videoCard);

      // Обновление счётчика
      updateVideoCount();

      // Закрытие модального окна и очистка формы
      closeModal(videoModal);
      videoForm.reset();
      
      // Информативное уведомление
      if (playlistId) {
        const playlistName = playlists.find(p => p.id === parseInt(playlistId))?.title || 'плейлист';
        alert(`✔️ Видео успешно добавлено в плейлист "${playlistName}"!\n\nТеперь оно будет доступно при открытии плейлиста.`);
      } else {
        alert('✔️ Видео успешно добавлено!');
      }
    });
  }

  // Обработка формы добавления статьи
  const articleForm = document.getElementById('article-form');
  if (articleForm) {
    articleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('article-title').value;
      const category = document.getElementById('article-category').value;
      const author = document.getElementById('article-author').value;
      const excerpt = document.getElementById('article-excerpt').value;
      const content = document.getElementById('article-content').value;

      // Создание карточки статьи
      const articleCard = createArticleCard(title, category, author, excerpt, content);
      document.getElementById('article-list').appendChild(articleCard);

      // Обновление счётчика
      updateArticleCount();

      // Закрытие модального окна и очистка формы
      closeModal(articleModal);
      articleForm.reset();
      
      alert('Материал успешно опубликован!');
    });
  }

  // Обработка формы добавления документа
  const docForm = document.getElementById('doc-form');
  if (docForm) {
    docForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const title = document.getElementById('doc-title').value;
      const type = document.getElementById('doc-type').value;
      const desc = document.getElementById('doc-desc').value;
      const file = document.getElementById('doc-file').files[0];

      if (file) {
        const fileSize = (file.size / 1024 / 1024).toFixed(1);
        
        // Создание карточки документа
        const docCard = createDocCard(title, type, desc, fileSize);
        document.getElementById('doc-grid').appendChild(docCard);

        // Обновление счётчика
        updateDocCount();

        // Закрытие модального окна и очистка формы
        closeModal(docModal);
        docForm.reset();
        
        alert('Документ успешно загружен!');
      }
    });
  }
});

// Вспомогательные функции для плейлистов
function createPlaylistCard(playlist) {
  const card = document.createElement('article');
  card.className = 'playlist-card';
  card.dataset.playlistId = playlist.id;
  
  card.innerHTML = `
    <div class="playlist-header">
      <div class="playlist-icon">${playlist.icon}</div>
      <span class="playlist-count">${playlist.videos.length} видео</span>
    </div>
    <h3>${playlist.title}</h3>
    <p>${playlist.description}</p>
    <button class="text-link playlist-view" data-playlist-id="${playlist.id}">Открыть плейлист →</button>
  `;
  
  return card;
}

function updatePlaylistCard(playlist) {
  const card = document.querySelector(`.playlist-card[data-playlist-id="${playlist.id}"]`);
  if (card) {
    const count = card.querySelector('.playlist-count');
    count.textContent = `${playlist.videos.length} видео`;
  }
}

function updatePlaylistSelect() {
  const select = document.getElementById('video-playlist');
  if (!select) return;
  
  // Очищаем селект
  select.innerHTML = '<option value="">Без плейлиста</option>';
  
  // Добавляем плейлисты
  playlists.forEach(playlist => {
    const option = document.createElement('option');
    option.value = playlist.id;
    option.textContent = playlist.title;
    select.appendChild(option);
  });
}

function openPlaylistView(playlistId) {
  const playlist = playlists.find(p => p.id === playlistId);
  if (!playlist) return;
  
  const modal = document.getElementById('playlist-view-modal');
  const title = document.getElementById('playlist-view-title');
  const desc = document.getElementById('playlist-view-desc');
  const videosContainer = document.getElementById('playlist-view-videos');
  
  title.textContent = playlist.title;
  desc.textContent = playlist.description;
  
  // Очищаем контейнер
  videosContainer.innerHTML = '';
  
  if (playlist.videos.length === 0) {
    videosContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center; padding: 40px;">В плейлисте пока нет видео</p>';
  } else {
    playlist.videos.forEach((video) => {
      const videoCard = document.createElement('div');
      videoCard.className = 'playlist-video-card';
      
      videoCard.innerHTML = `
        <div class="playlist-video-thumbnail">
          <img src="${video.thumbnail}" alt="${video.title}">
          <div class="playlist-video-play-icon">▶</div>
        </div>
        <div class="playlist-video-info">
          <h4>${video.title}</h4>
          <span class="video-duration">${video.duration}</span>
        </div>
      `;
      
      // При клике на видео - открываем плеер
      videoCard.addEventListener('click', () => {
        playVideo(video.src, video.title);
      });
      
      videosContainer.appendChild(videoCard);
    });
  }
  
  modal.classList.add('active');
}

// Остальные вспомогательные функции
function extractYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function createVideoCard(title, desc, duration, src, type, playlistName = null) {
  const card = document.createElement('article');
  card.className = 'video-card';
  
  const today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
  
  const thumbnail = type === 'youtube' 
    ? `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`
    : type === 'youtube-playlist'
    ? `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`
    : `<video controls><source src="${src}" type="video/mp4">Ваш браузер не поддерживает видео.</video>`;
  
  const categoryLabel = type === 'youtube' ? 'YouTube' 
    : type === 'youtube-playlist' ? 'YouTube Плейлист'
    : 'Локальное видео';
  
  const playlistBadge = playlistName 
    ? `<span class="playlist-badge">📁 ${playlistName}</span>` 
    : '';
  
  const youtubeButton = type === 'youtube-playlist' 
    ? `<a href="${src.replace('embed/videoseries?list=', 'playlist?list=')}" target="_blank" class="btn primary" style="margin-top: 12px;">🔗 Открыть на YouTube</a>`
    : '';
  
  card.innerHTML = `
    <div class="video-thumbnail">
      ${thumbnail}
    </div>
    <div class="video-info">
      <div class="video-tags">
        <span class="category">${categoryLabel}</span>
        ${playlistBadge}
      </div>
      <h3>${title}</h3>
      <p>${desc}</p>
      <p class="meta">Длительность: ${duration} мин · Загружено: ${today}</p>
      ${youtubeButton}
    </div>
  `;
  
  return card;
}

function createArticleCard(title, category, author, excerpt, content) {
  const card = document.createElement('article');
  card.className = 'article-card';
  
  const today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
  
  card.innerHTML = `
    <div class="article-header">
      <span class="category">${category}</span>
      <p class="meta">${today} · Автор: ${author}</p>
    </div>
    <h3>${title}</h3>
    <p class="article-excerpt">${excerpt}</p>
    <a class="text-link" href="#">Читать полностью →</a>
  `;
  // Открытие полного текста при клике
  const readLink = card.querySelector('.text-link');
  if (readLink) {
    readLink.addEventListener('click', (e) => {
      e.preventDefault();
      openArticleView({ title, author, category, content });
    });
  }

  const titleEl = card.querySelector('h3');
  [titleEl, card].forEach(el => {
    if (el) {
      el.addEventListener('click', (e) => {
        if (e.target.closest('.text-link')) return;
        openArticleView({ title, author, category, content });
      });
    }
  });

  return card;
}

function createDocCard(title, type, desc, fileSize) {
  const card = document.createElement('article');
  card.className = 'doc-card';
  
  const iconMap = {
    'Учебник PDF': '📘',
    'Таблицы': '📊',
    'Словарь PDF': '📗',
    'Аудио': '🎧'
  };
  
  card.innerHTML = `
    <div class="doc-icon">${iconMap[type] || '📄'}</div>
    <div class="doc-info">
      <span class="category">${type}</span>
      <h3>${title}</h3>
      <p>${desc}</p>
      <a class="text-link" href="#" download>Скачать (${fileSize} МБ) →</a>
    </div>
  `;
  
  return card;
}

function updateVideoCount() {
  const count = document.querySelectorAll('.video-card').length;
  const counter = document.getElementById('video-count');
  if (counter) counter.textContent = count;
}

// Открытие модала просмотра статьи
function openArticleView({ title, author, category, content }) {
  const modal = document.getElementById('article-view-modal');
  const titleEl = document.getElementById('article-view-title');
  const metaEl = document.getElementById('article-view-meta');
  const contentEl = document.getElementById('article-view-content');
  const closeBtn = document.getElementById('close-article-view-modal');

  if (!modal || !titleEl || !metaEl || !contentEl) return;

  titleEl.textContent = title;
  metaEl.textContent = `${category} · Автор: ${author}`;
  contentEl.textContent = content;

  modal.classList.add('active');

  // Назначаем обработчики закрытия
  if (closeBtn) {
    closeBtn.onclick = () => modal.classList.remove('active');
  }
  // Клик по фону
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  }, { once: true });
  // Закрытие по Esc
  const escHandler = (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

function updateArticleCount() {
  const count = document.querySelectorAll('.article-card').length;
  const counter = document.getElementById('article-count');
  if (counter) counter.textContent = count;
}

function updateDocCount() {
  const count = document.querySelectorAll('.doc-card').length;
  const counter = document.getElementById('doc-count');
  if (counter) counter.textContent = count;
}

// Извлечение YouTube Playlist ID
function extractYouTubePlaylistId(url) {
  const regExp = /[?&]list=([^#&?]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// Воспроизведение видео в модальном окне
function playVideo(videoSrc, videoTitle) {
  const playerModal = document.getElementById('video-player-modal');
  const playerIframe = document.getElementById('video-player-iframe');
  const playerTitle = document.getElementById('video-player-title');
  const playerError = document.getElementById('video-player-error');
  const youtubeLink = document.getElementById('video-player-youtube-link');
  
  if (playerModal && playerIframe && playerTitle) {
    playerTitle.textContent = videoTitle;
    
    // Извлекаем video ID для ссылки на YouTube
    const videoId = videoSrc.match(/embed\/([^?]+)/);
    const youtubeUrl = videoId ? `https://www.youtube.com/watch?v=${videoId[1]}` : videoSrc;
    
    // Скрываем ошибку и показываем iframe
    if (playerError) playerError.style.display = 'none';
    playerIframe.style.display = 'block';
    playerIframe.src = videoSrc + '?autoplay=1';
    
    // Устанавливаем ссылку на YouTube
    if (youtubeLink) youtubeLink.href = youtubeUrl;
    
    // Обработка ошибки загрузки iframe
    playerIframe.onerror = () => {
      if (playerError && youtubeLink) {
        playerIframe.style.display = 'none';
        playerError.style.display = 'block';
        youtubeLink.href = youtubeUrl;
      }
    };
    
    playerModal.classList.add('active');
  }
}

// Обработчик закрытия видео плеера
document.addEventListener('DOMContentLoaded', () => {
  const closeVideoPlayerBtn = document.getElementById('close-video-player-modal');
  const videoPlayerModal = document.getElementById('video-player-modal');
  const playerIframe = document.getElementById('video-player-iframe');
  
  if (closeVideoPlayerBtn && videoPlayerModal && playerIframe) {
    closeVideoPlayerBtn.addEventListener('click', () => {
      playerIframe.src = ''; // Останавливаем воспроизведение
      videoPlayerModal.classList.remove('active');
    });
    
    // Закрытие при клике вне модального окна
    videoPlayerModal.addEventListener('click', (e) => {
      if (e.target === videoPlayerModal) {
        playerIframe.src = '';
        videoPlayerModal.classList.remove('active');
      }
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoPlayerModal.classList.contains('active')) {
        playerIframe.src = '';
        videoPlayerModal.classList.remove('active');
      }
    });
  }
}); 

Al
