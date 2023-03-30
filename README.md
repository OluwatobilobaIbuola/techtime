# TechTime

The goal of the Home Page is to promote the various courses to be offered by techtime and also give users and potential students detailed information about the school.

## Target Audience

The Information and Communication Technology sector in Nigeria has seen significant growth and development in recent years. The National Bureau of Statistics revealed that the sector contributed 18.44 per cent to the nation's GDP in the second quarter of 2022. The number of startups in Nigeria was estimated to have exceeded 3,360 in 2022, the highest number in Africa. To follow, Kenya and South Africa counted approximately 1,000 and over 660 startups in the same year, respectively.
with the ever growing tech industry, more Nigerians will be looking to get into the tech industry and will that will need good guidance on the path to take that best suits them. techtime is the perfect school for nigerians or humans at large to start their tech carriers.

# Running App With Docker

If you already have [Docker](https://docs.docker.com/desktop/) installed on your local machine, Follow these instructions below

Create a docker-compose.yml file, copy and paste the below code into the file.

```docker
version: "3.8"
services:
  client:
    build: ./tech-times
    container_name: techtime_c
    ports:
      - 3000:3000
    image: techtime_i
    tty: true
    stdin_open: true
```

Run 
```bash 
docker-compose up
```

You should see the instance of the image generated from the Dockerfile running on your local-server port-3000 mapped to the port-3000 where the container is running.



