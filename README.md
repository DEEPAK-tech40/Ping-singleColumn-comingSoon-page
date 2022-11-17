# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

### Links

- Solution URL: [Solution](https://your-solution-url.com)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript Form validation

### What I learned

This project was easy to build and great to practise form validations and positionings.

```html
<form action="#">
  <input type="text" id="email" placeholder="Your email address..." />
  <p id="errorMsg">Please provide a valid email address</p>
  <input type="submit" value="Notify Me" id="submit" />
</form>
```

```js
function validate(event) {
  if (emailEl.value !== "" && emailEl.value.match(mailFormat)) {
    console.log("hi");
  } else {
    errorMsg.style.display = `block`;
    emailEl.style.border = `1px solid var(--LightRed)`;
    event.preventDefault();
  }
}
```

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
