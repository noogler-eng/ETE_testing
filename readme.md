// Integration test -> unit test + database test
// we can how application interact with kafka or database
// dont mock out any external service call, running all external service

// downside
// slower to execute
// it add complixity
// local setup is required

// npm init -y && npx tsc --init
// mkdir src dist
// changes made in tsconfig.json
// npm i @types/express
// start docker locally ->
// docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword  -d postgres
// npx prisma migrate dev --name init
// npx prisma generate
// npx prisma studio

// take down local database
// docker ps
// docker kill container_id
