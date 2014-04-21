$.mockjax({
    url: 'getOverview?*',
    responseTime: 750,
    dataType: 'json',
    contentType: 'text/json',
    response: function () {
        this.responseText = {
            imgLinks: {
                smallImgs: [
                    "../gfx/small/1.jpg", "../gfx/small/2.jpg", "../gfx/small/3.jpg",
                    "../gfx/small/4.jpg", "../gfx/small/5.jpg", "../gfx/small/6.jpg",
                    "../gfx/small/7.jpg"
                ],
                bigImgs: [
                    "../gfx/big/1.jpg", "../gfx/big/2.jpg", "../gfx/big/3.jpg", "../gfx/big/4.jpg",
                    "../gfx/big/5.jpg", "../gfx/big/6.jpg", "../gfx/big/7.jpg"
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

$.mockjax({
    url: '/test/*',
    responseTime: 1000,
    response: function () {
        this.responseText = JSON.stringify([
            {
                fieldName: "",
                type: "picture",
                value: "../gfx/small/1.jpg",
                otherData: "",
                evalRule: 0
            },
            {
                fieldName: "Цена",
                type: "price",
                value: new Date().getTime(),
                otherData: "$",
                evalRule: "MIN"
            },
            {
                fieldName: "Характеристики процессора",
                type: "processor",
                value: new Date().getDay() + new Date().getTime(),
                otherData: "МГц",
                evalRule: "MAX"
            },
            {
                fieldName: "Число ядер",
                type: "yadra:)",
                value: new Date().getTime() + new Date().getTime() - Math.floor(Math.random()*10000),
                otherData: "МГц",
                evalRule: "MAX"
            }
        ]);
    }
});