import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import {DynamoDBDocumentClient} from "@aws-sdk/lib-dynamodb";
import {v4 as uuid} from "uuid";
import {sendResponse} from "../../helpers/response";



const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;


const client = new DynamoDBClient([{
    region: "eu-west-1",
    credentials: {
        accessKeyId: accessKeyId,  // dummy
        secretAccessKey: secretAccessKey, // dummy
    },
}]);

interface RequestPayload {
    version: string;
    routeKey: string;
    rawPath: string;
    rawQueryString: string;
    headers: {
        host: string;
        'content-type': string;
        'user-agent': string;
        accept: string;
        'content-length': string;
        'x-forwarded-for': string;
        'x-forwarded-port': string;
        'x-forwarded-proto': string;
    };
    requestContext: {
        http: {
            method: string;
            path: string;
            protocol: string;
            sourceIp: string;
            userAgent: string;
        };
        routeKey: string;
        timeEpoch: number;
    };
    body: string; // Contains the raw JSON as a string
    isBase64Encoded: boolean;
}



const ddb = DynamoDBDocumentClient.from(client);

export const handler = async (event: RequestPayload) => {
   const eventBody = event.body

   const payload = JSON.parse(eventBody);
   const id = uuid();

   const savePayload = {
       id: {S: id},
       name: {S: payload.name},
       rating: {S: payload.rating},
   };
    try {
        const params = {
            TableName: "Anime", // Replace with your table name
            Item: savePayload,
        };

        const command = new PutItemCommand(params);
        const response = await client.send(command);


        console.log("Item added successfully:", response);
        return sendResponse(response, 200)
    } catch (error) {
        console.error("Error adding item:", error);
        return sendResponse(error, 500)
    }
}

