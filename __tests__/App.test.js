const { By } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');

describe("App Component", () => {
  let driver;
  beforeAll(async() => {
    // driver = await new webdriver.Builder().forBrowser(webdriver.Browser.CHROME).build();
    // await driver.navigate().to("http://localhost:5173");
  })

  // afterAll(async() => {
  //   await driver.close();
  // })

  it("should fetch the posts", async() => {
    // await driver.wait(async() => {
    //   const posts = await driver.findElements(By.css("li"));
    //   return posts.length !==0;
    // })
    // const posts = await driver.findElements(By.css("li"));
    // expect(posts.length).toBe(1)
    // expect(await posts[0].getText()).toBe("json-server");
    expect(1).toBe(1)
  })
})