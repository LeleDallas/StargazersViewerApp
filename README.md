<p align="center"> 
  <img alt="Screenshot 2023-03-06 alle 11 32 00" src="https://github.com/LeleDallas/StargazersViewerApp/assets/71103219/88c8b6e3-3b1c-41f2-8260-c9cc221170fb" height="auto" width="auto" style="border-radius:100%" >
</p>


<h1 align="center">Stargazers Viewer App ⭐️</h1>
<p align="center">
  <a href="https://go-skill-icons.vercel.app/">
       <img src="https://go-skill-icons.vercel.app/api/icons?i=ts,react,androidstudio,xcode,graphql,github" />
  </a>
</p>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LeleDallas_StargazersViewerApp&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LeleDallas_StargazersViewerApp)

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project"> ➤ About The Project</a></li>
    <li><a href="#getting-started"> ➤ Getting Started</a></li>
    <li><a href="#authors"> ➤ Authors</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil: About The Project</h2>

<p align="justify"> 

StarGazers Viewer App is a mobile application that allows you to search for a GitHub user and it's repository and view its stargazers. 
Built using React Native and TypeScript, the application uses the GitHub API with graphql to fetch the stargazers of a repository.

</p>

![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)

<!-- GETTING STARTED -->
<h2 id="getting-started"> :book: Getting Started</h2>

Via GitHub Desktop clone this repository then to run the app, you need to have Node.js `v20.12.2` or higher installed on your system and Android Studio or XCode installed in your system.

> [!WARNING]  
> To run this project locally you need to create an `.env` file in the root of the project directory with following variables:
> ``` bash
> API_URL = https://api.github.com
> API_KEY = ${YOUR_GITHUB_TOKEN}
> ```
> You can create a personal Github token [here](https://github.com/settings/tokens?type=beta). Make sure to add `Read access to followers, starring, and watching` as permission. 

To run it locally, follow these steps:

- Navigate to the project folder.
- Run the command `npm install` to install all the necessary dependencies.
- On ios, `cd ios && pod install && cd..`
- Run the command `npx react-native start` to start the app. From the cli now select the system to run.

The app will install in your emulator/device.


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)


<!-- Authors -->
<h2 id="authors"> :scroll: Authors</h2>

Emanuele Dall'Ara

[![GitHub Badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/LeleDallas)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/emanuele-dall-ara-40b3311a7/)
