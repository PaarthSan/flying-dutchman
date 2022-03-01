/*
 * File: InventoryController.js
 *
 * Controller that is responsible for everything around managing the inventory: getting inventory items, set items to hide from menu, etc.
 * An object has to be created first with the information, which inventory the controller should use as the database (`barInventory` or `vipInventory`).
 *
 * Author: David Kopp
 * -----
 * Last Modified: Tuesday, 1st March 2022
 * Modified By: David Kopp (mail@davidkopp.de>)
 */

(function ($, exports) {
    var InventoryController = function (inventoryName) {
        this.inventoryName = inventoryName;

        /**
         * Get all inventory items.
         *
         * @returns {Array} Array with all inventory items
         */
        this.getInventory = function () {
            return DatabaseAPI.Inventory.getInventory(this.inventoryName);
        };

        /**
         * Get the inventory item for a specific beverage.
         *
         * @param {string} beverageNr The beverage number.
         * @returns {object} Inventory item if beverage number exists in
         *   inventory. Otherwise `undefined`.
         */
        this.getInventoryItemByBeverageNr = function (beverageNr) {
            return DatabaseAPI.Inventory.getInventoryItemByBeverageNr(
                this.inventoryName,
                beverageNr
            );
        };

        /**
         * Updates the number in stock for a specific beverage, if the number is valid.
         *
         * @param {string} beverageNr The beverage number
         * @param {number} newQuantity The new quantity
         * @returns {object} The updated inventory item, or `null` if there was an error.
         */
        this.updateNumberInStockForBeverage = function (
            beverageNr,
            newQuantity
        ) {
            if (typeof newQuantity !== "number" || newQuantity < 0) {
                return null;
            }

            const result = DatabaseAPI.Inventory.updateNumberInStockForBeverage(
                this.inventoryName,
                beverageNr,
                newQuantity
            );

            if (!result) {
                return null;
            }
            return result;
        };
    };

    exports.InventoryController = InventoryController;
})(jQuery, window);