# Goal

Show how to build a custom useForm hook!  It can be used with any number of inputs as it provides a values object that can be customized by on the name of the inputs.  It provides one onChange handler for all the inputs to use, and it maintains state immutability by use of thje `...` spread operator!  It also is provided a callback that will handle the submitting of said form.  Hype!

## Running the Project

It's been built using `create-react-app` so simply running the following:
```bash
git clone https://github.com/przekwas/custom-form-hook.git
cd custom-form-hook
npm install
npm start
```
The output of the form submit will be in a **console log** so make sure to open your dev tools to see if it works!