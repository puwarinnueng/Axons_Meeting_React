import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
const axios = require('axios')

export default class MissionsController {
    public async index(ctx: HttpContextContract) {
        return await ctx.response.status(200).json({
            status:200,
            message:"API Missions",
        });
    }


    // public async getall(ctx: HttpContextContract) {
    public async getall({ response }: HttpContextContract) {
        // const endpoint = `https://pokeapi.co/api/v2/pokemon/ditto`
        const endpoint = `https://date.nager.at/api/v2/publicholidays/2020/US`
        const results = await axios.get(endpoint)
        const data = results.data
        // console.log('results',data)
        // return await ctx.response.status(200).json({
        //     status:200,
        //     message:"API Missions",
        //     data: data
        // });

        return response.status(200).json({
            status: 200,
            message: "API Missions",
            data: data
        })

        // return response.json({
        //     data: {
        //         data: data
        //     }
        // })
    }
}
