FROM node:latest

WORKDIR /app

COPY /app/admin-dashboard/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD ./app/admin-dashboard .

RUN npm config set fetch-retry-maxtimeout 120000
RUN npm i -g vite
RUN npm install --include=dev


ENTRYPOINT ["/entrypoint.sh"]



CMD ["npm", "run", "dev"]