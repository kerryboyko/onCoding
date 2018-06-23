webpackJsonp([31428463216379],{422:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Sometimes, you just can\'t do things the "right" way.  Sometimes it just takes more time than you have, the site needs to go up literally yesterday, and to hell with best practices. </p>\n<p>I don\'t like it, but sometimes it\'s a reality.  Case in point: I just helped @lessig with another site, this time raising money to fight for the <a href="https://canyouhearus.is">citizen-created and referendum-passed constitution in Iceland</a>.  Here\'s the problem - by the time we had finalized the plan, it was already the first week of October -- and the elections are to be held this <a href="https://en.wikipedia.org/wiki/Icelandic_parliamentary_election,_2016">October 29th</a>.  </p>\n<p>Parliamentary systems move fast, that\'s one of the reasons I like \'em - but in this case, they needed a crowdfunding website up <em>now</em> and there was no time for my normal cautious "test-then-code-then-test-then-code" methodology. </p>\n<p>So, how do you do that? When you have to take on technical debt, how do you go about taking on the least amount of it? </p>\n<p>Even though you\'re not writing unit tests now, you need to assume you\'ll be writing unit tests in the future.  Because it\'s not just about having tests - testable code is easier to understand and reason about.  Writing tests encourages you to create loosely coupled code. In this case, you can get some of the effect without the cause, simply by keeping in mind: "When I unit test this, how would I want it organized?"  </p>\n<p>This isn\'t as good as the real thing, of course.  I\'m looking over my code - code that has made it into production - and realized there were places I should have used dependency injection instead of importing directly to a file. Like this: </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">//this is the bad way.  </span>\n<span class="token keyword">import</span> mongodb <span class="token keyword">from</span> <span class="token string">\'mongodb\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> MongoClient <span class="token operator">=</span> mongodb<span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">MONGO_URL</span> <span class="token operator">=</span> <span class="token string">\'mongodb://someURL.com\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">connectToMongo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  MongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token constant">MONGO_URL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> db<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>\n      <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>The problem is that now if i want to test connectToMongo(), I actually have to connect to the real database.  And for the most part, I don\'t want to do that. What I really should have done was something like this: </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">//this is a better way.  </span>\n<span class="token keyword">import</span> mongodb <span class="token keyword">from</span> <span class="token string">\'mongodb\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> MongoClient <span class="token operator">=</span> mongodb<span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token constant">MONGO_URL</span> <span class="token operator">=</span> <span class="token string">\'mongodb://someURL.com\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>injections <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n  connectToMongo<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span> injections<span class="token punctuation">.</span>client <span class="token operator">||</span> MongoClient<span class="token punctuation">;</span>\n    client<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token constant">MONGO_URL</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">,</span> db<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>db<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Or something along those lines.  Main thing is that I\'m importing a lot of files directly - and not just from third party libraries, but also my own code as well.  TDD would have caught this anti-pattern. Now it\'s going to be a messy refactor.  </p>\n<p>But that said, I also made some smart decisions too. One key feature of the site was multilingual support.  Instead of hardcoding in key phrases, one of the ways I was able to approach this was by creating data objects for every possible phrase on the site and keeping them in a seperate "text" directory.  </p>\n<p>For example, this is my "text/labels.js" file.  </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  donate<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">EN</span><span class="token punctuation">:</span> <span class="token string">"Donate"</span><span class="token punctuation">,</span>\n    <span class="token constant">IS</span><span class="token punctuation">:</span> <span class="token string">"Styðja"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  home<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">EN</span><span class="token punctuation">:</span> <span class="token string">"Home"</span><span class="token punctuation">,</span>\n    <span class="token constant">IS</span><span class="token punctuation">:</span> <span class="token string">"Heim"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  about<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">EN</span><span class="token punctuation">:</span> <span class="token string">"About"</span><span class="token punctuation">,</span>\n    <span class="token constant">IS</span><span class="token punctuation">:</span> <span class="token string">"Um"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  theConstitution<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">EN</span><span class="token punctuation">:</span> <span class="token string">"The Constitution"</span><span class="token punctuation">,</span>\n    <span class="token constant">IS</span><span class="token punctuation">:</span> <span class="token string">"Stjórnarskráin"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  learn<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">EN</span><span class="token punctuation">:</span> <span class="token string">"Learn"</span><span class="token punctuation">,</span>\n    <span class="token constant">IS</span><span class="token punctuation">:</span> <span class="token string">"Læra"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  parties<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token constant">EN</span><span class="token punctuation">:</span> <span class="token string">"Parties"</span><span class="token punctuation">,</span>\n    <span class="token constant">IS</span><span class="token punctuation">:</span> <span class="token string">"Flokkar"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>In Redux, I simply defined a reducer called "language," when then gets mapped to every component\'s props.  So when it came time to define the button texts, it was easy to switch up the languages - just send in "EN" for English, and "IS" for Icelandic.  </p>\n<div class="gatsby-highlight" data-language="jsx">\n      <pre class="language-jsx"><code class="language-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">primaryText</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>labels<span class="token punctuation">.</span>home<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>language<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">primaryText</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>labels<span class="token punctuation">.</span>learn<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>language<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/learn<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">primaryText</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>labels<span class="token punctuation">.</span>about<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>language<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/about<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">primaryText</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>labels<span class="token punctuation">.</span>theConstitution<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>language<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/constitution<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MenuItem</span> <span class="token attr-name">primaryText</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>labels<span class="token punctuation">.</span>parties<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>language<span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/parties<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>By factoring out the actual content of the text from the rest of the site, it also made it easier for Icelandic non-technical team members to go in and insert the correct Icelandic in the right areas, without having to wade through tons of JS or JSX code.  It worked out brilliantly.  </p>\n<p>Another way to uncouple code was by using inline styles.  While some designers still swear by SASS and LESS, the truth is that since we\'re already abstracting our websites into itty bitty pieces (on purpose), it doesn\'t make a whole lot of sense in my view, to keep style separate from the content -- especially when the same component can be used with different styles, simply by passing in props in React. Having the styles in the same file as the component itself really helps narrow down those pesky CSS bugs.  </p>\n<p>The big limitation of inline styles, however, is that CSS and SASS support some features that aren\'t provided for in inline styles.  However, the Aphrodite library removes that limitation - so I used it.  </p>\n<p>I\'m happy with the way the site worked out, though it\'s a bit embarrassing to have something on my public github without unit test coverage. In the meantime, I\'ll add what tests I can, now that the site\'s main requirements have been met, and probably will go over and refactor after the Icelandic elections so that I can use this as a portfolio piece.  </p>',frontmatter:{date:"16 October, 2016",path:"/blog/the hip",title:"Shooting from the Hip (without shooting yourself in the foot.)",tags:["professional coding"],featuredImage:{publicURL:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4.jpg",childImageSharp:{sizes:{srcSet:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-23bad.jpg 310w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-b3870.jpg 620w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-f0cf2.jpg 950w"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-the-hip-0b55fa731bcf63c77d6f.js.map