// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    {
      title: "Hero Image",
      name: "heroImage",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Image",
          name: "image",
          type: "image",
        },
      ],
    },
    {
      title: "Sermons",
      name: "sermons",
      type: "document",
      fields: [
        {
          title: "Title",
          name: "title",
          type: "string",
        },
        {
          title: "Date",
          name: "date",
          type: "date",
          options: {
            dateFormat: "YYYY-MM-DD",
            calendarTodayLabel: "Today",
          },
        },
        {
          title: "Sermon PDF",
          name: "sermonPDF",
          type: "file",
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          options: {
            source: "title",
            maxLength: 200, // will be ignored if slugify is set
            slugify: (input) =>
              input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
          },
        },
      ],
    },
    {
      title: "Bulletins",
      name: "bulletins",
      type: "document",
      fields: [
        {
          title: "Date",
          name: "date",
          type: "date",
          options: {
            dateFormat: "YYYY-MM-DD",
            calendarTodayLabel: "Today",
          },
        },
        {
          title: "Sermon PDF",
          name: "sermonPDF",
          type: "file",
        },
      ],
    },
    {
      title: "Gallery",
      name: "gallery",
      type: "document",
      fields: [
        {
          title: "Gallery Name",
          name: "galleryName",
          type: "string",
        },
        {
          name: "images",
          type: "array", // supports drag'n'drop of multiple files
          options: {
            layout: "grid",
          },
          of: [
            {
              type: "image",
            },
          ],
        },
      ],
    },
  ]),
});
