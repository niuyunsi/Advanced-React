import { mount } from 'enzyme';
import wait from 'waait';
import Nav from '../components/Nav';
import { CURRENT_USER_QUERY } from '../components/User';
import { MockedProvider } from 'react-apollo/test-utils';
import { fakeUser, fakeCartItem } from '../lib/testUtils';
import toJson from 'enzyme-to-json';

const notSignedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: null } }
  }
];

const signedInMocks = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: fakeUser() } }
  }
];

const signedInMocksWithCartItems = [
  {
    request: { query: CURRENT_USER_QUERY },
    result: { data: { me: { ...fakeUser(), cart: [fakeCartItem(), fakeCartItem(), fakeCartItem()] } } }
  }
];

describe('<Nav/>', () => {
  it('renders a minimal nav when signed out', async () => {
    const wrapper = mount(
      <MockedProvider mocks={notSignedInMocks}>
        <Nav />
      </MockedProvider>
    );
    // console.log(wrapper.debug());
    const nav = wrapper.find('ul[data-test="nav"]');
    // console.log(nav.debug());
    expect(toJson(Nav)).toMatchSnapshot();
  });

  it('renders full nav when signed in', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocks}>
        <Nav />
      </MockedProvider>
    );
    // console.log(wrapper.debug());
    await wait();
    wrapper.update();
    const nav = wrapper.find('ul[data-test="nav"]');
    // console.log(nav.debug());
    // expect(toJson(Nav)).toMatchSnapshot();
    expect(nav.children().length).toBe(6);
    expect(nav.text()).toContain('Sign Out');
  });

  it('renders the amount of items in the cart', async () => {
    const wrapper = mount(
      <MockedProvider mocks={signedInMocksWithCartItems}>
        <Nav />
      </MockedProvider>
    );
    // console.log(wrapper.debug());
    await wait();
    wrapper.update();
    const nav = wrapper.find('ul[data-test="nav"]');
    const count = nav.find('div.count');
    console.log(count.debug());
    expect(toJson(count)).toMatchSnapshot();
  });
});
