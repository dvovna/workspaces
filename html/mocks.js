$.mockjax({
    url: 'getOverview?*',
    responseTime: 750,
    dataType: 'json',
    contentType: 'text/json',
    response: function () {
        this.responseText = {
            imgLinks: {
                smallImgs: [
                    "../gfx/iphone.jpg", "../gfx/iphone.jpg", "../gfx/iphone.jpg",
                    "../gfx/iphone.jpg", "../gfx/iphone.jpg", "../gfx/iphone.jpg",
                    "../gfx/iphone.jpg", "../gfx/iphone.jpg", "../gfx/iphone.jpg",
                    "../gfx/iphone.jpg", "../gfx/iphone.jpg", "../gfx/iphone.jpg",
                    "../gfx/iphone.jpg", "../gfx/iphone.jpg", "../gfx/iphone.jpg",
                    "../gfx/iphone.jpg", "../gfx/iphone.jpg", "../gfx/iphone.jpg",
                    "../gfx/iphone.jpg", "../gfx/iphone.jpg", "../gfx/iphone.jpg"
                ],
                bigImgs: [
                    "../gfx/nokia.jpg", "../gfx/nokia1.jpg", "../gfx/nokia2.jpg", "../gfx/nokia.jpg",
                    "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg",
                    "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg",
                    "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg",
                    "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg",
                    "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg",
                    "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg", "../gfx/nokia.jpg"
                ]
            },
            itemData: {
                itemLink: "/item/1",
                itemTitle: "Asus K56CM Mock",
                minPrice: "200$",
                maxPrice: "400$",
                goDate: "2013, 3-ий квартал",
                summary: "На момент анонса Ascend P6 являлся одним из самых тонких смартфонов на рынке. Корпус аппарата выполнен из металла. Одна из первых имиджевых моделей китайского производителя.В роли процессора выступает платформа K3V2 – собственная разработка Huawei. Процессор имеет 4 вычислительных ядра с частотой 1.5ГГц. Экран немногим меньше 5 дюймов, при этом разрешение 720x1280 с технологией IPS. Фронтальная камера может похвастаться высоким разрешением 5 мегапикселей.Используется Android 4.2.2 с фирменной оболочкой Emotion UI.",
                detailsData: [
                    {
                        name: "Тип",
                        value: "Смартфон"
                    },
                    {
                        name: "Операционная система",
                        value: "Android"
                    }
                ]
            }
        };
    }
});