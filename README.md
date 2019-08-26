# marketPlaceApi
Api Rest from a marketplace developed on node.Js

## Requirements

Database mongodb

Install with docker

```bash
docker run --name mongoNode -p 27017:27017 -d -t mongo
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
