import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HomeService from 'App/Services/home';

export default class HomeController {
    public async index(ctx: HttpContextContract) {
        return await ctx.response.status(200).json({
            status:200,
            message:"API HOME",
        });
    }

    public async HomeFreed(ctx: HttpContextContract) {
        const data = await new HomeService().FindData()
        if(!data){
            return await ctx.response.internalServerError({
                message:"Not Fund Data",
            });
        }
        return await ctx.response.status(200).json({
            status:200,
            message:"API HomeFreed",
            data: data
        });
    }
}
