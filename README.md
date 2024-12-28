 - git clone https://github.com/closelocation41/nodex-framework.git

 - Open Terminal CMD
 - cd nodex-framework
 - npm install -g migrate-mongo
 - migrate-mongo up
 - npm run install
 - Download mongodb compass and run - https://www.mongodb.com/try/download/compass
 - npm run start
 - http://localhost:3000/
 -curl --location 'http://localhost:3000/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"admin",
    "password":"Admin@123"
}'