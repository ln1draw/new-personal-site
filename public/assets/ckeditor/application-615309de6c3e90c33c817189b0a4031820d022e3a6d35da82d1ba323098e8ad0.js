!function(c){function p(e,t,n,i){var o={data:i||0===i||!1===i?i:t?t.data:{},_wrap:t?t._wrap:null,tmpl:null,parent:t||null,nodes:[],calls:u,nest:h,wrap:f,html:m,update:_};return e&&c.extend(o,e,{nodes:[],parent:t}),n&&(o.tmpl=n,o._ctnt=o._ctnt||o.tmpl(c,o),o.key=++x,(F.length?b:y)[x]=o),o}function s(t,e,n){var o,i=n?c.map(n,function(e){return"string"==typeof e?t.key?e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g,"$1 "+g+'="'+t.key+'" $2'):e:s(e,t,e._ctnt)}):t;return e?i:((i=i.join("")).replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/,function(e,t,n,i){l(o=c(n).get()),t&&(o=a(t).concat(o)),i&&(o=o.concat(a(i)))}),o||a(i))}function a(e){var t=document.createElement("div");return t.innerHTML=e,c.makeArray(t.childNodes)}function n(e){return new Function("jQuery","$item","var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('"+c.trim(e).replace(/([\\'])/g,"\\$1").replace(/[\r\t\n]/g," ").replace(/\$\{([^\}]*)\}/g,"{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g,function(e,t,n,i,o,a,s){var r,l,p,u=c.tmpl.tag[n];if(!u)throw"Unknown template tag: "+n;return r=u._default||[],a&&!/\w$/.test(o)&&(o+=a,a=""),o?(o=d(o),s=s?","+d(s)+")":a?")":"",l=a?-1<o.indexOf(".")?o+d(a):"("+o+").call($item"+s:o,p=a?l:"(typeof("+o+")==='function'?("+o+").call($item):("+o+"))"):p=l=r.$1||"null",i=d(i),"');"+u[t?"close":"open"].split("$notnull_1").join(o?"typeof("+o+")!=='undefined' && ("+o+")!=null":"true").split("$1a").join(p).split("$1").join(l).split("$2").join(i||r.$2||"")+"__.push('"})+"');}return __;")}function r(e,t){e._wrap=s(e,!0,c.isArray(t)?t:[o.test(t)?t:c(t).html()]).join("")}function d(e){return e?e.replace(/\\'/g,"'").replace(/\\\\/g,"\\"):null}function i(e){var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function l(e){function t(e){function t(e){o=l[e+=r]=l[e]||p(o,y[o.parent.key+r]||o.parent)}var n,i,o,a,s=e;if(a=e.getAttribute(g)){for(;s.parentNode&&1===(s=s.parentNode).nodeType&&!(n=s.getAttribute(g)););n!==a&&(s=s.parentNode?11===s.nodeType?0:s.getAttribute(g)||0:0,(o=y[a])||((o=p(o=b[a],y[s]||b[s])).key=++x,y[x]=o),w&&t(a)),e.removeAttribute(g)}else w&&(o=c.data(e,"tmplItem"))&&(t(o.key),y[o.key]=o,s=(s=c.data(e.parentNode,"tmplItem"))?s.key:0);if(o){for(i=o;i&&i.key!=s;)i.nodes.push(e),i=i.parent;delete o._ctnt,delete o._wrap,c.data(e,"tmplItem",o)}}var n,i,o,a,s,r="_"+w,l={};for(o=0,a=e.length;o<a;o++)if(1===(n=e[o]).nodeType){for(s=(i=n.getElementsByTagName("*")).length-1;0<=s;s--)t(i[s]);t(n)}}function u(e,t,n,i){if(!e)return F.pop();F.push({_:e,tmpl:t,item:this,data:n,options:i})}function h(e,t,n){return c.tmpl(c.template(e),t,n,this)}function f(e,t){var n=e.options||{};return n.wrapped=t,c.tmpl(c.template(e.tmpl),e.data,n,e.item)}function m(e,t){var n=this._wrap;return c.map(c(c.isArray(n)?n.join(""):n).filter(e||"*"),function(e){return t?e.innerText||e.textContent:e.outerHTML||i(e)})}function _(){var e=this.nodes;c.tmpl(null,null,null,this).insertBefore(e[0]),c(e).remove()}var q,v=c.fn.domManip,g="_tmplitem",o=/^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,y={},b={},C={key:0,data:{}},x=0,w=0,F=[];c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(l,p){c.fn[l]=function(e){var t,n,i,o,a=[],s=c(e),r=1===this.length&&this[0].parentNode;if(q=y||{},r&&11===r.nodeType&&1===r.childNodes.length&&1===s.length)s[p](this[0]),a=this;else{for(n=0,i=s.length;n<i;n++)t=(0<(w=n)?this.clone(!0):this).get(),c(s[n])[p](t),a=a.concat(t);w=0,a=this.pushStack(a,l,s.selector)}return o=q,q=null,c.tmpl.complete(o),a}}),c.fn.extend({tmpl:function(e,t,n){return c.tmpl(this[0],e,t,n)},tmplItem:function(){return c.tmplItem(this[0])},template:function(e){return c.template(e,this[0])},domManip:function(e,t,n){if(e[0]&&c.isArray(e[0])){for(var i,o=c.makeArray(arguments),a=e[0],s=a.length,r=0;r<s&&!(i=c.data(a[r++],"tmplItem")););i&&w&&(o[2]=function(e){c.tmpl.afterManip(this,e,n)}),v.apply(this,o)}else v.apply(this,arguments);return w=0,!q&&c.tmpl.complete(y),this}}),c.extend({tmpl:function(t,e,n,i){var o,a=!i;if(a)i=C,t=c.template[t]||c.template(null,t),b={};else if(!t)return t=i.tmpl,(y[i.key]=i).nodes=[],i.wrapped&&r(i,i.wrapped),c(s(i,null,i.tmpl(c,i)));return t?("function"==typeof e&&(e=e.call(i||{})),n&&n.wrapped&&r(n,n.wrapped),o=c.isArray(e)?c.map(e,function(e){return e?p(n,i,t,e):null}):[p(n,i,t,e)],a?c(s(i,null,o)):o):[]},tmplItem:function(e){var t;for(e instanceof c&&(e=e[0]);e&&1===e.nodeType&&!(t=c.data(e,"tmplItem"))&&(e=e.parentNode););return t||C},template:function(e,t){return t?("string"==typeof t?t=n(t):t instanceof c&&(t=t[0]||{}),t.nodeType&&(t=c.data(t,"tmpl")||c.data(t,"tmpl",n(t.innerHTML))),"string"==typeof e?c.template[e]=t:t):e?"string"!=typeof e?c.template(null,e):c.template[e]||c.template(null,o.test(e)?e:c(e)):null},encode:function(e){return(""+e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")}}),c.extend(c.tmpl,{tag:{tmpl:{_default:{$2:"null"},open:"if($notnull_1){__=__.concat($item.nest($1,$2));}"},wrap:{_default:{$2:"null"},open:"$item.calls(__,$1,$2);__=[];",close:"call=$item.calls();__=call._.concat($item.wrap(call,__));"},each:{_default:{$2:"$index, $value"},open:"if($notnull_1){$.each($1a,function($2){with(this){",close:"}});}"},"if":{open:"if(($notnull_1) && $1a){",close:"}"},"else":{_default:{$1:"true"},open:"}else if(($notnull_1) && $1a){"},html:{open:"if($notnull_1){__.push($1a);}"},"=":{_default:{$1:"$data"},open:"if($notnull_1){__.push($.encode($1a));}"},"!":{open:""}},complete:function(){y={}},afterManip:function(e,t,n){var i=11===t.nodeType?c.makeArray(t.childNodes):1===t.nodeType?[t]:[];n.call(e,t),l(i),w++}})}(jQuery);var qq=qq||{};qq.extend=function(e,t){for(var n in t)e[n]=t[n]},qq.indexOf=function(e,t,n){if(e.indexOf)return e.indexOf(t,n);n=n||0;var i=e.length;for(n<0&&(n+=i);n<i;n++)if(n in e&&e[n]===t)return n;return-1},qq.getUniqueId=function(){var e=0;return function(){return e++}}(),qq.attach=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},qq.detach=function(e,t,n){e.removeEventListener?e.removeEventListener(t,n,!1):e.attachEvent&&e.detachEvent("on"+t,n)},qq.preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},qq.insertBefore=function(e,t){t.parentNode.insertBefore(e,t)},qq.remove=function(e){e.parentNode.removeChild(e)},qq.contains=function(e,t){return e==t||(e.contains?e.contains(t):!!(8&t.compareDocumentPosition(e)))},qq.toElement=function(){var n=document.createElement("div");return function(e){n.innerHTML=e;var t=n.firstChild;return n.removeChild(t),t}}(),qq.css=function(e,t){null!=t.opacity&&"string"!=typeof e.style.opacity&&"undefined"!=typeof e.filters&&(t.filter="alpha(opacity="+Math.round(100*t.opacity)+")"),qq.extend(e.style,t)},qq.hasClass=function(e,t){return new RegExp("(^| )"+t+"( |$)").test(e.className)},qq.addClass=function(e,t){qq.hasClass(e,t)||(e.className+=" "+t)},qq.removeClass=function(e,t){var n=new RegExp("(^| )"+t+"( |$)");e.className=e.className.replace(n," ").replace(/^\s+|\s+$/g,"")},qq.setText=function(e,t){e.innerText=t,e.textContent=t},qq.children=function(e){for(var t=[],n=e.firstChild;n;)1==n.nodeType&&t.push(n),n=n.nextSibling;return t},qq.getByClass=function(e,t){if(e.querySelectorAll)return e.querySelectorAll("."+t);for(var n=[],i=e.getElementsByTagName("*"),o=i.length,a=0;a<o;a++)qq.hasClass(i[a],t)&&n.push(i[a]);return n},qq.obj2url=function(e,i,t){var o=[],n="&",a=function(e,t){var n=i?/\[\]$/.test(i)?i:i+"["+t+"]":t;"undefined"!=n&&"undefined"!=t&&o.push("object"==typeof e?qq.obj2url(e,n,!0):"[object Function]"===Object.prototype.toString.call(e)?encodeURIComponent(n)+"="+encodeURIComponent(e()):encodeURIComponent(n)+"="+encodeURIComponent(e))};if(!t&&i)n=/\?/.test(i)?/\?$/.test(i)?"":"&":"?",o.push(i),o.push(qq.obj2url(e));else if("[object Array]"===Object.prototype.toString.call(e)&&void 0!==e)for(var s=0,r=e.length;s<r;++s)a(e[s],s);else if(null!=e&&"object"==typeof e)for(var s in e)a(e[s],s);else o.push(encodeURIComponent(i)+"="+encodeURIComponent(e));return o.join(n).replace(/^&/,"").replace(/%20/g,"+")};var qq=qq||{};qq.FileUploaderBasic=function(e){this._options={debug:!1,action:"/server/upload",params:{},button:null,multiple:!0,maxConnections:3,method:"POST",fieldName:"qqfile",allowedExtensions:[],sizeLimit:0,minSizeLimit:0,maxFilesCount:0,minFilesCount:0,onSubmit:function(){},onProgress:function(){},onComplete:function(){},onCancel:function(){},messages:{typeError:"{file} has invalid extension. Only {extensions} are allowed.",sizeError:"{file} is too large, maximum file size is {sizeLimit}.",minSizeError:"{file} is too small, minimum file size is {minSizeLimit}.",emptyError:"{file} is empty, please select files again without it.",onLeave:"The files are being uploaded, if you leave now the upload will be cancelled.",maxFilesError:"You must select less then {maxFilesCount} files.",minFilesError:"You must select more then {minFilesCount} files."},showMessage:function(e){alert(e)}},qq.extend(this._options,e),this._filesInProgress=0,this._filesUploaded=0,this._handler=this._createUploadHandler(),this._options.button&&(this._button=this._createUploadButton(this._options.button)),this._preventLeaveInProgress()},qq.FileUploaderBasic.prototype={setParams:function(e){this._options.params=e},getInProgress:function(){return this._filesInProgress},_createUploadButton:function(e){var t=this;return new qq.UploadButton({element:e,multiple:this._options.multiple&&qq.UploadHandlerXhr.isSupported(),onChange:function(e){t._onInputChange(e)}})},_createUploadHandler:function(){var e,o=this;return e=qq.UploadHandlerXhr.isSupported()?"UploadHandlerXhr":"UploadHandlerForm",new qq[e]({debug:this._options.debug,action:this._options.action,maxConnections:this._options.maxConnections,fieldName:this._options.fieldName,method:this._options.method,onProgress:function(e,t,n,i){o._onProgress(e,t,n,i),o._options.onProgress(e,t,n,i)},onComplete:function(e,t,n){o._onComplete(e,t,n),o._options.onComplete(e,t,n)},onCancel:function(e,t){o._onCancel(e,t),o._options.onCancel(e,t)}})},_preventLeaveInProgress:function(){var t=this;qq.attach(window,"beforeunload",function(e){if(t._filesInProgress)return(e=e||window.event).returnValue=t._options.messages.onLeave,t._options.messages.onLeave})},_onSubmit:function(){this._filesInProgress++},_onProgress:function(){},_onComplete:function(e,t,n){this._filesInProgress--,n.error?this._options.showMessage(n.error):this._filesUploaded++},_onCancel:function(){this._filesInProgress--},_onInputChange:function(e){this._handler instanceof qq.UploadHandlerXhr?this._uploadFileList(e.files):this._validateFile(e)&&this._uploadFile(e),this._button.reset()},_uploadFileList:function(e){if(this._validateFiles(e))for(var t=0;t<e.length;t++)this._uploadFile(e[t])},_uploadFile:function(e){var t=this._handler.add(e),n=this._handler.getName(t);!1!==this._options.onSubmit(t,n)&&(this._onSubmit(t,n),this._handler.upload(t,this._options.params))},_validateFiles:function(e){var t=this._filesUploaded+e.length;if(0<this._options.maxFilesCount&&t>this._options.maxFilesCount)return this._error("maxFilesError","name"),!1;if(0<this._options.minFilesCount&&t<this._options.minFilesCount)return this._error("minFilesError","name"),!1;for(var n=0;n<e.length;n++)if(!this._validateFile(e[n]))return!1;return!0},_validateFile:function(e){var t,n;return e.value?t=e.value.replace(/.*(\/|\\)/,""):(t=null!=e.fileName?e.fileName:e.name,n=null!=e.fileSize?e.fileSize:e.size),this._isAllowedExtension(t)?0===n?(this._error("emptyError",t),!1):n&&this._options.sizeLimit&&n>this._options.sizeLimit?(this._error("sizeError",t),!1):!(n&&n<this._options.minSizeLimit)||(this._error("minSizeError",t),!1):(this._error("typeError",t),!1)},_error:function(e,t){function n(e,t){i=i.replace(e,t)}var i=this._options.messages[e];n("{file}",this._formatFileName(t)),n("{extensions}",this._options.allowedExtensions.join(", ")),n("{sizeLimit}",this._formatSize(this._options.sizeLimit)),n("{minSizeLimit}",this._formatSize(this._options.minSizeLimit)),n("{maxFilesCount}",this._options.maxFilesCount),n("{minFilesCount}",this._options.minFilesCount),this._options.showMessage(i)},_formatFileName:function(e){return 33<e.length&&(e=e.slice(0,19)+"..."+e.slice(-13)),e},_isAllowedExtension:function(e){var t=-1!==e.indexOf(".")?e.replace(/.*[.]/,"").toLowerCase():"",n=this._options.allowedExtensions;if(!n.length)return!0;for(var i=0;i<n.length;i++)if(n[i].toLowerCase()==t)return!0;return!1},_formatSize:function(e){for(var t=-1;t++,99<(e/=1024););return Math.max(e,.1).toFixed(1)+["kB","MB","GB","TB","PB","EB"][t]}},qq.FileUploader=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template:'<div class="qq-uploader"><div class="qq-upload-drop-area"><span>Drop files here to upload</span></div><div class="qq-upload-button">Upload a file</div><ul class="qq-upload-list"></ul></div>',fileTemplate:'<li><span class="qq-upload-file"></span><span class="qq-upload-spinner"></span><span class="qq-upload-size"></span><a class="qq-upload-cancel" href="#">Cancel</a><span class="qq-upload-failed-text">Failed</span></li>',classes:{button:"qq-upload-button",drop:"qq-upload-drop-area",dropActive:"qq-upload-drop-area-active",list:"qq-upload-list",file:"qq-upload-file",spinner:"qq-upload-spinner",size:"qq-upload-size",cancel:"qq-upload-cancel",success:"qq-upload-success",fail:"qq-upload-fail"}}),qq.extend(this._options,e),this._element=this._options.element,this._element.innerHTML=this._options.template,this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),this._bindCancelEvent(),this._setupDragDrop()},qq.extend(qq.FileUploader.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploader.prototype,{_find:function(e,t){var n=qq.getByClass(e,this._options.classes[t])[0];if(!n)throw new Error("element not found "+t);return n},_setupDragDrop:function(){var t=this,n=this._find(this._element,"drop"),i=new qq.UploadDropZone({element:n,onEnter:function(e){qq.addClass(n,t._classes.dropActive),e.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(n,t._classes.dropActive)},onDrop:function(e){n.style.display="none",qq.removeClass(n,t._classes.dropActive),t._uploadFileList(e.dataTransfer.files)}});n.style.display="none",qq.attach(document,"dragenter",function(e){i._isValidFileDrag(e)&&(n.style.display="block")}),qq.attach(document,"dragleave",function(e){if(i._isValidFileDrag(e)){var t=document.elementFromPoint(e.clientX,e.clientY);t&&"HTML"!=t.nodeName||(n.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,a=this._getItemByFileId(e),s=this._find(a,"size");s.style.display="inline",o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(s,o)},_onComplete:function(e,t,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(e);qq.remove(this._find(i,"cancel")),qq.remove(this._find(i,"spinner")),n.success?qq.addClass(i,this._classes.success):qq.addClass(i,this._classes.fail)},_addToList:function(e,t){var n=qq.toElement(this._options.fileTemplate);n.qqFileId=e;var i=this._find(n,"file");qq.setText(i,this._formatFileName(t)),this._find(n,"size").style.display="none",this._listElement.appendChild(n)},_getItemByFileId:function(e){for(var t=this._listElement.firstChild;t;){if(t.qqFileId==e)return t;t=t.nextSibling}},_bindCancelEvent:function(){var i=this,e=this._listElement;qq.attach(e,"click",function(e){var t=(e=e||window.event).target||e.srcElement;if(qq.hasClass(t,i._classes.cancel)){qq.preventDefault(e);var n=t.parentNode;i._handler.cancel(n.qqFileId),qq.remove(n)}})}}),qq.UploadDropZone=function(e){this._options={element:null,onEnter:function(){},onLeave:function(){},onLeaveNotDescendants:function(){},onDrop:function(){}},qq.extend(this._options,e),this._element=this._options.element,this._disableDropOutside(),this._attachEvents()},qq.UploadDropZone.prototype={_disableDropOutside:function(){qq.UploadDropZone.dropOutsideDisabled||(qq.attach(document,"dragover",function(e){e.dataTransfer&&(e.dataTransfer.dropEffect="none",e.preventDefault())}),qq.UploadDropZone.dropOutsideDisabled=!0)},_attachEvents:function(){var n=this;qq.attach(n._element,"dragover",function(e){if(n._isValidFileDrag(e)){var t=e.dataTransfer.effectAllowed;e.dataTransfer.dropEffect="move"==t||"linkMove"==t?"move":"copy",e.stopPropagation(),e.preventDefault()}}),qq.attach(n._element,"dragenter",function(e){n._isValidFileDrag(e)&&n._options.onEnter(e)}),qq.attach(n._element,"dragleave",function(e){if(n._isValidFileDrag(e)){n._options.onLeave(e);var t=document.elementFromPoint(e.clientX,e.clientY);qq.contains(this,t)||n._options.onLeaveNotDescendants(e)}}),qq.attach(n._element,"drop",function(e){n._isValidFileDrag(e)&&(e.preventDefault(),n._options.onDrop(e))})},_isValidFileDrag:function(e){var t=e.dataTransfer,n=-1<navigator.userAgent.indexOf("AppleWebKit");return t&&"none"!=t.effectAllowed&&(t.files||!n&&t.types.contains&&t.types.contains("Files"))}},qq.UploadButton=function(e){this._options={element:null,multiple:!1,name:"file",onChange:function(){},hoverClass:"qq-upload-button-hover",focusClass:"qq-upload-button-focus"},qq.extend(this._options,e),this._element=this._options.element,qq.css(this._element,{position:"relative",overflow:"hidden",direction:"ltr"}),this._input=this._createInput()},qq.UploadButton.prototype={getInput:function(){return this._input},reset:function(){this._input.parentNode&&qq.remove(this._input),qq.removeClass(this._element,this._options.focusClass),this._input=this._createInput()},_createInput:function(){var e=document.createElement("input");this._options.multiple&&e.setAttribute("multiple","multiple"),e.setAttribute("type","file"),e.setAttribute("name",this._options.name),qq.css(e,{position:"absolute",right:0,top:0,fontFamily:"Arial",fontSize:"118px",margin:0,padding:0,cursor:"pointer",opacity:0}),this._element.appendChild(e);var t=this;return qq.attach(e,"change",function(){t._options.onChange(e)}),qq.attach(e,"mouseover",function(){qq.addClass(t._element,t._options.hoverClass)}),qq.attach(e,"mouseout",function(){qq.removeClass(t._element,t._options.hoverClass)}),qq.attach(e,"focus",function(){qq.addClass(t._element,t._options.focusClass)}),qq.attach(e,"blur",function(){qq.removeClass(t._element,t._options.focusClass)}),window.attachEvent&&e.setAttribute("tabIndex","-1"),e}},qq.UploadHandlerAbstract=function(e){this._options={debug:!1,action:"/upload.php",method:"POST",fieldName:"qqfile",maxConnections:999,onProgress:function(){},onComplete:function(){},onCancel:function(){}},qq.extend(this._options,e),this._queue=[],this._params=[]},qq.UploadHandlerAbstract.prototype={log:function(e){this._options.debug&&window.console&&console.log("[uploader] "+e)},add:function(){},upload:function(e,t){var n=this._queue.push(e),i={};qq.extend(i,t),this._params[e]=i,n<=this._options.maxConnections&&this._upload(e,this._params[e])},cancel:function(e){this._cancel(e),this._dequeue(e)},cancelAll:function(){for(var e=0;e<this._queue.length;e++)this._cancel(this._queue[e]);this._queue=[]},getName:function(){},getSize:function(){},getQueue:function(){return this._queue},_upload:function(){},_cancel:function(){},_dequeue:function(e){var t=qq.indexOf(this._queue,e);this._queue.splice(t,1);var n=this._options.maxConnections;if(this._queue.length>=n&&t<n){var i=this._queue[n-1];this._upload(i,this._params[i])}}},qq.UploadHandlerForm=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._inputs={}},qq.extend(qq.UploadHandlerForm.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerForm.prototype,{add:function(e){e.setAttribute("name",this._options.fieldName);var t="qq-upload-handler-iframe"+qq.getUniqueId();return(this._inputs[t]=e).parentNode&&qq.remove(e),t},getName:function(e){return this._inputs[e].value.replace(/.*(\/|\\)/,"")},_cancel:function(e){this._options.onCancel(e,this.getName(e)),delete this._inputs[e];var t=document.getElementById(e);t&&(t.setAttribute("src","javascript:false;"),qq.remove(t))},_upload:function(t,e){var n=this._inputs[t];if(!n)throw new Error("file with passed id was not added, or already uploaded or cancelled");var i=this.getName(t),o=this._createIframe(t),a=this._createForm(o,e);a.appendChild(n);var s=this;return this._attachLoadEvent(o,function(){s.log("iframe loaded");var e=s._getIframeContentJSON(o);s._options.onComplete(t,i,e),s._dequeue(t),delete s._inputs[t],setTimeout(function(){qq.remove(o)},1)}),a.submit(),qq.remove(a),t},_attachLoadEvent:function(e,t){qq.attach(e,"load",function(){e.parentNode&&(e.contentDocument&&e.contentDocument.body&&"false"==e.contentDocument.body.innerHTML||t())})},_getIframeContentJSON:function(iframe){var doc=iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document,response;this.log("converting iframe's innerHTML to JSON"),this.log("innerHTML = "+doc.body.innerHTML);try{response=eval("("+doc.body.innerHTML+")")}catch(err){response={}}return response},_createIframe:function(e){var t=qq.toElement('<iframe src="javascript:false;" name="'+e+'" />');return t.setAttribute("id",e),t.style.display="none",document.body.appendChild(t),t},_createForm:function(e,t){var n=qq.toElement('<form enctype="multipart/form-data"></form>'),i=qq.obj2url(t,this._options.action);n.setAttribute("method",this._options.method),n.setAttribute("action",i),n.setAttribute("target",e.name),n.style.display="none";var o=$('meta[name="csrf-token"]').attr("content"),a=$('meta[name="csrf-param"]').attr("content"),s=qq.toElement('<input type="hidden" />');return s.setAttribute("name",a),s.setAttribute("value",o),n.appendChild(s),document.body.appendChild(n),n}}),qq.UploadHandlerXhr=function(){qq.UploadHandlerAbstract.apply(this,arguments),this._files=[],this._xhrs=[],this._loaded=[]},qq.UploadHandlerXhr.isSupported=function(){var e=document.createElement("input");return e.type="file","multiple"in e&&"undefined"!=typeof File&&"undefined"!=typeof(new XMLHttpRequest).upload},qq.extend(qq.UploadHandlerXhr.prototype,qq.UploadHandlerAbstract.prototype),qq.extend(qq.UploadHandlerXhr.prototype,{add:function(e){if(!(e instanceof File))throw new Error("Passed obj in not a File (in qq.UploadHandlerXhr)");return this._files.push(e)-1},getName:function(e){var t=this._files[e];return null!=t.fileName?t.fileName:t.name},getSize:function(e){var t=this._files[e];return null!=t.fileSize?t.fileSize:t.size},getLoaded:function(e){return this._loaded[e]||0},_upload:function(t,e){var n=this._files[t],i=this.getName(t),o=this.getSize(t);this._loaded[t]=0;var a=this._xhrs[t]=new XMLHttpRequest,s=this;a.upload.onprogress=function(e){e.lengthComputable&&(s._loaded[t]=e.loaded,s._options.onProgress(t,i,e.loaded,e.total))},a.onreadystatechange=function(){4==a.readyState&&s._onComplete(t,a)},(e=e||{})[this._options.fieldName]=i;var r=qq.obj2url(e,this._options.action);a.open(this._options.method,r,!0),a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("X-File-Name",encodeURIComponent(i)),a.setRequestHeader("X-File-Size",o),a.setRequestHeader("X-File-Type",n.type),a.setRequestHeader("Content-Type","application/octet-stream"),$.rails&&$.rails.CSRFProtection(a),a.send(n)},_onComplete:function(id,xhr){if(this._files[id]){var name=this.getName(id),size=this.getSize(id);if(this._options.onProgress(id,name,size,size),-1<[200,201].indexOf(xhr.status)){var response;this.log("xhr - server response received"),this.log("responseText = "+xhr.responseText);try{response=eval("("+xhr.responseText+")")}catch(err){response={}}this._options.onComplete(id,name,response)}else this._options.onComplete(id,name,{});this._files[id]=null,this._xhrs[id]=null,this._dequeue(id)}},_cancel:function(e){this._options.onCancel(e,this.getName(e)),this._files[e]=null,this._xhrs[e]&&(this._xhrs[e].abort(),this._xhrs[e]=null)}}),function(u){"use strict";u.support.pushState=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/);var t={init:function(e,t){t.options=u.extend({scrollContainer:window,scrollPadding:100,scrollEventDelay:300},e),this.options=t.options,this.container=t.container,(t.scrollModule=this)._toplock=!0,this._bottomlock=!0,this.scrollContainer=u(this.options.scrollContainer),this.updateEntities(),this.sortMarkers(),this.currentPage=null,this.container.on("jes:afterPageLoad",u.proxy(function(e,t,n){if(this.updateEntities(),this.sortMarkers(),this.checkMarker(),"top"==n){var i=this.markers[1].top,o=this.scrollContainer.scrollTop();this.scrollContainer.scrollTop(o+i)}},this)),this.bind()},updateEntities:function(){this.entities=u(this.options.entity,this.container)},sortMarkers:function(){var e=[];u(".jes-marker",this.container).each(function(){e.push({top:u(this).position().top,url:u(this).data("jesUrl")})}),this.markers=e},checkMarker:function(){for(var e=this.markers[0],t=this.scrollContainer.scrollTop(),n=1;n<this.markers.length&&t>this.markers[n].top;n++)e=this.markers[n];e.url!=this.currentPage&&(this.currentPage=e.url,u(this.container).trigger("jes:scrollToPage",e.url))},bind:function(){this.scrollContainer.on("scroll.jes",u.proxy(function(e){this._tId||(this.scrollHandler(e),this._tId=setTimeout(u.proxy(function(){this._tId=null},this),this.options.scrollEventDelay))},this))},unbind:function(){u(this.options.scrollContainer).off("scroll.jes")},scrollHandler:function(){var e=this.scrollContainer,t=this.entities,n=t.first(),i=t.last(),o=e.scrollTop(),a=o+e.height(),s=n.position().top+this.options.scrollPadding,r=i.outerHeight()+i.position().top-this.options.scrollPadding;o<s?this._toplock||(u(this.container).trigger("jes:topThreshold"),this._toplock=!0):this._toplock=!1,r<a?this._bottomlock||(u(this.container).trigger("jes:bottomThreshold"),this._bottomlock=!0):this._bottomlock=!1,this.checkMarker()}},n={init:function(e,t){t.options=u.extend({},e),this.options=t.options,this.container=t.container,this.setMarker(u(this.options.entity,this.container).first(),location.href),t.ajaxModule=this},loadPage:function(s,r,l){var p={top:{find:"first",inject:"insertBefore"},bottom:{find:"last",inject:"insertAfter"}}[r];this.container.trigger("jes:beforePageLoad",[s,r]),u.get(s,null,u.proxy(function(e){var t=u("<div>").html(e),n=this.options.container,i=u(n,t).first();if(i.length){var o=i.find(this.options.entity);"bottom"==r&&o.each(function(){var e=u(this).attr("id");e&&u("#"+e,this.container).remove()});var a=u(this.options.entity,n)[p.find]();o[p.inject](a),this.setMarker(o.first(),s)}u.isFunction(l)&&l(t),this.container.trigger("jes:afterPageLoad",[s,r,t,o])},this),"html")},setMarker:function(e,t){e.addClass("jes-marker").data("jesUrl",t)}},i={init:function(e,a){a.options=u.extend({nextPage:".pagination a[rel=next]",previousPage:".pagination a[rel=previous]"},e),this.options=a.options,this.container=a.container,u.each([{selector:this.options.nextPage,event:"jes:bottomThreshold.navigation",placement:"bottom"},{selector:this.options.previousPage,event:"jes:topThreshold.navigation",placement:"top"}],u.proxy(function(e,n){if(n.element=u(n.selector),n.element.length){var i=n.element.prop("href"),o=!1,t=function(){!o&&i&&(o=!0,a.ajaxModule.loadPage(i,n.placement,u.proxy(function(e){var t=u(n.selector,u(e));t.length?(o=!1,i=t.prop("href"),n.element.attr("href",i)):(u(this).off(n.event),n.element.remove())},this)))};u(this.container).on(n.event,t),u(n.element).on("click",u.proxy(function(e){e.preventDefault(),t.apply(this.container)},this))}},this))}},o={init:function(e,t){u.support.pushState&&t.container.on("jes:scrollToPage",function(e,t){history.replaceState({},null,t)})}};u.endlessScroll=function(e){if(this.options=u.extend(!0,{container:"#container",entity:".entity",_modules:[n,t,i,o],modules:[]},e),this.container=u(this.options.container),!this.container.length)throw"Container for endless scroll isn't available on the page";return u.merge(this.options.modules,this.options._modules),this.options.modules.forEach(u.proxy(function(e){e.init(this.options,this)},this)),this}}(jQuery),function(l,p){var u;l.rails=u={linkClickSelector:"a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",inputChangeSelector:"select[data-remote], input[data-remote], textarea[data-remote]",formSubmitSelector:"form",formInputClickSelector:"form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",disableSelector:"input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",enableSelector:"input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",requiredInputSelector:"input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",fileInputSelector:"input:file",linkDisableSelector:"a[data-disable-with]",CSRFProtection:function(e){var t=l('meta[name="csrf-token"]').attr("content");t&&e.setRequestHeader("X-CSRF-Token",t)},fire:function(e,t,n){var i=l.Event(t);return e.trigger(i,n),!1!==i.result},confirm:function(e){return confirm(e)},ajax:function(e){return l.ajax(e)},handleRemote:function(i){var e,t,n,o,a=i.data("cross-domain")||null,s=i.data("type")||l.ajaxSettings&&l.ajaxSettings.dataType;if(u.fire(i,"ajax:before")){if(i.is("form")){e=i.attr("method"),t=i.attr("action"),n=i.serializeArray();var r=i.data("ujs:submit-button");r&&(n.push(r),i.data("ujs:submit-button",null))}else i.is(u.inputChangeSelector)?(e=i.data("method"),t=i.data("url"),n=i.serialize(),i.data("params")&&(n=n+"&"+i.data("params"))):(e=i.data("method"),t=i.attr("href"),n=i.data("params")||null);return o={type:e||"GET",data:n,dataType:s,crossDomain:a,beforeSend:function(e,t){return t.dataType===p&&e.setRequestHeader("accept","*/*;q=0.5, "+t.accepts.script),u.fire(i,"ajax:beforeSend",[e,t])},success:function(e,t,n){i.trigger("ajax:success",[e,t,n])},complete:function(e,t){i.trigger("ajax:complete",[e,t])},error:function(e,t,n){i.trigger("ajax:error",[e,t,n])}},t&&(o.url=t),u.ajax(o)}return!1},handleMethod:function(e){var t=e.attr("href"),n=e.data("method"),i=e.attr("target"),o=l("meta[name=csrf-token]").attr("content"),a=l("meta[name=csrf-param]").attr("content"),s=l('<form method="post" action="'+t+'"></form>'),r='<input name="_method" value="'+n+'" type="hidden" />';a!==p&&o!==p&&(r+='<input name="'+a+'" value="'+o+'" type="hidden" />'),i&&s.attr("target",i),s.hide().append(r).appendTo("body"),s.submit()},disableFormElements:function(e){e.find(u.disableSelector).each(function(){var e=l(this),t=e.is("button")?"html":"val";e.data("ujs:enable-with",e[t]()),e[t](e.data("disable-with")),e.prop("disabled",!0)})},enableFormElements:function(e){e.find(u.enableSelector).each(function(){var e=l(this),t=e.is("button")?"html":"val";e.data("ujs:enable-with")&&e[t](e.data("ujs:enable-with")),e.prop("disabled",!1)})},allowAction:function(e){var t,n=e.data("confirm"),i=!1;return!n||(u.fire(e,"confirm")&&(i=u.confirm(n),t=u.fire(e,"confirm:complete",[i])),i&&t)},blankInputs:function(e,t,n){var i,o=l(),a=t||"input,textarea";return e.find(a).each(function(){i=l(this),(n?i.val():!i.val())&&(o=o.add(i))}),!!o.length&&o},nonBlankInputs:function(e,t){return u.blankInputs(e,t,!0)},stopEverything:function(e){return l(e.target).trigger("ujs:everythingStopped"),e.stopImmediatePropagation(),!1},callFormSubmitBindings:function(e,n){var t=e.data("events"),i=!0;return t!==p&&t.submit!==p&&l.each(t.submit,function(e,t){if("function"==typeof t.handler)return i=t.handler(n)}),i},disableElement:function(e){e.data("ujs:enable-with",e.html()),e.html(e.data("disable-with")),e.bind("click.railsDisable",function(e){return u.stopEverything(e)})},enableElement:function(e){e.data("ujs:enable-with")!==p&&(e.html(e.data("ujs:enable-with")),e.data("ujs:enable-with",!1)),e.unbind("click.railsDisable")}},l.ajaxPrefilter(function(e,t,n){e.crossDomain||u.CSRFProtection(n)}),l(document).delegate(u.linkDisableSelector,"ajax:complete",function(){u.enableElement(l(this))}),l(document).delegate(u.linkClickSelector,"click.rails",function(e){var t=l(this),n=t.data("method"),i=t.data("params");return u.allowAction(t)?(t.is(u.linkDisableSelector)&&u.disableElement(t),
t.data("remote")!==p?!(!e.metaKey&&!e.ctrlKey||n&&"GET"!==n||i)||(!1===u.handleRemote(t)&&u.enableElement(t),!1):t.data("method")?(u.handleMethod(t),!1):void 0):u.stopEverything(e)}),l(document).delegate(u.inputChangeSelector,"change.rails",function(e){var t=l(this);return u.allowAction(t)?(u.handleRemote(t),!1):u.stopEverything(e)}),l(document).delegate(u.formSubmitSelector,"submit.rails",function(e){var t=l(this),n=t.data("remote")!==p,i=u.blankInputs(t,u.requiredInputSelector),o=u.nonBlankInputs(t,u.fileInputSelector);return u.allowAction(t)?i&&t.attr("novalidate")==p&&u.fire(t,"ajax:aborted:required",[i])?u.stopEverything(e):n?o?u.fire(t,"ajax:aborted:file",[o]):!l.support.submitBubbles&&l().jquery<"1.7"&&!1===u.callFormSubmitBindings(t,e)?u.stopEverything(e):(u.handleRemote(t),!1):void setTimeout(function(){u.disableFormElements(t)},13):u.stopEverything(e)}),l(document).delegate(u.formInputClickSelector,"click.rails",function(e){var t=l(this);if(!u.allowAction(t))return u.stopEverything(e);var n=t.attr("name"),i=n?{name:n,value:t.val()}:null;t.closest("form").data("ujs:submit-button",i)}),l(document).delegate(u.formSubmitSelector,"ajax:beforeSend.rails",function(e){this==e.target&&u.disableFormElements(l(this))}),l(document).delegate(u.formSubmitSelector,"ajax:complete.rails",function(e){this==e.target&&u.enableFormElements(l(this))})}(jQuery),$.QueryString=function(e){if(""==e)return{};for(var t={},n=0;n<e.length;++n){var i=e[n].split("=");2==i.length&&(t[i[0]]=decodeURIComponent(i[1].replace(/\+/g," ")))}return t}(window.location.search.substr(1).split("&")),$(document).ready(function(){var e="div.gal-item div.gal-inner-holder";$(document).on("mouseover",e,function(){$(this).addClass("hover")}).on("mouseout",e,function(){$(this).removeClass("hover")}).on("click",e,function(){var e=$(this).parents("div.gal-item").data("url");CKEDITOR.tools.callFunction(CKEditorFuncNum,e),window.close()}),$(document).on("ajax:complete","div.gal-item a.gal-del",function(){$(this).parents("div.gal-item").remove()});var t=$.endlessScroll({container:".fileupload-list",entity:".gal-item",scrollPadding:100});t.scrollModule.unbind(),window.setTimeout(function(){t.scrollModule.bind()},1e3)}),qq.FileUploader.instances=new Object,qq.FileUploaderInput=function(e){qq.FileUploaderBasic.apply(this,arguments),qq.extend(this._options,{element:null,listElement:null,template_id:"#fileupload_tmpl",classes:{button:"fileupload-button",drop:"fileupload-drop-area",dropActive:"fileupload-drop-area-active",list:"fileupload-list",preview:"fileupload-preview",file:"fileupload-file",spinner:"fileupload-spinner",size:"fileupload-size",cancel:"fileupload-cancel",success:"fileupload-success",fail:"fileupload-fail"}}),qq.extend(this._options,e),this._element=document.getElementById(this._options.element),this._listElement=this._options.listElement||this._find(this._element,"list"),this._classes=this._options.classes,this._button=this._createUploadButton(this._find(this._element,"button")),qq.FileUploader.instances[this._element.id]=this},qq.extend(qq.FileUploaderInput.prototype,qq.FileUploaderBasic.prototype),qq.extend(qq.FileUploaderInput.prototype,{_find:function(e,t){var n=qq.getByClass(e,this._options.classes[t])[0];if(!n)throw alert(t),new Error("element not found "+t);return n},_setupDragDrop:function(){var t=this,n=this._find(this._element,"drop"),i=new qq.UploadDropZone({element:n,onEnter:function(e){qq.addClass(n,t._classes.dropActive),e.stopPropagation()},onLeave:function(e){e.stopPropagation()},onLeaveNotDescendants:function(){qq.removeClass(n,t._classes.dropActive)},onDrop:function(e){n.style.display="none",qq.removeClass(n,t._classes.dropActive),t._uploadFileList(e.dataTransfer.files)}});n.style.display="none",qq.attach(document,"dragenter",function(e){i._isValidFileDrag(e)&&(n.style.display="block")}),qq.attach(document,"dragleave",function(e){if(i._isValidFileDrag(e)){var t=document.elementFromPoint(e.clientX,e.clientY);t&&"HTML"!=t.nodeName||(n.style.display="none")}})},_onSubmit:function(e,t){qq.FileUploaderBasic.prototype._onSubmit.apply(this,arguments),this._addToList(e,t)},_onProgress:function(e,t,n,i){qq.FileUploaderBasic.prototype._onProgress.apply(this,arguments);var o,a=this._getItemByFileId(e),s=this._find(a,"size");o=n!=i?Math.round(n/i*100)+"% from "+this._formatSize(i):this._formatSize(i),qq.setText(s,o)},_onComplete:function(e,t,n){qq.FileUploaderBasic.prototype._onComplete.apply(this,arguments);var i=this._getItemByFileId(e),o=n.asset?n.asset:n;o&&o.id?(qq.addClass(i,this._classes.success),o.size=this._formatSize(o.size),o.controller=o.type!==undefined&&"ckeditor::picture"==o.type.toLowerCase()?"pictures":"attachment_files",$(i).replaceWith($(this._options.template_id).tmpl(o))):qq.addClass(i,this._classes.fail)},_addToList:function(e,t){if(this._listElement){!1===this._options.multiple&&$(this._listElement).empty();var n={id:0,filename:this._formatFileName(t),size:0,format_created_at:"",url_content:"#",controller:"assets",url_thumb:"/assets/ckeditor/filebrowser/images/preloader-3799a3e41d7787a31dac5796ebccc242951da2f2b57eb088326ab3bffe15056a.gif"},i=$(this._options.template_id).tmpl(n).attr("qqfileid",e).prependTo(this._listElement);i.find("div.img").addClass("preloader"),this._bindCancelEvent(i)}},_getItemByFileId:function(e){return $(this._listElement).find("div[qqfileid="+e+"]").get(0)},_bindCancelEvent:function(e){var t=this,n=$(e);n.find("a."+this._classes.cancel).bind("click",function(e){return t._handler.cancel(n.attr("qqfileid")),n.remove(),qq.preventDefault(e),!1})}});