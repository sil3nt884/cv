docker run -d -p 8000:8000 amazon/dynamodb-local

aws dynamodb create-table \
  --table-name Anime \
  --attribute-definitions AttributeName=id,AttributeType=S \
  --key-schema AttributeName=id,KeyType=HASH \
  --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
  --endpoint-url http://localhost:8000 \
  --region local