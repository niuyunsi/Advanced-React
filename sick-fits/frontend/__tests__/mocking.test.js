function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(this.foods), 2000);
  });
};

describe('mocking learning', () => {
  it('mocks a reg function', () => {
    const fetchDogs = jest.fn();
    fetchDogs('tiantian');
    expect(fetchDogs).toHaveBeenCalled();
    expect(fetchDogs).toHaveBeenCalledWith('tiantian');
  });

  it('can create a person', () => {
    const me = new Person('nys', ['kp chicken', 'burger']);
    expect(me.name).toBe('nys');
  });

  it('can fetch foods', async () => {
    const me = new Person('nys', ['kp chicken', 'burger']);
    // mock
    me.fetchFavFoods = jest.fn().mockResolvedValue(['burger', 'ramen']);
    const favFoods = await me.fetchFavFoods();
    expect(favFoods).toContain('burger');
  });
});
