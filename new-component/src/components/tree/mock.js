/*eslint-disable*/
export const treeData = [{
    title: "省-1",
    key: "01",
    index: 0,
    type: 'province',
    checkable: true,
    disableCheckbox: false,
    children: [{
        title: "省1市1",
        key: "0101",
        type: 'city',
        index: 0,
        checkable: true,
        disableCheckbox: false,
        children: [{
            title: "省1市1区1",
            key: "010101",
            type: 'area',
            index: 0,
            checkable: true,
            disableCheckbox: false,
          },
          {
            title: "省1市1区2",
            key: "010102",
            type: 'area',
            index: 1,
            checkable: true,
            disableCheckbox: false,
          }
        ]
      },
      {
        title: "省1市2",
        key: "0102",
        type: 'city',
        index: 1,
        checkable: true,
        disableCheckbox: false,
        children: [{
            title: "省1市2区1",
            key: "010201",
            type: 'area',
            index: 0,
            checkable: true,
            disableCheckbox: false,
          },
          {
            title: "省1市2区2",
            key: "010202",
            type: 'area',
            index: 1,
            checkable: true,
            disableCheckbox: false,
          }
        ]
      }
    ],
    checkable: true,
  },
  {
    title: "省-2",
    key: "02",
    type: 'province',
    index: 1,
    checkable: true,
    disableCheckbox: false,
    children: [{
        title: "省2市1",
        key: "0201",
        type: 'city',
        index: 0,
        checkable: true,
        disableCheckbox: false,
        children: [{
            title: "省2市1区1",
            key: "020101",
            type: 'area',
            index: 0,
            checkable: true,
            disableCheckbox: false,
          },
          {
            title: "省2市1区2",
            key: "020102",
            type: 'area',
            index: 1,
            checkable: true,
            disableCheckbox: false,
          }
        ]
      },
      {
        title: "省2市2",
        key: "0202",
        type: 'city',
        index: 1,
        checkable: true,
        disableCheckbox: false,
        children: [{
            title: "省2市2区1",
            key: "020201",
            type: 'area',
            index: 0,
            checkable: true,
            disableCheckbox: false,
          },
          {
            title: "省2市2区2",
            key: "020202",
            type: 'area',
            index: 1,
            checkable: true,
            disableCheckbox: false,
          }
        ]
      }
    ],
    checkable: true,
  }
]


