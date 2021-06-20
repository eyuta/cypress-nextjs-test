context("local test", () => {
  it("should perform basic google search", () => {
    cy.visit("https://google.com");
    cy.get('[name="q"]').type("subscribe").type("{enter}");
  });
});
describe('My First Test', () => {
  it('Match!', () => {
    expect(true).to.equal(true);
  });
  it('Does not match!', () => {
    expect(true).to.equal(false);
  });
});
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})
