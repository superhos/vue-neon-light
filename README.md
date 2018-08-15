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

1) Import the font file
I have provided two simple font file (\*.ttf) to you. One for the English (beon-webfont.ttf), the other one for the Chinese (bb1093.TTF). You can use the font file which you perfer.

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

2)
`fontFile` isnecessary.

```html
<div id="app">
  <VueNeonLight :fontFile= "font">
    Hello Sevens
  </VueNeonLight>
</div>
```

3) Already done

Just two step, refresh and check the effect.

## Plugin Options

#### isShow
	- Default: `true`
	- Acceptable-Values: Boolean
	- Function: This is the switch that if barrage is displayed.

#### barrageList
	- Default: `[]`
	- Acceptable-Values: Array
	- Function: The is the container for managing the all barrage messages.

#### boxWidth
	- Default: `parent's Width`
	- Acceptable-Values: Number
	- Function: Determine the width of the stage.

#### boxHeight
	- Default: `window's Height`
	- Acceptable-Values: Number
	- Function: Determine the height of the stage.

#### loop
	- Default: `false`
	- Acceptable-Values: Boolean
	- Function: Loop or not.

## Barrage Message Options

#### id
	- Default: `null`
	- Acceptable-Values: Number
	- Function: For distinguish with other barrage messages.

#### avatar
	- Default: `#`
	- Acceptable-Values: String
	- Function: Show the avatar of the barrage message.

#### msg
	- Default: `null`
	- Acceptable-Values: String
	- Function: The content of the barrage message.

#### barrageStyle
	- Default: `normal`
	- Acceptable-Values: String
	- Function: the css class name of the barrage message.

#### time
	- Default: `10`
	- Acceptable-Values: Number
	- Function: How long does the barrage message show.(Seconds)

#### type
	- Default: `0`
	- Acceptable-Values: Number
	- Function: The type of the barrage message.
				0 for scroll from right to left.
				1 for fixed on the top or bottom of the stage.

#### position
	- Default: `top`
	- Acceptable-Values: Boolean
	- Function: Determine the position of the barrage message when the type is 0.

## Events

`barrage-list-empty` when the `barrageList` is empty will be called.

```html
<vue-baberrage
	      :is-show= "barrageIsShow"
	      :barrage-list = "barrageList"
	      :loop = "barrageLoop"
	      @barrage-list-empty="sayHi"
	      >
```

## Log

#### Version 0.0.1
- Realized the basic functionality.

#### Version 1.0.0
- Performance improvement.

#### Version 1.2.0
- Code specification
- Performance improvement.
