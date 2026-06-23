export declare class MenuController {
    getStoreMenu(storeId: string): {
        storeId: string;
        categories: never[];
        items: never[];
        generatedAt: string;
    };
    updateAvailability(itemId: string, body: {
        isAvailable: boolean;
    }): {
        itemId: string;
        isAvailable: boolean;
        eventType: string;
    };
}
