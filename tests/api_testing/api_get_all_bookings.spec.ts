import { test, expect } from "@playwright/test"

test("Get all booking ids and verify", async({request}) => {

    const getBookingIdsResponse = await request.get("https://restful-booker.herokuapp.com/booking");

    console.log(getBookingIdsResponse);

});