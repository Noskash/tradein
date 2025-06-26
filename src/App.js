import './App.css';
import Header from './assests/header/header';
import Button from './assests/button/button';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем, что Telegram WebApp SDK загрузился
    if (window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand();
      console.log('Telegram user data:', tg.initDataUnsafe?.user); // Для отладки
      setUser(tg.initDataUnsafe?.user || null);
      setIsLoading(false);
    } else {
      console.log('Telegram WebApp not detected');
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <Header 
        logo={user?.photo_url || 'https://via.placeholder.com/50'} 
        name="yasin" 
        balance="100" 
        isRegistered={false}
      />
      <div className="MainButtons">
        <Button text="Магазин" />
        <Button text="Профиль" />
      </div>
    </div>
  );
}

export default App;