webpackJsonp([0x690a005578ae],{422:function(a,e){a.exports={data:{markdownRemark:{html:'<p>If you use Redux, you know how powerful it can be for managing state. What you may <em>not</em> know is that you can also use Redux for some stupid - but powerful tricks. </p>\n<h3>Trick one: JSON.stringify() all the things!</h3>\n<p>While redux-logger is an amazing tool, sometimes it\'s not very useful. For example: when the application is running on someone else\'s computer. Like the end-user, for example. </p>\n<p>Unless you\'re using something like Redux-thunk or Redux-saga to pass functions into your reducer, your actions are just objects containing data literals. That is - you can JSON.stringify them.  </p>\n<p>Why would you want to do that?  Well, if you can stringify something, you can store it anywhere that you can write a string - which means that you can save a log of all the actions that went through the reducer one-by-one on a file, in a database, even on the cloud.  And if you can stringify objects, you can use JSON parse to put them back into an array of objects, and run them through the reducers in order -- to recreate all the changes in state that happened to your end user.  </p>\n<h3>Trick two: Type: "NO_OP"</h3>\n<p>Redux is powerful, but it can\'t do everything.  But wouldn\'t it be great if you could still use it to keep <em>track</em> of everything, not just changes in state? </p>\n<p>For example, say you\'re writing to the DOM - maybe you\'re loading in a background image from AJAX, for example, and need to append it to the &#x3C;body> tag, which isn\'t reachable from React-dom.  You can pass into the function which makes that change a "NO_OP" callback which dispatches an action through the reducers that matches up to <em>none of the types the reducers are looking for</em> meaning there is no change in state. </p>\n<p>This doesn\'t help you with replayability, if you\'re using trick one, but at the very least, you can use redux-logger as a full application logger, simply by having a "NO_OP" action creator.  </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token function-variable function">noop</span> <span class="token operator">=</span> <span class="token punctuation">(</span>info<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>type<span class="token punctuation">:</span> <span class="token string">"NO_OP"</span><span class="token punctuation">,</span> info<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>',frontmatter:{date:"21 April, 2017",path:"/blog/stupid-redux-tricks",title:"Stupid Redux Tricks",tags:["redux"],featuredImage:{publicURL:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4.jpg",childImageSharp:{sizes:{srcSet:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-23bad.jpg 310w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-b3870.jpg 620w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-f0cf2.jpg 950w"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-stupid-redux-tricks-759a2be7238596a56e13.js.map