(self.webpackChunk=self.webpackChunk||[]).push([[112],{1862:(a,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s}),o(1418),o(3238),o(5769),o(4078);const e={name:"book",props:["book","index","sortValuesEnabled"],mixins:[o(6495).Z],components:{"sort-values":function(){return o.e(378).then(o.bind(o,6368))}},methods:{playSample:function(a,t){this.$root.$emit("play-audio",{from:"book",route:this.$route,book:a,index:t})}}},s=(0,o(810).Z)(e,(function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"details-inner-wrap"},[a.sortValuesEnabled?o("sort-values",{attrs:{book:a.book}}):a._e(),a._v(" "),o("div",{staticClass:"ale-cover"},[a.book.sample?o("div",{staticClass:"ale-play-sample",on:{click:function(t){return a.playSample(a.book,a.index)}}},[o("div",[o("font-awesome",{attrs:{fas:"",icon:"play"}})],1)]):a._e(),a._v(" "),o("div",{staticClass:"ale-click-wrap",on:{click:function(t){return a.$root.$emit("book-clicked",{book:a.book})}}},[a.book.blurb?o("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"left",flipBehavior:["left","right","top","bottom"],maxWidth:300},expression:"{ placement: 'left', flipBehavior: ['left', 'right', 'top', 'bottom'], maxWidth: 300 }"}],staticClass:"blurb-tooltip",attrs:{content:a.book.blurb}}):a._e(),a._v(" "),o("div",{staticClass:"info-icons-wrapper"},[a.book.favorite?o("div",{staticClass:"favorite-marker"},[o("span",[o("font-awesome",{attrs:{fas:"",icon:"heart"}})],1),a._v(" "),o("span",[a._v("favorite")])]):a._e(),a._v(" "),"Finished"===a.book.progress?o("div",{staticClass:"finished-marker"},[o("span",[o("font-awesome",{attrs:{fas:"",icon:"check"}})],1),a._v(" "),o("span",[a._v("finished")])]):a._e(),a._v(" "),a.book.fromPlusCatalog?o("div",{staticClass:"plus-catalog-marker"},[a.book.unavailable?o("span",[o("font-awesome",{attrs:{fas:"",icon:"lock"}})],1):o("span",[o("font-awesome",{attrs:{fas:"",icon:"plus-circle"}})],1),a._v(" "),o("span",[a._v("catalog")])]):a._e()]),a._v(" "),o("div",{staticClass:"ale-info-indicator"},[o("div",[o("font-awesome",{attrs:{fas:"",icon:"book"}})],1)]),a._v(" "),o("img",{staticClass:"ale-cover-image",attrs:{src:a.makeCoverUrl(a.book.cover,280),alt:""}})])])],1)}),[],!1,null,"74d3e1df",null).exports}}]);