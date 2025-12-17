// Примеры документов - можно добавлять реальные файлы в папку assets/docs

// Добавляем примеры документов при загрузке
document.addEventListener('DOMContentLoaded', () => {
  // Примеры для различных категорий
  
  // ПОЛОЖЕНИЯ
  addDocument('positive', 'Положение о порядке приема', 'assets/docs/положение_прием.pdf', '2.5 MB');
  addDocument('positive', 'Положение об учебном процессе', 'assets/docs/положение_прием.pdf', '1.8 MB');
  addDocument('positive', 'Положение о дисциплинарной ответственности', 'assets/docs/положение_прием.pdf', '1.2 MB');
  
  // ЛИЦЕНЗИИ
  addDocument('licenses', 'Образовательная лицензия № 2024', 'assets/docs/положение_прием.pdf', '3.1 MB');
  addDocument('licenses', 'Лицензия на право ведения образовательной деятельности', 'assets/docs/положение_прием.pdf', '2.8 MB');
  
  // СЕРТИФИКАТЫ
  addDocument('certificates', 'Сертификат аккредитации НОКЛ', 'assets/docs/положение_прием.pdf', '1.5 MB');
  addDocument('certificates', 'ISO 9001:2015', 'assets/docs/положение_прием.pdf', '2.0 MB');
  addDocument('certificates', 'Сертификат качества образования', 'assets/docs/положение_прием.pdf', '1.7 MB');
  
  // ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ
  addDocument('programs', 'Программа подготовки: Бухгалтер', 'assets/docs/положение_прием.pdf', '2.2 MB');
  addDocument('programs', 'Программа подготовки: IT Специалист', 'assets/docs/положение_прием.pdf', '2.8 MB');
  addDocument('programs', 'Программа подготовки: Учитель начальных классов', 'assets/docs/положение_прием.pdf', '2.5 MB');
  
  // ПЛАН РАБОТЫ
  addDocument('plans', 'План работы на 2024-2025 год', 'assets/docs/положение_прием.pdf', '1.9 MB');
  addDocument('plans', 'Годовой план развития', 'assets/docs/положение_прием.pdf', '2.3 MB');
  addDocument('plans', 'Стратегический план развития 2024-2030', 'assets/docs/положение_прием.pdf', '2.1 MB');
  
  // МЕМОРАНДУМЫ
  addDocument('memoranda', 'Меморандум о сотрудничестве с ИГУ', 'assets/docs/положение_прием.pdf', '1.2 MB');
  addDocument('memoranda', 'Договор с партнерскими учреждениями', 'assets/docs/положение_прием.pdf', '1.7 MB');
  addDocument('memoranda', 'Соглашение о сотрудничестве с предприятиями', 'assets/docs/положение_прием.pdf', '1.4 MB');
  
  // КОНЦЕПЦИЯ
  addDocument('concept', 'Концепция развития колледжа 2024-2030', 'assets/docs/положение_прием.pdf', '2.6 MB');
  addDocument('concept', 'Миссия и видение колледжа', 'assets/docs/положение_прием.pdf', '1.1 MB');
  addDocument('concept', 'Стратегические инициативы', 'assets/docs/положение_прием.pdf', '1.8 MB');
});

// Инструкция по добавлению документов:
// 1. Создайте папку assets/docs в корне проекта
// 2. Загрузите PDF файлы в эту папку
// 3. Раскомментируйте строки выше и замените пути на реальные
// 4. Обновите названия и размеры файлов

// Пример структуры:
// new web site/
// ├── assets/
// │   ├── docs/
// │   │   ├── положение_прием.pdf
// │   │   ├── license_2024.pdf
// │   │   └── ...
// │   ├── js/
// │   ├── css/
// │   └── images/
// ├── documents.html
// └── ...
