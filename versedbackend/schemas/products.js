/*product*/
export default {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      { 
        name: 'arrival',
        title: 'Arrival',
        type: 'string',
      },
      { 
        name: 'about',
        title: 'About',
        type: 'string',
      },
      { 
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{ type: 'string' }]
      },
      { 
        name: 'ingredients',
        title: 'Ingredients',
        type: 'array',
        of: [{ type: 'string' }]
      },
      { 
        name: 'shopall',
        title: 'Shopall',
        type: 'array',
        of: [{ type: 'string' }]
      },
      { 
        name: 'price_id',
        title: 'Stripe Price ID',
        type: 'string',
      },
      { 
        name: 'nametwo',
        title: 'Nametwo',
        type: 'string',
      }
    ]
  }
  