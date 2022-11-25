FROM node:latest
ENV NODE_ENV=production
WORKDIR /usr/src/mathi
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install -g npm@9.1.2
RUN npm install --save-dev eslint
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3002
RUN chown -R node /usr/src/mathi
USER node
RUN npm run build
CMD ["npm", "start"]
