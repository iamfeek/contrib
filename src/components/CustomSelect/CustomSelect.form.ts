import nestedComponentForm from 'formiojs/components/_classes/nested/NestedComponent.form';
import CustomSelectEditDisplay from './editForm/CustomSelect.edit.display';
import CustomSelectDataDisplay from './editForm/CustomSelect.edit.data';

export default function (...extend) {
  return nestedComponentForm([
    {
      key: 'display',
      components: CustomSelectEditDisplay
    }, 
    {
      key: 'data',
      label: 'Data',
      components: CustomSelectDataDisplay,
    }
  ], ...extend);
}
