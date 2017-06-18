# dreamer-vue-components

> Vue library of custom awesome components

[demos](https://youngasimov.github.io/dreamer-vue-components/) - take a look of the components in this live demo of the library


## Installation

```
npm install dreamer-vue-components --save
```

Add the css into the website

in index.html
```
...
<head>
  <link rel="stylesheet" href="route/to/file/dreamer-vue-components.min.css">
</head>
...
```

in scss
```
...
@import '../../node_modules/dreamer-vue-components/dist/lib/dreamer-vue-components.min';
...
```


## Components
- [hover-carousel](#hover-carousel) - Light image carousel implemented as Vue component that change the images on mouse over, intended to be use inside a grid gallery of images to show related images in same block.
- [card-grid](#card-grid) - Masonry Style customizable grid 

### hover-carousel

#### Usage

Inside a Vue component

```
<template>
  <div class="container">
      <hover-carousel :images="images" :primary="images[0]">
        <h1> gallery </h1>
        <button :click="clickMe"> click me </button>
      </hover-carousel>
  </div>
</template>

<script>
  import { HoverCarousel } from 'dreamer-vue-components';

  export default {
    ...
    components: { HoverCarousel },
  };
</script>
```

#### Attributes

| attribute     | type              | default       | description                                                                                                       |
| ------------- | -------------     | ------------- | -------------                                                                                                     |
| `images`      | Array             | *mandatory*   | array with String urls or Objects to the images to display                                                        |
| `primary`     | String - Object   | null          | array with urls to the images to display                                                                          |
| `image-src`   | String            |               | In case of provide objects, this field indicate what attribute that contain the url                               |
| `image-key`   | String            |               | In case of provide objects, this field indicate what attribute that contain the key                               |
| `transition`  | String            | "none"        | Transition efect between images, supported transitions are `none`, `fade`, `slide` or `slide-vertical`            |
| `orientation` | String            | "horizontal"  | Image change will react to horizontal or vertical mouse movements, posibles values are `horizontal` or `vertical` |
| `resetOnExit` | Boolean           | false         | If true, on mouse leave the component the first image will be set automatically                                   |


Any code inserted inside the component will be positioned on top of them. Only `<button>` and `<a>` are clickeable by default, but this avoid the hover effect to happen over this elements. add `pointer-events: none;` css style to this components to activate the effect or `pointer-events: all;` over other elements to make them clickeable.

If `primary` is provided, then `resetOnExit` will come back to that image by default and, most important, the size of the block will ajust automatically to that image, otherwise the images will try to use alll the available space of the parent block (`width: 100%; heigth: 100%;`).

### card-grid

#### Usage

Inside a Vue component

```
<template>
    <card-grid :items="cats" :cols="cols" :cols-md="cols+3"  :col-gap="colGap" :gap="gap">
        <template scope="cat">
            <img :src="cat.value">
        </template>
    </card-grid>
</template>

<script>
  import { CardGrid } from 'dreamer-vue-components';

  export default {
    ...
    components: { CardGrid },
  };
</script>
```

#### Attributes

| attribute     | type              | default       | description                                                                                                       |
| ------------- | -------------     | ------------- | -------------                                                                                                     |
| `items`       | Array             | *mandatory*   | Array with objects in the grid                                                                                    |
| `cols`        | Number            | *mandatory*   | Number of columns, also available responsive version: `cols-sm`, `cols-md`, `cols-lg` and `cols-xl`               |
| `gap`         | Number            | 0             | Gap between items inside a column                                                                                 |
| `col-gap`     | Number            | 0             | Gap between columns                                                                                               |


A template must be provided for the grid to use for each item, the scope must have a `scope` attribute. the items will be provided inside `scope.value` and the index inside `scope.index`


## License

GNU GENERAL PUBLIC LICENSE Version 3
