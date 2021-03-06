var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import CustomSelectBoxesDataDisplay from './editForm/CustomSelectBoxes.edit.data';
import CustomSelectBoxesValidationDisplay from './editForm/CustomSelectBoxes.edit.validation';
export default function () {
    var extend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extend[_i] = arguments[_i];
    }
    return nestedComponentForm.apply(void 0, __spreadArrays([[
            {
                key: 'data',
                label: 'Data',
                components: CustomSelectBoxesDataDisplay,
            },
            {
                key: 'validation',
                label: 'Validation',
                components: CustomSelectBoxesValidationDisplay,
            },
            {
                key: 'api',
                label: 'API',
                components: null
            }
        ]], extend));
}
