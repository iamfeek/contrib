var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Components } from 'formiojs';
var FieldComponent = Components.components.field;
import editForm from './CustomSelect.form';
var CustomSelect = /** @class */ (function (_super) {
    __extends(CustomSelect, _super);
    function CustomSelect(component, options, data) {
        return _super.call(this, component, options, data) || this;
    }
    CustomSelect.schema = function () {
        return FieldComponent.schema({
            type: 'customselect',
            age: 28
        });
    };
    CustomSelect.prototype.render = function () {
        // @ts-ignore
        return FieldComponent.prototype.render.call(this, this.renderTemplate('selectboxes', {
            // @ts-ignore
            input: this.inputInfo,
            // @ts-ignore
            inline: this.component.inline,
            // @ts-ignore
            values: this.component.values,
            // @ts-ignore
            value: this.dataValue,
            // @ts-ignore
            row: this.row,
        }));
    };
    CustomSelect.prototype.attach = function (element) {
        return _super.prototype.attach.call(this, element);
    };
    CustomSelect.editForm = editForm;
    CustomSelect.builderInfo = {
        title: 'Custom Select',
        group: 'basic',
        icon: 'fa fa-hand-pointer',
        weight: 70,
        documentation: 'https://fiq.me',
        schema: CustomSelect.schema()
    };
    return CustomSelect;
}(FieldComponent));
export default CustomSelect;
