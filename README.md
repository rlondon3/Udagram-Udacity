Udagram-Udacity: This Udagram application was provided by Udacity.
====================
Hosting link <br>
http://frontendings.s3-website-us-east-1.amazonaws.com <br>
**PROJECT NO LONGER HOSTED!** <br>
**RUN IN LOCAL ENVIRONMENT!**
___________________________________

Hosting Udagram with Amazon Web Services:
<br>
-RDS used for a PostgreSQL database<br>
-S3 for hosting frontend and posts<br>
-Elastic Beanstalk for hosting the API<br>

Deployment with CircleCi:<br>
Updating the main branch immediately creates a build and deploys the code.<br>

Set Up Udagram-Udacity locally:
<br>
-Run npm install to download the necessary dependencies.<br>
-Create a .env file to be nested in the udagram-api folder using:
<br>
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

In the terminal navigate to udagram-api:<br>
-Run npm run dev<br><br>
Navigate to udagram-frontend:<br>
-Run npm run start<br><br>

Application will run on http://localhost:4200 in the browser.
____
CIRCLE CI
[![CircleCI](https://circleci.com/gh/rlondon3/Udagram-Udacity/tree/main.svg?style=svg)](https://circleci.com/gh/rlondon3/Udagram-Udacity/tree/main)
<br>
*See link below to verify this application successfully passed while deployed to AWS
<br>
https://app.circleci.com/pipelines/github/rlondon3/Udagram-Udacity/92/workflows/bcfab401-fdbf-404c-9722-e218c2bb2103/jobs/162/steps
____

