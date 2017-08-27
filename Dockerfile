FROM node:6.9.5-alpine
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm install -g -s --no-progress yarn && \
    yarn && \
    yarn cache clean
CMD [ "yarn", "start" ]
EXPOSE 3000