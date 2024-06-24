# solarxplain-app

Web crm of solarXplain (a solar panel project management portal). Work in progress...


# Docker komutları

- **build:** docker build -t solarxplain/solarxplain-web-app:latest .
- **run(server):** docker run -p 109.232.221.243:3000:3000 -d --name solarxplain-web-app solarxplain/solarxplain-web-app:latest
- **run(local):** docker run -p 3000:3000 -d --name solarxplain-web-app solarxplain/solarxplain-web-app:latest
- **push:** docker push solarxplain/solarxplain-web-app:latest
