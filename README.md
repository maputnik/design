# Maputnik design
These are the design resources shared across the Maputnik editor

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![Build Status](https://circleci.com/gh/orangemug/maputnik-design.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/maputnik/design.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/maputnik/design/dev-status.svg)][dm-dev]

[stability]:   https://github.com/orangemug/stability-badges#unstable
[circleci]:    https://circleci.com/gh/maputnik/design
[dm-prod]:     https://david-dm.org/maputnik/design
[dm-dev]:      https://david-dm.org/maputnik/design#info=devDependencies



## Install
To install

```
npm install maputnik/design
```


## Usage
All of the assets are npm installable, from there you can reference them from the `node_modules` directory.


### Logo
The logo comes in three different versions, please don't change the colors if you use it outside of Maputnik.

You can use a logo in the following way

```
<img src="node_modules/maputnik-design/logos/logo-{type}.{format}" />
```

Where `{format}` is either `svg` or `png` and `{type}` is one of

| Type  |                                                         |
| ----- | ------------------------------------------------------- |
| Color | <img src="/logos/logo-color.png" width="200" />         |
| Black | <img src="/logos/logo-black.png" width="200" />         |
| White | <img src="/logos/logo-white-debug.png" width="200" />   |

**Note:** The white version has a transparent background but is on a black background above so you can see it.


#### Advanced
Including `logos/base.svg` in a page will give you full access to all the elements to style as you like, including animation. See [/logos/logo-animated.svg](/logos/logo-animated.svg) for an example

<img src="https://orangemug.github.io/maputnik-logos/logos/logo-animated.svg" width="200" />


### Hosted logos
The logos are also hosted at 

```
<img src="http://maputnik.github.io/design/logos/logo-{type}.{format}" />
```


## Development
The source logos live in [./src/logos](/src/logos), to build the logos in [./logos](/logos) run the following script

```
./scripts/build
```

