let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    await page.setDefaultTimeout(6000);
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title2 = await page.title();
    expect(title2).toEqual(
      "GitHub for teams · Build like the best teams on the planet · GitHub"
    );
  });

  test("The first link attribute", async () => {
    await page.setDefaultTimeout(6000);
    const actual = await page.$eval("a", (link) => link.getAttribute("href"));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    await page.setDefaultTimeout(6000);
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, (link) => link.textContent);
    expect(actual).toContain("Get started with Team");
  });
});

describe("Github page Document tests", () => {
  beforeEach(async () => {
    await page.goto("https://docs.github.com/en");
  });

  test("The h1 main content'", async () => {
    await page.setDefaultTimeout(6000);
    const firstLink = await page.$("main a");
    await firstLink.click();
    await page.waitForSelector("h1");
    const title = await page.title();
    console.log(title);
    expect(title).toEqual("GitHub Docs");
  });

  test("The first main link attribute", async () => {
    await page.setDefaultTimeout(6000);
    const actual = await page.$eval("main a", (link) =>
      link.getAttribute("href")
    );
    expect(actual).toEqual("/en/get-started");
  });

  describe("Github page Skills tests", () => {
    beforeEach(async () => {
      await page.goto("https://skills.github.com/");
    });

    test("The h1 main content", async () => {
      await page.setDefaultTimeout(6000);
      const firstLink = await page.$("main a");
      await firstLink.click();
      await page.waitForSelector("h1");
      const title = await page.title();
      console.log(title);
      expect(title).toEqual(
        "GitHub - skills/introduction-to-github: Get started using GitHub in less than an hour."
      );
    });

    describe("Github page Premium Support tests", () => {
      beforeEach(async () => {
        await page.goto("https://github.com/premium-support");
      });

      test("The h1 main content", async () => {
        await page.setDefaultTimeout(6000);
        const firstLink = await page.$("main a");
        await firstLink.click();
        await page.waitForSelector("h1");
        const title = await page.title();
        console.log(title);
        expect(title).toEqual("GitHub Premium Support · GitHub");
      });
    });
  });
});
