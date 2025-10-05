FROM python:3.13-slim

ENV PYTHONUNBUFFERED=1


COPY ./requirements.txt /requirements.txt


RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /requirements.txt && \
    /py/bin/python -m playwright install chromium --with-deps

ENV PATH="/py/bin:$PATH"

COPY ./backend /backend
WORKDIR /backend

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
