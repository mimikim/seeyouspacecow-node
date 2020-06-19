# seeyouspacecow-node
node (w/ express) application version of my portfolio website

[seeyouspacecow.com](https://seeyouspacecow.com)

es6 js, sass, nodejs, express, handlebars, grunt, bower, npm

### To use:

Running `npm start` will install all dependencies, run grunt, and start the node server

If you wish to do each command individually:

`npm run packages`

`npm run build`

`npm run server`

If you want to do development, run a simultaneous `grunt watch` process or remember to run `grunt` to compile new changes

#### Notes:

site will be accessible at `http://localhost:8000` 

the server runs on port 8000

node files are all inside `/app/`, and so are all asset source files

all public-facing files are inside `/public/` and are generated by grunt during development

development is compiled with grunt tasks, which are defined inside the `/grunt/` folder

vendor packages managed with bower

routes for each page are defined inside `/app/includes/config/` and executed inside `/app/includes/routes.js`

each page has its own respective js and css files, apart from globals

#### Files Not included in this Repository:

I have a few files ignored in the repository simply for the sake of keeping data private, as well as extraneous things that aren't necessarily needed for understanding or compiling the codebase.

Files excluded are:

- all of the compiled asset files inside `/public/`
- vendor files inside `app/src/vendor`, generated through bower
- portfolio images inside `app/src/img/portfolio/`
- portfolio content inside `app/includes/config/portfolio-items/`
- google analytics script

## TODO: 

Updates to come:

- a fancy email template to be sent for when people actually use the contact form to contact me

## Release Notes: 

- **v1.2** Introducing a "Featured" portfolio item tag which will allow me to mark certain portfolio items at the top of the alphabetical list
- **v1.1.4** Improved carousel in mobile, new sprite animations
- **v1.1.2** Introducing new 404 error page, css print styles, updating package dependency versions, slightly refactored Grunt setup, misc cleanups
- **v1.0.0** Node version released!!
