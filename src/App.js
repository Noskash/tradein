import './App.css';
import './assests/header/header.css';
import Header from './assests/header/header';
import Button from './assests/button/button';
import { useEffect , useState } from 'react';
function App() {
  const [user , setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg){
      tg.expand();
      setUser(tg.initDataUnsafe?.user);
    }
    else{
      return (<div>Загрузка..</div>);
    }
  } , []);

  return (
    <div>
      <Header logo= {user?.photo_url ?? 'https://via.placeholder.com/50'} name="yasin" balance="100" isRegistered={false}/>
      <div className="MainButtons">
        <Button text="Магазин" />
        <Button text="Профиль" />
      </div>
    </div>
  );
}

export default App;
