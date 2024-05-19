import "../styles/ShopPage.css";
import echpochmack from '../assets/svg/echpochmack.svg'
import skin_one from '../assets/svg/skin_one.svg'
import skin_two from '../assets/svg/skin_two.svg'
import skin_three from '../assets/svg/skin_three.svg'

export const ShopPage = () => {
  return (
    <div className="shoppage_wrapper">
      <div className="shop_menu">
        <h1 className="balance_title">Ваш баланс</h1>
        <div className="echpochmack_counter_shop">
          <p className="balance_counter">5</p>
          <img src={echpochmack} alt="echpochmack" className="price_pic"/>
        </div>
        {/* <a href="" className="my_skins_link">Мои скины</a>
        <div className="menu_filter">
          <p className="filter_title">Фильтр</p>
          <a href="/" className="filter_link">Женские</a>
          <a href="/" className="filter_link">Мужские</a>
        </div> */}
        {/* <button className="shop_confirm_btn">Применить</button> */}
      </div>

      <div className="shop_skins">
          <div className="skin_container">
            <div className="echpochmack_price">
              <p className="price">5</p>
              <img src={echpochmack} alt="echpochmack" className="price_pic" />
            </div>
            <img src={skin_one} alt="skin" className="skin_img" />
            <button className="buy_btn">Купить</button>
          </div>
          <div className="skin_container">
            <div className="echpochmack_price">
              <p className="price">5</p>
              <img src={echpochmack} alt="echpochmack"  className="price_pic"/>
            </div>
            <img src={skin_two} alt="skin" className="skin_img" />
            <button className="buy_btn">Купить</button>
          </div>
          <div className="skin_container">
            <div className="echpochmack_price">
              <p className="price">5</p>
              <img src={echpochmack} alt="echpochmack"  className="price_pic"/>
            </div>
            <img src={skin_three} alt="skin" className="skin_img" />
            <button className="buy_btn">Купить</button>
          </div>
        </div>
      </div>
  );
};
