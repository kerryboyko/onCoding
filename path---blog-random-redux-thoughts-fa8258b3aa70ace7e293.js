webpackJsonp([0xedc8681ccc64],{417:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Maybe I\'m not experienced enough to be telling people how they do things is wrong, so I guess I\'m not.  I\'ve been just <a href="https://github.com/markerikson/redux-ecosystem-links/blob/master/component-state.md">browsing some of the many, many third-party add-ons for Redux</a>, trying to see if any of them might be good for my workflow.  But as it turns out, I\'ve developed a redux workflow that it\'s clear that some of these developers didn\'t share. That\'s the thing about a new framework - best practices aren\'t yet established.  </p>\n<p>Here\'s an example: <a href="https://github.com/leeching/redux-brick">Redux Brick</a> basically combines both actions and reducers into a single function, to eliminate some of the boilerplate in writing Redux apps.  This, it does well, but it\'s main assumption is that, for the most part, every action has a reducer, and vice versa.  (This might have something to do with the fact that most Redux tutorials follow this pattern - in the real world, apps can get much more complex.)</p>\n<p>There are a number of instances in my application where multiple actions can trigger the same reducer; and different actions can trigger the same reducer in different ways.  </p>\n<p>Here\'s a good example.</p>\n<div class="gatsby-highlight" data-language="jsx">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token comment">// actions</span>\n\n<span class="token comment">// hydrate() is used to directly modify components in the store;</span>\n<span class="token comment">// if the newState passed into hydrate() has a parameter with the</span>\n<span class="token comment">// same name as the reducer, it replaces the old one, otherwise</span>\n<span class="token comment">// it defaults to returning state, so partial state changes are possible.</span>\n<span class="token comment">// keep in mind, this is not mutating the state - it is an</span>\n<span class="token comment">// action just like anything else, and can be reverted.  </span>\n<span class="token comment">// I use it to replay user experiences and to have a reliable tutorial</span>\n<span class="token comment">// mode that works just like the real thing.</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">hydrate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>newState<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    type<span class="token punctuation">:</span> <span class="token constant">HYDRATE</span><span class="token punctuation">,</span>\n    newState<span class="token punctuation">:</span> newState<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n <span class="token comment">// and others, naturally.</span>\n\n<span class="token comment">// reducers</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myColor</span><span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token constant">CHANGE_COLOR</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> action<span class="token punctuation">.</span>color<span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token constant">HYDRATE</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> action<span class="token punctuation">.</span>newState<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">\'myColor\'</span><span class="token punctuation">)</span> <span class="token operator">?</span>\n      action<span class="token punctuation">.</span>newState<span class="token punctuation">.</span>myColor <span class="token punctuation">:</span> state<span class="token punctuation">;</span> <span class="token comment">// could use a failthrough to default, but nah.</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">myNumber</span><span class="token punctuation">(</span>state <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> action<span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">switch</span><span class="token punctuation">(</span>action<span class="token punctuation">.</span>type<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token constant">ADD_ONE</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token constant">DOUBLE</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token operator">*</span><span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token constant">ADD_CUSTOM</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state <span class="token operator">+</span> action<span class="token punctuation">.</span>numberToAdd\n    <span class="token keyword">case</span> <span class="token constant">HYDRATE</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> action<span class="token punctuation">.</span>newState<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span><span class="token string">\'myNumber\'</span><span class="token punctuation">)</span> <span class="token operator">?</span>\n      action<span class="token punctuation">.</span>newState<span class="token punctuation">.</span>myNumber <span class="token punctuation">:</span> state<span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n      <span class="token keyword">return</span> state<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>So what\'s going on here?  Well, for starters, the hydrate() action can affect multiple reducers, and the myNumber() reducer can be affected by multiple actions.  This is not a one-to-one proposition.</p>\n<p>Yet despite that, it\'s really easy to keep track of what\'s going on here.  Despite the relative complexity, it\'s simple and relatively easy to read.  </p>\n<p>In the app I\'m developing for Cycorp, each reducer\'s switch has a HYDRATE case.  If I want to partially (or completely) replace the entire store, I can do so with HYDRATE.</p>\n<p>You may be wondering: Why would you do this?  Well, there are two scenarios.  </p>\n<p>The first is the Tutorial Mode of the app I\'m building. When the user chooses to go to tutorial mode, a "snapshot" of the state at that moment is made into a backup variable in my store.  I can then step through the tutorial step-by-step by creating an initial, static state from which to begin the tutorial, and either pass through actions or entire states one by one, as the user progresses through the tutorial. At the end, I simply hydrate the store using the backup I created earlier.</p>\n<p>A more general use case is anytime you need to stop and save the progress of the user and restore it from that moment.  </p>\n<p>The other use case - I have a "replay" mode used in debugging. Our testers simply send us a description of the problem, and it auto-sends us all the actions that lead to that problem.  I simply have the program run through the actions one-by-one, and keep track of an array of states along the entire way.  That way, I end up with an array of every state the state ever experienced, and I can quickly "time-travel" back to any point in the application where the error may have occurred and quickly isolate the buggy action.</p>\n<p>Indeed, this way of debugging has allowed us to solve issues in a matter of hours when it would have taken us weeks before, just to find the root cause. I\'m getting more than a few "attaboys" from work because of it -- all thanks to NOT following the pattern that Redux-Brick\'s author thinks Redux follows.</p>\n<p>Again, Redux-Brick is brilliant, but it\'s a completely different workflow and solves a completely different problem than the one I currently have.  I may end up using it, but on a different app entirely, where that approach is the right one to take.</p>',frontmatter:{date:"30 April, 2016",path:"/blog/random-redux-thoughts",title:"Random Redux Thoughts",tags:["beginning coding"],featuredImage:{publicURL:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4.jpg",childImageSharp:{sizes:{srcSet:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-23bad.jpg 310w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-b3870.jpg 620w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-f0cf2.jpg 950w"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-random-redux-thoughts-fa8258b3aa70ace7e293.js.map