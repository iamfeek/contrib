import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import CustomSelectBoxesDataDisplay from './editForm/CustomSelectBoxes.edit.data';
import CustomSelectBoxesValidationDisplay from './editForm/CustomSelectBoxes.edit.validation';

export default function (...extend) {
  return nestedComponentForm([
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
  ], ...extend);
}
