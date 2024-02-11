1. Install the following:

a) json-server package
Run : yarn add json-server

b) redux toolkit
Run : yarn add @reduxjs/toolkit

c) react-redux
Run : yarn add react-redux

2. Wrap your App in ApiProvider and pass apislice into api attribute

Note : you can use any developed api for work, json is one of the approcahes, I have used MockAPI for my work instead of json server
2.Run the json server (change the path a/c to you)
Run : npx json-server ./src/api/db.json
