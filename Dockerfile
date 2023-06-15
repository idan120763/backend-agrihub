# Base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the application files
COPY . /app

# Expose the port your application listens on
EXPOSE 3000

# Define the command to run when the container starts
CMD [ "node", "server.js" ]
