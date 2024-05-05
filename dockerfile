# Estágio de construção
FROM node:16-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Estágio de produção
FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY package.json package-lock.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["npm", "start"]