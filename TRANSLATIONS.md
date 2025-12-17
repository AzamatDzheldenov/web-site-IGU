# Система многоязычного перевода сайта

## Обзор

Сайт поддерживает три языка:
- **Русский (ru)** - основной язык
- **Кыргызский (ky)** - национальный язык
- **Английский (en)** - международный язык

## Структура файлов

```
assets/js/
├── translations.js      # Основной файл со всеми переводами
├── main.js             # Главный скрипт с системой переводов
└── lectures-*.js       # Дополнительные файлы лекций
```

## Как добавить перевод

### 1. Добавить перевод в `translations.js`

Откройте файл `assets/js/translations.js` и найдите объект нужного языка. Добавьте новый ключ:

```javascript
const allTranslations = {
  ru: {
    myNewKey: 'Мой новый текст',
    // ... другие переводы
  },
  ky: {
    myNewKey: 'Менин жаңы текстим',
  },
  en: {
    myNewKey: 'My new text',
  }
};
```

### 2. Добавить атрибут в HTML

Добавьте атрибут `data-i18n` к элементу в HTML:

```html
<h1 data-i18n="myNewKey">Мой новый текст</h1>
<p data-i18n="missionTitle">Миссия колледжа</p>
<span data-i18n="buildingsEyebrow">Инфраструктура</span>
```

## Текущие переводы

### Общие элементы
- `brandName` - Название колледжа
- `brandSub` - Подзаголовок бренда

### Навигация
- `navPrograms` - Программы
- `navNews` - Новости
- `navEvents` - События
- `navCampus` - Студентам
- `navLectures` - Лекции
- `navSchedule` - Расписание
- `navChat` - Чат
- `navApply` - Поступить

### Главная страница
- `heroEyebrow` - Подзаголовок героя
- `heroTitle` - Заголовок героя
- `heroLead` - Описание героя
- `heroPrimary` - Кнопка "Поступить"
- `heroSecondary` - Кнопка "Новости"

### Метрики
- `metaProgramsLabel` - "Программ подготовки"
- `metaProgramsValue` - "16"
- `metaStudentsLabel` - "Студентов"
- `metaStudentsValue` - "2500+"
- `metaCityLabel` - "Город"
- `metaCityValue` - "Каракол"

### Карточка "О колледже"
- `cardLabel` - Подзаголовок
- `cardTitle` - Заголовок
- `cardText` - Описание

### Теги/Категории
- `tagApplied` - Прикладные науки
- `tagTech` - Техника
- `tagService` - Сервис

### Новости
- `newsEyebrow` - Подзаголовок
- `newsTitle` - "Новости и достижения"
- `newsLead` - Описание

### Студенты
- `studentsEyebrow` - Подзаголовок
- `studentsTitle` - "Наша команда"
- `studentsLead` - Описание

### События
- `eventsEyebrow` - Подзаголовок
- `eventsTitle` - "События и встречи"
- `eventsLead` - Описание

### Программы обучения
- `academicsEyebrow` - Подзаголовок
- `academicsTitle` - "Специальности и профили"
- `academicsLead` - Описание

### Специальности
- `specialtiesEyebrow` - Подзаголовок
- `specialtiesTitle` - "Специальности и сроки"

### Кампус
- `campusEyebrow` - Подзаголовок
- `campusTitle` - "Учёба и быт в Караколе"
- `campusLead` - Описание

### Призыв к действию
- `ctaEyebrow` - Подзаголовок
- `ctaTitle` - "Присоединяйтесь к колледжу"
- `ctaLead` - Описание
- `ctaPrimary` - "Оставить заявку"
- `ctaSecondary` - "Записаться на визит"
- `ctaNoteTitle` - "Почему выбирают нас"

### Подвал
- `footerName` - Название в подвале
- `footerSub` - Подзаголовок подвала
- `footerTop` - "Наверх"
- `footerNews` - "Новости"
- `footerEvents` - "События"
- `footerAcademics` - "Программы"
- `footerNote` - Примечание подвала

### Страница Миссии
- `missionTitle` - "Миссия колледжа"
- `missionEyebrow` - "О колледже"
- `missionCard1` - "Миссия"
- `missionCard1Desc` - Описание миссии
- `missionCard2` - "Видение"
- `missionCard2Desc` - Описание видения
- `missionCard3` - "Ценности"
- `missionCard3Desc` - Описание ценностей

### Страница Корпусов
- `buildingsTitle` - "Наши корпуса"
- `buildingsEyebrow` - "Инфраструктура"
- `buildingsIntro` - Введение
- `classroomsTitle` - "Наши аудитории"

### Страница Директора
- `directorTitle` - "Обращение директора"
- `directorEyebrow` - "Руководство"

### Страница Документов
- `documentsTitle` - "Нормативно-правовые документы"
- `documentsEyebrow` - "Официальные документы"
- `docPositive` - "Положения"
- `docLicenses` - "Лицензии"
- `docCertificates` - "Сертификаты"
- `docPrograms` - "Образовательные программы"
- `docPlans` - "План работы"
- `docMemorandum` - "Меморандумы"
- `docConcept` - "Концепция"

### Лекции
- `lecturesTitle` - "Лекции и видеоматериалы"
- `lecturesEyebrow` - "Образовательный контент"
- `addPlaylist` - "Добавить плейлист"
- `addVideo` - "Добавить видео"

### Действия
- `apply` - "Поступить"
- `visit` - "Посетить"
- `learn` - "Узнать больше"
- `download` - "Скачать"
- `view` - "Просмотреть"
- `close` - "Закрыть"
- `loading` - "Загрузка..."
- `error` - "Ошибка"
- `success` - "Успешно"

## Как работает система

1. **Загрузка переводов** - Файл `translations.js` загружается первым на всех страницах
2. **Инициализация** - При загрузке страницы вызывается функция `init()`, которая применяет переводы
3. **Применение переводов** - Функция `applyTranslations(lang)` ищет все элементы с атрибутом `data-i18n` и заменяет их текст на переводы
4. **Переключение языка** - При выборе языка в селекторе вызывается `applyTranslations()` с новым языком

## Код для подключения

Убедитесь, что на каждой странице подключены:

```html
<!-- В теге <head> -->
<script src="assets/js/translations.js"></script>

<!-- В конце <body> -->
<script src="assets/js/main.js"></script>
```

## Использование в JavaScript

Если нужно получить перевод из JavaScript кода:

```javascript
const text = translations['ru'].brandName; // "Колледж ИГУ им. Касыма Тыныстанова"
const kyrgyzText = translations['ky'].brandName; // "К. Тыныстанов атындагы ЫКМУ колледжи"
```

## Примеры

### Пример 1: Добавить переводимый элемент

```html
<h1 data-i18n="myTitle">Заголовок</h1>
```

### Пример 2: Добавить перевод

```javascript
// В translations.js
ru: {
  myTitle: 'Мой заголовок на русском',
  // ...
},
ky: {
  myTitle: 'Менин аталышым кыргызча',
},
en: {
  myTitle: 'My Title in English',
}
```

### Пример 3: Переключение языка

```javascript
// Пользователь выбирает язык
applyTranslations('en'); // Применяет английские переводы
applyTranslations('ky'); // Применяет кыргызские переводы
applyTranslations('ru'); // Применяет русские переводы
```

## Проверка переводов

1. Откройте консоль браузера (F12)
2. Проверьте в селекторе языков - переводы должны применяться сразу
3. Используйте `document.querySelectorAll('[data-i18n]')` для поиска элементов с переводами
4. Проверьте объект `translations` в консоли для просмотра всех доступных переводов

## Расширение системы

### Для добавления нового языка:

1. Добавьте новый объект в `translations.js`
2. Добавьте опцию в селектор языков в HTML
3. Добавьте новый язык в `setupLanguageSwitcher()`

### Для добавления новой страницы:

1. Добавьте переводы для новой страницы в `translations.js`
2. Добавьте атрибуты `data-i18n` на элементы страницы
3. Подключите `translations.js` и `main.js` на странице

---

**Дата обновления:** 15 декабря 2025 г.
