# Donatello

## [Live Version](test-web.gsasouza.now.sh)

## How to run

### Install dependecies

`npm install` or `yarn`

### Run

`npm start` or `yarn start`

## Architecture

I tried to keep it simple, using only the necessary libraries.
All the state management is made with hooks (useState, useReducer).
For the router I used reach-router and for styles styled-components.
Each screen components are inside `src/components`, shared components
are inside `src/components/common`.

## What would I like to improve?

### Code

- Use Typescript.
- Add automated tests.
- Upload `movies.json` to firebase.

### Product

- Add favorite list that an user can add movies.
- Add an up/down vote in each comment.
- Add ranking to most favorite movies.
- Add feature that users can mark an watched movie.

