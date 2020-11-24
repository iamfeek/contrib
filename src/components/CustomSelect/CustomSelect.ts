import { Components } from 'formiojs';
const FieldComponent = (Components as any).components.field;
import editForm from './CustomSelect.form';

export default class CustomSelect extends (FieldComponent as any) {
  constructor(component, options, data) {
    super(component, options, data);
  }

  static schema() {
    return FieldComponent.schema({
      type: 'customselect',
      age: 28
    })
  }

  public static editForm = editForm;

  static builderInfo = {
    title: 'Custom Select',
    group: 'basic',
    icon: 'fa fa-hand-pointer',
    weight: 70,
    documentation: 'https://fiq.me',
    schema: CustomSelect.schema()
  }

  public render(children) {
    return super.render(
      this.renderTemplate('customselect')
    )
  }

  attach(element) {
    return super.attach(element);
  }
}