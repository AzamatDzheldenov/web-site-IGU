// Структура документов - здесь можно добавлять документы для каждой категории
const documentsData = {
  positive: {
    title: 'Положения',
    documents: []
    // Пример: { name: 'Положение о порядке приема', url: 'assets/docs/positive1.pdf', size: '2.5 MB' }
  },
  licenses: {
    title: 'Лицензии',
    documents: []
    // Пример: { name: 'Лицензия на образовательную деятельность', url: 'assets/docs/license.pdf', size: '1.2 MB' }
  },
  certificates: {
    title: 'Сертификаты',
    documents: []
  },
  programs: {
    title: 'Образовательные программы',
    documents: []
  },
  plans: {
    title: 'План работы',
    documents: []
  },
  memoranda: {
    title: 'Меморандумы',
    documents: []
  },
  concept: {
    title: 'Концепция',
    documents: []
  }
};

// Инициализация документов
function initDocuments() {
  Object.keys(documentsData).forEach(category => {
    renderDocuments(category, documentsData[category].documents);
  });
}

// Рендеринг документов в карточку
function renderDocuments(category, docs) {
  const container = document.querySelector(`[data-category="${category}"]`);
  
  if (!container) return;
  
  // Очищаем контейнер
  container.innerHTML = '';
  
  if (docs.length === 0) {
    container.innerHTML = '<div class="document-empty">Документы не загружены</div>';
    return;
  }
  
  docs.forEach(doc => {
    const link = document.createElement('a');
    link.href = doc.url;
    link.download = doc.name;
    link.className = 'document-file';
    link.target = '_blank';
    
    link.innerHTML = `
      <span class="document-file__icon">📥</span>
      <span class="document-file__name">${doc.name}</span>
      <span class="document-file__size">${doc.size}</span>
    `;
    
    // Добавляем обработчик для скачивания
    link.addEventListener('click', (e) => {
      downloadDocument(doc.url, doc.name);
      e.preventDefault();
    });
    
    container.appendChild(link);
  });
}

// Функция скачивания документа
function downloadDocument(url, fileName) {
  // Проверяем, является ли URL абсолютным путем
  if (!url.startsWith('http')) {
    // Если это локальный файл, используем стандартное скачивание
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // Для удаленных файлов открываем в новой вкладке
    window.open(url, '_blank');
  }
}

// Функция для добавления документа
function addDocument(category, name, url, size = 'unknown') {
  if (!documentsData[category]) {
    console.warn(`Category '${category}' does not exist`);
    return;
  }
  
  documentsData[category].documents.push({
    name: name,
    url: url,
    size: size
  });
  
  renderDocuments(category, documentsData[category].documents);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  initDocuments();
  
  // Добавляем примеры документов (можно закомментировать)
  // addDocument('positive', 'Положение о порядке приема', 'assets/docs/example.pdf', '2.5 MB');
  // addDocument('licenses', 'Образовательная лицензия', 'assets/docs/license.pdf', '1.2 MB');
});
