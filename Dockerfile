FROM node:16-alpine 
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn global add serve
RUN yarn build

EXPOSE 3000
# Start the app
CMD [ "serve", "-s", "build" ]