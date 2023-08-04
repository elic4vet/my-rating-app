# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

Here are some screenshots of my app.

![](./images/main_screenshot.png)

![](./images/success_screenshot.png)

### Links

- Solution URL: [Github](https://your-solution-url.com)
- Live Site URL: [Netlify](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite] (https://vitejs.dev/)- Build tool
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- I learned how to build an app using Vite and React. The development process was much faster than using create-react-app.

- I learned how to use styled components to create a component that can be reused throughout the app. I also learned how to use the useState hook to update the state of the app when a user clicks on a rating.

- I learned how to render a new component when a user clicks on a submit button and had first selected a rating.

```css
.icon:hover {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(
      100%
    ) contrast(100%);
}
```

```js
if (success) {
  successComponent = (
    <div>
      <img src={img}></img>
      <p className="result">
        You selected {selectedNumber.target.value} out of 5
      </p>
      <h1>Thank you !</h1>
      <p>
        {" "}
        We appreciate you taking the time to give a rating. If you ever need more
        support, don't hesitate to get in touch!
      </p>
    </div>
  );
}
```

### Continued development

- I will continue to learn how to use complicated CSS properties and how to use React to build more complex apps.
- I will also learn how to use React Router to create a multi-page app.
- Last but not least, I will learn how to use React Context to manage the state of the app.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
