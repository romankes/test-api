export const CUSTOMERS = {
  fields: [
    {
      columnType: 'text',
      title: 'status',
      value: 'Status',
    },
    {
      columnType: 'text',
      title: 'customerName',
      value: 'Customer name',
    },
    {
      columnType: 'text',
      title: 'customerId',
      value: 'Customer id',
    },

    {
      columnType: 'text',
      title: 'customerAddress',
      value: 'Customer Address',
    },
    {
      columnType: 'text',
      title: 'loadingSite',
      value: 'Loading site',
    },
    {
      columnType: 'text',
      title: 'contactPhone',
      value: 'Contact phone',
    },
    {
      columnType: 'text',
      title: 'contactEmail',
      value: 'Contact email',
    },
    {
      columnType: 'icon',
      title: 'editIcon',
      value: '',
    },
    {
      columnType: 'icon',
      title: 'viewIcon',
      value: '',
    },
    {
      columnType: 'icon',
      title: 'moreIcon',
      value: '',
    },
  ],
  lines: [
    {
      rowId: '1',
      customerName: 'Inactive Test1',
      customerId: '123321',
      customerAddress: 'Inactive Address 12/2',
      loadingSite: 'Test site',
      contactPhone: '+24115111111',
      contactEmail: 'test@test.com',
      status: 'Inactive',
      status___color: '#E4094D',
      priority: 'High',
      priority___color: '#F38A29',
    },
    {
      rowId: '2',
      customerName: 'Active Test123',
      customerId: '0987890',
      customerAddress: 'Active Address 12/4',
      loadingSite: 'Test site2',
      contactPhone: '+837373737',
      contactEmail: 'testttt@sss.om',
      status: 'Active',
      status___color: '#6B9905',
      priority: 'Normal',
      priority___color: '#004aad',
    },

    {
      rowId: '3',
      customerName: 'Test pending',
      customerId: '5674839',
      customerAddress: 'Address 12/2',
      loadingSite: 'test pending',
      contactPhone: '+123123123',
      contactEmail: 'pecode@gmail.com',
      status: 'Pending',
      status___color: '#004aad',
      priority: 'Urgent',
      priority___color: '#E4094D',
    },
  ],

  tooltip: [
    {
      title: 'view',
      value: 'View customer detail',
    },
    {
      title: 'deactivate',
      value: 'Deactivate customer',
    },
  ],
};
