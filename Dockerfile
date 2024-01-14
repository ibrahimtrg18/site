# Use the official Node.js LTS image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY ./package.json ./
COPY ./package-lock.json ./
COPY . .

# Install dependencies
RUN npm ci

# Build application
RUN npm run build

# Expose the Next.js application port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]