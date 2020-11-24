import editForm from './CustomSelect.form';
declare const CustomSelect_base: any;
export default class CustomSelect extends CustomSelect_base {
    constructor(component: any, options: any, data: any);
    static schema(): any;
    static editForm: typeof editForm;
    static builderInfo: {
        title: string;
        group: string;
        icon: string;
        weight: number;
        documentation: string;
        schema: any;
    };
    render(children: any): any;
    attach(element: any): any;
}
export {};
