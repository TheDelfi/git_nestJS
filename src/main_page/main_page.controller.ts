import { Body, Controller, Get, Post, Render } from '@nestjs/common';

@Controller('')
export class MainPageController {

    @Get()
    @Render('main')
    getMain_Page(){
        return {}
    }


    @Post('myName')
    mayName(@Body() body: {name:string}){
        console.log(body.name ? body.name : 'no_name')
    }
}
