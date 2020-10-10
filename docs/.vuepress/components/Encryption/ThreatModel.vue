<template>
  <div class="model">
    <div class="container" ref="container"></div>
  </div>
</template>

<script>
import cytoscape from 'cytoscape';

export default {
  mounted() {
    const { container } = this.$refs;

    let cy = cytoscape({
      container: container,

      boxSelectionEnabled: false,

      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center'
          }
        },
        {
          selector: ':parent',
          css: {
            'text-valign': 'top',
            'text-halign': 'center',
          }
        },
        {
          selector: 'edge',
          css: {
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 'a', label: 'Home Network' }, classes: 'top-center' },
          { data: { id: 'b', parent: 'a', label: 'Computer' }, classes: 'top-center' },
          { data: { id: 'c', parent: 'a', label: 'Wireless Router' } },
          { data: { id: 'd', label: 'ISP'}},
          { data: { id: 'e', parent: 'd'}}
        ],
        edges: [
          { data: { id: 'bc', source: 'b', target: 'c' } },
          { data: { id: 'cd', source: 'c', target: 'd' } }
        ]
      },

      layout: {
        name: 'grid',
        padding: 5
      }
    });

  }

}
</script>

<style scoped>
.model {
  position: relative;
  border: 2px solid #aaa;
  width: 100%;
  height: 400px;
}
.container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>