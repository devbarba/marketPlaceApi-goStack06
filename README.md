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
```

## Install Dependencies

```bash
yarn install
```

## Test

```shell
yarn start 
```
