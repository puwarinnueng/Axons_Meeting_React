/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

// import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

import Route from "@ioc:Adonis/Core/Route";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import HomeController from "App/Controllers/Http/HomeController";
import MissionsController from "App/Controllers/Http/MissionsController";
import ChatRoomsController from "App/Controllers/Http/ChatRoomsController";

// Route API
Route.group(() => {

  Route.group(() => {
    Route.get("/", async (ctx) => {
      return new HomeController().index(ctx);
    });
    Route.get("/HomeFreed", async (ctx) => {
      return new HomeController().HomeFreed(ctx);
    });
  }).prefix("/home");

  //mission
  Route.group(() => {
    Route.get("/", async (ctx) => {
      return new MissionsController().index(ctx);
    });
    Route.get("/getall", async (ctx) => {
      return new MissionsController().getall(ctx);
    });
  }).prefix("/mission");

  //comments
  Route.group(() => {
    Route.get("/", async (ctx) => {
      return new MissionsController().index(ctx);
    });
    Route.get("/getall", async (ctx) => {
      return new MissionsController().getall(ctx);
    });
  }).prefix("/comments");

  Route.group(() => {
    Route.post("/post", async (ctx) => {
      return new ChatRoomsController().index(ctx);
    });
    // Route.post('/', async ({ request }) => {
    //   request.body()
    //   console.log("request.body()" , request.body())
    // })
  }).prefix("/chatroom");

}).prefix("/api");

// Other Routes...
Route.get("*", async ({ view }: HttpContextContract) => {
  return view.render("index");
}).as("not_found");
