# Use the official Node.js LTS image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY ./package.json ./
COPY ./yarn.lock ./
COPY . .

# Install dependencies
RUN yarn --frozen-lockfile
RUN CI=false yarn build

# Expose the Next.js application port
EXPOSE 3000

# Start the Next.js application
CMD ["yarn", "start"]