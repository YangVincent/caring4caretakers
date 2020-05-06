# caring4caretakers

## Setup Instructions
1. Install npm up to the latest versions (make sure you have npx)
2. Install github, etc. Clone this directory.
3. cd into the directory. `cd caring4caretakers`
4. Install all the modules. The `.gitignore` file will make sure that your packages don't interfere with mine.
5. Dependencies for icons seem to be weird, so following [this link](https://github.com/mui-org/material-ui/issues/10571) seems to help. The relevant commands are `npm install @material-ui/core && npm install @material-ui/icons`.
6. `npm install`
7. `npm start`
8. This should redirect you to `localhost:3000`. I've just copy pasted 3 templates one on top of each other, but I think it has most the components we need. From here, we just have to figure out how to (a) route pages/links which seems to already work (click on the "next" button in the billing form), (b) add javascript to plug and play Stripe (they support React in their demo, so we can just copy/paste their templates as well).
8a. Relevant stripe [docs](https://stripe.com/docs/stripe-js/react) + sample!!! click [this](https://hhqhp.sse.codesandbox.io/) or [this](https://codesandbox.io/s/stripe-sample-accept-a-card-payment-hhqhp).


## Dev Instructions:
1. React seems to work like a tree. It uses a mix of javascript and html (you can inject the former into the latter, but the latter is largely in CapsFileName.js files. These import each other.
2. We don't want to code most things, so let's just stick to copy pasting templates for now. 
3. There's a [bootstrap library](https://react-bootstrap.github.io/components/alerts/) for easy plug/play of small modules we want, but we still want the larger templates (for products, checkout, etc).
4. I've copied over Checkout and onepirate from [this project](https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/checkout) that has free templates. It basically consists of (a) copying over the stuff in the subdirectory (all non-build files, so don't copy the `node_module` pages), and (b) the static files (usually in `public/`).
