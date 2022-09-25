# Frontend Developer Technical Test (swipejobs)

## Website should be able to:
- Register new user
  - address, formattedAddress, email, firstName, lastName, maxJobDistance, phoneNumber

- Login to see available jobs
  - getAllUsers, followed by getJobs

- Edit user profile (not done)

- Show jobs
  - list them, and link to job page
  - filter accepted jobs
  - mark accepted / rejected jobs

- Show job details
  - show address location in a map
  - accept or reject job
  - dial contact's number from website

- (HTML) Be responsive

![JobDetails](https://i.imgur.com/6ewdbhX.png)

### Frameworks / libraries used:
1. React-Bootstrap (https://react-bootstrap.netlify.app/)
2. Styled Components (https://styled-components.com/)
3. Dayjs (date manipulation) (https://day.js.org/)
4. React
5. TypeScript
6. React-Redux
7. React Router (https://reactrouter.com/)
8. Google Maps API (https://mapsplatform.google.com/)
9. Octicons (icons) (https://primer.style/octicons/)

![JobList](https://i.imgur.com/FcKaFnB.png)
### Some (current) limitations / challenges
- Redux state doesn't persist; Store resets when the browser is refreshed.
- Not enough photos.

### How to run:
1. Download project.
2. Ensure you have a [Google API key](https://developers.google.com/maps/documentation/maps-static/get-api-key#:~:text=Go%20to%20the%20Google%20Maps%20Platform%20%3E%20Credentials%20page.&text=On%20the%20Credentials%20page%2C%20click,Click%20Close.). Save it as variable; ```REACT_APP_GOOGLE_MAPS_API_KEY=[your API key]``` in a new file called ```.env``` in the root directory. (If you need help with this for demo purposes, please contact me.)
3. In a terminal in the project directory, type ```npm install``` (or ```yarn```) to install the project dependencies.
4. In a terminal in the project directory, type ```npm start``` (or ```yarn start```) to run the project (on ```http://localhost:3000```).

![Homepage](https://i.imgur.com/3PRM3oo.png)