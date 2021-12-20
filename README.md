Udagram-Udacity: This Udagram application was provided by Udacity.
====================
Hosting link <br>
http://frontendings.s3-website-us-east-1.amazonaws.com
___________________________________

Hosting Udagram with Amazon Web Services:
<br>
-RDS used for a PostgreSQL database
-S3 for hosting frontend and posts
-Elastic Beanstalk for hosting the API

Deployment with CircleCi:
Updating the main branch immediately creates a build and deploys the code.

Set Up Udagram-Udacity locally:

Running Udagram locally:
-Run npm install to download the necessary dependencies.
-Create a .env file to be nested in the udagram-api folder using:
<br>
AWS_ACCESS_KEY_ID<br>
AWS_DEFAULT_REGION<br>
AWS_SECRET_ACCESS_KEY<br>
JWT_SECRET<br>
POSTGRES_DB<br>
POSTGRES_HOST<br>
POSTGRES_PASSWORD<br>
POSTGRES_PORT<br>
POSTGRES_USERNAME<br>
PORT<br>
URL<br>

In the terminal navigate to udagram-api:
-Run npm run dev
Navigate to udagram-frontend:
-Run npm run start

Application will run on http://localhost:4200 in the browser.
____
CIRCLE CI
[![CircleCI](https://circleci.com/gh/rlondon3/Udagram-Udacity/tree/main.svg?style=svg)](https://circleci.com/gh/rlondon3/Udagram-Udacity/tree/main)
____

