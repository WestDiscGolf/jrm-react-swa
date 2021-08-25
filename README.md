# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# To Run With Access to Claims Principal

1) Install the Azure Static Web Apps Cli - `npm install -g @azure/static-web-apps-cli`
(more info - https://github.com/Azure/static-web-apps-cli)

2) Run function app through debugging in vscode or Visual Studio or on command line `func start`

3) In root of the repository run the following command

`swa start http://localhost:3000 --run "npm start" --api http://localhost:7071/api`

This will start the react application on the standard port as well as point the web app to where the function app is running.

4) On logging in the example will make a request to `/api/TestGet` and can then be debugged and should have access to the logged in user.
