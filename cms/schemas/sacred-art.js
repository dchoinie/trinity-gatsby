export default {
    name: 'sacredArt',
    title: 'Sacred Art',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'art',
            title: 'Art',
            type: 'image',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
    ],
}