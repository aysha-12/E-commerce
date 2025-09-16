const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
const port = 3000
require('dotenv').config();


app.use(cors())
app.use(express.json())






const uri = `mongodb+srv://${process.env.S3_BUCKET}:${process.env.SECRET_KEY}@cluster0.rckdhow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {  
    await client.connect();
 
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");


  } finally {
   
    // await client.close();
  }
}
run().catch(console.dir);






app.get('/', (req, res) => {
  res.send('Hello World!')
})


const resaleHouses=[
  
  {
    id: "H1001",
    img: "https://i.ibb.co.com/xKQz1Wh0/house.jpg",
    name: "Modern 2-Bedroom Apartment",
    resalePrice: 5500000, // in BDT
    originalPrice: 7500000, // in BDT
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Abdul Karim",
    isActive:"false"
  },
  {
    id: "H1002",
    img: "https://i.ibb.co.com/n81KYfrC/house2.jpg",
    name: "Spacious 4-Bedroom Villa",
    resalePrice: 12500000,
    originalPrice: 18000000,
    yearOfUse: 6,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Nasrin Jahan",
    isActive:true
  },
  {
    id: "H1003",
    img: "https://i.ibb.co.com/MDnSSr9n/house3.jpg",
    name: "Luxury Penthouse",
    resalePrice: 22000000,
    originalPrice: 30000000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Fahim Rahman",
    isActive:true
  },
  {
    id: "H1004",
    img: "https://i.ibb.co.com/Q39x5hvs/house4.jpg",
    name: "Luxury Penthouse",
    resalePrice: 22000000,
    originalPrice: 30000000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Fahim Rahman",
    isActive:false
  }

]




app.get('/House', (req, res) => {
  res.send(resaleHouses)
})

const products = [
  

   {
    id: "H1001",
    img: "https://i.ibb.co.com/xKQz1Wh0/house.jpg",
    name: "Modern 2-Bedroom Apartment",
    resalePrice: 5500000, // in BDT
    originalPrice: 7500000, // in BDT
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Abdul Karim",
    isActive:true
  },
  {
    id: "H1002",
    img: "https://i.ibb.co.com/n81KYfrC/house2.jpg",
    name: "Spacious 4-Bedroom Villa",
    resalePrice: 12500000,
    originalPrice: 18000000,
    yearOfUse: 6,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Nasrin Jahan",
    isActive:true
  },
  {
    id: "H1003",
    img: "https://i.ibb.co.com/MDnSSr9n/house3.jpg",
    name: "Luxury Penthouse",
    resalePrice: 22000000,
    originalPrice: 30000000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Fahim Rahman",
    isActive:false
  },
  {
    id: "H1004",
    img: "https://i.ibb.co.com/Q39x5hvs/house4.jpg",
    name: "Luxury Penthouse",
    resalePrice: 22000000,
    originalPrice: 30000000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Fahim Rahman",
    isActive:true
  }, 
    {
    id: "B101",
    img: "https://i.ibb.co.com/dw8FCqJN/bed1.jpg",
    name: "King Size Wooden Bed",
    resalePrice: 18000,
    originalPrice: 35000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Mehedi Hasan",
    isActive:true
  },
  {
    id: "B102",
    img: "https://i.ibb.co.com/84d50PdZ/bed2.jpg",
    name: "Queen Size Metal Bed",
    resalePrice: 12000,
    originalPrice: 25000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Sharmin Akter",
    isActive:true
  },
  {
    id: "B103",
    img: "https://i.ibb.co.com/GQypPL1g/bed3.jpg",
    name: "Single Wooden Bed with Storage",
    resalePrice: 8000,
    originalPrice: 15000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Rakibul Islam",
    isActive:true
  },
  {
    id: "B104",
    img: "https://i.ibb.co.com/whF3pdq1/bed4.jpg",
    name: "Luxury King Size Bed with Headboard",
    resalePrice: 25000,
    originalPrice: 50000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Nusrat Jahan",
    isActive:true
  },
  {
    id: "B105",
    img: "https://i.ibb.co.com/Q78qT014/bed5.jpg",
    name: "Modern Platform Bed",
    resalePrice: 14000,
    originalPrice: 28000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Aminul Hoque",
    isActive:true
  },
  {
    id: "B106",
    img: "https://i.ibb.co.com/vCZZBs31/bed7.jpg",
    name: "Classic Double Bed",
    resalePrice: 10000,
    originalPrice: 20000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Fatema Khatun",
    isActive:true
  },
  {
    id: "B107",
    img: "https://i.ibb.co.com/WvQbXQ6P/bed8.jpg",
    name: "Luxury Wooden Bed with Mattress",
    resalePrice: 30000,
    originalPrice: 60000,
    yearOfUse: 5,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Habibur Rahman",
    isActive:true
  },
  {
    id: "B108",
    img: "https://i.ibb.co.com/ZpWxMmH3/bed6.jpg",
    name: "Modern Bunk Bed for Kids",
    resalePrice: 15000,
    originalPrice: 32000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Shamima Akter",
    isActive:true
  }
   ,
 
  {
    id: "BS101",
    img: "https://i.ibb.co.com/JRQp97Zx/Bookshelf.jpg",
    name: "Modern Wooden Bookshelf",
    resalePrice: 7000,
    originalPrice: 15000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Tanvir Ahmed",
    isActive:true
  },
  {
    id: "BS102",
    img: "https://i.ibb.co.com/qY6hwZkw/bookshelf2.jpg",
    name: "Metal Frame Bookshelf",
    resalePrice: 5000,
    originalPrice: 10000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Sadia Rahman",
    isActive:true
  },
  {
    id: "BS103",
    img: "https://i.ibb.co.com/1fSTVJbD/bookshelf3.jpg",
    name: "Classic Wooden Bookshelf with Glass Door",
    resalePrice: 9000,
    originalPrice: 18000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Arif Hossain",
    isActive:false
  },
  {
    id: "BS104",
    img: "https://i.ibb.co.com/vxPzfvYT/bookshelf4.jpg",
    name: "Small Corner Bookshelf",
    resalePrice: 3500,
    originalPrice: 8000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Moumita Akter",
    isActive:false
  },
  {
    id: "BS105",
    img: "https://i.ibb.co.com/9k3RJqRs/bookshelf5.jpg",
    name: "Luxury Wall-Mounted Bookshelf",
    resalePrice: 12000,
    originalPrice: 25000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Kamrul Hasan",
    isActive:true
  }
,
  
  {
    id: "OC101",
    img: "https://i.ibb.co.com/5WvdVVxK/Office-Chair.jpg",
    name: "Ergonomic Mesh Office Chair",
    resalePrice: 8500,
    originalPrice: 15000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Rafiqul Islam",
    isActive:true
  },
  {
    id: "OC102",
    img: "https://i.ibb.co.com/TBHXSM6x/office-chair2.jpg",
    name: "Leather Executive Chair",
    resalePrice: 12000,
    originalPrice: 22000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Farzana Haque",
    isActive:true
  },
  {
    id: "OC103",
    img: "https://i.ibb.co.com/h1yRm2N3/office-chair3.jpg",
    name: "Adjustable Swivel Chair",
    resalePrice: 6000,
    originalPrice: 12000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Mahmudul Hasan",
    isActive:true
  },
  {
    id: "OC104",
    img: "https://i.ibb.co.com/B5GzDJp0/office-chair4.jpg",
    name: "High Back Revolving Chair",
    resalePrice: 10000,
    originalPrice: 20000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Shamima Nasrin",
    isActive:true
    },

  
  {
    id: "SF101",
    img: "https://i.ibb.co.com/v64FFH4g/sofa1.jpg",
    name: "Modern 3-Seater Sofa",
    resalePrice: 25000,
    originalPrice: 50000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Jannat Ara",
    isActive:true
  },
  {
    id: "SF102",
    img: "https://i.ibb.co.com/ZCzJy2j/sofa2.jpg",
    name: "Leather Recliner Sofa",
    resalePrice: 40000,
    originalPrice: 85000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Masud Rana",
    isActive:true
  },
  {
    id:"SF104",
    img: "https://i.ibb.co.com/Hp7BjHJ0/sofa6.jpg",
    name: "Fabric Corner Sofa",
    resalePrice: 30000,
    originalPrice: 65000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Shamima Akter",
    isActive:false

  },
  {
    id: "SF104",
    img: "https://i.ibb.co.com/9HYhc3Dk/sofa4.jpg",
    name: "Wooden Frame Sofa Set",
    resalePrice: 18000,
    originalPrice: 40000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Imran Hossain",
    isActive:"true"
  },
  {
    id: "SF105",
    img: "https://i.ibb.co.com/jkVDN6Hb/sofa5.jpg",
    name: "Luxury L-Shaped Sofa",
    resalePrice: 45000,
    originalPrice: 95000,
    yearOfUse: 5,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Farzana Akter",
    isActive:"true"
  },
  {
    id: "SF106",
    img: "https://i.ibb.co.com/Hp7BjHJ0/sofa6.jpg",
    name: "Compact 2-Seater Sofa",
    resalePrice: 15000,
    originalPrice: 30000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Tanvir Rahman",
    isActive:"true"
  }
,
 
  {
    id: "TB101",
    img: "https://i.ibb.co.com/ZphrRrdn/table1.jpg",
    name: "Wooden Dining Table",
    resalePrice: 12000,
    originalPrice: 25000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Rahim Uddin",
    isActive:"true"

  },
  {
    id: "TB102",
    img: "https://i.ibb.co.com/cXSNY2Xz/table2.jpg",
    name: "Glass Top Coffee Table",
    resalePrice: 7000,
    originalPrice: 15000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Sadia Akter",
    isActive:"true"
  },
  {
    id: "TB103",
    img: "https://i.ibb.co.com/q3crBHj7/table3.jpg",
    name: "Office Study Table",
    resalePrice: 5000,
    originalPrice: 12000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Abdul Karim",
    isActive:"true"
  },
  {
    id: "TB104",
    img: "https://i.ibb.co.com/pBzXFfpP/table4.jpg",
    name: "Luxury Marble Center Table",
    resalePrice: 15000,
    originalPrice: 30000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Nazmul Hasan",
    isActive:"true"
  },
  {
    id: "TB105",
    img: "https://i.ibb.co.com/qMVf4VnB/table5.jpg",
    name: "Compact Folding Table",
    resalePrice: 3500,
    originalPrice: 8000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Shamima Nasrin",
    isActive:"true"
  }


  
];



app.get('/AllProduct', (req, res) => {
  res.send(products)
})

const table=[
    {
    id: "TB101",
    img: "https://i.ibb.co.com/ZphrRrdn/table1.jpg",
    name: "Wooden Dining Table",
    resalePrice: 12000,
    originalPrice: 25000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Rahim Uddin",
    isActive:true
  },
  {
    id: "TB102",
    img: "https://i.ibb.co.com/cXSNY2Xz/table2.jpg",
    name: "Glass Top Coffee Table",
    resalePrice: 7000,
    originalPrice: 15000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Sadia Akter",
    isActive:false
  },
  {
    id: "TB103",
    img: "https://i.ibb.co.com/q3crBHj7/table3.jpg",
    name: "Office Study Table",
    resalePrice: 5000,
    originalPrice: 12000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Abdul Karim",
    isActive:true
  },
  {
    id: "TB104",
    img: "https://i.ibb.co.com/pBzXFfpP/table4.jpg",
    name: "Luxury Marble Center Table",
    resalePrice: 15000,
    originalPrice: 30000,
    yearOfUse: 4,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Nazmul Hasan",
    isActive:true
  },
  {
    id: "TB105",
    img: "https://i.ibb.co.com/qMVf4VnB/table5.jpg",
    name: "Compact Folding Table",
    resalePrice: 3500,
    originalPrice: 8000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Shamima Nasrin",
    isActive:true
  }
]
app.get('/table', (req, res) => {
  res.send(table)
})





const bestSeller=[
    {
    id: "B101",
    img: "https://ibb.co.com/VpNDj0rj",
    name: "King Size Wooden Bed",
    resalePrice: 18000,
    originalPrice: 35000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Mehedi Hasan",
    isActive:true
  }, 
   {
    id: "B101",
    img: "https://ibb.co.com/mVXZrgwg",
    name: "King Size Wooden Bed",
    resalePrice: 18000,
    originalPrice: 35000,
    yearOfUse: 2,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Mehedi Hasan",
    isActive:true
  },
     {
    id: "BS104",
    img: "https://i.ibb.co.com/vxPzfvYT/bookshelf4.jpg",
    name: "Small Corner Bookshelf",
    resalePrice: 3500,
    originalPrice: 8000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Moumita Akter",
    isActive:true
  },
  {
    id: "BS105",
    img: "https://i.ibb.co.com/9k3RJqRs/bookshelf5.jpg",
    name: "Luxury Wall-Mounted Bookshelf",
    resalePrice: 12000,
    originalPrice: 25000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Kamrul Hasan",
    isActive:true
  },
   {
    id: "OC103",
    img: "https://i.ibb.co.com/h1yRm2N3/office-chair3.jpg",
    name: "Adjustable Swivel Chair",
    resalePrice: 6000,
    originalPrice: 12000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Mahmudul Hasan",
    isActive:true
  },
   {
    id: "SF106",
    img: "https://i.ibb.co.com/Hp7BjHJ0/sofa6.jpg",
    name: "Compact 2-Seater Sofa",
    resalePrice: 15000,
    originalPrice: 30000,
    yearOfUse: 1,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Tanvir Rahman",
    isActive:true
  },
    {
    id: "TB101",
    img: "https://i.ibb.co.com/ZphrRrdn/table1.jpg",
    name: "Wooden Dining Table",
    resalePrice: 12000,
    originalPrice: 25000,
    yearOfUse: 3,
    postedAt: new Date().toISOString(),
    description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis voluptates quod ipsum praesentium nemo, quidem officiis veritatis natus provident tempore obcaecati, nulla, consequatur facilis placeat vitae error ad id. Aut!",
    sellerName: "Rahim Uddin",
    isActive:true
  },
]
app.get('/BestSeller', (req, res) => {
  res.send(bestSeller)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
