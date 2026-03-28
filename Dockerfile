FROM ubuntu
RUN apt-get update
RUN apt-get install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash
RUN  apt install -y nodejs
COPY package.json package.json
COPY app.js app.js
COPY /controller /controller
COPY /model /model
COPY /socket /socket
COPY /utils /utils
RUN npm install
ENTRYPOINT ["node", "app.js"]

