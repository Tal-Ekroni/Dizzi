export const mainCarFields = [
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
        name: 'category',
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
    // {
    //     name: 'height',
    //     type: 'number',
    //     label: {
    //         he: 'גובה'
    //     }
    // },
    // {
    //     name: 'trunk',
    //     type: 'number',
    //     label: {
    //         he: 'תא מטען'
    //     }
    // },




]

export const subModelFields = [
    {
        name: 'name',
        type: 'text',
        placeholder: {
            he: 'שם תת דגם'
        }
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
        name: 'motorType',
        heading: {
            he: 'מנוע'
        },
        type: 'dropdown',
        placeholder: {
            he: 'סוג'
        },
        options: [
            { value: 'electric', he: 'חשמלי' },
            { value: 'hybrid', he: 'היברידי' },
            { value: 'regular', he: 'רגיל' },
        ]
    },
    {
        name: 'volume',
        type: 'number',
        label: {
            he: 'נפח מנוע'
        },
        placeholder: {
            he: 'נפח מנוע[סמ"ק]'
        }
    },
    {
        name: 'horsePower',
        type: 'number',
        label: {
            he: 'כוח סוס'
        },
        placeholder: {
            he: 'הספק[כ"ס/סל"ד]'
        }
    },
    {
        name: 'momentum',
        type: 'number',
        label: {
            he: 'מומנטום'
        },
        placeholder: {
            he: 'מומנט[קג"מ/סל"ד]'
        }
    },
    {
        name: 'isAutoGear',
        type: 'boolean',
        label: {
            he: 'תיבת הילוכים'
        },
        options: [
            { value: true, he: 'אוטומט' },
            { value: false, he: 'ידני' },
        ]
    },
    {
        name: 'breakesSystem',
        type: 'text',
        heading: {
            he: 'בלמים'
        },
        label: {
            he: 'מערכת בלמים'
        },
        placeholder: {
            he: 'מערכת בלמים'
        }
    },
    {
        name: 'breakesFront',
        type: 'text',
        label: {
            he: 'בלם קדמי'
        },
        placeholder: {
            he: 'בלם קדמי'
        }
    },
    {
        name: 'breakesBack',
        type: 'text',
        label: {
            he: 'בלם אחורי'
        },
        placeholder: {
            he: 'בלם אחורי'
        }
    },
    {
        name: 'suspensionsFront',
        type: 'text',
        heading: {
            he: 'מתלים'
        },
        label: {
            he: 'מתלה קדמי'
        },
        placeholder: {
            he: 'מתלה קדמי'
        }
    },
    {
        name: 'suspensionsBack',
        type: 'text',
        label: {
            he: 'מתלה אחורי'
        },
        placeholder: {
            he: 'מתלה אחורי'
        }
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