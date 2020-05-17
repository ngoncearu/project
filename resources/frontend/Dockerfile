FROM angular/ngcontainer

USER root

WORKDIR /application

COPY . .

RUN npm install

RUN npm install -g @angular/cli

ENTRYPOINT npm run docker
