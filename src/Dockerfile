# Use a base image with Node.js pre-installed
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code to the working directory
COPY . .

# Build your React application
RUN npm run build

# Expose the port your React app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
