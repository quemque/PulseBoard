//TO DO
// Вынести ActivityCard в отдельный компонент.
// Tailwind + shadcn/ui — Button, Card, Dialog, Input, Select.

// React Router — 3 страницы: /, /activities/:id, /settings.

// React Hook Form + Zod — форма создания активности.

// localStorage — сохранение и загрузка состояния.

// Vitest + Testing Library — 5–7 тестов.

Я бы предложил не делать очередной todo.

## 🚀 Проект: **PulseBoard**

**Мини-дашборд для отслеживания привычек/активностей**, примерно на 2 дня.

Не пытайся делать полноценный backend. Главная цель — **практика frontend-стека и архитектуры**.

### Что умеет приложение

Главная страница:

```text
┌──────────────────────────────────────────────────────┐
│ PulseBoard                         🔍    🌙   👤     │
├──────────────────────────────────────────────────────┤
│                                                      │
│ My activities                                        │
│                                                      │
│ ┌────────────┐ ┌────────────┐ ┌────────────┐        │
│ │ 💻 Coding  │ │ 📚 English │ │ 🏃 Running │        │
│ │            │ │            │ │            │        │
│ │  12 days   │ │   8 days   │ │   5 days  │        │
│ │ ████████░░ │ │ █████░░░░░ │ │ ███░░░░░░ │        │
│ └────────────┘ └────────────┘ └────────────┘        │
│                                                      │
│ Recent activity                                      │
│                                                      │
│ ● Coding                         Today               │
│ ● English                        Yesterday           │
│ ● Running                        2 days ago          │
│                                                      │
│                         [+ Add activity]              │
└──────────────────────────────────────────────────────┘
```

Пользователь может:

- создавать активность;
- удалять её;
- отмечать выполнение за сегодняшний день;
- фильтровать активности;
- искать по названию;
- переключать `all / active / completed`;
- открывать страницу конкретной активности;
- менять тему;
- данные сохраняются в `localStorage`.

И всё. **Не добавляй авторизацию, PostgreSQL, Prisma, WebSocket, Docker и прочее.**

---

# Стек

Вот здесь проект становится интересным:

| Технология          | Для чего                 |
| ------------------- | ------------------------ |
| **React**           | UI                       |
| **TypeScript**      | типизация                |
| **Vite**            | сборка                   |
| **Redux Toolkit**   | глобальное состояние     |
| **RTK Query**       | работа с API             |
| **React Router**    | маршрутизация            |
| **React Hook Form** | формы                    |
| **Zod**             | валидация                |
| **Tailwind CSS**    | стили                    |
| **shadcn/ui**       | UI-компоненты            |
| **Vitest**          | тесты                    |
| **Testing Library** | тестирование компонентов |
| **ESLint**          | качество кода            |

Это уже достаточно близко к тому, что тебе полезно потрогать после твоего Next.js-проекта.

---

# Но зачем RTK Query, если нет backend?

Сделай маленький публичный API-запрос.

Например, на странице:

```text
Daily quote

"Small progress is still progress."

                  [New quote]
```

И получай цитаты через API.

Тогда ты потренируешь:

```text
component
   ↓
RTK Query
   ↓
HTTP request
   ↓
loading
   ↓
error
   ↓
data
```

То есть не просто Redux ради Redux.

---

# Redux Toolkit

Здесь специально **не используй Zustand**.

У тебя уже был Zustand в DeafSign, поэтому этот проект должен дать тебе возможность понять Redux Toolkit.

Например:

```ts
type Activity = {
   id: string
   title: string
   category: 'study' | 'work' | 'sport'
   completedDates: string[]
}
```

Store:

```text
store/
├── store.ts
└── activities/
    ├── activitiesSlice.ts
    └── selectors.ts
```

И потрогай:

```ts
createSlice()
createSelector()
configureStore()
useSelector()
useDispatch()
```

Особенно интересно будет сделать selectors:

```ts
selectAllActivities
selectCompletedActivities
selectActivitiesByCategory
selectActivityProgress
```

---

# React Router

Сделай буквально 3 страницы:

```text
/
├── Dashboard
│
├── /activities/:id
│   └── ActivityDetails
│
└── /settings
    └── Settings
```

Например:

```text
/activities/7
```

показывает:

```text
Coding

Current streak: 12 days

Mon  Tue  Wed  Thu  Fri  Sat  Sun
 ✓    ✓    ✓    ✗    ✓    ✓    ✓

[Mark today as completed]
```

Так ты потренируешь `useParams`, nested/layout routes и navigation.

---

# React Hook Form + Zod

Форма:

```text
Create activity

Title
[________________]

Category
[ Study ▼ ]

Target
[ 30 ] minutes

             [Cancel] [Create]
```

React Hook Form занимается формой.

Zod:

```ts
const activitySchema = z.object({
   title: z.string().min(2).max(50),
   category: z.enum(['study', 'work', 'sport']),
   targetMinutes: z.number().min(1).max(1440),
})
```

И получишь нормальный практический опыт:

```text
form
 ↓
React Hook Form
 ↓
Zod validation
 ↓
dispatch(createActivity(...))
 ↓
Redux
 ↓
UI
```

---

# localStorage

Вот это тоже обязательно.

Redux state не должен исчезать после:

```text
F5
```

Сделай небольшой persistence layer:

```text
localStorage
     ↓
loadActivities()
     ↓
Redux
```

и при изменении:

```text
Redux
  ↓
saveActivities()
  ↓
localStorage
```

Но **не бери redux-persist сразу**.

Попробуй сначала сделать это самостоятельно. Это маленькая задача, но хорошо прокачивает понимание Redux.

---

# shadcn/ui

Поскольку ты сейчас как раз работаешь с shadcn в trading-terminal, здесь можешь закрепить.

Используй:

```text
Button
Card
Dialog
Input
Select
Badge
Progress
DropdownMenu
```

Например `CreateActivityDialog`:

```text
Dialog
 └── Form
      ├── Input
      ├── Select
      └── Button
```

---

# Фильтрация

Сделай сверху:

```text
[All] [Study] [Work] [Sport]

🔍 Search...
```

Например:

```text
All:        8
Study:      3
Work:       2
Sport:      3
```

Причём фильтр **не должен храниться в Redux**, если он нужен только этому UI.

Это как раз хорошее упражнение на вопрос:

> Что должно быть global state, а что local state?

Например:

### Redux

```text
activities
theme
```

### local state

```text
searchQuery
isDialogOpen
selectedCategory
```

Это намного полезнее, чем просто механически использовать Redux везде.

---

# Тесты

Не надо писать 100 тестов.

Сделай примерно **5–7**.

Например:

```text
✓ activity can be created
✓ activity validation rejects empty title
✓ activity can be completed
✓ activity can be deleted
✓ filter returns only selected category
✓ search finds activity
✓ progress is calculated correctly
```

И отдельно один компонент:

```text
ActivityCard
```

проверить через Testing Library.

---

# Структура

Я бы сделал примерно так:

```text
src/
│
├── app/
│   ├── router.tsx
│   └── store.ts
│
├── components/
│   ├── ActivityCard/
│   ├── ActivityList/
│   ├── ActivityFilters/
│   └── CreateActivityDialog/
│
├── features/
│   └── activities/
│       ├── activitiesSlice.ts
│       ├── selectors.ts
│       └── types.ts
│
├── pages/
│   ├── DashboardPage.tsx
│   ├── ActivityPage.tsx
│   └── SettingsPage.tsx
│
├── services/
│   └── quotesApi.ts
│
├── hooks/
│
├── lib/
│   └── storage.ts
│
├── schemas/
│   └── activity.ts
│
└── main.tsx
```

Но **не надо воспринимать эту структуру как догму**. Если файл на 30 строк логично лежит рядом с компонентом — оставь его рядом.

---

# План на 2 дня

### День 1 — основа

**1–2 часа**

```text
Vite
TypeScript
Tailwind
shadcn
React Router
```

**2 часа**

```text
Redux Toolkit
activitiesSlice
selectors
```

**1–2 часа**

```text
Dashboard
ActivityCard
ActivityList
filters
```

К концу первого дня должно быть:

```text
создать → увидеть → удалить → отметить выполненным
```

---

### День 2 — нормальный frontend

**1 час**

```text
React Hook Form
Zod
CreateActivityDialog
```

**1 час**

```text
localStorage
```

**1 час**

```text
RTK Query
quotes API
```

**1 час**

```text
React Router
ActivityDetails
Settings
```

**1–2 часа**

```text
Vitest
Testing Library
```

И всё.

---

# Главное правило проекта

Я бы даже специально поставил себе ограничение:

> **Никакого AI во время написания кода.**

Ты можешь пользоваться:

- официальной документацией;
- Google;
- Stack Overflow;
- GitHub issues;
- DevTools;
- TypeScript errors.

Но код пишешь сам.

А если застрял — **не проси ИИ написать решение целиком**. Например, если не понимаешь `createSlice`, сначала сам читаешь документацию и пытаешься сделать.

Так этот маленький проект будет гораздо полезнее ещё одного большого проекта, где половина архитектуры придумана за тебя.

---

## И ещё один важный момент

Я бы **не пытался сделать PulseBoard красивее DeafSign**.

DeafSign у тебя уже закрывает:

```text
Next.js
PostgreSQL
Prisma
Zod
TanStack Query
Zustand
Server Actions
CI/CD
S3
```

А PulseBoard должен закрыть **другую часть frontend-инструментария**:

```text
React
Redux Toolkit
RTK Query
React Router
React Hook Form
Zod
Tailwind
shadcn
Vitest
Testing Library
```

Получится хорошая связка:

```text
                Твои проекты

DeafSign                         PulseBoard
────────                         ──────────
Next.js                          React + Vite
Server Components                Redux Toolkit
Server Actions                   RTK Query
TanStack Query                   React Router
Zustand                          React Hook Form
PostgreSQL                       localStorage
Prisma                           Vitest
S3                               Testing Library
CI/CD                            shadcn
```

И при этом **PulseBoard реально можно закончить за пару дней**, а не превратить в очередной проект на месяц.
