const { By } = require('selenium-webdriver');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome')

describe("App Component", () => {
  let driver;
  beforeAll(async() => {
    const options = new chrome.Options();
    options.addArguments('headless');
    driver = await new webdriver.Builder().forBrowser(webdriver.Browser.CHROME).setChromeOptions(options).build();
    await driver.navigate().to("http://localhost:5173");
  })

  afterAll(async() => {
    await driver.close();
    await driver.quit();
  })

  it("should fetch the posts", async() => {
    await driver.wait(async() => {
      const posts = await driver.findElements(By.css("li"));
      return posts.length !==0;
    })
    const posts = await driver.findElements(By.css("li"));
    expect(posts.length).toBe(1)
    expect(await posts[0].getText()).toBe("json-serverss");
    const ul = await driver.findElements(By.css("ul"));
    expect(ul.length).toBe(1)
  })
  it("should fetch the posts", async() => {
    await driver.wait(async() => {
      const posts = await driver.findElements(By.css("li"));
      return posts.length !==0;
    })
    const posts = await driver.findElements(By.css("li"));
    expect(posts.length).toBe(1)
    expect(await posts[0].getText()).toBe("json-server");
    const ul = await driver.findElements(By.css("ul"));
    expect(ul.length).toBe(1)
  })
  it("should fetch the posts", async() => {
    await driver.wait(async() => {
      const posts = await driver.findElements(By.css("li"));
      return posts.length !==0;
    })
    const posts = await driver.findElements(By.css("li"));
    expect(posts.length).toBe(1)
    expect(await posts[0].getText()).toBe("json-server");
    const ul = await driver.findElements(By.css("ul"));
    expect(ul.length).toBe(1)
  })
})
