# Быстрый старт: Добавление переводов

## Шаг 1: Откройте файл переводов

Отредактируйте `assets/js/translations.js`

## Шаг 2: Добавьте ключ перевода

```javascript
const allTranslations = {
  ru: {
    // Существующие переводы...
    newButtonText: 'Нажми меня',  // Добавьте здесь
  },
  ky: {
    // Существующие переводы...
    newButtonText: 'Мене сыкпашыл', // И здесь
  },
  en: {
    // Существующие переводы...
    newButtonText: 'Click me', // И здесь
  }
};
```

## Шаг 3: Используйте в HTML

```html
<button data-i18n="newButtonText">Нажми меня</button>
```

Текст автоматически переводится при выборе языка!

---

## Полезные ссылки

- **Подробная документация:** [TRANSLATIONS.md](TRANSLATIONS.md)
- **Файл переводов:** [assets/js/translations.js](assets/js/translations.js)
- **Главный скрипт:** [assets/js/main.js](assets/js/main.js)

## Проверка

1. Откройте DevTools (F12)
2. Введите в консоль: `Object.keys(translations.ru).length`
3. Должно показать количество ключей (168+)

## Проблемы?

- Убедитесь, что файл `translations.js` подключен первым
- Проверьте, что `data-i18n` атрибут содержит ключ (не текст)
- Очистите кэш браузера (Ctrl+Shift+Del)
