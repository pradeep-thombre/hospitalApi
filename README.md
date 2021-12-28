# Hospital API

> This api is used for managing the doctors and pateints, doctors can track the patients .

## Technologies Used

1.  Nodejs
2.  Express
3.  MongoDB for database

## Prerequisites

- MongoDB
- Node.js 
- Command Line Tools
- Visual Studio Code
- Postman for testing

## Installation

##### # Get the latest snapshot

`git clone https://github.com/pradeep-thombre/hospital-api.git myproject`

##### # Change directory

`cd myproject`

##### # Install NPM dependencies

`npm install`

##### # Then simply start your app

`npm start`

#### # The Server should running at: https://ninja-hospital-api.herokuapp.com/

## How to use 
- For registering doctor use - https://ninja-hospital-api.herokuapp.com/api/v1/doctors/register
  -Enter following details
    1. name
    2. phone
    3. address
    4. speciality
    5. password
    6. confirm_password

- For log in doctor use - https://ninja-hospital-api.herokuapp.com/api/v1/doctors/login
  -Enter following details
    1. name
    2. password

- For registering patients use - https://ninja-hospital-api.herokuapp.com/api/v1/patients/register
  -Enter following details
    1. name
    2. phone
    3. address

- For creating reports for patients use - https://ninja-hospital-api.herokuapp.com/api/v1/patients/:id/create_report
  -Enter following details
    1. doctor
    2. status
    3. date

- For seeing all reports of patients use - https://ninja-hospital-api.herokuapp.com/api/v1/patients/:id/all_reports


## Folder Structure

app <br>
├── config <br>
│ --- ├── mongoose.js <br>
│ --- └── passport-jwt-strategy.js <br>
├── controllers <br>
│ --- ├── doctors_controller.js <br>
│ --- ├── patients_controller.js <br>
│ --- └── reports_controller.js <br>
├── models <br>
│ --- ├── doctor.js <br>
│ --- ├── patient.js <br>
│ --- └── report.js <br>
├── routes <br>
│ --- ├── api <br>
│ ----│ -- ├── doctors.js <br>
│ --- │ -- ├── index.js <br>
│ --- │ -- ├── patients.js <br>
│ --- │ -- └── reports.js <br>
│ --- └── index.js <br>
├── server.js <br>
├── package.json <br>
├── package-lock.json <br>
└── readme.md <br>
