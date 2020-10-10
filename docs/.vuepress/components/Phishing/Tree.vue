<template>
  <div class="domains">

    <div class="danger custom-block error" v-if="error.length > 0">
      {{ error }}
    </div>

    <div class="form">
      <form v-on:submit.prevent="addDomain">
        <input v-model="domain" placeholder="Enter a domain name" />
        <button>Add</button>
      </form>
    </div>

    <div class="list">
      <ul>
        <li v-for="domain in domains">
          {{ domain }}
          <a v-on:click="removeDomain(domain)">
            <i class="fas fa-times"></i>
          </a>
        </li>
      </ul>
      <div style="clear:both;"></div>
    </div>

    <svg class="graph" id="tree" :width="width" :height="height + 20">
      <g transform="translate(0,10)">

        <g class="nodes">
          <g v-for="node in treeRoot.descendants()" class="node">
            <circle :cx="node.x" :cy="node.y" r="2" fill="#696969" />
            <text :dx="node.x + 10" :dy="node.y + 8">
              {{ node.data.name }}
            </text>
          </g>
        </g>

        <g class="links">
          <line v-for="link in treeRoot.links()"
              class="link"
              stroke="#6f5f5f"
              :x1="link.source.x"
              :y1="link.source.y"
              :x2="link.target.x"
              :y2="link.target.y"
          />
        </g>

      </g>

      <rect
        :width="width"
        :height="height + 20"
        style="fill: none; pointer-events: all;"
        />
    </svg>

  </div>
</template>

<script>
import * as d3 from 'd3';
import * as _ from 'lodash';
import * as psl from 'psl';

export default {
  data() {
    return {
      error: "",
      width: 700,
      height: 240,
      domain: null,
      domains: [
        'www.facebook.com',
        'paypal.com',
        'paypal.com.9kcj.pw',
      ],
    }
  },

  mounted() {
    // Bind 'Pan & Zoom' transform
    let svg = d3.select(this.$el).select('svg');
    let g = svg.select("g");
    let zoomed = () => g.attr("transform", d3.event.transform);
    svg.select("rect")
      .call(d3.zoom()
        .scaleExtent([1 / 2, 4])
        .on("zoom", zoomed));
  },

  computed: {
    treeData() {
      // Build domain suffix tree from.
      let parse = (domains) => _.map(domains, psl.parse);

      let nodes = (a) => ( (fn) =>
        _.map(_.entries(a), ([k,v]) =>
          ({ name: k, children: _.filter(fn(v), 'name') })) );

      let subs = (domains) => _.map(domains, (d) => ({name: d.subdomain}));
      let slds = (domains) => nodes(_.groupBy(domains, 'sld'))(subs);
      let tlds = (domains) => nodes(_.groupBy(domains, 'tld'))(slds);

      return nodes({'':parse(this.domains)})(tlds)[0];
    },
    treeRoot() {
      let root =  d3.hierarchy(this.treeData);

      let treeLayout = d3.tree();
      treeLayout.size([this.width, this.height]);
      treeLayout(root);

      return root;
    },
  },

  methods: {
    addDomain(event) {
      if (this.domain) {
        if (psl.isValid(this.domain)) {
          this.domains.push(this.domain);
          this.domain = "";
          this.error = "";
        } else {
          this.error = "Oops, that doesn't look like a valid domain name!";
        }
      }
    },
    removeDomain(domain) {
      let i = this.domains.indexOf(domain);
      if (i > -1) {
        this.domains.splice(i, 1);
      }
    },
  },
}
</script>

<style scoped>
.domains {
  margin: 40px 0;
}

.domains .form {
  width: 100%;
  text-align: center;
}

.domains input {
  font-size: 24px;
  margin: 0 10px;
  padding: 0 10px;
  width: 80%;
}

.domains button {
  font-size: 24px;
  color: #F2F3C7;
  border: none;
  padding: 3px 10px;
  background: #186E6F;
}

.domains button:hover {
  color: #E9C57F;
}

.domains .error {
  color: red;
  padding: 4px 8px;
}

.list ul {
  list-style-type: none;
  margin: 20px 0;
}

.list li {
  float: left;
  padding: 4px 8px;
  color: #FFF;
  font-weight: bold;
  border: 1px solid;
  background: #186E6F;
}

.list li i {
  color: #F2F3C7;
  vertical-align: middle;
  padding: 0 8px;
}

.list li i:hover {
  color: #E9C57F;
}

.list .graph {
  width: 700px;
  margin: 0 auto;
}

.domains svg {
  border: 2px dotted #ccc;
  margin: 10px;
  padding: 20px;
}
</style>
