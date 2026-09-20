import { test, expect } from "@playwright/test"

test("create and updated booking", async ({ request }) => {


    const authResponse = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: {
            username: "admin",
            password: "password123"
        }
    })

    const token = await authResponse.json();

    console.log(token);



    let updateBooking = {
        "firstname": "JimTest",
        "lastname": "TestBrown",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "checkin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "Breakfast"
    }

    const putResponse = await request.put("https://restful-booker.herokuapp.com/booking/2151",
        {
            headers: {
                Cookie:`token=${token.token}`,
                "Content-type": "application/json",
                Accept: "application/json"
            },

            data: updateBooking
        });

    expect(putResponse.status()).toBe(200);

    let jsonResponse = await putResponse.json();

    console.log(jsonResponse);

      expect(jsonResponse).toMatchObject(updateBooking);

});