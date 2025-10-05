# Keyword Rank Tracker for Google Search

A full-stack keyword rank tracking application built with Playwright Stealth, Django, React, and PostgreSQL, all running in Docker.  
The system scrapes Google search results for keyword positions, stores them in a PostgreSQL database, and displays the results in a React dashboard.

---

## Tech Stack

**Backend**
- Django + Django REST Framework  
- PostgreSQL (via Django ORM)  
- Playwright Stealth for automated, undetectable scraping  
- Dockerized for consistent deployment

**Frontend**
- React in plain JavaScript + Material UI  
- Communicates with Django REST API

---

## Features

- Keyword ranking scraper using Playwright Stealth in Python
- Django ORM integration with PostgreSQL  
- REST API for frontend communication  
- Django Admin panel for managing clients and keywords  
- Docker setup for full local deployment  
- Material UI and React for frontend dashboard
- For rotating proxies, simply pass a proxy dictionary to chromium.launch()

---

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/google-rank-tracker.git
cd google-rank-tracker
```

### 2. Build and run with Docker
```bash
docker compose build
docker compose up
```

The backend (API) and frontend will now be available locally.

---

## URLs

| Service | URL |
|----------|-----|
| Frontend (React) | http://localhost:5173 |
| API (Django REST) | http://localhost:8000/api/ |
| Admin Dashboard | http://localhost:8000/admin/ |

---

## Running the Scraper

To execute the scraper on the currently saved keywords:
```bash
docker compose exec backend python -m scraper.scraper
```

The scraper fetches Google search results using Playwright Stealth and updates the PostgreSQL database through Django ORM.

---

## Requirements

If you want to run it without Docker, install the dependencies manually:

**requirements.txt**
```
Django
djangorestframework
django-cors-headers
django-filter
psycopg2-binary
asgiref>=3.4.0
playwright
playwright_stealth
```

Then install Playwright browsers:
```bash
playwright install chromium
```

---

## Admin Usage

Create and manage:
- Clients  
- Keywords  

directly from the Django admin dashboard at  
[http://localhost:8000/admin/](http://localhost:8000/admin/)

---

## Notes

- The scraper uses Playwright Stealth and deprecated useragent to bypass captcha and detection.
- All scraped data is stored and served via Django ORM and REST API.  
- The React frontend fetches and displays keyword rank results dynamically.
