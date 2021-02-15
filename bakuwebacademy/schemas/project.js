export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'date',
            title: 'Date',
            type: 'datetime',
        },
        {
            name: 'place',
            title: 'Place',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            options: {
                list: [
                    {value: 'personal', title: 'Personal'},
                    {value: 'client', title: 'Client'},
                    {value: 'school', title: 'School'},
                ]
            },
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    type: 'string',
                }
            ],
            options: {
                layout: 'tags',
            },
        },
    ]
}
