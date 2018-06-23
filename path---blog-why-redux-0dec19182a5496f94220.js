webpackJsonp([0x6e5086204a99],{425:function(t,e){t.exports={data:{markdownRemark:{html:"<p>Still working on refactoring the web app. I'm pretty close to having Redux working - everything after that is downhill. </p>\n<p>But here are the reasons I think that it was crucial to do this, and why the Redux pattern is very helpful.</p>\n<ul>\n<li>\n<p>It's easy to test. If clicking on a UI element is supposed to dispatch an action, you can quickly tell if that action was indeed dispatched, see the before and after states.  This isn't that much to look at, <em>but</em> with this data, you can automate UI interaction so that you can leave the app running over the weekend, and log it to a database. Not only can you track down bugs, but you can also find bottlenecks in your app by timing when certain actions are called -- you can objectively prove with A/B testing that solution A is more efficient than solution B. </p>\n</li>\n<li>\n<p>Once you get everything set up, it is extremely easy to manage state.  The way we were doing it before was by passing props around to different elements -- I'm sure there was a better way, but that's the way we did it.  In contrast, each element can easily get access to any reducer you want, but will only have access to the reducers and actions you specify.  </p>\n</li>\n<li>\n<p>Because reducers are pure functions, which don't mutate state, it makes it easier to test the functionality of components in isolation in unit testing.  </p>\n</li>\n</ul>\n<p>Now, you can do many of these things in Flux, but having Redux allows you to code in a more modular way, and separates your concerns. </p>",frontmatter:{date:"02 March, 2016",path:"/blog/why-redux",title:"Why Redux?",tags:["redux"],featuredImage:{publicURL:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4.jpg",childImageSharp:{sizes:{srcSet:"/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-23bad.jpg 310w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-b3870.jpg 620w,\n/static/defaultImage-bf9d9895bd7ec25009144b0f166399c4-f0cf2.jpg 950w"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---blog-why-redux-0dec19182a5496f94220.js.map