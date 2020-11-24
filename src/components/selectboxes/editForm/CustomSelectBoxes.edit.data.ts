export default [
    {
    key: 'multiple',
    ignore: true
  }, 
  {
    type: 'datagrid',
    input: true,
    label: 'Values',
    key: 'values',
    tooltip: 'The radio button values that can be picked for this field. Values are text submitted with the form data. Labels are text that appears next to the radio buttons on the form.',
    weight: 10,
    reorder: true,
    defaultValue: [{
      label: '',
      value: ''
    }],
    components: [{
      label: 'Label',
      key: 'label',
      input: true,
      type: 'textfield'
    }, {
      label: 'Value',
      key: 'value',
      input: true,
      type: 'textfield',
      allowCalculateOverride: true,
      calculateValue: {
        _camelCase: [{
          var: 'row.label'
        }]
      },
      validate: {
        required: true
      }
    },
    {
      label: 'Description',
      key: 'description',
      input: true,
      type: 'textfield'
    }
  ]
  }]