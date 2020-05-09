import { Message } from 'element-ui';

export function copyContent(content, successMsg) {
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.setAttribute('value', content);
  input.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
    Message({
      message: successMsg,
      type: 'success'
    });
  }
  document.body.removeChild(input);
}

export const neutralPalette = [
  {
    label: 'gray-1',
    color: '#ffffff'
  },
  {
    label: 'gray-2',
    color: '#fafafa'
  },
  {
    label: 'gray-3',
    color: '#f5f5f5'
  },
  {
    label: 'gray-4',
    color: '#f0f0f0'
  },
  {
    label: 'gray-5',
    color: '#d9d9d9'
  },
  {
    label: 'gray-6',
    color: '#bfbfbf'
  },
  {
    label: 'gray-7',
    color: '#8c8c8c'
  },
  {
    label: 'gray-8',
    color: '#595959'
  },
  {
    label: 'gray-9',
    color: '#434343'
  },
  {
    label: 'gray-10',
    color: '#262626'
  },
  {
    label: 'gray-11',
    color: '#1f1f1f'
  },
  {
    label: 'gray-12',
    color: '#141414'
  },
  {
    label: 'gray-13',
    color: '#000000'
  }
];

export const baseColorConfig = [
  {
    color: '#f5222d',
    colorName: 'red'
  },
  {
    color: '#fa541c',
    colorName: 'volcnao'
  },
  {
    color: '#fa8c16',
    colorName: 'orange'
  },
  {
    color: '#faad14',
    colorName: 'gold'
  },
  {
    color: '#fadb14',
    colorName: 'yellow'
  },
  {
    color: '#a0d911',
    colorName: 'lime'
  },
  {
    color: '#52c41a',
    colorName: 'green'
  },
  {
    color: '#13c2c2',
    colorName: 'cyan'
  },
  {
    color: '#1890ff',
    colorName: 'blue'
  },
  {
    color: '#2f54eb',
    colorName: 'geekblue'
  },
  {
    color: '#722ed1',
    colorName: 'purple'
  },
  {
    color: '#eb2f96',
    colorName: 'magenta'
  }
];

export const fontRecommedConfig = [
  { fontSize: 12, lineHeight: 20 },
  { fontSize: 14, lineHeight: 22 },
  { fontSize: 16, lineHeight: 24 },
  { fontSize: 20, lineHeight: 28 },
  { fontSize: 24, lineHeight: 32 },
  { fontSize: 30, lineHeight: 38 },
  { fontSize: 38, lineHeight: 46 },
  { fontSize: 46, lineHeight: 54 },
  { fontSize: 56, lineHeight: 64 },
  { fontSize: 68, lineHeight: 76 }
];

export const fontWeightConfig = [
  { fontWeight: 100 },
  { fontWeight: 200 },
  { fontWeight: 300 },
  { fontWeight: 400 },
  { fontWeight: 500 },
  { fontWeight: 600 },
  { fontWeight: 700 },
  { fontWeight: 800 },
  { fontWeight: 900 }
];

export const categoryTableData = [
  {
    name: 'color',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$color-1',
        type: 'color',
        value: '#f0f5ff',
        varName: '$primary-color'
      }
    ]
  },
  {
    name: 'Text Color',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$font-color-1',
        type: 'fontColor',
        value: '#f0f5ff',
        varName: '$color-text-action-label'
      }
    ]
  },
  {
    name: 'Border Color',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$border-color-1',
        type: 'borderColor',
        value: '#f0f5ff',
        varName: '$color-border-offline'
      }
    ]
  },
  {
    name: 'Font Size',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$font-size-1',
        type: 'fontSize',
        value: {
          fontSize: 28,
          lineHeight: 38
        },
        varName: '$color-border-offline'
      }
    ]
  },
  {
    name: 'Space',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$space-size-1',
        type: 'space',
        value: 4,
        varName: '$color-space'
      }
    ]
  },
  {
    name: 'Border Width',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$border-width-1',
        type: 'borderWidth',
        value: 0.5,
        varName: '$color-spasdsce'
      }
    ]
  },
  {
    name: 'Border Radius',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$border-radius-1',
        type: 'borderRadius',
        value: 0.5,
        varName: '$color-spasdsce'
      }
    ]
  },
  {
    name: 'Font Weight',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$font-weight-1',
        type: 'fontWeight',
        value: 0.5,
        varName: '$color-spasds1231ce'
      }
    ]
  },
  {
    name: 'Z-Index',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$z-index-1',
        type: 'zIndex',
        value: 0.5,
        varName: '$shadowsdsdfas'
      }
    ]
  },
  {
    name: 'Shadow Config',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$shadow-1',
        type: 'shadowConfig',
        value: 0.5,
        varName: '$shadowsdfasds'
      }
    ]
  },
  {
    name: 'Media Query',
    des: 'Generic colors to use',
    tableData: [
      {
        name: '$screen-size-1',
        type: 'screenSize',
        value: 300,
        varName: '$screen-size'
      }
    ]
  }
];
