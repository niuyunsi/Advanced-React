import PleaseSignin from '../components/PleaseSignin';
import OrderList from '../components/OrderList';

const OrderListPage = props => (
  <div>
    <PleaseSignin>
      <OrderList />
    </PleaseSignin>
  </div>
);

export default OrderListPage;
