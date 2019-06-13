import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import ItemComponent from '../components/Item';

const fakeItem = {
  id: 'ABC123',
  title: 'A Cool Item',
  price: 4000,
  description: 'This item is really cool',
  image: 'dog.jpg',
  largeImage: 'largedog.jpg'
};

// describe('<Item/>', () => {
//   it('renders title and price tag properly', () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     expect(wrapper.find('Title a').text()).toBe(fakeItem.title);
//     const PriceTag = wrapper.find('PriceTag');
//     expect(PriceTag.children().text()).toBe('$50');
//   });

//   it('renders image properly', () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const img = wrapper.find('img');
//     expect(img.props().src).toBe(fakeItem.image);
//     expect(img.props().alt).toBe(fakeItem.title);
//   });

//   it('renders buttons properly', () => {
//     const wrapper = shallow(<ItemComponent item={fakeItem} />);
//     const buttonList = wrapper.find('.buttonList');
//     expect(buttonList.children()).toHaveLength(3);
//     expect(buttonList.find('Link').exists()).toBeTruthy();
//     expect(buttonList.find('AddToCart').exists()).toBeTruthy();
//     expect(buttonList.find('DeleteItem').exists()).toBeTruthy();
//   });
// });

describe('<Item/>', () => {
  it('renders and matches the snapshot', () => {
    // const price = '$50.36';
    // expect(price).toMatchSnapshot();
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
