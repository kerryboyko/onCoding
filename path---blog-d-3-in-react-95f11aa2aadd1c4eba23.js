webpackJsonp([41763247558397],{407:function(t,a){t.exports={data:{markdownRemark:{html:'<p>This is something that might trip up people coming to React from jQuery or Angular: sometimes you just need to mount something on the DOM. </p>\n<p>For me, this happens most often when I work with D3.  </p>\n<p>D3, for those of you unfamiliar, is a wonderful tool for data visualization.  It essentially uses Javascript to draw SVG graphics; graphics that can then be made interactive or animate with changes in data.  It\'s probably the #1 tool in the Data Journalism arsenal.  </p>\n<p>Which is great, except the way that D3 was designed - it was designed to be loaded in the &#x3C;script>&#x3C;/script> tags in an HTML page. And that\'s not how most people work with javascript - not even on the front end.  With bundlers like browserify and webpack, it makes sense to code the D3 javascript with the rest of your files. </p>\n<p>This is even further complicated by the fact that D3 looks for a tag you specify as a way to mount the graph - that is, a tag in the DOM of the page.  React, as you may know, uses a virtual DOM. </p>\n<p>So, how do you use D3 graphs in a React project? How do you allow D3 to have access to data about the state of the application or component? </p>\n<p>Here\'s one solution.  </p>\n<pre><code class="language-javascript">// ./app/components/Graph.js\nimport React, {Component} from \'react\';\n\nclass Graph extends Component {\n  constructor(props){\n    super(props);\n    this.componentDidMount = this.componentDidMount.bind(this);\n  }\n  componentDidMount () {\n    this.props.definition(this.refs.graph);\n  }\n  render () {\n    return (&#x3C;div ref="graph">&#x3C;/div>);\n  }\n}\n\nGraph.propTypes = {\n  definition: React.PropTypes.func.isRequired\n}\n\nexport default Graph;\n</code></pre>\n<p>So, that\'s our graph component. Essentially, just a DIV tag, nothing fancy. But once the component mounts, we want to tell D3 to draw the graph in this component.  </p>\n<p>To do that, we pass in "this.refs.graph" - in other words, that DIV tag we just created in the DOM, to a function we passed in as a prop to "definition." Like so. </p>\n<pre><code class="language-javascript">// ./app/components/Main.js\nimport React, {Component} from \'react\';\nimport Graph from \'./Graph\';\nimport barchart from \'../charts/barchart\';\nimport linechart from \'../charts/linechart\';\nimport scatterplot from \'../charts/scatterplot\';\n\nconst Main = () => (\n  &#x3C;div>\n    &#x3C;Graph definition={barchart}/>\n    &#x3C;Graph definition={linechart}/>\n    &#x3C;Graph definition={scatterplot}/>\n  &#x3C;/div>\n)\n\nexport default Main;\n</code></pre>\n<p>"barchart", "linechart", and "scatterplot" are all functions which contain the D3 code necessary to render the graph in full.  By passing them in as the "definition" prop, we know that the element will launch that function the moment it mounts.  </p>\n<p>And we describe that function like so: </p>\n<p>(We\'ll just do the one barchart, but you get the idea...)</p>\n<pre><code class="language-javascript">// ../app/charts/barchart.js\n/* For some reason, D3 doesn\'t work with "import" and must use "require()" */\n\nconst d3 = require(\'d3\');\n\nconst colorPicker = (v) => ((v &#x3C;= 20) ? "#666666" : "#FF0033");\n\nconst bargraph = (element) => {\n  let w = 300;\n  let h = 120;\n  let padding = 2;\n  let dataset = [5, 10, 14, 20, 25, 11, 25, 22, 18, 7];\n\n  let bar = d3.select(element)\n    .append("svg")\n    .attr("width", w)\n    .attr("height", h)\n\n  bar.selectAll("rect")\n    .data(dataset)\n    .enter()\n    .append("rect")\n    .attr(\'x\', (data, i) => (i * (w/dataset.length)))\n    .attr(\'y\', (data) => (h - (data * 4)))\n    .attr(\'width\', ((w / dataset.length) - padding))\n    .attr(\'height\', (data) => (data * 4))\n    .attr(\'fill\', (data) => colorPicker(data))\n\n  bar.selectAll("text")\n    .data(dataset)\n    .enter()\n    .append("text")\n    .text((data) => data)\n    .attr("text-anchor", "middle")\n    .attr("x", (data, i) => ((i * (w / dataset.length)) + (((w / dataset.length) - padding) / 2)))\n    .attr("y", (data) => (h - (data * 4)) + 14)\n    .attr(\'fill\', "white")\n    .attr("font-family", "Helvetica, Arial, sans-serif")\n    .attr("font-size", 12)\n\n}\n\nexport default bargraph\n</code></pre>\n<p>The end result:</p>\n<p><img src="http://i.imgur.com/NOgJnCE.png" alt="Graphic Charts"></p>',frontmatter:{date:"03 February, 2017",path:"/blog/D3-in-React",title:"D3 in React",tags:["d3","react"],featuredImage:{publicURL:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4.jpg",childImageSharp:{sizes:{srcSet:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-23bad.jpg 310w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-b3870.jpg 620w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-f0cf2.jpg 950w"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-d-3-in-react-95f11aa2aadd1c4eba23.js.map