!function(){function f(e,t,n){t.is&&t.getCustomData("block_processed")||(t.is&&CKEDITOR.dom.element.setMarker(n,t,"block_processed",!0),e.push(t))}function t(m,c){function e(){this.foreach(function(n){/^(?!vbox|hbox)/.test(n.type)&&(n.setup||(n.setup=function(e){n.setValue(e.getAttribute(n.id)||"",1)}),n.commit||(n.commit=function(e){var t=this.getValue();"dir"==n.id&&e.getComputedStyle("direction")==t||(t?e.setAttribute(n.id,t):e.removeAttribute(n.id))}))})}var t,u=(t=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit),m.config.div_wrapTable&&(delete t.td,delete t.th),t),g=CKEDITOR.dtd.div,a={},h=[];return{title:m.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:m.lang.common.generalTab,title:m.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:m.lang.div.styleSelectLabel,"default":"",items:[[m.lang.common.notSet,""]],onChange:function(){var e=["info:elementStyle","info:class","advanced:dir","advanced:style"],t=this.getDialog(),n=t._element&&t._element.clone()||new CKEDITOR.dom.element("div",m.document);this.commit(n,!0);for(var l,i=(e=[].concat(e)).length,o=0;o<i;o++)(l=t.getContentElement.apply(t,e[o].split(":")))&&l.setup&&l.setup(n,!0)},setup:function(e){for(var t in a)a[t].checkElementRemovable(e,!0,m)&&this.setValue(t,1)},commit:function(e){var t;(t=this.getValue())?a[t].applyToObject(e,m):e.removeAttribute("style")}},{id:"class",type:"text",requiredContent:"div(cke-xyz)",label:m.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:m.lang.common.advancedTab,title:m.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",requiredContent:"div[id]",label:m.lang.common.id,"default":""},{type:"text",id:"lang",requiredContent:"div[lang]",label:m.lang.common.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",requiredContent:"div{cke-xyz}",style:"width: 100%;",label:m.lang.common.cssStyle,"default":"",commit:function(e){e.setAttribute("style",this.getValue())}}]},{type:"hbox",children:[{type:"text",id:"title",requiredContent:"div[title]",style:"width: 100%;",label:m.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",requiredContent:"div[dir]",style:"width: 100%;",label:m.lang.common.langDir,"default":"",items:[[m.lang.common.notSet,""],[m.lang.common.langDirLtr,"ltr"],[m.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){e.call(this);var i=this,o=this.getContentElement("info","elementStyle");m.getStylesSet(function(e){var t,n;if(e)for(var l=0;l<e.length;l++)(n=e[l]).element&&"div"==n.element&&(t=n.name,a[t]=n=new CKEDITOR.style(n),m.filter.check(n)&&(o.items.push([t,t]),o.add(t,t)));o[1<o.items.length?"enable":"disable"](),setTimeout(function(){i._element&&o.setup(i._element)},0)})},onShow:function(){"editdiv"==c&&this.setupContent(this._element=CKEDITOR.plugins.div.getSurroundDiv(m))},onOk:function(){if("editdiv"==c)h=[this._element];else{var e,t,n,l=[],i={},o=[],a=m.getSelection(),d=a.getRanges(),r=a.createBookmarks();for(t=0;t<d.length;t++)for(n=d[t].createIterator();e=n.getNextParagraph();)if(e.getName()in u&&!e.isReadOnly()){var s=e.getChildren();for(e=0;e<s.count();e++)f(o,s.getItem(e),i)}else{for(;!g[e.getName()]&&!e.equals(d[t].root);)e=e.getParent();f(o,e,i)}for(CKEDITOR.dom.element.clearAllMarkers(i),d=[],t=null,n=0;n<o.length;n++)e=o[n],(s=m.elementPath(e).blockLimit).isReadOnly()&&(s=s.getParent()),m.config.div_wrapTable&&s.is(["td","th"])&&(s=m.elementPath(s.getParent()).blockLimit),s.equals(t)||(t=s,d.push([])),d[d.length-1].push(e);for(t=0;t<d.length;t++){for(o=(s=d[t][0]).getParent(),e=1;e<d[t].length;e++)o=o.getCommonAncestor(d[t][e]);for(n=new CKEDITOR.dom.element("div",m.document),e=0;e<d[t].length;e++){for(s=d[t][e];!s.getParent().equals(o);)s=s.getParent();d[t][e]=s}for(e=0;e<d[t].length;e++)(s=d[t][e]).getCustomData&&s.getCustomData("block_processed")||(s.is&&CKEDITOR.dom.element.setMarker(i,s,"block_processed",!0),e||n.insertBefore(s),n.append(s));CKEDITOR.dom.element.clearAllMarkers(i),l.push(n)}a.selectBookmarks(r),h=l}for(l=h.length,i=0;i<l;i++)this.commitContent(h[i]),!h[i].getAttribute("style")&&h[i].removeAttribute("style");this.hide()},onHide:function(){"editdiv"==c&&this._element.removeCustomData("elementStyle"),delete this._element}}}CKEDITOR.dialog.add("creatediv",function(e){return t(e,"creatediv")}),CKEDITOR.dialog.add("editdiv",function(e){return t(e,"editdiv")})}();