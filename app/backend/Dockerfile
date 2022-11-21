FROM node:18.12.1-alpine

WORKDIR /app-backend

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
