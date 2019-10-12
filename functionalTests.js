const driver;
const returnedText;
const {
  Builder, By, Key, until 
} = require('selenium-webdriver');

require('selenium-webdriver/firefox');

beforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

afterAll(async () => { 
    await driver.quit();
});
async function mockUserAction() { 
    driver.wait(until.urlIs('http://127.0.0.1:5500/main_hw3.html')); 
    await driver.get('http://127.0.0.1:5500/main_hw3.html');
    await driver.findElement(By.id('city')).sendKeys('', Key.RETURN);
    await driver.findElement(By.id('city')).sendKeys('Philadelphia', Key.RETURN);
    await driver.findElement(By.id('btn1')).click();
    await driver.wait(until.elementLocated(By.className('result')), 20000);
    return await driver.findElement(By.id('div')); 
}



it('initialize the driver and fill up page', async () => {
    element = await mockUserAction();
    await element.getText().then(text => returnedText = text);    
});

  
it('test element text after selenium automation', () => {   
    expect(element).not.toBeNull();
    expect(returnedText).toEqual("C");
});
  