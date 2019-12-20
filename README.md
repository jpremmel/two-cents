# _Two Cents_

#### _An app for connecting career-seekers with mentors, 19 Dec 2019_

#### By _**Jacqueline Remmel**_

## Description

_The purpose of this app is to serve as a career-related social platform. Users can indicate what jobs they have a lot of experience in and/or what jobs or careers they are interested in learning more about. The app will then match users with each other based on this information. It can be hard to choose a career. Two Cents seeks to solve this problem: users interested in exploring a potential career get to connect with users who have a lot of experience in that career, and users who are every experienced in their career get to put their experience to use by providing mentorship based on their personal experiences._

_Two Cents is an still an ongoing project. It includes a C# backend web API with a SQL database as well as a React-Redux frontend application._

_React Component Structure:_

<img src="TwoCents-ComponentStructure.png"
     alt="Diagram of React components"
     style="float: center" 
     height= "300" /> 

## Setup/Installation Requirements

* _Clone this repository_
* _To start the C# web API:_
  * _Navigate to the "TwoCentsAPI" directory_
  * _Run the command "dotnet restore"_
  * _Run the command "dotnet ef database update"_
  * _Run the command "dotnet watch run"_
    * _Then, to visit Swagger documentation for the API, go to the URL "http://localhost:5000/swagger/" in a browser after starting the watcher_
* _To start the React app:_
  * _Navigate to the "frontend" directory_
  * _Run the command "npm install"_
  * _Run the command "npm run start"_
  * _Go to the URL "http://localhost:8080/" in a browser_

## Technologies Used

* _C#_
* _ASP.NET Core_
* _JavaScript_
* _React_
* _Redux_
* _Jest_
* _Webpack_
* _ESLint_
* _Babel_
* _SQL_
* _Entity_
* _Swashbuckle/Swagger_
* _Bootstrap_
* _CSS_
* _HTML_

### License

*Open-source*

Copyright (c) 2019 **_Jacqueline Remmel_**