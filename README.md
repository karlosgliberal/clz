# Colapso zombie

The best game in the world

## Pre-requesits

You will need to have [node][node] and [gulp][gulp] setup on your machine.

## Getting started

To package all source files and run on a local server simply run the following command:

```sh
$ gulp
```

This should open a browser window with the game running locally. You can copy the address and paste it into any browser on your local network (including mobiles and tablets).

## Project Scaffold
* assets (put your working assets here, export final asset to `project/assets`)
    - graphic
    - music
    - sound
* design (game design document goes here)
* project (the REAL project folder)

## Editing

When editing, make sure you update the files within the `project` directory. These files will then be compressed and added to the `dist` directory ready for publishing.

The JavaScript files have been set in ES6 modular way using [es6-module-transpiler][es6-module-transpiler]. This means you can treat the files as modules which is going to be supported officially by Phaser 3.

Happy building games!

[node]:       http://nodejs.org/
[gulp]:       http://gulpjs.com/
[es6-module-transpiler]: https://github.com/square/es6-module-transpiler
