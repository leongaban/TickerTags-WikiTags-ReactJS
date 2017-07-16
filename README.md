# wikitags
wikitags project

### setup
`npn install or yarn install`

### run dev localhost server
`npm run start` http://localhost:8080/wiki/

### run serverless
`serverless webpack serve` :8000

### run tickers wikitags server
`python hedge/web/wiki/wikitags_local.py` :8081

### compile dist folder
`npm run prod`

### TO DEPLOY
1. `serverless deploy` will deploy the function to s3 and create all the api mappings
2. on aws `api gateway` you need to *manually* click `Actions` dropdown and select `Deploy API` 
