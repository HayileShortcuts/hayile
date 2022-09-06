FROM node:14.20.0-alpine3.15 as build
WORKDIR web
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.23.1-alpine
COPY --from=build /web/dist/hayile /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
