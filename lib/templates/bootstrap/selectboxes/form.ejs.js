Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="govuk-checkboxes">\r\n    ';
 ctx.values.forEach(function(item) { ;
__p += '\r\n    <div class="govuk-checkboxes__item" ref="wrapper">\r\n        <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n        ref="input"\r\n        ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n        ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
' ';
 if (attr==='class') { ;
__p += ' govuk-checkboxes__input ';
 } ;
__p += '"\r\n        ';
 } ;
__p += '\r\n        value="' +
((__t = (item.value)) == null ? '' : __t) +
'"\r\n        ';
 if (ctx.value === item.value || (typeof ctx.value === 'object' && ctx.value.hasOwnProperty(item.value) && ctx.value[item.value])) { ;
__p += '\r\n        checked=true\r\n        ';
 } ;
__p += '\r\n        id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'"\r\n        >\r\n        <label class="govuk-label govuk-checkboxes__label" for="' +
((__t = (ctx.id)) == null ? '' : __t) +
'' +
((__t = (ctx.row)) == null ? '' : __t) +
'-' +
((__t = (item.value)) == null ? '' : __t) +
'">\r\n            <span>' +
((__t = (ctx.t(item.label))) == null ? '' : __t) +
'</span>\r\n        </label>\r\n        \r\n        <strong class="govuk-description">' +
((__t = (item.description)) == null ? '' : __t) +
'</strong>\r\n    </div>\r\n    ';
 }) ;
__p += '\r\n</div>\r\n';
return __p
}