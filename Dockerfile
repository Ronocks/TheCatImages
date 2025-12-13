FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose port
EXPOSE 8080

# Start the app
CMD ["node", "app.js"]