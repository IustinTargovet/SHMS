# SHMS
Dissertation Project

## Abstract from the project report
This project required the design and development of a suitable API that would stand as a backbone for a future mobile application and website. The API should facilitate the creation of an application which would serve the students by systematizing household chores and communication and by the gamification of the tasks a around respective household. The API should support user creation and log-in, management of household groups, a virtual fridge where post-its could be left, a chore-timetable with the implementation of a point system that would reward active behaviour around the house and a common shopping list. \\

Throughout the project, an iterative approach was adopted, that was crucial in making the project a success. Working on the project, prior knowledge, thorough research and useful frameworks were intertwined in order to reach the desired result. The key technologies and frameworks that facilitated the creation of the project are: Node.js, Azure, MongoDB, Angular.js and StrongLoop. \\

The result was a fully fledged system that implemented all of the desired features. The API was implemented following strict OpenAPI design patterns. The testing and deployment also went through a heavy process of automation. 

## Installation guide
First step is to grab the repository locally. This can be done via running the following command, once you have Git installed:

```git
git clone https://github.com/IustinTargovet/SHMS.git
```

Next, go into the app-folder of the projct

```bash
cd SHMS_1/app-folder
```

And run the npm install command:
```bash
npm install
```

The tests can be run before starting the server with the command:
```bash
npm test
```

Now, you are ready to start the server locally with the command:
```bash
node .
```
