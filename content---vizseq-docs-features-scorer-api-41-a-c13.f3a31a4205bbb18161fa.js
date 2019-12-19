(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{162:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));r(59),r(32),r(23),r(24),r(60),r(0);var n=r(175),a=r(176);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i={id:"scorer_api",title:"Scorer APIs",sidebar_label:"Scorer APIs"},s=[{value:"Parent Class: vizseq.scorer.VizSeqScorer",id:"parent-class-vizseqscorervizseqscorer",children:[{value:"Constructor",id:"constructor",children:[]},{value:"score()",id:"score",children:[]}]}],c={rightToc:s},l="wrapper";function u(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(n.b)(l,o({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"parent-class-vizseqscorervizseqscorer"},"Parent Class: vizseq.scorer.VizSeqScorer"),Object(n.b)("p",null,"All scorers are inherited from this class and implement the ",Object(n.b)("inlineCode",{parentName:"p"},"score()")," interface.\nSee ",Object(n.b)("a",{href:Object(a.a)("docs/features/metrics")},"here")," for the list of built-in scorers."),Object(n.b)("h3",{id:"constructor"},"Constructor"),Object(n.b)("h4",{id:"arguments"},"Arguments"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"corpus_level: bool = True"),": calculating corpus-level score. Default to ",Object(n.b)("inlineCode",{parentName:"li"},"True"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"sent_level: bool = False"),": calculating sentence-level score. Default to ",Object(n.b)("inlineCode",{parentName:"li"},"False"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"n_workers: Optional","[int]"," = None"),": the number of processes to be used. ",Object(n.b)("inlineCode",{parentName:"li"},"None")," for automatic configuration. Default\nto ",Object(n.b)("inlineCode",{parentName:"li"},"None"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"verbose: bool = False"),": printing detailed logs."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"extra_args: Optional[Dict","[str, str]","] = None"),": a key-value dictionary for metric-specific parameters. Default to\n",Object(n.b)("inlineCode",{parentName:"li"},"None"),".")),Object(n.b)("h3",{id:"score"},"score()"),Object(n.b)("h4",{id:"arguments-1"},"Arguments"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"hypothesis: List","[str]"),": The model predictions."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"references: List[List","[str]","]"),": The references. Inner list #1 for the 1st set of references, #2 for the 2nd set of\nreferences, and so on. (See also the ",Object(n.b)("a",{href:Object(a.a)("docs/getting_started/scorer_example")},"example"),".) "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"tags: Optional[List[List","[str]","]] = None"),": The sentence tags. Inner list #1 for the 1st set of tags, #2 for the 2nd\nset of tags, and so on. Default to ",Object(n.b)("inlineCode",{parentName:"li"},"None"),".")),Object(n.b)("h4",{id:"returns"},"Returns"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"score: vizseq.scorers.VizSeqScore"),": ",Object(n.b)("inlineCode",{parentName:"li"},"VizSeqScore")," is a namedtuple, whose definition is as follows:")),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-python"}),"class VizSeqScore(NamedTuple):\n    corpus_score: Optional[float] = None\n    sent_scores: Optional[List[float]] = None\n    group_scores: Optional[Dict[str, float]] = None\n")))}u.isMDXComponent=!0},174:function(e,t,r){"use strict";var n=r(0),a=r(61);t.a=function(){return Object(n.useContext)(a.a)}},175:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):Object.assign({},t,e)),r},s=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(r[n]=e[n]);return r}(e,["components","mdxType","originalType","parentName"]),u=i(r),b=n,p=u[s+"."+b]||u[b]||l[b]||o;return r?a.a.createElement(p,Object.assign({},{ref:t},c,{components:r})):a.a.createElement(p,Object.assign({},{ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var b=2;b<o;b++)i[b]=r[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(177);var n=r(174);function a(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?r+e.slice(1):r+e}},177:function(e,t,r){"use strict";var n=r(9),a=r(25),o=r(94),i="".startsWith;n(n.P+n.F*r(95)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return i?i.call(t,n,r):t.slice(r,r+n.length)===n}})}}]);