import { test, expect } from "@playwright/test"

test("Search data by Query params", async ({ request }) => {

    const getBookingIdsResponse = await request.get("https://restful-booker.herokuapp.com/booking",
        {
            params: {
                firstname: 'Mary'
            }
        }
    );

     expect(getBookingIdsResponse.status()).toBe(200);

    let jsonResponse =await getBookingIdsResponse.json();
    console.log(jsonResponse);

});