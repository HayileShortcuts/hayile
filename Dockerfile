FROM node:14.20.0-alpine3.15 as el_compilador
WORKDIR web
COPY . .
RUN npm install
RUN npm run

FROM nginx:1.23.1-alpine
COPY --from=el_compilador /web/dist/hayile /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
