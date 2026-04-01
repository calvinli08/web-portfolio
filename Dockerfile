FROM node:24-slim

WORKDIR /var/www/html

RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    cmake \
    git \
    curl \
    ca-certificates

EXPOSE 8080

ENTRYPOINT ["tail", "-f", "/dev/null"]