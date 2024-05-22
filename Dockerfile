# Use an official Node.js runtime as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./  

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using serve
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 3000

# Command to run the React app
CMD ["serve", "-s", "build"]
