# pull the base image
FROM node:alpine

# set the working direction
WORKDIR /monster

# add `/app/node_modules/.bin` to $PATH
RUN echo $PATH
ENV PATH /monster/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# docker build -t monster .
# docker run -p 3000:3000 --name pokemon -d  monster