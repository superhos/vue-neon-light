# vue-neon-light 1.0.5

[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

基于Vue.js霓虹灯插件

![img](https://raw.githubusercontent.com/superhos/vue-neon-light/master/screenshot/output.gif)

GIF 效果失真, 实际效果请查看DEMO.

[中文文档](/docs/zh/README.md)

## DEMO Live

[Demo](https://superhos.github.io/vue-neon-light/) >>>

## 安装

1) 通过NPM安装

```bash
npm i -S vue-neon-light
```
2) 在项目组件中调用

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

## 使用

1) 先引用字体文件
我提供了两个字体文件例子(在font_sample)。一个是英文(beon-webfont.ttf)，一个是中文(bb1093.TTF)。你可以下载你喜欢的字体并使用。

把字体文件复制到你项目中的 `/public` 文件夹.

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
`fontFile` 是必须的.

Vue单组件模式(\*.vue):

```html
<div id="app">
  <VueNeonLight :fontFile= "font">
    Hello Sevens
  </VueNeonLight>
</div>
```

<script>引入模式:

```html
<div id="app">
  <vue-neon-light :font-file= "font">
    Hello Sevens
  </vue-neon-light>
</div>
```

3) 搞定

就两步，刷新看看效果。

## 插件选项

#### effect
	- Default: `neon`
	- Acceptable-Values: String
	- Function: 目前只支持 `neon`.

#### color
	- Default: `#ff00ff`
	- Acceptable-Values: String
	- Function: 霓虹灯的颜色.

#### fontFile
	- Default: `null`
	- Acceptable-Values: String
	- Function: 字体文件路径.

#### flash
	- Default: `false`
	- Acceptable-Values: Boolean
	- Function: 如果是 `ture`, 字体会随机闪烁.

## Log

#### Version 0.0.1
- 实现基本功能.

#### Version 1.0.6
- 性能优化.
- Bug fixed.
