
import { Inngest } from "inngest";

export const inngest = new Inngest({  //initialize a client identified as "ticketing-system".
    id : "ticketing-system",
    name: "SmartTicket AI",
    signingKey: process.env.INNGEST_SIGNING_KEY,
});