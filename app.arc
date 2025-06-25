@app
relist

@http
get /list
post /create


@aws
runtime typescript
region eu-west-1
permissions
  - dynamodb:*

@static

@plugins
architect/plugin-typescript