import { test, expect } from "@playwright/test"
import * as fs from 'fs';


test("Create a new booking and verify", async ({ request }) => {

    const rawFileData = fs.readFileSync("booking_post.json", "utf-8");

    const userData = JSON.parse(rawFileData);


    const postResponse = await request.post("https://restful-booker.herokuapp.com/booking",
        { data: userData });

    expect(postResponse.status()).toBe(200);

    let jsonResponse = await postResponse.json();

    console.log(postResponse);

    expect(jsonResponse.booking).toMatchObject({
        "firstname": "TestJim6238",
        "lastname": "TestBrown6238",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    })

});