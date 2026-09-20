import { test, expect } from '@playwright/test';


test.describe("Login test cases", async () => {

    test("@smoke Login Test1", async () => {

        console.log("I am in login test 1");

    })

    test("@regression Login Test2", async () => {

        console.log("I am in login test 2");

    })
})


test.describe("Registration test cases", async () => {

    test("@smoke Registration Test1", async () => {

        console.log("I am in Registration test 1");

    })

    test("@regression Registration Test2", async () => {

        console.log("I am in Registration test 2");

    })
})