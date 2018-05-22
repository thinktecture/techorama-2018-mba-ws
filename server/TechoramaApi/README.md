# Server-side Azure functions

This sample project acts as a _serverless_ back-end.

## Running the solution

This project can be run locally, using Visual Studio 2017. By default, it will host the Azure Functions stated below.

|Function           | URL                                      |
|-------------------|------------------------------------------|
| AddSession        | http://localhost:7071/api/sessions       |
| GetSessionDetails | http://localhost:7071/api/sessions/{id}  |
| ListSessions      | http://localhost:7071/api/sessions       |

## Creating a CosmosDB table

Head over to portal.azure.com and create a database with a table and collection [as specified here](https://github.com/thinktecture/techorama-2018-mba-ws/blob/master/server/TechoramaApi/SessionsApi.cs#L47).

## Adding a sample session

```
curl -X POST \
  http://localhost:7071/api/sessions \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -d '{
	"id": "038a356d-541e-453c-bc37-4d64d9641f89",
	"title": "Developing Electron apps",
	"description": "We'\''re going to build some Electron apps!",
	"level": "300",
	"speakers":
	[ 
		{
			"id": "760bb452-9691-47e1-b93c-c52c7c345650",
			"firstname": "John",
			"lastname": "Doe",
			"email": "j.doe@microsoft.com"s
		}
	]
}'
```
