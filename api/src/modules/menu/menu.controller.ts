import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

@Controller()
export class MenuController {
  @Get('stores/:storeId/menu')
  getStoreMenu(@Param('storeId') storeId: string) {
    return {
      storeId,
      categories: [],
      items: [],
      generatedAt: new Date().toISOString()
    };
  }

  @Patch('admin/menu/items/:itemId/availability')
  updateAvailability(
    @Param('itemId') itemId: string,
    @Body() body: { isAvailable: boolean }
  ) {
    return {
      itemId,
      isAvailable: body.isAvailable,
      eventType: 'menu.availability_changed'
    };
  }
}
