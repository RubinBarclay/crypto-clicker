import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Wallet from '../Wallet/Wallet';
import Power from '../Power/Power';
import Shop from '../Shop/Shop';
import styles from './Tabmenu.module.css';

const Tabmenu = () => {
  const [tab, setTab] = useState();
  const [shopNotification, setShopNotification] = useState();
  const { funds, items } = useSelector(state => ({ 
    funds: state.wallet.funds, 
    items: state.wallet.items 
  }))

  useEffect(() => {
    setShopNotification(items
      .filter(listing => ( listing.price <= funds))
      .length);
  }, [funds, items]);

  const displayTab = () => {
    switch (tab) {
      case 'Wallet':
        return <Wallet tabbed={styles.Wallet} />;
      case 'Power':
        return <Power tabbed={styles.Power} />;
      case 'Shop':
        return <Shop tabbed={styles.Shop} />;
      default:
        return <Wallet tabbed={styles.Wallet} />;
    }
  }

  return (
    <div className={`${styles.Tabmenu} mobileOnly`}>
      <ul>
        <li onClick={() => setTab('Wallet')}>Wallet</li>
        <li onClick={() => setTab('Power')}>Power</li>
        <li onClick={() => setTab('Shop')}>Shop
          { shopNotification ? <span>{shopNotification}</span> : null }
        </li>
      </ul>

      { displayTab() }
    </div>
  )
}

export default Tabmenu;
