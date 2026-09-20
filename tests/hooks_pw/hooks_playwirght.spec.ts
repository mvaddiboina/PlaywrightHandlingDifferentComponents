import { test, expect } from '@playwright/test';

test.beforeAll("before all test case", async () => {
      console.log("----before all---");

})

test.afterAll("after all test case", async () => {
      console.log("----after all---");

})
test.beforeEach("before each test case", async () => {
      console.log("----before test---");

})

test.afterEach("before each test case", async () => {
      console.log("----after test---");

})

test('Test 1', async () => {

      console.log("I am in Test case 1");

});

test('Test 2', async () => {
      console.log("I am in Test case 2");

});


test('Test 3', async () => {
      console.log("I am in Test case 3");

});
