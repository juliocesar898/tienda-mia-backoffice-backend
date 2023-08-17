# Api REst TiendaMia 📚

## Starting 🚀



### Prerequisites 📋

```
Nodejs 14.x.x or higher
```

### Installation 🔧


A little intro about the installation. 
```
$ git clone https://github.com/juliocesar898/tienda-mia-backoffice-backend.git
$ cd /tienda-mia-backoffice-backend
$ npm install
$ npm run dev
```

📘 Full Swagger GUI are available at http://localhost:40000/api/docs

📡 Full Swagger Online GUI are available ---> http://24.199.109.40/api/docs

🚀🚀 Actually you can see the api health at http://24.199.109.40/api/health

## Create new user ✔
```
curl POST --location 'http://24.199.109.40/api/auth/signup' \
--header 'Content-Type: application/json' \
--data '{
    "username": "new user",
    "email": "user1234@testing.com",
    "password": "password1234",
    "phone": "+12345678"
}'
```


## Login User 🔐
```
curl POST --location 'http://24.199.109.40/api/auth/signin' \
--header 'Content-Type: application/json' \
--data '{
    "email": "user1234@testing.com",
    "password": "password1234"
}'
```

## Change Password 🔑
```
curl POST --location 'http://24.199.109.40/api/auth/change-password' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer token' \
--data '{
    "newPassword": "mypass123456"
}'
```

## GEt Profile USer 🔍
```
curl --location 'http://24.199.109.40/api/auth/profile' \
--header 'Authorization: Bearer token'
```

## Deployment 📦

This project was deployed on Digital Ocean, you can see the docs in http://24.199.109.40/api/docs

## Built with 🛠️

* [Nodejs](https://nodejs.org/es/docs) 


## Author ✒️

* **Julio Flores** - *Initial Work* - [juliocesar898](https://github.com/juliocesar898)



---
⌨️ By [juliocesar898](https://github.com/juliocesar898) 📘
