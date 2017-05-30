module.exports = {
    "displayTitle": {
        "type": "Text",
        "label": "Display Name",
        "help": "",
        "conditions": ["required"]
    },
    "_tiles": {
        "type": "Array",
        "label": "Tiles",
        "itemType": "Object",
        "addButtonText": "Add New Tile",
        "deleteButtonText": "Delete Tile",
        "itemTextAttribute": "name",
        "defaultPrefix": "Tile",
        "subSchema": {
            "title": {
                "type": "Text",
                "label": "Title"
            },
            "displayTitle": {
                "type": "Text",
                "label": "Display Title"
            },
            "description": {
                "type": "Text",
                "label": "Description"
            },
            "_poster": {
                "type": "AssetUpload:Image:Small",
                "label": "Poster Image"
            },
            "_link": {
                "type": "Text",
                "label": "Link"
            },
            "_shouldOpenNewWindow": {
                "type": "Boolean",
                "label": "Open Link in New Window?"
            },
            "_isPublished": {
                "type": "Boolean",
                "label": "Is Published?"
            }
        }
    }
}