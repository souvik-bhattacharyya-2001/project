import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewservicesService {
  users = [
    {
      prod_name: 'North Indian Food',
      smalldesc:"Amritsari Chole Bhature, Kashmiri Rogan Josh, Rajasthani Dal-Bati Churma, and Dilli ki Chaat are just a few delectable dishes that North Indian cuisine has to offer",
      prod_id: 'northindia',
      img:"assets/north.jpg",
      sub_prod: [
        {
          sub_id: 'Naan',
          desc: 
          "Naan is a leavened flatbread that is fancier and heavier than roti and has a filling inside it. It is made of all-purpose refined flour and stuffed with curd, fresh desiccated coconut, butter, nigella seeds, and raisins  ",
          img:"assets/n.jpg",
          price:"45/-",
          rating:"4.1 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
      {
        sub_id: 'Butter Chicken',
        desc: 
        "Butter chicken, traditionally known as murgh makhani, is an Indian dish originating in New Delhi. It is a type of curry made from chicken with a spiced tomato and butter sauce. ",
        img:"assets/butter.jpg",
        price:"199/-",
        rating:"4.1 ⭐⭐⭐⭐",
        pic:"assets/delivery.png"
      },
        {
          sub_id: 'Kadai Paneer',
          desc: 
          " A super popular Indian paneer gravy dish made with soft paneer cubes, perfectly cooked bell pepper and a deliciously flavorful, spicy tomato-based gravy.  ",
          img:"assets/kadai.webp",
          price:"150/-",
          rating:"4.1 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Dahi Bhalla',
          desc: 
          "The most loved street snack of India, particularly North India. Dahi Bhalla can also be served as a chilled snack or a starter during festive occasions like Diwali or Navratri. Try your hand at making delicious bhallas topped with sweet curd, sour and tangy chutneys and chaat masala.",
          img:"assets/2.webp",
          price:"90/-",
          rating:"4.0 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Almond Malai Kulfi',
          desc: 
          "It is happiness served in a matki! Cooked with dry fruits, condensed milk and saffron, kulfi  is a must try. Prepare this on special occasions as desserts and everyone would just love it.",
          img:"assets/3.jpg",
          price:"45/-",
          rating:"4.3 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
          
        },
        {
          sub_id: 'Rajasthani Laal Maans',
          desc: 
          "Lamb cooked in a variety of masalas with a burst of red chillies. This bright red coloured delicious dish garnished with coriander leaves and a good amount of ghee looks extremely appetizing.",
          img:"assets/laal.jpg",
          price:"120/-",
          rating:"4.9 ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        
      ],
    },

    {
      prod_name: 'West Indian Food',
      smalldesc:" West Indian Cuisine can be categorised as vegetarian, however a very small section of the society consume non vegetarian food. ",
      img:"assets/west.jpg",
      prod_id: 'westindia',
      sub_prod: [
        {
          sub_id: 'Parsi Chicken Farcha ',
          desc: 
          "Chicken Farcha, called Marghi Na Farcha in Gujarati, is a delicious Parsi style fried chicken that is often deemed the Indian equivalent of the famed KFC chicken.If you like chicken, and especially fried chicken, then our perfect chicken farcha is what you must try…juicy tender boneless chicken, full of flavour from being marinated overnight, enveloped in a crisp exterior.",
          img:"assets/par.webp",
          price:"130/-",
          rating:"4.0 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Dhokla',
          desc: 
          "Originating from the Indian state of Gujarat, dhokla is a vegetarian snack consisting of fermented chickpea batter and rice. Spices such as chili and ginger are added to the batter in order to improve the flavor of the dish. When baked, dhokla is often garnished with coriander, coconut, or chopped chilies, and it is typically accompanied by besan chutney.Because it is a popular dish and a favorite vegetarian snack, dhokla has many variations, such as semolina, rice powder, or cheese dhokla. Fluffy, low in calories, and packed with protein, it is unsurprising that dhokla remains a staple food of Gujarat.",
          img:"assets/5.jpg",
          price:"90/-",
          rating:"4.2 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"

        },
        {
          sub_id: 'Bhakri',
          desc: 
          "Bhakri is a popular Indian unleavened flatbread native to the Indian state of Maharashtra, although it is commonly found throughout Gujarat, Goa, and Rajasthan. It can be made with jowar, ragi, sorghum, wheat, or rice flour, all of them high in dietary fibers, making bhakri a healthy type of flatbread.It is sometimes additionally flavored with ghee butter or cumin seeds, and served with chutneys, baingan bharta, vegetables, curry, or rice.",
          img:"assets/6.jpg",
          price:"50/-",
          rating:"4.0 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Modak',
          desc: 
          "Modak is an Indian sweet dumpling believed to have originated in the state of Maharashtra. In India, modak is prepared in a variety of ways, and it is known under various names. Depending on the region, it is also referred to as mothagam or kozhukattai in Tamil, modhaka or kadubu in Kannada, or kudumu in Telugu.",
          img:"assets/7.jpg",
          price:"25/-",
          rating:"4.0 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Bhelpuri',
          desc: 
          "Bhelpuri (also spelled bhel puri) is a type of chaat - a savory snack that is commonly served in cafés and street carts throughout India. There is a lot of debate about what should go in a bhelpuri, but the most commonly used ingredients include puffed rice, ground nuts, potatoes, fried noodles, onions, and chilis.Tamarind or date chutneys are commonly used to give the dish a spicy flavor. The dish is extremely popular in Mumbai, where it is usually enjoyed as a beach snack or comfort food. Although there is no clear evidence about the time of bhelpuri's origin, it is believed that the snack was invented by an unknown Gujarati migrant.",
          img:"assets/8.jpg",
          price:"49/-",
          rating:"3.7 ⭐⭐⭐",  
          pic:"assets/delivery.png"
        },
      ],
    },

    {
      prod_name: 'East Indian Food',
      smalldesc:"In the eastern India, the Bengali and Assamese styles of cooking are noticeable. The staple food of Bengalis is the yummy combination of rice and fish. ",
      img:"assets/hilsa.jpg",
      prod_id: 'eastindia',
      sub_prod: [
        {
          sub_id: 'Dalma',
          desc: 'A traditional recipe from Odisha, dalma is nutritionally rich with split chickpeas cooked along with raw papaya, potatoes and a host of masalas.',
          img:"assets/p.webp",
          price:"65/-",
          rating:"4.3 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Ras malai',
          desc: 'Ras malai is a popular Indian dessert consisting of white cream, sugar, milk, and cardamom-flavored paneer cheese known as chhana. Almonds, cashews, and saffron are often added to the dessert. Ras malai is of West Bengali origins, and is sometimes described as a rich cheesecake without a crust.  ',
          img:"assets/9.jpg",
          price:"18/-(per piece)",
          rating:"4.2 ⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Chingrir Malai Curry',
          desc: 'Chingri malai curry, also known as prawn malai curry, is a Bengali curry made from tiger and king prawns and coconut milk and flavoured with spices. The dish is popular throughout Bengal and is served during weddings and celebrations, or for guests, and was also very popular among the British in Calcutta.',
          img:"assets/k.jpg",
          price:"149/-",
          rating:"4.5 ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Jalfrezi',
          desc: 'Jalfrezi is an Indian technique for preparing a type of curry made by frying marinated pieces of meat, paneer, or vegetables in various spices (turmeric, coriander, cumin) and oil in order to produce a thick gravy. Apart from the standard onions, tomatoes, and bell peppers, the dish typically includes green chili peppers, so it can range from medium to very hot.Jalfrezi is especially popular in the United Kingdom, and nowadays it can be found in almost every Indian restaurant in London. Originally, it was invented in eastern India during the British Raj, when chefs made a recipe as a way to use up leftovers.',
          img:"assets/11.jpg",
          price:"80/-",
          rating:"4.5  ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Rasgulla',
          desc: 'Rasgulla is a traditional sweet that is usually served at the end of a meal, like many other Indian milk-based desserts. It is prepared from chhena paneer dumplings and semolina dough, cooked together in a sugary syrup. The origin of rasgulla is the subject of a heated debate, with West Bengal and Odisha both claiming to be the birthplace of the dessert.Bengalis claim that rasgulla was the byproduct of many culinary experiments in the state, while the people of Odisha claim that it was traditionally offered to Lord Jagannath for centuries. However, most food historians agree that the truth is somewhere in between.In recent years, both varieties got their own GI status in order to differentiate between the two. Its easy to differentiate them even without the GI status, as the Bengali version is more puffy and spongy than the Odisha version.',
          img:"assets/12.jpg",
          price:"20/-(per piece)",
          rating:"4.9  ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
      ],
    },

    {
      prod_name: 'South Indian Food',
      smalldesc:"In the southern India, the states make great use of spices, fishes and coconuts, as most of them have coastal kitchens.",
      img:"assets/south.jpg",
      prod_id: 'southindia',
      sub_prod: [
        {
          sub_id: 'Hyderabadi Biryani',
          desc: 'Made with basmati rice, vegetables or meat, onions, spices, lemon and saffron, this biryani has a unique flavour when compared to biryanis found in other states of India. The way of cooking and the spices used while making gives it an all together different taste.',
          img:"assets/13.webp",
          price:"169/-",
          rating:"4.9  ⭐⭐⭐⭐⭐", 
           pic:"assets/delivery.png"

        },
        {
          sub_id: 'Masala Dosa',
          desc: 'Found in many varieties and are similar to crepes, theyre made from fermented batter of rice and black gram. Thin and crispy dosas are  served hot with Sambar, a light spicy soup thats perfect for dipping, and an assortment of chutneys(sauces), condiments made from coconut, tomato, mint etc. Masala Dosa is the popular choice which is stuffed with fried onion and potato.',
          img:"assets/14.webp",
          price:"90/-",
          rating:"4.2  ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"

        },
        {
          sub_id: ' Uttapam',
          desc: 'Considered as Dosas fat cousin, it is made from the same type of batter but mixed with onion, tomato and cilantro(coriander), but tends to be thicker than a dosa and resembles more like a savory pancake.',
          img:"assets/15.webp",
          price:"80/-",
          rating:"4.3  ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: ' Idli',
          desc: 'Idlis are rice cakes made from steamed batter of fermented black lentils and rice. Sometimes instead of rice and lentils, semolina is used. It is usually served with sambar, coconut chutneys.',
          img:"assets/16.webp",
          price:"45/-",
          rating:"4.2  ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
        {
          sub_id: 'Malabar Fish Biryani',
          desc: 'In Malabar this dish is made with "kaima rice" a short grain mildly flavored rice. It is also known as the biryani rice of Kerala. This classic Malabar Fish Biryani can be devoured at all times.',
          img:"assets/m.webp",
          price:"230/-",
          rating:"5.0  ⭐⭐⭐⭐⭐",
          pic:"assets/delivery.png"
        },
      ],
    },
    
  ];
  constructor() {}
}
