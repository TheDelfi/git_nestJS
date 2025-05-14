import { Controller, Get, Render } from '@nestjs/common';

@Controller('')
export class MainPageController {

    @Get()
    @Render('main')
    getMain_Page(){
        return {}
    }
}
