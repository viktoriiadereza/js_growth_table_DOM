document.addEventListener("DOMContentLoaded",function(){var e=function(){var e=n.rows.length,u=n.rows[0].cells.length;t.disabled=e>=c,o.disabled=e<=d,r.disabled=u>=i,l.disabled=u<=s},n=document.querySelector("table"),t=document.querySelector(".append-row"),o=document.querySelector(".remove-row"),r=document.querySelector(".append-column"),l=document.querySelector(".remove-column"),c=10,d=2,i=10,s=2;t.addEventListener("click",function(){if(n.rows.length<c){for(var t=n.insertRow(),o=n.rows[0].cells.length,r=0;r<o;r++)t.insertCell();e()}}),o.addEventListener("click",function(){n.rows.length>d&&n.deleteRow(-1),e()}),r.addEventListener("click",function(){n.rows[0].cells.length<i&&Array.from(n.rows).forEach(function(e){e.insertCell()}),e()}),l.addEventListener("click",function(){n.rows[0].cells.length>s&&Array.from(n.rows).forEach(function(e){e.deleteCell(-1)}),e()}),e()});
//# sourceMappingURL=index.524a7128.js.map