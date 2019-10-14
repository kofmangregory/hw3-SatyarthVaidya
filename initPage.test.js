const {
 Builder, By, Key, until 
} = require('selenium-webdriver');

require('selenium-webdriver/firefox');

let driver;
let returnedText;
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
  await driver.findElement(By.id('city')).sendKeys('Douala', Key.RETURN);
  await driver.findElement(By.id('btn1')).click();
  await driver.wait(until.elementLocated(By.id('city0')), 100000);

  await driver.findElement(By.id('city')).sendKeys('', Key.RETURN);
  await driver.findElement(By.id('city')).sendKeys('Douala', Key.RETURN);
  await driver.findElement(By.id('btn1')).click();
  await driver.wait(until.elementLocated(By.id('city0')), 100000);
  await driver.findElement(By.id('city')).sendKeys('', Key.RETURN);
  await driver.findElement(By.id('city')).sendKeys('Douala', Key.RETURN);
  await driver.findElement(By.id('btn1')).click();
  await driver.wait(until.elementLocated(By.id('city0')), 100000);
  await driver.findElement(By.id('city')).sendKeys('', Key.RETURN);
  await driver.findElement(By.id('city')).sendKeys('Douala', Key.RETURN);
  await driver.findElement(By.id('btn1')).click();
  
  await driver.wait(until.elementLocated(By.id('city0')), 100000);
  await driver.findElement(By.id('city')).sendKeys('', Key.RETURN);
  await driver.findElement(By.id('city')).sendKeys('Douala', Key.RETURN);
  await driver.findElement(By.id('btn1')).click();

  return driver.findElement(By.id('div1'));
}

it('initialize the driver and fill up page', async () => {
  element = await mockUserAction();
  console.log('hIIIII');
  await element.getText().then((text) => returnedText = text);
});

it('test element text after selenium automation', () => {
  expect(returnedText).toEqual('Douala thunderstorm298.15K');
});

it('test element text after selenium automation', () => {
  expect(returnedText).toEqual('ahmedabad haze301.15K ');
});

it('test element text after selenium automation', () => {
  expect(returnedText).toEqual('surat smoke302.15K ');
});
