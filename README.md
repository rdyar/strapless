# Strapless Theme

Strapless is a simple CSS based theme with no JS, JQuery or Frameworks to rely on.

Demo site: http://rdyar.github.io/strapless/

Use it as a starting point and add to it if there is something you need that isn't included.

Strapless uses Flexbox in a few places, and should work on all modern browsers and devices, but will likely break on IE 6-7-8.

Examples of Strapless in Use:  
https://prolabprints.com  
http://status.prolabprints.com  
https://rdyar.github.io/  
https://simpleordersystem.com/  

## Config File has all Nav, Logo, Footer and Other Settings

Carefully go thru the config.yml file as it has all the settings used for the nav, logo, footer and other settings.

# Getting Started

This section assumes you are using Strapless CSS with Jekyll. If not, you can just take the SASS and CSS files and be on your way.

You will need to have NODE installed, and NPM.

- Download/clone the repo
- CD into the directory and run 'npm install' to install the required node_modules. Mostly this is for Gulp and BrowseSync.
- You should use `octopress-autoprefixer`, it is listed in the Gemfile and I think will be installed if you use Bundler. If you don't use Bundler you should do `gem install octopress-autoprefixer` to install it. Most of the sass is already autoprefixed, so it is probably not required, but if you need to add your own css it will be a good idea to have it.
- Edit the config.yml file
	- there are a lot of things to edit in the config file, but it is all in one place and fairly simple, with notes on what each item does.
- Delete the `sample-pages` folder, this has all the content for the strapless site, you won't need it.
- Delete the content of the index.html file and add your own.

### Gulp File Instead of Jekyll Serve

Instead of Jekyll Serve, use the Gulp file to build and auto-reload your site. It is much better and reloads when ever you change a file - including the `config.yml` file.

To use the Gulp file, at the command prompt just type `gulp`. Thats it - it should start building your site and should auto-reload whenever you save a file.

### Second Config File: _configlocal.yml

The _configlocal.yml file is used with the Gulp file to override any site.baseurl settings so that the assets get served correctly locally. It is only for local development. Jekyll 3.3 does something similar when you run jekyll serve - it drops the baseurl valley and inserts the localhost url.

If you are not using Gulp then you can either delete the _configlocal.yml file or just ignore it, Jekyll will not use it unless you go way out of your way to tell it to.

### Rake File

There is an included Rake file you can use to minify the CSS, HTML and any JS files. To use it you need to install Rake (probably already there) and another gem called `reduce` you should be able to do this with `gem install reduce`.

When you want to minify everything, at the command prompt type `rake minify` and it should go thru all your files and minify them. If you use S3_website to deploy to AWS S3, you can also uncomment the last line of the Rake file and it will run S3_website at the end of the minify and upload the site to S3.
