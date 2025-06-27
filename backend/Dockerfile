FROM node:18-alpine

# Install dependencies for bcrypt
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies and remember to check for nodemon after ;)
RUN npm install

# Copy application files
COPY . .

# Create logs directory
RUN mkdir -p logs

EXPOSE 5001

# Use npm start which runs nodemon
CMD ["npm", "start"]