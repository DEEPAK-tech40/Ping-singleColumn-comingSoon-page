# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

![desktop-preview](https://user-images.githubusercontent.com/94350356/202334444-ba4dc962-97b0-4948-879d-96ae32df5054.jpg)


### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

Dektop-view:

![desktop-design](https://user-images.githubusercontent.com/94350356/202334486-e7aa43f1-9735-47d7-acc1-531e958a361b.jpg)

Mobile-view:

![mobile-design](https://user-images.githubusercontent.com/94350356/202334544-b4e532f1-8656-41e9-a388-b5a07689ffb2.jpg)


### Links

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/pingsinglecolumncomingsoonpage-cP319U4Ixw)
- Live Site URL: [Live site](https://deepaktech40-ping-comingsoon-page.netlify.app/)

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

- Frontend Mentor - [@DEEPAK-tech40](https://www.frontendmentor.io/profile/DEEPAK-tech40)
