import { test, expect } from "@playwright/test"

test("Dlete booking", async ({ request }) => {


    const authResponse = await request.post("https://restful-booker.herokuapp.com/auth", {
        data: {
            username: "admin",
            password: "password123"
        }
    })

    const token = await authResponse.json();

    console.log(token);


    const deleteResponse = await request.delete("https://restful-booker.herokuapp.com/booking/201",
        {
            headers: {
                Cookie: `token=${token.token}`
            }
        });

    expect(deleteResponse.status()).toBe(201);

});