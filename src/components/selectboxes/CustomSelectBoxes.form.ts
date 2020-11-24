import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import CustomSelectBoxesDataDisplay from './editForm/CustomSelectBoxes.edit.data';

export default function (...extend) {
  return nestedComponentForm([
    {
      key: 'data',
      label: 'Data',
      components: CustomSelectBoxesDataDisplay,
    }
  ], ...extend);
}
