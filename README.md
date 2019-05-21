Install nvm and node v11.8 if not installed
```
nvm --version # to check if nvm is not installed
# if nvm is not installed run this else skip
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

nvm install 11.6
nvm use 11.6
npm install
```

Install mongodb
```
mongod --version # to check if mongodb is not installed
# if mongod is not installed run this else skip

brew update
brew install mongodb

# Create the “db” directory. This is where the Mongo data files will live. 
mkdir -p /data/db

# Make sure that the /data/db directory has the right permissions by running
sudo chown -R `id -un` /data/db
# Enter your password

mongod
```

To seed data into the database
```
node --experimental-modules ./models/seeders/EmployeeSeeder.mjs
```


To run the project and server in watch node <br>
```
node --experimental-modules app.mjs
```

To see results go to the following url and search according to the 
following data and search with the parameters location, profile and 
name(first letter should be capital of all the parameters)
```
http://localhost:3000/html

{
    "name": "Kush Gumber",
    "email": "kushgumber@gmail.com",
    "phone": "3874298943",
    "location": "Bathinda",
    "company": "BITCS",
    "profile": "Backend Developer"
  }, {
    "name": "Rahul Arora",
    "email": "kushgumber@gmail.com",
    "phone": "3874298943",
    "location": "Faridabad",
    "company": "BITCS",
    "profile": "Frontend Developer"

  }, {
    "name": "Rohit Gupta",
    "email": "kushgumber@gmail.com",
    "phone": "3874298943",
    "location": "Patiala",
    "company": "BITCS",
    "profile": "Human Resource"

  }, {
    "name": "Kaustubh Kaushik",
    "email": "kushgumber@gmail.com",
    "phone": "3874298943",
    "location": "Ghaziabad",
    "company": "BITCS",
    "profile": "Full stack developer"

  }, {
    "name": "Vaibhav Kalra",
    "email": "kushgumber@gmail.com",
    "phone": "3874298943",
    "location": "Noida",
    "company": "BITCS",
    "profile": "Mean stack developer"
  }, {
    "name": "Akshay Sharma",
    "email": "kushgumber@gmail.com",
    "phone": "3874298943",
    "location": "Gurgaon",
    "company": "BITCS",
    "profile": "Mern stack developer"
  }

```
