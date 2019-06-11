describe('sample test 101', () => {
  it('works as expected', () => {
    const age = 100;
    expect(age).toEqual(100);
  });

  it('handle ranges', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  it('makes a list of dog names', () => {
    const dogs = ['beibei', 'tiantian'];
    expect(dogs).toContain('tiantian');
  });
});
