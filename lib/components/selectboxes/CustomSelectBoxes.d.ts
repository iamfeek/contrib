declare const SelectBoxes: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
import editForm from './CustomSelectBoxes.form';
export default class CustomSelectBoxes extends SelectBoxes {
    static editForm: typeof editForm;
    render(): any;
}
export {};
