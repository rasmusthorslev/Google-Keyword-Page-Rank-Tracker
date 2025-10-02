FROM python:3.13-slim

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt /requirements.txt
COPY ./backend /backend
WORKDIR /backend

RUN python -m venv env /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /requirements.txt && \
    /py/bin/python -m playwright install chromium --with-deps
    
ENV PATH="/py/bin:$PATH"

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]