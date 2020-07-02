db.getCollection('products')
  .drop();
db.getCollection('products')
  .insertMany([
    {
      _id: 'plankit',
      name: 'Plankit',
      parent: 'products',
      picture: '',
      description: 'some description',
      seoTitle: 'seo title',
      seoMeta: 'seo meta',
    },
    {
      _id: 'dominoSPC',
      name: 'Domino SPC',
      parent: 'products',
      picture: '',
      description: 'some description',
      seoTitle: 'seo title',
      seoMeta: 'seo meta',
    },
  ]);
