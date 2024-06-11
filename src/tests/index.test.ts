import { describe, it, expect, beforeEach } from "vitest"
import { app } from ".."
import request from "supertest";
import reset from "./helpers/reset-db"

describe("SUM" ,()=>{

    // runs before each it of testcase
    beforeEach(()=>{
        console.log("reseting database!");
        reset()
        console.log("database is resested")
    })

    it("sum of 2 valid int number", async()=>{
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })

        console.log(res.body)
        expect(res.status).toBe(200);
        expect(res.body).toEqual({answer: 3, id: expect.any(Number)})
    })

    it("sum of 2 valid int number", async()=>{
        const res = await request(app).post('/sum').send({
            a: 4,
            b: 5
        })

        console.log(res.body)
        expect(res.status).toBe(200);
        expect(res.body).toEqual({answer: 9, id: expect.any(Number)})
    })
})