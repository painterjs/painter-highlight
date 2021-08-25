<template>
  <div id="app">
    <button @click="painter">生成</button>
    <canvas id="canvas" />
  </div>
</template>

<script>
import phl from "painter-highlight";

export default {
  name: 'App',
  mounted() {
    this.canvasNode = document.getElementById("canvas");
    this.canvas = this.canvasNode.getContext('2d');
  },
  data() {
    return {
      canvasNode: '',
      canvas: '',
      template: {
        background: "#eee", 
        width: "600px",
        height: "400px",
        borderRadius: "25px"
      },
      code: `
const pluckDeep = key => obj => key.split('.').reduce((accum, key) => 
accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), 
res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
      `,
     language: 'js' ,
    }
  },
  methods: {
    painter() {
      phl(this.canvasNode, this.canvas, this.template, this.code, this.language)
    }
  }
}
</script>

<style>

</style>
