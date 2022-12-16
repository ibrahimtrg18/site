# Name the node stage "builder"
FROM node:16-alpine

# Set working directory
WORKDIR /home/me

# Copy all files from current directory to working dir in image
COPY . /home/me

# Copy nginx configuration file to volume /conf
COPY ./nginx.conf /home/me/nginx/default.conf.template

# install node modules and build assets
RUN npm install && npm run build

CMD [ "yarn", "start", "-p", "8080" ]