(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(69),o=n.n(l),c=(n(83),n(13)),i=n(32),A=n(8),d=n(22),s=n(34);function u(){var e=Object(d.a)(["\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin: 10px 0 10px 0;\n"]);return u=function(){return e},e}var m=s.a.p(u());function E(e){var t=e.posts,n=(t.userId,t.user),a=t.id,l=t.title,o=t.body;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-9"},r.a.createElement("h5",{style:{fontStyle:"italic",marginBottom:"25px"}},l),o.length>90?r.a.createElement(m,null,"".concat(o.substring(0,90)," ....")):r.a.createElement(m,null,o),r.a.createElement(i.b,{to:"/post/".concat(a),className:"btn btn-secondary mb-2"},"Read more")),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("h6",null,"Author : ",n.username))))}function g(){var e=Object(d.a)(["\n  {\n    posts {\n      userId\n      user {\n        username\n      }\n      id\n      title\n      body\n    }\n  }\n"]);return g=function(){return e},e}var p=Object(c.gql)(g());function B(){var e=Object(c.useQuery)(p),t=e.loading,n=e.error,a=e.data;return t?r.a.createElement("h4",null,"Loading..."):n?(console.log(n),r.a.createElement("h4",null,"Error :")):r.a.createElement("div",null,r.a.createElement("h1",{className:"display-5 my-4"},"Yangoh's Blog"),a.posts.map((function(e){return r.a.createElement(E,{key:e.id,posts:e})})))}var Q=n(75);function v(){var e=Object(d.a)(["\n    {\n      comments(postId: ",") {\n        postId\n        id\n        name\n        email\n        body\n      }\n    }\n  "]);return v=function(){return e},e}function C(e){var t=Object(c.gql)(v(),e.postId),n=Object(c.useQuery)(t),a=n.loading,l=n.error,o=n.data;return a?r.a.createElement("h4",null,"Loading..."):l?(console.log(l),r.a.createElement("h4",null,"Error :")):o.comments.map((function(e){return r.a.createElement("div",{key:e.id,className:"card card-footer mb-3"},r.a.createElement("div",{style:{marginBottom:"10px"}},e.body),r.a.createElement("div",{style:{textAlign:"right"}},e.name),r.a.createElement("div",{style:{textAlign:"right"}},e.email))}))}var D=n(105),I=n(106),f=n(107),N=n(108),w=n(109),y=n(110),h=n(111),k=n(112);function O(e){var t=e.postId;return r.a.createElement("div",null,r.a.createElement(D.a,{url:"https://radiant-garden-98982.herokuapp.com/"+t},r.a.createElement(I.a,null)),r.a.createElement(f.a,{url:"https://radiant-garden-98982.herokuapp.com/"+t},r.a.createElement(N.a,null)),r.a.createElement(w.a,{url:"https://radiant-garden-98982.herokuapp.com/"+t},r.a.createElement(y.a,null)),r.a.createElement(h.a,{url:"https://radiant-garden-98982.herokuapp.com/"+t},r.a.createElement(k.a,null)))}function x(e){var t=e.user,n=t.email,a=t.phone,l=t.website;return r.a.createElement("div",{className:"card text-white bg-primary ",style:{right:"0",position:"absolute",bottom:"30px",padding:"20px 10px 20px 10px",zIndex:"1000"}},r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"100px max-content"}},r.a.createElement("p",null,"Email"),r.a.createElement("p",null," ",n),r.a.createElement("p",null,"Phone "),r.a.createElement("p",null,a),r.a.createElement("p",null,"Website"),r.a.createElement("p",null," ",l)))}function L(){var e=Object(d.a)(["\n    {\n      post(id: ",") {\n        userId\n          user{\n            username\n            email\n            phone\n            website\n          }\n        id\n        title\n        body\n      }\n    }\n  "]);return L=function(){return e},e}function b(){var e=Object(d.a)(["\n  cursor: pointer;\n  &:hover > "," {\n    opacity: 1;\n  }\n"]);return b=function(){return e},e}function R(){var e=Object(d.a)(["\n  opacity: 0;\n"]);return R=function(){return e},e}function T(){var e=Object(d.a)(["\n  margin: 30px;\n  p {\n    font-size: 20px;\n  }\n  h5 {\n    text-align: right;\n  }\n"]);return T=function(){return e},e}var U=s.a.div(T()),j=s.a.div(R()),q=s.a.div(b(),j);function X(){var e=Object(A.e)().postId,t=parseInt(e),n=Object(c.gql)(L(),t),a=Object(c.useQuery)(n),l=a.loading,o=a.error,d=a.data;return l?r.a.createElement("h4",null,"Loading..."):o?(console.log(o),r.a.createElement("h4",null,"Error :")):r.a.createElement(U,null,r.a.createElement(i.b,{to:"/",style:{position:"absolute",right:"100px",top:"50px",fontSize:"1.5em"}},"Home"),r.a.createElement("div",{style:{position:"relative",zIndex:"100"}},r.a.createElement("h4",{style:{marginBottom:"50px"}},d.post.title),r.a.createElement("p",null,d.post.body),r.a.createElement(Q.LoremIpsum,{p:3}),r.a.createElement(q,null,r.a.createElement(j,null,r.a.createElement(x,{user:d.post.user})),r.a.createElement("h5",null,"- ",d.post.user.username," -"))),r.a.createElement("div",{className:"badge badge-light"},"Click the icon to share this post"),r.a.createElement(O,{postId:e}),r.a.createElement("h4",{style:{borderBottom:"2px solid green",paddingBottom:"5px",marginTop:"30px"}},"Comments"),r.a.createElement(C,{postId:t}))}n(101);var Z=n(77),H=n.n(Z),W=new c.ApolloClient({uri:"/graphql",cache:new c.InMemoryCache});var z=function(){return r.a.createElement(c.ApolloProvider,{client:W},r.a.createElement(i.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:H.a,alt:"indexLogo",style:{display:"block",height:"100px"}}),r.a.createElement(A.a,{exact:!0,path:"/",component:B}),r.a.createElement(A.a,{exact:!0,path:"/post/:postId",component:X}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAFRhJREFUeJzt3Xl4FFW6BvD3VPWSBNlBVGQXVMSVnYhx33BXFAcdd8UrKoKIMurc0Tte56IgboAgOjquCDrj44KiXDcEQcSLG4jIosguS0JCd1ed+eOjbkKoOunudHdI8v6ep8cJVd19urreqlOnzjmtdGHvHwDVEYAGUeoULOXA1TFYugSutRVwN8Cyf0Uivhzh0BI41lIkEj+refPW1XRhU6V0YZ+dsKxITReE6gClKvz/Xf+jNeA4cVjYCI3lUFgIx5qDKOZj9pzlai8/MCvdv28poPJquiBUxym1e4ASiRIofAPXfR+h0NvYuOVL9d13sZoroD8GhGqGAqAsOcnEE1pZWAxlzYBrTVOffvpdTRfPw4DQ3kEpwFJAPFEKjVkIYzI2bJtZ02cVBoT2Ppa169oFCwA8Dsd5Vc2dW1oTRWFAaO9lWfLfhLsIdmIMVP6r6qOPEjktQi7fjCglriuPkDoKKvIC4mWz9LF9inJZBAaE9n6ulqCEw0WAel/3L5ygi3rul4u3ZkCo9nBdQKkwbDUE2p6je3W/KNtvyYBQ7eO4AOwOyMubpgsLJ+iioibZeisGhGonreURVkPg7vxAH9f36Gy8DQNCtZvjAlboGLiYpfv1G5Tpl2dAqPZzXcCymmlL/0P3L7wrky/NgFDdoDWUUjYs9YAu7PmYLioKZeJlGRCqW1wXCEeHwimbqs84I1rdl2NAqO5xXCAUvhzFW5/VRUXV6iXCgFDd5LiAbQ2CU/ZUdapbDAjVXd6ZJLFjXLovwYBQ3ea4QCg6VPfpNTqdpzMgVPe5LnTIvk/37nFJqk9lQKheUJZlIxqaqIv6HZXK8xgQqh+0BlSoCRLus6n03WJAqP5wXSAcOhLx+P8k+xQGhOoXx4W29LXJdpVnQKjeUZalEAmPTWbQFQNC9Y/WQCjUBjH7/qpWZUCofnJcIGxfWdUYdwaE6i+lQnDVA7p793DQKgwI1V+uC4TtfsgLXxy0CgNC9ZwGlB6tu3cv8FvKgFD95mrADndFNOTbDYUBIYIGFG71G2DFgBC5GgiFjkTx1tMrL2JAiADI7zA4Q/Sun/7xMCBEgLRoaXUCCgu7VvxnBoTIEw5FofWlFf+JASHyuBqAe0HFiR4YECKP1tAKB8Nxunv/xIAQVaDCIQtwz/b+ZkCIKtIaUO4p3lRBDAhRRa4GoLrCcToCDAjRniw7D4j3BhgQIn+OVQgwIEQ+NKD00XrgQJsBIapMA7B0B6xZ04oBIapMa2hXNYOtOzEgRD5UyLaRwCEMCJEfpQArcTADQuRLA0BHBoTIjwbgWq0ZEKIglm7BgBD50RpwVWMGhCiIQgEDQhTEssIMCFGwEANCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZMCAEBkwIEQGDAiRAQNCZBDK2TvFYoDWe/57OAxYzOkeXBeIx4DKm8yygEikRopUH2U/IFoDoRDQ/zigYcPdQ+K6wFdfAZs3MSQVuS7QogXQuy8QsstDogBs3gx8PkfWoazLfkASCaBzZ2DMw/7Lp0wGnpoI5OVlvSi1RiwGnDkAuH7InstcFxg8CFi5Ug48lFW5OWybqgSsLvgL2vkdF7Dt3JalHstNQPyuPZJZVp8Fbhdur1xixZ/IgAEhMmBAiAwYECIDBoTIgAEhMmBAiAwYECIDBoTIoO535nFdeWhXbkIrJQ/bAlQOjg+OIw/v/QHpdKgs6TJSk91GvLL5dXxUqrx8SuW+bHuJ2hMQ78us/GVpveeO5jhAPC79mRo3Bpq3ABo1AsIhIBYHtvwObNgIbN8mr5fp/mCuW/7+rVoBbdsC+x8ANG4iQdm6FfhtDbBqNbB+nXTozFW3f62lM6RtA/u2Ajp2BNq1A1q0BKJRKfeW34FffgFWrADW/AqUlMhnSadzZCIR3G1G6+S3fSIh29UvrFrL9stCkGtHQBwHaN8euOa6PTdoIgE8+wywdIlsoEQCOPBA4NjjgL59gY6dgKZNZQN6du4E1q8Hvl4EvPsOsPDL8iNmde3cKWE840zglNOAQw8BGjbyX3fbNuCHH4BZ7wH/O1uCE41WvwxBYjHpNX3SyVK+I46UA4hp/ZUrgDmfAe/NBJYtk5Aku53iceCss4ETTvTfeb/5Bnh2atWvF4tJWQdf5r/u5s3AE49JkDN8kKkdAUnEgcOPAE48yX/5VwuBhQuANm2BwZcDA84yf/HRKNCmjTwGnAW8/x4wfpxs6IpBSoXrSjhPPAm47gY5MlelUSOgVy95/OEyYOoUKUtQtSdd3lmjdx/g+huAbocn97xIBOjcRR4DLwHeelMORps2JXfkd115br9C/+V9+wHLfwI+mBU83MF1gX32AUbdCXQ6yH+dbVuByZMkIBlWey7STb1+ux4GnHIq8OQk4A+DzeGoTCng1NOAh8bKIKVEIvWyeaf+W24FHngwuXBU1r49cN9/AbffARQUSHgywXVl290wBBj7SPLhqKygQELyxETgiCPkTFmVcFjOECtXBK9z8y1Ay5ZyUPATiwFXXBUcDgAY/4jUCLJQRa09ATE57XTg4UekLp2uQ7sCd98rX2oqXfC9dUeOkrNAdevBF14EvPgycM551XsdoDy4o+4Crr42MwOs2rcHHhoH9OpddUgsS8424x4OPvAc0FrOan7LYzHgmO7AJYOC32PWe8Dbb2VtXFHdCEim9O4DnHNuckdHTywGXHW1PC9T2rQF8vOr/zqOA9x8K3D2OdV/rYoaNQL+cp+cKRNx87rRKDBnDvDqK8HrnHUOcGz/3be768pZ69ZhwTv/urXAY4+Wt0xmQe24BkmV48gF+NeLpLUqP0/OEH36Sn3W5JJL5cK9tLTqU3YsJkfSK65KrlwlJdJ6tW2bnKn23RdotV9yz01VWZkE4+JLzOtt3SLzAnz/HfD770A0D+jUCejRUxo7gjRrDtw2Ahhxm5xFTTtoJCLXV917AAcfvOdy25bq6bffANu3y9/egefQrv6vqTXw6Hjgt9+yOly77gXk60XAhCeAxYtlVhDs+uKUAjp0kC+1d5/g5x94IHDkUcCnn5hP21rLUf6moVVXXVavBqa9Kq1BGzdI645SQIMGchF77nnSspSpOrTjAPvvD9x4U/A6O8uAV14GXp8hO5nryqbyapeNG0uDwzXXSZD99OotR/4PPzC3vlkWUFwMjB0DPPq4hLCydu2lGvjwGCn/4YdLq1WQt940X9xnSN2qYs16Hxh2ixwRLQvIy5cNmJcnX+DKFcBdo6RZ1+Soo6tuRYrFpPnykEPN673zNnD9NcBLL8jZw3HKb76VlAAL5gP3jJZybd6c0scNFI/LmaNFC//lGzYAI4ZL9WT9ejkQ5OXJjuttr9JSYMZ04KYhwI9Lg9/rvPOTa/aNROR7ee654HUuuFBa9CwLuPU2+f78/LIamPBkTm6y1p2ALFkCPPiA1GOjUf9TfjgC7NghTbqlpcGv1b69eeN7N7jOPd9cpjf/Bdz/F6lS5efvfldaqfI5riJROQrfdYesWx2uIzcAzxjgv7ykBLj3T8C8ueVl8mNZsnzVKuDee4AtW/zXO/wIoHXr4FaoiiIR4IXn5SzvJxQC7v4z8PiTct/Dj+MAj4wDNm5kQJKmNfDMFNm5qqruRCJyc27u58HrNG4sGz+oNctx5AK1a0D9GJD69LiHk78BmZ8PLFwIPDa+6nVN4gmgd2+gWTP/5S+9CMyfn3wjQDQKLFsKTH/Nf3lBgVQTk2ketyw5gI19CCgp9l+nVStpuQry+nTgk4+ze0O1groRkF9/ARYsSL6pT2vgc0NAQiHzRWciARx9TPBNxXhMdvQdJakd5fLypMlywYLkn1OZUnIDzs+2rcC/3pDP53XdSeahLOCD96Va6addu+SbxsNhaRCYMjn1z7Z8OTD5KekylCN14yL9+++l9SPZo4pty/VIUOuLsuTfg750SwGHdQt+/c8+AxYtkqpTKpSSZtPXpwM9eqT2XEDK26AB0KWL//JEQq5LLCu1BoGEA7TcN/i6rEXL1MoZzQNemyaNJX36JveceFzOyFu25OzsAdSVgPyyOrWbe0pJdSwe9z/rWCo4IFrLF9y2bfDrv/tO+vN9hcLA/30tO0KTJqk913Wl31nQxXmz5sDEyUBsJ/6/dS8puz5z0BmzYcPU7kMotWuHHwtMmpzc53zlJbluyvEMnHUjINsD6rNBvCN1IuEfENOXrTWQXxBcx9++Dfjh+/TvWluW3I9YvSq9gDRuIuULEolk/q5zQUHqTdThMPDzcuDJx+VOv6kq+t23wDNTa2QWzrpxDaJzOJGz1kBBfvBOuHGj9MpN956Gd3Rdvz69suXn5378RlCrYTLPe/stc18tAHjxBTnj18AE53UjIOnwOvH58a5B/HhNvEEXijt2pNfhsfJ7bE+zubcmZsmPRFKrsXliMbm7fkBr83onnyLvUQPT1NaNKlamVdW3x7KDRyNGIrKTVre7ejyNkCm1q/dAgOJi4LNPZNBYxs4yGpg3L/Upgx1HqpDDhld9XXH8CdLb4LVpvAbZ6ymUj27z07Sp1Mm3b09/J1RKLnzTeV7JrjOY3zXQgvnAXXfuOvtlsBpmWamPo0kk5OcdOnRIbv0bbpQ78St+Tn/MThrqdxUrnaO8soDSHcF34ps2kypDMneW/XhVuDZt0iibkqpZUNkaNCjvUhKNpv8AJF/hsPyd6g5bVgYcfzxwfhU9ESpq3BgYPkJa+XJY1aq/AUmXUnJ22LTJf7ltyz2MdK9DXAfYbz+gfZJH1oosSxoINgeUrUMHaeWqTvVPa+D8C2SAWkGB7OxVdXmvKJGQzzdsuFRVU9GzFzBoUGrDEaqJAUmVUnKE/mlZ8Dqnni7d6tPZEWNxoOgEOdqnU7YdO+SOs58WLaUzYNAd8arE48BBBwF3jgbufwB4+llg6M3S1cTU6OHxlt8yTCax8FNcLJNFBLnqGqBbt/Q/Q4oYED9aV/1lL5gfvKxTJxmLUVaW2vsmEtJN/eKLU3teRa4LfGnoqjL4cglvOlVAxwEuHFj+d5s2wB+vBCZPBf50t5zBTNtt507ZLief4r9ca+Bv/w1cfQWw7Ef/dQoKgBEjpZk9B7/TWH8D4s2V5UdXcTQMhSQgpp63190AHHOMuddwRd7UPyNHSW/cdIXD0qq0Y4f/8i5dgP8YmvrEEKWlwHFFMry5skgE6NDRvM3iceCgzvLeQd6bKUMWiotlnHk8oOp2WDfgiitzchapvwGpDtsG1qyRqXqCNGwI/PVB6WtUWhp8TeK6srxZM5m0of9x1S/b6lXAxx8Fr3PRQLkGsG05qpt2bMeRsPXsBYy+O/iC/J9vyGv5tdy5roTo9pHBE2qsWyd31S0lDQlfzAVmBPQgBmRyjp69sn49woCky7aBV1+WFq0gLVvKbCnDhsuYiURcql3eIxaT8d0XDgQmTQGKjs9M2ZQCXvyH+ew16FIZ3denr6xfViY7WywmD+/vpk1lUoWHxgZ3r1m5Qo78QeGJxYDLLg/uxq418PijMrLR3tU8HY4AU58Gfv7Z/zmRCDD8dgmcm2aLYRJ4HyRdoRCwdKmMr7j62uD1olEZOnrueTJGZNky6XaeXyDdxA/rFjykNV3hsIx5ef452bmDHHkUMP4x6X4+f77U+7duld9mb7WfTO/Ts5fMTBlEa2DSJKlu+vWy9WYm+eOVwa8x810JWMWbgJYlHTbHj5Nw+t3X6dRJ7qWM+RsQzc7gKQbEj5NEiwwgR7Hn/i6j33r0NK+7zz7Svds0Hj6TolHg+b9Lq1PQhHueQ7sGT45QlRnTgdkBY9JdV6qaI0YGd1Fft1aqVn5Vs2gU+HwO8MYM4KKAhovzL5Bevh9/lJVu8PWziqWQ/o3CiixLjpD3/acM+c2UsrLq3wxTSj7fX+8HZn+YmXJV9uEHMjAsqCduPCaTPnTu7L9caxkXv3ZtcO/nUEgGV61c6b/ctqUKa5p8rhrqZ0AyKRSSSRBGDgfmf1H91/tiHjB4kPRyrS7blrD9+R7gmacz2+ozfZocGOJx/w6SsRjQt1AaBIL4Va0qs23p/v/oI8EBaN1aWseycIc9NwEx9UlKdkiqqZdqqndkPUEXlXYV7fl+r7NxI3DH7TIkdPv21Muy5Xdg4gR5jZ9+kqpH0Hul0sfLG1s/cQIw9EYZ7VidM+ePS4HRo4CHxkjLnN/357rAPg13dQ0JODN4rVbJfP/RqEzD9OY/g9c5c4B0asxw02/2r0G8u7vffrPnMteVGS6q2kh2SC46v/oKiFTaqRMJee2UZrjYNQv84sX+nQLnfi5Hq1QGPYVCcjSdMknGb599DnDc8TLPVtAOHY9L57vZs4GZ78j8Wd4UPMuWSQtO5QPD5k1yRE2lW7tSspMtXgzcMUKumc4cINdDyTQQbNsmoxxnvitzexUXm+v7Skk1dskS/4OF4wIvPCchSfa6IRSSg0+z5kDz5v6vWVKS8bEwSvfvWwqo7PchDhq+6v2+R1VcB4BPN/RUXiOZMgGph6OyREIejZsAnTrKDbIDDpCjquNI68zqVdJdZdUq+WLD4d0/g3fvQKndf3jH9DsZydBamptdLTtaly4yt1fbdtKMG4nIe2zZIr8RsnSJ7Ojr1krZvTIl8z7eHGB+y1w39W3s3dz1qzFUZz8wqNmAAKl90Zl4jWy+XmWuWz4zCLD7zIXJ/IJTLspXMXDer255O7fWcuPOTuE3QSrLxmfI9napIHfNvJkofKY3QLaHpnqzh6Q7fiEX5Qsa552JmeCB7HyGHA4pZisWkQEDQmTAgBAZMCBEBgwIkQEDQmTAgBAZMCBEBgwIkQEDQmTAgBAZMCBEBgwIkQEDQmTAgBAZMCBEBgwIkQEDQmTAgBAZWHBchoQoQAiwV2vXbV8TP7FLtNdSCgpY+2/xHMs370lqtAAAAABJRU5ErkJggg=="},78:function(e,t,n){e.exports=n(103)},83:function(e,t,n){}},[[78,1,2]]]);
//# sourceMappingURL=main.6ca35ba1.chunk.js.map