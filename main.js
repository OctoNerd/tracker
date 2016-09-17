var wardrobe = {
	closet: [],
	addCategory: function(categoryName) {
		this.closet.push(
			categoryName = {
			items: [],
			categoryName: categoryName,
			numberOfItems: 0,
		});
	},
	addItem: function(categoryPosition, itemId, itemColor, itemSize, itemBrand) {
		this.closet[categoryPosition].items.push({
			itemId: itemId,
			itemColor: itemColor,
			itemSize: itemSize,
			itemBrand: itemBrand
		});
	}
}

var view = {
	displayCloset: function() {
		console.log(wardrobe.closet);
	}
}

wardrobe.addCategory("t-shirts");
wardrobe.addCategory("pants");
wardrobe.addItem(1, 1, "gray", "31x32", "H&M");
wardrobe.addItem(1, 2, "blue", "31x32", "Gap");
wardrobe.addItem(0, 3, "white", "medium", "Value-Village");
wardrobe.addItem(0, 4, "red", "medium", "Goodwill");
wardrobe.addItem(0, 5, "green", "small", "unknown");