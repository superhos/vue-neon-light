# vue-neon-light 1.0.5

[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Neon Light plugin for Vue.js

![img](https://raw.githubusercontent.com/superhos/vue-neon-light/master/screenshot/output.gif)

GIF demo effect distortion,Please refer to the DEMO LIVE.

[中文文档](/docs/zh/README.md)

## DEMO Live

[Demo](https://superhos.github.io/vue-neon-light/) >>>

## Installation

1) Install package via NPM

```bash
npm i -S vue-neon-light
```
2) Install plugin within project

```javascript
import VueNeonLight from 'vue-neon-light'

// In Vue Component
components:{
  VueNeonLight
}
```
or

```javascript
const VueNeonLight = request('vue-neon-light');
```

or

```html
<script src="./dist/vue-neon-light.js"></script>
```

## Usage

1. Import the font file
I have provided two simple font file (\*.ttf) to you. One for the English (beon-webfont.ttf), the other one for the Chinese (bb1093.TTF). You can download the others font and use them which you perfer.

Copy font file into the `/public`.

```javascript
import VueNeonLight from 'vue-neon-light'
import fontPath from '../public/beon-webfont.ttf'

// Setting path as a variable.
export default {
  name: 'app',
  components: {
    VueNeonLight
  },
  data(){
    return {
      font: fontPath
    }
  }
}
```

2. `fontFile` isnecessary.

vue mode:

```html
<div id="app">
  <VueNeonLight :fontFile= "font">
    Hello Sevens
  </VueNeonLight>
</div>
```

or in script inject mode:

```html
<div id="app">
  <vue-neon-light :font-file= "font">
    Hello Sevens
  </vue-neon-light>
</div>
```

3. Already done

Just two step, refresh and check the effect.

## Plugin Options

#### effect
	- Default: `neon`
	- Acceptable-Values: String
	- Function: Only support `neon` currently.

#### color
	- Default: `#ff00ff`
	- Acceptable-Values: String
	- Function: The color setting of the Font.

#### fontFile
	- Default: `null`
	- Acceptable-Values: String
	- Function: The file of the font file.

#### flash
	- Default: `false`
	- Acceptable-Values: Boolean
	- Function: If `ture`, the letter will flash in random.

## Log

#### Version 0.0.1
- Realized the basic functionality.

#### Version 1.0.6
- Performance improvement.
- Bug Fixed.
