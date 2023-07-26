import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class ChatRoomsController {
  public async index({ request }: HttpContextContract) {
    // return await ctx.response.status(200).json({
    //     status:200,
    //     message:"API Missions",
    // });
    request.body();
    console.log("request.body()", request.body());
  }
}
