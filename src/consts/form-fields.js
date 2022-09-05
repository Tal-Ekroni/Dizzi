export const carEditFields = [
    {
        name: 'manufacturer',
        type: 'dropdown',
        label: {
            he: 'יצרן'
        },
        options: [
            { value: 'toyota', he: 'טויוטה' },
            { value: 'hyundai', he: 'יונדאי' },
            { value: 'mitsubishi', he: 'מיצובישי' },
            { value: 'subaru', he: 'סובארו' },
        ]
    },
    {
        name: 'model',
        type: 'dropdown',
        label: {
            he: 'דגם'
        },
        options: [
            { value: 'yaris', he: 'יאריס' },
            { value: 'lancer', he: 'לנסר' },
            { value: 'tucson', he: 'טוסון' },
            { value: 'corola', he: 'קורולה' },
        ]
    },
    {
        name: 'type',
        type: 'dropdown',
        label: {
            he: 'סוג'
        },
        options: [
            { value: 'executive', he: 'מנהלים' },
            { value: 'family', he: 'משפחה' },
            { value: 'mini', he: 'קטן' },
            { value: 'SUV', he: 'שטח/פנאי' },
            { value: 'commercial', he: 'מסחרי' },
            { value: 'sport', he: 'ספורט' },
            { value: 'luxury', he: 'יוקרה' },
            { value: 'minivan', he: 'מיניואן' },
        ]
    },
    {
        name: 'price',
        type: 'number',
        label: {
            he: 'מחיר'
        }
    },
    {
        name: 'height',
        type: 'number',
        label: {
            he: 'גובה'
        }
    },
    {
        name: 'trunk',
        type: 'number',
        label: {
            he: 'תא מטען'
        }
    },
    {
        name: 'motor',
        type: 'dropdown',
        label: {
            he: 'נפח מנוע'
        },
        options: [
            { value: '1.6', he: '1.6' },
            { value: '1', he: '1' },
            { value: '2', he: '2' },
            { value: '1.8', he: '1.8' },
        ]
    },
    {
        name: 'horsePower',
        type: 'number',
        label: {
            he: 'כוח סוס'
        }
    },
    {
        name: 'isGearAuto',
        type: 'boolean',
        label: {
            he: 'גיר'
        },
        options: [
            { value: true, he: 'אוטומט' },
            { value: false, he: 'ידני' },
        ]
    },
    {
        name: 'safety',
        type: 'range',
        label: {
            he: 'בטיחות'
        },
        range: { min: 1, max: 8 }
    },
    {
        name: 'isElectric',
        type: 'boolean',
        label: {
            he: 'סוג מנוע'
        },
        options: [
            { value: true, he: 'חשמלי' },
            { value: false, he: 'רגיל' },
        ]
    },
    {
        name: 'features',
        type: 'multi-check-select',
        label: {
            he: 'פיצ\'רים'
        },
        options: [
            { value: 'isMagnezioumWheels', he: 'גלגלי מגנזיום' },
            { value: 'isPanoramicRoof', he: 'גג פנורי/נפתח' },
            { value: 'isMultimediaSystem', he: 'מערכת מולטימדיה' },
            { value: 'isCarPlay', he: 'CarPlay' },
            { value: 'isLeatherCovers', he: 'מושבי עור' },
            { value: 'isDigitalClocks', he: 'לוח שעונים דיגיטלי' },
            { value: 'isStartButton', he: 'התנעה ללא מפתח' },
            { value: 'isElectricHandBreaks', he: 'בלם יד חשמלי' },
        ]
    }
]