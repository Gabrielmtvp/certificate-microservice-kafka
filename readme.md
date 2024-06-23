# MicroService - Issue Certificate

## Overview

This project serves as an API that interfaces with the Issue Certificate microservice. It is responsible for generating certificates and providing them to the main API.

## Certification Service

This microservice is responsible for issuing certificates for users upon request.

## How to use

Follow these steps to get the application running:

# 1. Clone the Repository

Start by cloning the repository to your local machine:

`git clone <repository-url>`

`cd <repository-directory>`

# 2. Install Docker

Ensure you have up and running Docker installed on your machine. You can download it from the official <a href="https://www.docker.com/products/docker-desktop/" target="_blank">Docker website</a>.

# 3. Initialize the Application Services

Open the project in your IDE, then open a terminal and run the following command to start the application services, including the Kafka server:

`docker-compose up`

This command will download the necessary images and start a container with your services.

You can verify it's working by checking the certification server, which will display the received messages.

# Conclusion

Thank you for following this guide to set up and run the Issue Certificate microservice. We hope this guide has provided you with a clear path to getting your NodeJS application up and running with Docker.

As you continue to explore and build, remember that each challenge is an opportunity to learn and grow. Don't hesitate to experiment with the code, try new things, and make the application truly your own.

Happy coding, and may your projects always be successful!

Made with ❤️ and a dash of ⚡ by me.
