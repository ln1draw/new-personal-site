CKEDITOR.dialog.add("select",function(t){function s(e,t,n,l,i){return e=r(e),l=l?l.createElement("OPTION"):document.createElement("OPTION"),!(!e||!l||"option"!=l.getName())&&(CKEDITOR.env.ie?(isNaN(parseInt(i,10))?e.$.options.add(l.$):e.$.options.add(l.$,i),l.$.innerHTML=0<t.length?t:"",l.$.value=n):(null!==i&&i<e.getChildCount()?e.getChild(i<0?0:i).insertBeforeMe(l):e.append(l),l.setText(0<t.length?t:""),l.setValue(n)),l)}function i(e){for(var t=a(e=r(e)),n=e.getChildren().count()-1;0<=n;n--)e.getChild(n).$.selected&&e.getChild(n).remove();c(e,t)}function o(e,t,n,l){return e=r(e),!(t<0)&&((e=e.getChild(t)).setText(n),e.setValue(l),e)}function u(e){for(e=r(e);e.getChild(0)&&e.getChild(0).remove(););}function l(e,t,n){if((l=a(e=r(e)))<0)return!1;if(l==(t=(t=(t=l+t)<0?0:t)>=e.getChildCount()?e.getChildCount()-1:t))return!1;var l,i=(l=e.getChild(l)).getText(),o=l.getValue();return l.remove(),l=s(e,i,o,n||null,t),c(e,t),l}function a(e){return(e=r(e))?e.$.selectedIndex:-1}function c(e,t){if(e=r(e),t<0)return null;var n=e.getChildren().count();return e.$.selectedIndex=n<=t?n-1:t,e}function g(e){return!!(e=r(e))&&e.getChildren()}function r(e){return e&&e.domId&&e.getInputElement().$?e.getInputElement():!(!e||!e.$)&&e}return{title:t.lang.forms.select.title,minWidth:CKEDITOR.env.ie?460:395,minHeight:CKEDITOR.env.ie?320:300,onShow:function(){if(delete this.selectBox,this.setupContent("clear"),(e=this.getParentEditor().getSelection().getSelectedElement())&&"select"==e.getName()){this.selectBox=e,this.setupContent(e.getName(),e);for(var e=g(e),t=0;t<e.count();t++)this.setupContent("option",e.getItem(t))}},onOk:function(){var e=this.getParentEditor(),t=this.selectBox,n=!t;if(n&&(t=e.document.createElement("select")),this.commitContent(t),n&&(e.insertElement(t),CKEDITOR.env.ie)){var l=e.getSelection(),i=l.createBookmarks();setTimeout(function(){l.selectBookmarks(i)},0)}},contents:[{id:"info",label:t.lang.forms.select.selectInfo,title:t.lang.forms.select.selectInfo,accessKey:"",elements:[{id:"txtName",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:t.lang.common.name,"default":"",accessKey:"N",style:"width:350px",setup:function(e,t){"clear"==e?this.setValue(this["default"]||""):"select"==e&&this.setValue(t.data("cke-saved-name")||t.getAttribute("name")||"")},commit:function(e){this.getValue()?e.data("cke-saved-name",this.getValue()):(e.data("cke-saved-name",!1),e.removeAttribute("name"))}},{id:"txtValue",type:"text",widths:["25%","75%"],labelLayout:"horizontal",label:t.lang.forms.select.value,style:"width:350px","default":"",className:"cke_disabled",onLoad:function(){this.getInputElement().setAttribute("readOnly",!0)},setup:function(e,t){"clear"==e?this.setValue(""):"option"==e&&t.getAttribute("selected")&&this.setValue(t.$.value)}},{type:"hbox",widths:["175px","170px"],children:[{id:"txtSize",type:"text",labelLayout:"horizontal",label:t.lang.forms.select.size,"default":"",accessKey:"S",style:"width:175px",validate:function(){var e=CKEDITOR.dialog.validate.integer(t.lang.common.validateNumberFailed);return""===this.getValue()||e.apply(this)},setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("size")||""),CKEDITOR.env.webkit&&this.getInputElement().setStyle("width","86px")},commit:function(e){this.getValue()?e.setAttribute("size",this.getValue()):e.removeAttribute("size")}},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(t.lang.forms.select.lines)+"</span>"}]},{type:"html",html:"<span>"+CKEDITOR.tools.htmlEncode(t.lang.forms.select.opAvail)+"</span>"},{type:"hbox",widths:["115px","115px","100px"],children:[{type:"vbox",children:[{id:"txtOptName",type:"text",label:t.lang.forms.select.opText,style:"width:115px",setup:function(e){"clear"==e&&this.setValue("")}},{type:"select",id:"cmbName",label:"",title:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=(n=this.getDialog()).getContentElement("info","cmbValue"),t=n.getContentElement("info","txtOptName"),n=n.getContentElement("info","txtOptValue");c(e,a(this)),t.setValue(this.getValue()),n.setValue(e.getValue())},setup:function(e,t){"clear"==e?u(this):"option"==e&&s(this,t.getText(),t.getText(),this.getDialog().getParentEditor().document)},commit:function(e){var t=this.getDialog(),n=g(this),l=g(t.getContentElement("info","cmbValue")),i=t.getContentElement("info","txtValue").getValue();u(e);for(var o=0;o<n.count();o++){var a=s(e,n.getItem(o).getValue(),l.getItem(o).getValue(),t.getParentEditor().document);l.getItem(o).getValue()==i&&(a.setAttribute("selected","selected"),a.selected=!0)}}}]},{type:"vbox",children:[{id:"txtOptValue",type:"text",label:t.lang.forms.select.opValue,style:"width:115px",setup:function(e){"clear"==e&&this.setValue("")}},{type:"select",id:"cmbValue",label:"",size:5,style:"width:115px;height:75px",items:[],onChange:function(){var e=(n=this.getDialog()).getContentElement("info","cmbName"),t=n.getContentElement("info","txtOptName"),n=n.getContentElement("info","txtOptValue");c(e,a(this)),t.setValue(e.getValue()),n.setValue(this.getValue())},setup:function(e,t){if("clear"==e)u(this);else if("option"==e){var n=t.getValue();s(this,n,n,this.getDialog().getParentEditor().document),"selected"==t.getAttribute("selected")&&this.getDialog().getContentElement("info","txtValue").setValue(n)}}}]},{type:"vbox",padding:5,children:[{type:"button",id:"btnAdd",label:t.lang.forms.select.btnAdd,title:t.lang.forms.select.btnAdd,style:"width:100%;",onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","txtOptName"),n=e.getContentElement("info","txtOptValue"),l=e.getContentElement("info","cmbName"),i=e.getContentElement("info","cmbValue");s(l,t.getValue(),t.getValue(),e.getParentEditor().document),s(i,n.getValue(),n.getValue(),e.getParentEditor().document),t.setValue(""),n.setValue("")}},{type:"button",id:"btnModify",label:t.lang.forms.select.btnModify,title:t.lang.forms.select.btnModify,style:"width:100%;",onClick:function(){var e=(l=this.getDialog()).getContentElement("info","txtOptName"),t=l.getContentElement("info","txtOptValue"),n=l.getContentElement("info","cmbName"),l=l.getContentElement("info","cmbValue"),i=a(n);0<=i&&(o(n,i,e.getValue(),e.getValue()),o(l,i,t.getValue(),t.getValue()))}},{type:"button",id:"btnUp",style:"width:100%;",label:t.lang.forms.select.btnUp,title:t.lang.forms.select.btnUp,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");l(t,-1,e.getParentEditor().document),l(n,-1,e.getParentEditor().document)}},{type:"button",id:"btnDown",style:"width:100%;",label:t.lang.forms.select.btnDown,title:t.lang.forms.select.btnDown,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbName"),n=e.getContentElement("info","cmbValue");l(t,1,e.getParentEditor().document),l(n,1,e.getParentEditor().document)}}]}]},{type:"hbox",widths:["40%","20%","40%"],children:[{type:"button",id:"btnSetValue",label:t.lang.forms.select.btnSetValue,title:t.lang.forms.select.btnSetValue,onClick:function(){var e=this.getDialog(),t=e.getContentElement("info","cmbValue");e.getContentElement("info","txtValue").setValue(t.getValue())}},{type:"button",id:"btnDelete",label:t.lang.forms.select.btnDelete,title:t.lang.forms.select.btnDelete,onClick:function(){var e=(l=this.getDialog()).getContentElement("info","cmbName"),t=l.getContentElement("info","cmbValue"),n=l.getContentElement("info","txtOptName"),l=l.getContentElement("info","txtOptValue");i(e),i(t),n.setValue(""),l.setValue("")}},{type:"vbox",children:[{id:"chkMulti",type:"checkbox",label:t.lang.forms.select.chkMulti,"default":"",accessKey:"M",value:"checked",setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("multiple"))},commit:function(e){this.getValue()?e.setAttribute("multiple",this.getValue()):e.removeAttribute("multiple")}},{id:"required",type:"checkbox",label:t.lang.forms.select.required,"default":"",accessKey:"Q",value:"checked",setup:function(e,t){"select"==e&&this.setValue(t.getAttribute("required"))},commit:function(e){this.getValue()?e.setAttribute("required","required"):e.removeAttribute("required")}}]}]}]}]}});