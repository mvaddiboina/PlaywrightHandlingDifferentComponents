import { test, expect } from '@playwright/test';

test('Test 1', async () => {

      console.log("I am in Test case 1");

});

test('Test 2', async () => {
      console.log("I am in Test case 2");

});

test.fixme('Test 3', async () => {
      console.log("I am in Test case 3");
      expect(2).toBe(1);

});
