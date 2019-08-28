# marketPlaceApi

Api Rest from a marketplace developed on node.Js

## Requirements

Database mongodb and redis

Install with docker

```bash
docker run --name mongoNode -p 27017:27017 -d -t mongo
docker run --name redisNode -p 6379:6379 -d -t redis:alpine
```

Download master branch

```bash
git clone https://github.com/harbsprog/marketPlaceApi.git marketPlaceApi
cd marketPlaceApi
```

## Configuration

```shell
## In /src/config/database.js
replace the uri with your.
uri: 'mongodb://yourUser:yourPassword@localhost:yourPort/yourDB'

## In /src/config/auth.js
replace the secret and ttl with your.
secret: 'marketPlaceGoNod03',
ttl: 86400
```

```shell
## Create .env in the / of the project with these content
NODE_ENV=development or production
APP_SECRET=YOUR_APP_SECRET
APP_TTL=86400

DB_URL=YOUR_MONGODB_URL

REDIS_HOST=YOUR_REDIS_HOST
REDIS_PORT=YOUR_REDIS_PORT

MAIL_HOST=YOUR_MAIL_HOST
MAIL_PORT=YOUR_MAIL_PORT
MAIL_USER=YOUR_MAIL_USER
MAIL_PASS=YOUR_MAIL_PASS
MAIL_SECURE=false

SENTRY_DSN=YOUR_SENTRY_DSN
```

## Install Dependencies

```bash
yarn install
```

## Test

```shell
yarn start
```

## Requisitions

```bash
Filters: ?title=TITLE_HERE, ?price_min=PRICE_HERE, ?price_max=PRICE_HERE
```

```bash
### Create User
```

```bash
curl --request POST \
  --url http://localhost:3000/users \
  --header 'content-type: application/json' \
  --data '{
	"name": "User Name",
	"email": "sample@example.com",
	"password": "123456"
}'
```

```bash
### Create Session
```

```bash
curl --request POST \
  --url http://localhost:3000/sessions \
  --header 'content-type: application/json' \
  --data '{
	"email": "sample@example.com",
	"password": "123456"
}'
```

```bash
### Create Ads
```

```bash
curl --request POST \
  --url http://localhost:3000/ads \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjM0OTA0ODZkNTI2NGI0NGQxZGIxYSIsImlhdCI6MTU2Njk1NjkzOCwiZXhwIjoxNTY3MDQzMzM4fQ.y3Uds3Mzji6GDALrNkYjJV8fUSPNWxS9N7vQqfiOn_g' \
  --header 'content-type: application/json' \
  --data '{
	"title": "Curso de reactJS",
	"description": "Curso de programação em nodeJS",
	"price": 1000

}'
```

```bash
### Update Ads
```

```bash
curl --request PUT \
  --url http://localhost:3000/ads/ID_HERE \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjM0OTA0ODZkNTI2NGI0NGQxZGIxYSIsImlhdCI6MTU2Njk1NjkzOCwiZXhwIjoxNTY3MDQzMzM4fQ.y3Uds3Mzji6GDALrNkYjJV8fUSPNWxS9N7vQqfiOn_g' \
  --header 'content-type: application/json' \
  --data '{
	"title": "Curso de artesanato",
	"description": "Curso de programação em nodeJS",
	"price": 2500

}'
```

```bash
### Delete Ad
```

```bash
curl --request DELETE \
  --url http://localhost:3000/ads/ID_HERE \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjM0OTA0ODZkNTI2NGI0NGQxZGIxYSIsImlhdCI6MTU2Njk1NjkzOCwiZXhwIjoxNTY3MDQzMzM4fQ.y3Uds3Mzji6GDALrNkYjJV8fUSPNWxS9N7vQqfiOn_g'
```

```bash
### Show Ads
```

```bash
curl --request GET \
  --url 'http://localhost:3000/ads' \
  --header 'authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkNjM0OTA0ODZkNTI2NGI0NGQxZGIxYSIsImlhdCI6MTU2Njk1NjkzOCwiZXhwIjoxNTY3MDQzMzM4fQ.y3Uds3Mzji6GDALrNkYjJV8fUSPNWxS9N7vQqfiOn_g'
```
