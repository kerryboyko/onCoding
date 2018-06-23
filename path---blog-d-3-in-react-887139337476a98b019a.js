webpackJsonp([41763247558397],{411:function(n,s){n.exports={data:{markdownRemark:{html:'<p>This is something that might trip up people coming to React from jQuery or Angular: sometimes you just need to mount something on the DOM. </p>\n<p>For me, this happens most often when I work with D3.  </p>\n<p>D3, for those of you unfamiliar, is a wonderful tool for data visualization.  It essentially uses Javascript to draw SVG graphics; graphics that can then be made interactive or animate with changes in data.  It\'s probably the #1 tool in the Data Journalism arsenal.  </p>\n<p>Which is great, except the way that D3 was designed - it was designed to be loaded in the &#x3C;script>&#x3C;/script> tags in an HTML page. And that\'s not how most people work with javascript - not even on the front end.  With bundlers like browserify and webpack, it makes sense to code the D3 javascript with the rest of your files. </p>\n<p>This is even further complicated by the fact that D3 looks for a tag you specify as a way to mount the graph - that is, a tag in the DOM of the page.  React, as you may know, uses a virtual DOM. </p>\n<p>So, how do you use D3 graphs in a React project? How do you allow D3 to have access to data about the state of the application or component? </p>\n<p>Here\'s one solution.  </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ./app/components/Graph.js</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Graph</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>componentDidMount <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>componentDidMount<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentDidMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span><span class="token function">definition</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>graph<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>div ref<span class="token operator">=</span><span class="token string">"graph"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nGraph<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  definition<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Graph<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>So, that\'s our graph component. Essentially, just a DIV tag, nothing fancy. But once the component mounts, we want to tell D3 to draw the graph in this component.  </p>\n<p>To do that, we pass in "this.refs.graph" - in other words, that DIV tag we just created in the DOM, to a function we passed in as a prop to "definition." Like so. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ./app/components/Main.js</span>\n<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Graph <span class="token keyword">from</span> <span class="token string">\'./Graph\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> barchart <span class="token keyword">from</span> <span class="token string">\'../charts/barchart\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> linechart <span class="token keyword">from</span> <span class="token string">\'../charts/linechart\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> scatterplot <span class="token keyword">from</span> <span class="token string">\'../charts/scatterplot\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Main</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>Graph definition<span class="token operator">=</span><span class="token punctuation">{</span>barchart<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Graph definition<span class="token operator">=</span><span class="token punctuation">{</span>linechart<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Graph definition<span class="token operator">=</span><span class="token punctuation">{</span>scatterplot<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> Main<span class="token punctuation">;</span></code></pre>\n      </div>\n<p>"barchart", "linechart", and "scatterplot" are all functions which contain the D3 code necessary to render the graph in full.  By passing them in as the "definition" prop, we know that the element will launch that function the moment it mounts.  </p>\n<p>And we describe that function like so: </p>\n<p>(We\'ll just do the one barchart, but you get the idea...)</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ../app/charts/barchart.js</span>\n<span class="token comment">/* For some reason, D3 doesn\'t work with "import" and must use "require()" */</span>\n\n<span class="token keyword">const</span> d3 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'d3\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">colorPicker</span> <span class="token operator">=</span> <span class="token punctuation">(</span>v<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">(</span>v <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"#666666"</span> <span class="token punctuation">:</span> <span class="token string">"#FF0033"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">bargraph</span> <span class="token operator">=</span> <span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> w <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> h <span class="token operator">=</span> <span class="token number">120</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> padding <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> dataset <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">let</span> bar <span class="token operator">=</span> d3<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"svg"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"width"</span><span class="token punctuation">,</span> w<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"height"</span><span class="token punctuation">,</span> h<span class="token punctuation">)</span>\n\n  bar<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">"rect"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>dataset<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"rect"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'x\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token punctuation">(</span>w<span class="token operator">/</span>dataset<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'y\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>h <span class="token operator">-</span> <span class="token punctuation">(</span>data <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'width\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>w <span class="token operator">/</span> dataset<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">-</span> padding<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'height\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>data <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'fill\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">colorPicker</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n  bar<span class="token punctuation">.</span><span class="token function">selectAll</span><span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span>dataset<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"text"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> data<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"text-anchor"</span><span class="token punctuation">,</span> <span class="token string">"middle"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">*</span> <span class="token punctuation">(</span>w <span class="token operator">/</span> dataset<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>w <span class="token operator">/</span> dataset<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">-</span> padding<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"y"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>h <span class="token operator">-</span> <span class="token punctuation">(</span>data <span class="token operator">*</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">14</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">\'fill\'</span><span class="token punctuation">,</span> <span class="token string">"white"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"font-family"</span><span class="token punctuation">,</span> <span class="token string">"Helvetica, Arial, sans-serif"</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"font-size"</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> bargraph</code></pre>\n      </div>\n<p>The end result:</p>\n<p><img src="http://i.imgur.com/NOgJnCE.png" alt="Graphic Charts"></p>',frontmatter:{date:"03 February, 2017",path:"/blog/D3-in-React",title:"D3 in React",tags:["d3","react"],featuredImage:{publicURL:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4.jpg",childImageSharp:{sizes:{srcSet:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-23bad.jpg 310w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-b3870.jpg 620w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-f0cf2.jpg 950w"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-d-3-in-react-887139337476a98b019a.js.map