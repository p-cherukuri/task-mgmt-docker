FROM node:boron


# Create app directory
# Choose a directory for Docker image to go into here
WORKDIR /interview/server/

# Install app dependencies
COPY package.json .
#For npm@5 for later, copy package-lock.json as well
# COPY package.json package-lock.json ./


RUN npm install

# BUNDLE app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]