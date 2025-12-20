// Unified lectures module for all lecture pages

(function () {
  const lectureConfigs = {
    language: {
      playlists: [
        { id: 1, title: 'Английский для начинающих', description: 'Базовая грамматика, фонетика и лексика английского языка.', icon: '🇬🇧', videos: [] },
        { id: 2, title: 'Разговорная практика', description: 'Диалоги, ролевые игры и практика устной речи на английском.', icon: '🗣️', videos: [] },
      ],
      nextPlaylistId: 3,
      docIcons: {
        'Учебник PDF': '📘',
        'Таблицы': '📊',
        'Словарь PDF': '📗',
        'Аудио': '🎧',
      },
    },
    nvp: {
      playlists: [
        { id: 1, title: 'Строевая подготовка', description: 'Основы строевого шага, повороты, построения и команды.', icon: '⚔️', videos: [] },
        { id: 2, title: 'Огневая подготовка', description: 'Работа с оружием, правила безопасности, стрельба по мишеням.', icon: '🎯', videos: [] },
      ],
      nextPlaylistId: 3,
      docIcons: {
        'Устав PDF': '📘',
        'Инструкция': '📊',
        'Пособие PDF': '📗',
        'Справочник': '📕',
      },
    },
    programming: {
      playlists: [
        { id: 1, title: 'Основы Python', description: 'Введение в язык программирования Python для начинающих.', icon: '📚', videos: [] },
        { id: 2, title: 'Алгоритмы и структуры данных', description: 'Полный курс по алгоритмам: сортировки, поиск, деревья, графы.', icon: '🎯', videos: [] },
        {
          id: 3,
          title: 'Python Backend Development',
          description: 'Полный курс по разработке backend на Python с практическими примерами.',
          icon: '🚀',
          videos: [
            {
              title: 'Python Backend Development - Полный плейлист',
              desc: 'Комплексный курс по backend разработке на Python',
              duration: '180',
              src: 'https://www.youtube.com/embed/videoseries?list=PLDyJYA6aTY1nlkG0gBj96XDmDSC4Fy1TO',
              type: 'youtube-playlist',
            },
          ],
        },
      ],
      nextPlaylistId: 4,
      docIcons: {
        'Учебник PDF': '📘',
        'Презентация': '📊',
        'Методичка PDF': '📗',
        'Справочник': '📕',
      },
    },
  };

  const pageKey = detectPage();
  if (!pageKey) return;

  const config = lectureConfigs[pageKey];
  if (!config) return;

  let playlists = clone(config.playlists);
  let nextPlaylistId = config.nextPlaylistId;

  document.addEventListener('DOMContentLoaded', () => {
    // Mодальные окна
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

    // Без обязательных контейнеров дальше не работаем
    const playlistGrid = document.getElementById('playlist-grid');
    const videoGrid = document.getElementById('video-grid');
    if (!playlistGrid || !videoGrid) return;

    // Загрузка плейлистов в селект
    updatePlaylistSelect(playlists);

    // Открытие модальных окон
    addVideoBtn?.addEventListener('click', () => videoModal?.classList.add('active'));
    addArticleBtn?.addEventListener('click', () => articleModal?.classList.add('active'));
    addDocBtn?.addEventListener('click', () => docModal?.classList.add('active'));
    addPlaylistBtn?.addEventListener('click', () => playlistModal?.classList.add('active'));

    const closeModal = (modal) => modal?.classList.remove('active');

    closeVideoModal?.addEventListener('click', () => closeModal(videoModal));
    closeArticleModal?.addEventListener('click', () => closeModal(articleModal));
    closeDocModal?.addEventListener('click', () => closeModal(docModal));
    closePlaylistModal?.addEventListener('click', () => closeModal(playlistModal));
    closePlaylistViewModal?.addEventListener('click', () => closeModal(playlistViewModal));

    cancelVideo?.addEventListener('click', () => closeModal(videoModal));
    cancelArticle?.addEventListener('click', () => closeModal(articleModal));
    cancelDoc?.addEventListener('click', () => closeModal(docModal));
    cancelPlaylist?.addEventListener('click', () => closeModal(playlistModal));

    // Закрытие по клику на фон
    [videoModal, articleModal, docModal, playlistModal, playlistViewModal].forEach((modal) => {
      modal?.addEventListener('click', (e) => {
        if (e.target === modal) closeModal(modal);
      });
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        [videoModal, articleModal, docModal, playlistModal, playlistViewModal].forEach((modal) => {
          if (modal?.classList.contains('active')) closeModal(modal);
        });
      }
    });

    // Просмотр плейлиста
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target.classList?.contains('playlist-view') || target.closest?.('.playlist-view')) {
        const btn = target.classList.contains('playlist-view') ? target : target.closest('.playlist-view');
        const playlistId = parseInt(btn.dataset.playlistId, 10);
        openPlaylistView(playlistId, playlists, config.docIcons);
      }
    });

    // Переключение типа видео
    const videoTypeRadios = document.querySelectorAll('input[name="video-type"]');
    const youtubeUrlGroup = document.getElementById('youtube-url-group');
    const videoFileGroup = document.getElementById('video-file-group');
    const youtubePlaylistGroup = document.getElementById('youtube-playlist-group');

    videoTypeRadios.forEach((radio) => {
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

    // Создание плейлиста
    const playlistForm = document.getElementById('playlist-form');
    playlistForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('playlist-title').value;
      const desc = document.getElementById('playlist-desc').value;
      const icon = document.getElementById('playlist-icon').value;
      const videoUrlsText = document.getElementById('playlist-videos').value;

      const videoUrls = videoUrlsText
        .split('\n')
        .map((url) => url.trim())
        .filter((url) => url.length > 0);

      const videos = [];
      videoUrls.forEach((url) => {
        const videoId = extractYouTubeId(url);
        if (videoId) {
          videos.push({
            id: videoId,
            title: `Видео ${videos.length + 1}`,
            thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
            src: `https://www.youtube.com/embed/${videoId}`,
            duration: 'YouTube',
          });
        }
      });

      const newPlaylist = { id: nextPlaylistId++, title, description: desc, icon, videos };
      playlists.push(newPlaylist);

      playlistGrid.appendChild(createPlaylistCard(newPlaylist));
      updatePlaylistSelect(playlists);
      closeModal(playlistModal);
      playlistForm.reset();
      alert(`Плейлист "${title}" успешно создан с ${videos.length} видео!`);
    });

    // Добавление видео
    const videoForm = document.getElementById('video-form');
    videoForm?.addEventListener('submit', (e) => {
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
        if (videoFile) videoSrc = URL.createObjectURL(videoFile);
      }

      const videoData = { title, desc, duration, src: videoSrc, type: videoType };

      let playlistName = null;
      if (playlistId) {
        const playlist = playlists.find((p) => p.id === parseInt(playlistId, 10));
        if (playlist) {
          playlist.videos.push(videoData);
          updatePlaylistCard(playlist);
          playlistName = playlist.title;
        }
      }

      videoGrid.appendChild(createVideoCard(title, desc, duration, videoSrc, videoType, playlistName));
      updateVideoCount();
      closeModal(videoModal);
      videoForm.reset();

      if (playlistName) {
        alert(`✔️ Видео успешно добавлено в плейлист "${playlistName}"!`);
      } else {
        alert('✔️ Видео успешно добавлено!');
      }
    });

    // Добавление статьи
    const articleForm = document.getElementById('article-form');
    articleForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('article-title').value;
      const category = document.getElementById('article-category').value;
      const author = document.getElementById('article-author').value;
      const excerpt = document.getElementById('article-excerpt').value;
      const content = document.getElementById('article-content').value;

      const articleCard = createArticleCard(title, category, author, excerpt, content);
      document.getElementById('article-list')?.appendChild(articleCard);
      updateArticleCount();
      closeModal(articleModal);
      articleForm.reset();
      alert('Материал успешно опубликован!');
    });

    // Добавление документа
    const docForm = document.getElementById('doc-form');
    docForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('doc-title').value;
      const type = document.getElementById('doc-type').value;
      const desc = document.getElementById('doc-desc').value;
      const file = document.getElementById('doc-file').files[0];
      if (!file) return;

      const fileSize = (file.size / 1024 / 1024).toFixed(1);
      const docCard = createDocCard(title, type, desc, fileSize, config.docIcons);
      document.getElementById('doc-grid')?.appendChild(docCard);
      updateDocCount();
      closeModal(docModal);
      docForm.reset();
      alert('Документ успешно загружен!');
    });
  });

  // Helpers
  function updatePlaylistSelect(list) {
    const select = document.getElementById('video-playlist');
    if (!select) return;
    select.innerHTML = '<option value="">Без плейлиста</option>';
    list.forEach((playlist) => {
      const option = document.createElement('option');
      option.value = playlist.id;
      option.textContent = playlist.title;
      select.appendChild(option);
    });
  }

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
    const count = card?.querySelector('.playlist-count');
    if (count) count.textContent = `${playlist.videos.length} видео`;
  }

  function openPlaylistView(playlistId, list, docIcons) {
    const playlist = list.find((p) => p.id === playlistId);
    if (!playlist) return;
    const modal = document.getElementById('playlist-view-modal');
    const title = document.getElementById('playlist-view-title');
    const desc = document.getElementById('playlist-view-desc');
    const videosContainer = document.getElementById('playlist-view-videos');
    if (!modal || !title || !desc || !videosContainer) return;

    title.textContent = playlist.title;
    desc.textContent = playlist.description;
    videosContainer.innerHTML = '';

    if (!playlist.videos.length) {
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
        videoCard.addEventListener('click', () => playVideo(video.src, video.title));
        videosContainer.appendChild(videoCard);
      });
    }

    modal.classList.add('active');
  }

  function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  function extractYouTubePlaylistId(url) {
    const regExp = /[?&]list=([^#&?]+)/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }

  function createVideoCard(title, desc, duration, src, type, playlistName = null) {
    const card = document.createElement('article');
    card.className = 'video-card';
    const today = new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' });
    const thumbnail =
      type === 'youtube'
        ? `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`
        : type === 'youtube-playlist'
        ? `<iframe src="${src}" frameborder="0" allowfullscreen></iframe>`
        : `<video controls><source src="${src}" type="video/mp4">Ваш браузер не поддерживает видео.</video>`;

    const categoryLabel = type === 'youtube' ? 'YouTube' : type === 'youtube-playlist' ? 'YouTube Плейлист' : 'Локальное видео';
    const playlistBadge = playlistName ? `<span class="playlist-badge">📁 ${playlistName}</span>` : '';
    const youtubeButton =
      type === 'youtube-playlist'
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

    const readLink = card.querySelector('.text-link');
    readLink?.addEventListener('click', (e) => {
      e.preventDefault();
      openArticleView({ title, author, category, content });
    });

    const titleEl = card.querySelector('h3');
    [titleEl, card].forEach((el) => {
      el?.addEventListener('click', (e) => {
        if (e.target.closest('.text-link')) return;
        openArticleView({ title, author, category, content });
      });
    });

    return card;
  }

  function createDocCard(title, type, desc, fileSize, docIcons) {
    const card = document.createElement('article');
    card.className = 'doc-card';
    const icon = (docIcons && docIcons[type]) || '📄';
    card.innerHTML = `
      <div class="doc-icon">${icon}</div>
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
    const counter = document.getElementById('video-count');
    if (counter) counter.textContent = document.querySelectorAll('.video-card').length;
  }

  function updateArticleCount() {
    const counter = document.getElementById('article-count');
    if (counter) counter.textContent = document.querySelectorAll('.article-card').length;
  }

  function updateDocCount() {
    const counter = document.getElementById('doc-count');
    if (counter) counter.textContent = document.querySelectorAll('.doc-card').length;
  }

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

    closeBtn && (closeBtn.onclick = () => modal.classList.remove('active'));
    modal.addEventListener(
      'click',
      (e) => {
        if (e.target === modal) modal.classList.remove('active');
      },
      { once: true }
    );

    const escHandler = (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  }

  function playVideo(videoSrc, videoTitle) {
    const playerModal = document.getElementById('video-player-modal');
    const playerIframe = document.getElementById('video-player-iframe');
    const playerTitle = document.getElementById('video-player-title');
    const playerError = document.getElementById('video-player-error');
    const youtubeLink = document.getElementById('video-player-youtube-link');
    if (!playerModal || !playerIframe || !playerTitle) return;

    playerTitle.textContent = videoTitle;
    const videoId = videoSrc.match(/embed\/([^?]+)/);
    const youtubeUrl = videoId ? `https://www.youtube.com/watch?v=${videoId[1]}` : videoSrc;

    if (playerError) playerError.style.display = 'none';
    playerIframe.style.display = 'block';
    playerIframe.src = `${videoSrc}?autoplay=1`;
    if (youtubeLink) youtubeLink.href = youtubeUrl;

    playerIframe.onerror = () => {
      if (playerError && youtubeLink) {
        playerIframe.style.display = 'none';
        playerError.style.display = 'block';
        youtubeLink.href = youtubeUrl;
      }
    };

    playerModal.classList.add('active');
  }

  // Закрытие видеоплеера
  document.addEventListener('DOMContentLoaded', () => {
    const closeVideoPlayerBtn = document.getElementById('close-video-player-modal');
    const videoPlayerModal = document.getElementById('video-player-modal');
    const playerIframe = document.getElementById('video-player-iframe');
    if (!closeVideoPlayerBtn || !videoPlayerModal || !playerIframe) return;

    const stop = () => {
      playerIframe.src = '';
      videoPlayerModal.classList.remove('active');
    };

    closeVideoPlayerBtn.addEventListener('click', stop);
    videoPlayerModal.addEventListener('click', (e) => {
      if (e.target === videoPlayerModal) stop();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && videoPlayerModal.classList.contains('active')) stop();
    });
  });

  function detectPage() {
    const fromDataset = document.body?.dataset?.lecturesPage;
    if (fromDataset) return fromDataset;
    const path = (location.pathname || '').toLowerCase();
    if (path.includes('programming')) return 'programming';
    if (path.includes('nvp')) return 'nvp';
    if (path.includes('language')) return 'language';
    return null;
  }

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

})();