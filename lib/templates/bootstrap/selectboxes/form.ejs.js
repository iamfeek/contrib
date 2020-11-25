Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="checkbox-panels">\r\n    ';
 ctx.values.forEach(function(item) { ;
__p += '\r\n    <div class="checkbox-panel-item" ref="wrapper">\r\n\r\n        <div>\r\n            <span class="checkbox-panel-title">' +
((__t = (item.label)) == null ? '' : __t) +
'</span>\r\n            <ul>\r\n                ';
 item.description.split("\n").forEach(function (desc) {  ;
__p += '\r\n                  <li>' +
((__t = (desc)) == null ? '' : __t) +
'</li>\r\n                ';
 }) ;
__p += '\r\n            </ul>\r\n        </div>\r\n       <div class="checkbox-panel-checkbox">\r\n            <span class="checkbox-icon">\r\n                <strong>hey</strong>\r\n                <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="2.5" fill="#ff0000" stroke="currentColor"></rect></svg>\r\n                <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n                ref="input"\r\n                ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n                ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
' ';
 if (attr==='class') { ;
__p += ' govuk-checkboxes__input ';
 } ;
__p += '"\r\n                ';
 } ;
__p += '\r\n                value="' +
((__t = (item.value)) == null ? '' : __t) +
'"\r\n                ';
 if (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value])) { ;
__p += '\r\n                checked=true\r\n                ';
 } ;
__p += '\r\n                id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'"\r\n                >\r\n            </span>\r\n       </div>\r\n    </div>\r\n    ';
 }) ;
__p += '\r\n</div>';
return __p
}