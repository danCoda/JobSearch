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

### Frameworks / libraries used:

- React-Bootstrap (https://react-bootstrap.netlify.app/)
- Styled Components (https://styled-components.com/)
- Dayjs (https://day.js.org/)
- React
- TypeScript
- React-Redux
- React Router (https://reactrouter.com/)
- Google Maps API (https://mapsplatform.google.com/)
- Octicons (https://primer.style/octicons/)

### Some (current) limitations / challenges

- Redux state doesn't persist; Store resets when the browser is refreshed.
