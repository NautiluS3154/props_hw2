import React from 'react';
import Header from './components/Header/Header'
import Main from './components/Main/MainA'
import Account from './components/Accounts/Account'
import './App.css';
// import Button from './components/Button/Btn';
import image1 from './assets/Main_img/img1.webp'
import image2 from './assets/Main_img/img2.jpg'
import image3 from './assets/Main_img/img3.jpg'
import image4 from './assets/Main_img/img4.jpg'
import image5 from './assets/Main_img/img5.jpg'
import image6 from './assets/Main_img/img6.jpg'
import image7 from './assets/Main_img/img7.jpg'
import image8 from './assets/Main_img/img8.jpg'
// ---------------------------------------------------------------
import image9 from './assets/Account_img/img1.png'
import image10 from './assets/Account_img/img2.png'
import image11 from './assets/Account_img/img3.jpg'
import image12 from './assets/Account_img/img4.png'
import image13 from './assets/Account_img/img5.jpg'
import image14 from './assets/Account_img/img6.png'

const products = [
  {
    id: 1,
    img: image1,
    title: 'Hollow Khight',
    desc: ' Игра является 2D-экшн-платформером с элементами метроидвании и приключенческой игры.',
    price: '10',
    
  },
  {
    id: 2,
    img: image2,
    title: 'Hades',
    desc: 'Это рогалик с видом сверху, в котором игроку предстоит сражаться с богами греческого пантеона, исследовать подземные локации и пытаться сбежать из ада.',
    price: '15',
    
  },
  {
    id: 3,
    img: image3,
    title: 'Red Dead Redemption 2',
    desc: 'Это эпическая приключенческая игра, является популярным представителем жанра открытого мира вестерна.',
    price: '60',
    
  },
  {
    id: 4,
    img: image4,
    title: 'The Witcher 3',
    desc: 'Это экшн-ролевая игра. Она является третьей частью серии игр Ведьмак, основанной на фэнтези-романах Анджея Сапковского.',
    price: '40',
    
  },
  {
    id: 5,
    img: image5,
    title: 'Terraria',
    desc: ' Это популярная 2D-песочница и платформер. В игре игроки исследуют и взаимодействуют с разнообразным окружающим миром, строят сооружения, сражаются с врагами и выполняют различные задания.',
    price: '12',
    
  },
  {
    id: 6,
    img: image6,
    title: 'Dead Cells',
    desc: 'Это экшн-платформер. В игре игроки берут на себя роль неумирающего воина, исследующего смертоносное подземелье, полное монстров и ловушек',
    price: '12',
    
  },
  {
    id: 7,
    img: image7,
    title: 'The Binding of Isaac',
    desc: 'В The Binding of Isaac игроки управляют маленьким мальчиком по имени Исаак, который пытается спастись от своей безумной матери. Он исследует подземелье, полное врагов и загадок, в стиле рогалика с процедурно генерируемыми уровнями.',
    price: '15',
    
  },
  {
    id: 8,
    img: image8,
    title: 'Dont Starve Together',
    desc: 'В Dont Starve Together игроки оказываются в сюрреалистическом и враждебном окружении, где им необходимо собирать ресурсы, строить укрытия, охотиться на еду, исследовать окружающую местность и бороться с опасными существами.',
    price: '12',
    
  }
]

const products1 = [
  {
    id: 9,
    pictures: image9,
    name1: 'Аккаунт Epic Games',
    price1: '19',
    text1: 'Здесь могут быть такие игры как fortnite, forza horizon, dishonored и т.д.',
    
  },
  {
    id: 10,
    pictures: image10,
    name1: 'Аккаунт Origin',
    price1: '15',
    text1: 'Здесь могут быть такие игры как fifa, PvZ, NBA и т.д.',
    
  },
  {
    id: 11,
    pictures: image11,
    name1: 'Аккаунт Playstation',
    price1: '17',
    text1: 'Здесь могут быть такие игры как Spider-man, Last of us, God of War и т.д.',
    
  },
  {
    id: 12,
    pictures: image12,
    name1: 'Аккаунт Xbox',
    price1: '22',
    text1: 'Здесь могут быть такие игры как Halo, Mortal Kombat, Minecraft и т.д.',
    
  },
  {
    id: 13,
    pictures: image13,
    name1: 'Аккаунт Steam',
    price1: '23',
    text1: 'Здесь могут быть такие игры как RDR2, Cyberpunk 2077, The Witcher и т.д.',
    
  },
  {
    id: 14,
    pictures: image14,
    name1: 'Аккаунт Riot',
    price1: '16',
    text1: 'Здесь могут быть такие игры как Valorant, League of Legends, Overwatch и т.д.',
    
  }
]

function App() {
  return (
   <div className='app'>
    <Header />
    <main>
    <div className='main'>
     {products.map(product => (
      <Main
       key={product.id}
       image={product.img}
       title={product.title}
       desc={product.desc}
       price={product.price}
      />
     ))}
    </div>
    <div className="divider"></div>
    <div className='acc-main'>
    {products1.map(product1 => (
      <Account
       key={product1.id}
       pic={product1.pictures}
       name1={product1.name1}
       price1={product1.price1}
       text1={product1.text1}
      />
     ))}
    </div>
    </main>
   </div>
  )
 }

export default App;
