# seeyouspacecow-node
node version of my portfolio website

es6 js, postcss, nodejs, express, handlebars, gulp

#### To use:

`npm install`

`gulp`

`npm start` (this command runs `sudo node index`)

##### Notes:

site will be accessible at `http://localhost` 

the server runs on port 80

node files are all inside `/app`, and so are all asset source files

all public-facing files are inside `/public`

development is compiled with gulp tasks, which are defined inside the `/gulp` folder

css is written with postcss instead of scss for a change!

##### TODO:

integrate database calls to generate content server-side

gulp is throwing an error, release v.4.0.0 causing errors, rolling back to 3.9.1, but there exists vulnerabilities.

might move to grunt because of it



