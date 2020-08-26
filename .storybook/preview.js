
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'LightMode',
    values: [
        { 
            name: 'DarkMode', 
            value: '#000000'
        },
        { 
            name: 'LightMode', 
            value: '#FFFFFF' 
        },
      ],
    }
}