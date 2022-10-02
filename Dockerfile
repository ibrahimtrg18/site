# Name the node stage "builder"
FROM node:16
# Set working directory
WORKDIR /home/ibrahim-tarigan
# Copy all files from current directory to working dir in image
COPY . /home/ibrahim-tarigan
# install node modules and build assets
RUN yarn install && yarn build