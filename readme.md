# MicroService - Issue Certificate

## API

This project serves as an API that interfaces with the Issue Certificate microservice. It is responsible for generating certificates and providing them to the main API.

## CERTIFICATION

This project serves as a microservice that issue the certificate for the user when it's requested.

## How to use

Follow these steps to get the application running:

# 1. Clone the Repository

Start by cloning the repository to your local machine.

# 2. Install Docker

Ensure you have up and running Docker installed on your machine. You can download it from the official <a href="https://www.docker.com/products/docker-desktop/" target="_blank">Docker website</a>.

# 3. Initialize the Application Services

Open the project in your IDE, then open a terminal and run the following command to start the application services, including the Kafka server:

`docker-compose up`

this command will download the necessary images and start a container with your services.

<img width="1010" alt="Screenshot 2024-06-23 at 18 07 09" src="https://github.com/Gabrielmtvp/certificate-microservice-kafka/assets/23700451/6bb6785e-9f96-4120-947b-3ef0cc1cab96">

Go to API folder and run the command below to start the API express with Kafka server.

`yarn dev`

Go to certification folder and run the command below to start the node application with Kafka server.

`node src/index.js`

---

Thank you for following along with this guide to set up and run the BetGameKotlinApi. I hope this guide has provided you with a clear path to getting your Spring Boot and Kotlin application up and running with Docker.

As you continue to explore and build, remember that each challenge is an opportunity to learn and grow. Don't hesitate to experiment with the code, try new things, and make the application truly your own.

Happy coding, and may your bets always be in your favor!

Made with a dash of ⚡ by me.
