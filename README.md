# My Visit Card Project

## Опис проєкту

Даний проєкт є простим статичним сайтом-візиткою, розгорнутим за допомогою сучасних інструментів DevOps.

У межах роботи було реалізовано:

* контейнеризацію застосунку за допомогою Docker
* CI/CD pipeline через GitHub Actions
* навантажувальне тестування за допомогою k6
* керування версіями бази даних через Liquibase
* автоматичне оновлення залежностей за допомогою Renovate Bot
* публікацію сайту через GitHub Pages

---

## Використані технології

* Docker
* Nginx
* GitHub Actions
* k6 (Grafana)
* Liquibase
* PostgreSQL
* Renovate Bot

---

## Docker

Було створено Docker-образ для запуску статичного сайту:

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

### ▶️ Локальний запуск

```bash
docker build -t my-app .
docker run -p 8080:80 my-app
```

Після запуску сайт доступний за адресою:

```
http://localhost:8080
```

---

## CI/CD Pipeline (GitHub Actions)

Pipeline включає:

*  Linter (перевірка коду)
*  Збірка Docker image
*  Push образу в GitHub Container Registry
*  Запуск тестів (k6)

---

## Тестування (k6)

Було реалізовано 3 типи тестів:

* **Smoke test** – перевірка доступності сайту
* **Load test** – перевірка роботи під навантаженням
* **Stress test** – перевірка меж системи


##  База даних та Liquibase

Для керування змінами бази даних використано Liquibase разом із PostgreSQL.

### Основні можливості:

* створення таблиць
* внесення змін до структури
* rollback (відкат змін)

---

## Renovate Bot

У проєкті налаштовано Renovate Bot для:

* автоматичного оновлення залежностей
* створення pull request

---

## GitHub Pages

Сайт опубліковано за допомогою GitHub Pages.

---

## 📁 Структура проєкту

```
.
├── index.html
├── style.css
├── Dockerfile
├── changelog.xml
├── liquibase.properties
├── smoke-test.js
├── load-test.js
├── stress-test.js
└── .github/workflows/ci.yml

