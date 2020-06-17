db.getCollection('catalogs')
    .drop();
db.getCollection('catalogs')
    .insertMany([
      {
        _id: 'home', name_en: 'Main', name: 'Головна', ancestors: [], parent: 'null',
        auth: 'casual', order: 0, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: 'HandMADE - ', seoTitle: '', seoMeta_en: '', seoMeta: '',
      },
      {
        _id: 'common', name_en: 'Common', name: 'Загальні', ancestors: ['home'], parent: 'home',
        auth: 'casual', order: 1, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: 'HandMADE - ', seoTitle: '', seoMeta_en: '', seoMeta: '',
      },

      {
        _id: 'about', name_en: 'About', name: 'Про себе', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 1, picture: '', description: '',
        prefix: '', seoTitle_en: 'HandMADE - ', seoTitle: '', seoMeta_en: '', seoMeta: '',
      },

      {
        _id: 'products', name_en: 'Products', name: 'Роботи', ancestors: ['home', 'common'], parent: 'common',
        auth: 'casual', order: 2, picture: '', description: '',
        prefix: '', seoTitle_en: 'HandMADE', seoTitle: 'HandMADE - мої роботи', seoMeta_en: 'HandMADE', seoMeta: 'Ручна робота',
      },

      {
        _id: 'toys', ancestors: ['home', 'common', 'products'], parent: 'products', order: 1,
        picture: 'category-toys', prefix: 'toy',
        name_en: 'Toys', name: 'Іграшки', description: '',
        seoTitle_en: 'HandMADE - Toys', seoTitle: 'HandMADE - Іграшки', seoMeta_en: 'Toys, presents for kids, HandMADE toys',
        seoMeta: 'Іграшки ручної роботи, тильди, м\'які іграшки, подарунки для дітей',
      },
      {
        _id: 'kids', ancestors: ['home', 'common', 'products'], parent: 'products', order: 6,
        picture: '', prefix: 'kid',
        name_en: 'For kids', name: 'Для немовлят', description: '',
        seoTitle_en: 'HandMADE - For kids', seoTitle: 'HandMADE - Для немовлят', seoMeta_en: 'Toys, presents for kids, HandMADE toys, clothes for kids',
        seoMeta: 'В\'язання, одяг, шапочка, пінетки, погрумушка, рукавички, іграшки для немовлят',
      },
      {
        _id: 'wreaths', ancestors: ['home', 'common', 'products'], parent: 'products', order: 2,
        picture: 'category-wreaths', prefix: 'wrh',
        name_en: 'Head wreaths', name: 'Віночки', description: '',
        seoTitle_en: 'HandMADE - Head wreaths', seoTitle: 'HandMADE - Віночки', seoMeta_en: 'Craft head wreaths', seoMeta: 'Віночки ручної роботи, прикраси',
      },
      {
        _id: 'bouquets', ancestors: ['home', 'common', 'products'], parent: 'products', order: 3,
        picture: 'category-bouquets', prefix: 'buq',
        name_en: 'Bouquets', name: 'Букети', description: '',
        seoTitle_en: 'HandMADE - Bouquets', seoTitle: 'HandMADE - Букети ручної роботи', seoMeta_en: '', seoMeta: 'Букети, композиції',
      },
      {
        _id: 'fruitBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 1,
        picture: 'category-fruitBouquets', prefix: 'buf',
        name_en: 'Bouquets of fruits', name: 'Букети з фруктів та овочів', description: '',
        seoTitle_en: 'HandMADE - Bouquets of fruits', seoTitle: 'HandMADE - Букети з фруктів та овочів', seoMeta_en: '', seoMeta: 'Букети з фруктів, овочів, ковбаси, снеків, для чоловіків, для жінок, вегетаріанські, їстивні, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'sweetBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 2,
        picture: 'category-sweetBouquets', prefix: 'bus',
        name_en: 'Sweet bouquets', name: 'Букети з цукерок', description: '',
        seoTitle_en: 'HandMADE - Sweet bouquets', seoTitle: 'HandMADE - Букети з цукерок', seoMeta_en: '', seoMeta: 'Букети та композиції з цукерок, солодкі букети, цукеркові, на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'flowerBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 3,
        picture: 'category-flowerBouquets', prefix: 'bfl',
        name_en: 'Bouquets of flowers', name: 'Букети з квітів', description: '',
        seoTitle_en: 'HandMADE - Bouquets of flowers', seoTitle: 'HandMADE - Букети з квітів', seoMeta_en: '', seoMeta: 'Букети та композиції з квітів, з живих квітів, з рослин, весільні, на ювілей, подарунок',
      },
      {
        _id: 'otherBouquets', ancestors: ['home', 'common', 'products', 'bouquets'], parent: 'bouquets', order: 4,
        picture: 'category-otherBouquets', prefix: 'buo',
        name_en: 'Other bouquets', name: 'Інші букети', description: '',
        seoTitle_en: 'HandMADE - Other bouquets', seoTitle: 'HandMADE - Екзотичні букети', seoMeta_en: '', seoMeta: 'Екзотичні букети та композиції на весілля, на ювілей, на день народження, подарунок',
      },
      {
        _id: 'decorative', ancestors: ['home', 'common', 'products'], parent: 'products', order: 4,
        picture: 'category-decorative', prefix: 'dcr',
        name_en: 'Decorations', name: 'Декор', description: '',
        seoTitle_en: 'HandMADE - Decorations', seoTitle: 'HandMADE - Декор', seoMeta_en: '', seoMeta: 'Декорації, прикраси, оформлення залів, весіль, декорування подарунків',
      },
      {
        _id: 'easterDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 1,
        picture: 'category-easterDecor', prefix: 'dce', name_en: 'Easter Decorations', name: 'Великодній декор', description: '',
        seoTitle_en: 'HandMADE - Easter Decorations', seoTitle: 'HandMADE - Великодній декор', seoMeta_en: '', seoMeta: 'Великодні кошики, писанки, прикраси',
      },
      {
        _id: 'weddingDecor', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 2,
        picture: 'category-weddingDecor', prefix: 'dcw', name_en: 'Wedding Decorations', name: 'Весільний декор', description: '',
        seoTitle_en: 'HandMADE - Wedding Decorations', seoTitle: 'HandMADE - Весільний декор', seoMeta_en: '', seoMeta: 'Весільні атрибути, прикрашання, оформлення залів, подушечка для обручок, коробка для грошей, келихи, піньята, кошичок для цукерок',
      },
      {
        _id: 'fotoZones', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 3,
        picture: 'category-fotoZones', prefix: 'dcf', name_en: 'Photozones', name: 'Фотозони', description: '',
        seoTitle_en: 'HandMADE - Photozones', seoTitle: 'HandMADE - Фотозони', seoMeta_en: '', seoMeta: 'Оформлення фотозон, тематичні декорації, виставки, презентації, roadshow, покази',
      },
      {
        _id: 'presents', ancestors: ['home', 'common', 'products', 'decorative'], parent: 'decorative', order: 4,
        picture: 'category-presents', prefix: 'dcp', name_en: 'Presents', name: 'Оформлення подарунків', description: '',
        seoTitle_en: 'HandMADE - Presents', seoTitle: 'HandMADE - Оформлення подарунків', seoMeta_en: '', seoMeta: 'Оформлення, пакування подарунків',
      },

      // { _id: 'knitting', ancestors: ['home', 'common', 'products'], parent: 'products', order: 5,
      //   picture: 'knitting', prefix: 'kni',
      //   name_en: '', name: 'В\'язання', description: ''},
      //   { _id: 'mittens', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 1,
      //     picture: 'mittens', prefix: 'knm',
      //     name_en: '', name: 'В\'язані рукавички', description: ''},
      //   { _id: 'hats', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 2,
      //     picture: 'hats', prefix: 'knh',
      //     name_en: '', name: 'В\'язані шапки', description: ''},
      //   { _id: 'pads', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 3,
      //     picture: 'pads', prefix: 'knp',
      //     name_en: '', name: 'Дитячі пінєтки', description: ''},
      //   { _id: 'knitedFlowers', ancestors: ['home', 'common', 'products', 'knitting'], parent: 'knitting', order: 4,
      //   picture: 'knitedFlowers', prefix: 'knf',
      //   name_en: '', name: 'Квіти', description: ''},


      {
        _id: 'scrapbooking', ancestors: ['home', 'common', 'products'], parent: 'products', order: 6,
        picture: 'category-scrapbooking', prefix: 'scr',
        name_en: 'Scrapbooking', name: 'Скрапбукінг', description: '',
        seoTitle_en: 'HandMADE - Scrapbooking', seoTitle: 'HandMADE - Скрапбукінг', seoMeta_en: 'Scrapbooking', seoMeta: 'Скрапбукінг',
      },
      {
        _id: 'albums', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 1,
        picture: 'category-albums', prefix: 'sca', name_en: 'Albums', name: 'Альбоми', description: '',
        seoTitle_en: 'HandMADE - Albums', seoTitle: 'HandMADE - Альбоми', seoMeta_en: '', seoMeta: 'Ручна робота, фотоальбоми, весільні, шкільні альбоми, обкладинки, аьбоми для дитячих садків, для немовлят, для ювілеїв',
      },
      {
        _id: 'cards', ancestors: ['home', 'common', 'products', 'scrapbooking'], parent: 'scrapbooking', order: 2,
        picture: 'category-cards', prefix: 'scc', name_en: 'Cards', name: 'Листівки', description: '',
        seoTitle_en: 'HandMADE - Cards', seoTitle: 'HandMADE - Листівки', seoMeta_en: '', seoMeta: 'Ручна робота, весільні, листівки для немовлят, для ювілеїв',
      },
      {
        _id: 'mcs', name_en: 'Masterclasses', name: 'Майстер-класи', ancestors: ['home', 'common'], parent: 'common', prefix: 'mcs',
        auth: 'casual', order: 3, prefix: 'to', picture: '', description: '',
        seoTitle_en: 'HandMADE - Masterclasses', seoTitle: 'HandMADE - Майстер-класи', seoMeta_en: '', seoMeta: 'Ручна робота, майстер-класи, покроковий опис, як зробити, зробити своїми руками, зробити самому',
      },
      {
        _id: 'literature', name_en: 'Poems', name: 'Вірші', ancestors: ['home', 'common'], parent: 'common', prefix: 'lit',
        auth: 'casual', order: 4, prefix: 'li', picture: '', description: '',
        seoTitle_en: 'HandMADE - Poems', seoTitle: 'HandMADE - Літературна сторінка', seoMeta_en: '', seoMeta: 'Вірші',
      },
      // { _id: 'contacts', name_en: '', name: 'Контакти', ancestors: ['home', 'common'], parent: 'common',
      //   auth: 'casual', order: 4, picture: '',description: ''},
      {
        _id: 'system', name_en: 'System', name: 'Система', ancestors: ['home'], parent: 'home',
        auth: 'guest', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: '', seoTitle: '', seoMeta_en: '', seoMeta: '',
      },

      {
        _id: 'dashboard', name_en: 'Dashboard', name: 'Dashboard', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 1, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: '', seoTitle: '', seoMeta_en: '', seoMeta: '',
      },
      // {_id: 'profile', name_en: '', name: 'Профіль', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
      //   auth: 'guest', order: 1, picture: 'catalog'],description: ''},
      {
        _id: 'product-form', name_en: 'Product form', name: 'Редактор виробів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
        auth: 'manager', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: 'HandMADE - Product form', seoTitle: 'HandMADE - Редактор виробів', seoMeta_en: '', seoMeta: '',
      },
      // {
      //   _id: 'product-category', name_en: '', name: 'Вибір категорії виробів', ancestors: ['home', 'system', 'dashboard'], parent: 'dashboard',
      //   auth: 'manager', order: 2, picture: 'catalog', description: '',
      //   prefix: '', seoTitle_en: 'HandMADE - ', seoTitle: '', seoMeta_en: '', seoMeta: '',
      // },
      {
        _id: 'login', name_en: 'Sign in', name: 'Увійти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'casual', order: 2, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: 'HandMADE - Sign in', seoTitle: 'HandMADE - Увійти', seoMeta_en: '', seoMeta: '',
      },
      {
        _id: 'signup', name_en: 'Sign up', name: 'Реєстрація', ancestors: ['home', 'system'], parent: 'system',
        auth: 'manager', order: 3, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: 'HandMADE - Sign up', seoTitle: 'HandMADE - Реєстрація', seoMeta_en: '', seoMeta: '',
      },
      {
        _id: 'logout', name_en: 'Logout', name: 'Вийти', ancestors: ['home', 'system'], parent: 'system',
        auth: 'guest', order: 4, picture: 'catalog', description: '',
        prefix: '', seoTitle_en: 'HandMADE - Logout', seoTitle: 'HandMADE - Вийти', seoMeta_en: '', seoMeta: '',
      },
    ]);
