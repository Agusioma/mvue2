FROM node:18

WORKDIR /opt/app

ENV NODE_ENV production

COPY . .

RUN npm install

CMD ["npm", "run", "start"]