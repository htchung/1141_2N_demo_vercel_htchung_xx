import { useEffect, useState } from 'react';
import Product_xx from '../../components/midterm/Product_xx';
import Wrapper from '../../assets/wrappers/midterm/Shop_xx';

const api_url = 'http://localhost:5000/api/shop_xx/womens';

const P3_NodePage_xx = () => {
  const [shop_xx, setShop_xx] = useState([]);

  const fetchProductsFromNode = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('shop_xx data', data);
      setShop_xx(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductsFromNode();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3> P3_NodePage_xx, </h3>
          <p className='text-center text-[16px]'> Hsingtai Chung, 123456789 </p>
        </div>
        <div className='collection-page'>
          <h1 className='title'>Womens</h1>
          <div className='items'>
            {shop_xx?.map((item) => {
              const { id, img_url, name, price } = item;
              return (
                <Product_xx
                  key={id}
                  img_url={img_url}
                  name={name}
                  price={price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P3_NodePage_xx;
