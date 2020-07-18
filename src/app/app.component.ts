import { Component } from '@angular/core';
import { NestedArrayComponent } from 'projects/ngx-dynamic-table/src/lib/dynamic-table/renders/nested-array/nested-array.component';
import { TableItemRender } from 'projects/ngx-dynamic-table/src/lib/dynamic-table/interfaces/TableItemRender';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-dynamic-table';

  columns = [
    {dataField:'urlImg',columnTitle:'#',columnRender: this.renderImg },
    {dataField:'productId',columnTitle:'Id',},
    {dataField:'name',columnTitle:'Nombre'},
    {dataField:'description',columnTitle:'Description'},
    {dataField:'collections',columnTitle:'SKU' ,
      columnRender:{
        render: NestedArrayComponent,
        options:{
          'columns':['collectionId','name'],
          'headers':['ID','Nombre']
        }
      }
    },
    {dataField:'variants',columnTitle:'SKU' ,
      columnRender:{
        render: NestedArrayComponent,
        options:{
          'columns':['sku','price','stock']
        }
      }
    },
    {dataField:'variants[0].price',columnTitle:'Price'},
    {dataField:'stock',columnTitle:'Stock'},
    {dataField:'color',columnTitle:'Color'},
    {dataField:'link',columnTitle:'Ver en Tienda', 
      columnRender:(e:TableItemRender)=>{return '<a href="'+e.value+'">Ver</a>'}
    }
  ]
  data = [
    {
      "_id": {
        "$oid": "5f0520d45c08683249ee4f28"
      },
      "productId": 598,
      "collections": [
        {
          "collectionId": 42,
          "name": "Audífonos Alámbricos"
        }
      ],
      "description": "",
      "name": "Audifonos Sony MDR ZX310APW blanco incluye contestador telefono",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/zx310-blancos1976.jpg",
      "urlSlug": "https://www.deal.cl/product/audifonos-sony-mdr-zx310apw-blanco-incluye-contestador-telefono",
      "variants": [
        {
          "variantId": 500,
          "sku": "027242869677",
          "price": 14990,
          "stock": 41
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0520d55c08683249ee4f2b"
      },
      "productId": 1837,
      "collections": [
        {
          "collectionId": 43,
          "name": "Audífonos inalámbricos"
        }
      ],
      "description": "",
      "name": "Audífonos Altec Evolution 2 Headphones Black",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/mzx667_blk_14716.jpg",
      "urlSlug": "https://www.deal.cl/product/audifonos-altec-evolution-2-headphones-black",
      "variants": [
        {
          "variantId": 2417,
          "sku": "MZX009-BLK",
          "price": 29990,
          "stock": 2
        },
        {
          "variantId": 2417,
          "sku": "MZX009-BLK",
          "price": 29990,
          "stock": 1
        },
        {
          "variantId": 2417,
          "sku": "MZX009-BLK",
          "price": 29990,
          "stock": 10
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0520d65c08683249ee4f2e"
      },
      "productId": 1888,
      "collections": [
        {
          "collectionId": 43,
          "name": "Audífonos inalámbricos"
        }
      ],
      "description": "",
      "name": "Audífonos Altec Evolution 2 Headphones Gold White",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/mzx667-gold-13616.jpg",
      "urlSlug": "https://www.deal.cl/product/audifonos-altec-evolution-2-headphones-gold-white",
      "variants": [
        {
          "variantId": 2466,
          "sku": "MZX667-GOLD?WHT?ES",
          "price": 23992,
          "stock": 0
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0520d75c08683249ee4f32"
      },
      "productId": 1548,
      "collections": [
        {
          "collectionId": 43,
          "name": "Audífonos inalámbricos"
        }
      ],
      "description": "<h3>Audifonos Deportivos Bluetooth Altec MZX856 con Manos Libres Waterproof Negro</h3>",
      "name": "Audífonos Deportivos Altec In-Ear Earbuds High end",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/mzx856_22817.jpg",
      "urlSlug": "https://www.deal.cl/product/audifonos-deportivos-altec-in-ear-earbuds-high-end",
      "variants": [
        {
          "variantId": 2311,
          "sku": "MZX856-BLK-ESP",
          "price": 27992,
          "stock": 0
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0520d85c08683249ee4f35"
      },
      "productId": 270,
      "collections": [
        {
          "collectionId": 43,
          "name": "Audífonos inalámbricos"
        },
        {
          "collectionId": 16,
          "name": "Ofertas"
        }
      ],
      "description": "<p>ara todos aquellos entusiastas del ejercicio que exigen alta calidad, comodidad y excelente audio en sus aud&iacute;fonos, los aud&iacute;fonos Altec Lansing Sport In-Ear Bluetooth est&aacute;n dise&ntilde;ados pensando en usted.</p>",
      "name": "Audifonos Deportivos BT MZX400 Altec Lansing",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/mzx4006743.jpg",
      "urlSlug": "https://www.deal.cl/product/audifonos-deportivos-bt-mzx400-altec-lansing",
      "variants": [
        {
          "variantId": 2331,
          "sku": "MZX400-BLK-ESP",
          "price": 17990,
          "stock": 20
        },
        {
          "variantId": 2331,
          "sku": "MZX400-BLK-ESP",
          "price": 17990,
          "stock": 18
        },
        {
          "variantId": 2331,
          "sku": "MZX400-BLK-ESP",
          "price": 17990,
          "stock": 17
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0520d95c08683249ee4f38"
      },
      "productId": 1202,
      "collections": [
        {
          "collectionId": 43,
          "name": "Audífonos inalámbricos"
        }
      ],
      "description": "",
      "name": "MicroLab 7071 Audífonos Bluetooth Sport Ear Air Clip",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/7071audifonosbluetoothsportearairclip8906.jpg",
      "urlSlug": "https://www.deal.cl/product/microlab-7071-audifonos-bluetooth-sport-ear-air-clip",
      "variants": [
        {
          "variantId": 2032,
          "sku": "MLABS 7071",
          "price": 9990,
          "stock": 77
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0520db5c08683249ee4f3a"
      },
      "productId": 1755,
      "collections": [
        {
          "collectionId": 43,
          "name": "Audífonos inalámbricos"
        }
      ],
      "description": "",
      "name": "VISMOV Audifonos Bluetooth XL Negro",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/vismovaudifonosnegro5420.jpg",
      "urlSlug": "https://www.deal.cl/product/vismov-audifonos-bluetooth-xl-negro",
      "variants": [
        {
          "variantId": 629,
          "sku": "7804661170095",
          "price": 22990,
          "stock": 4
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0521c85c08683249ee5155"
      },
      "productId": 1877,
      "collections": [
        {
          "collectionId": 16,
          "name": "Ofertas"
        },
        {
          "collectionId": 88,
          "name": "Ofertas Cyber DEAL"
        },
        {
          "collectionId": 47,
          "name": "Parlantes"
        }
      ],
      "description": "<ul><li>IP67; ¡Impermeable, a prueba de golpes, a prueba de nieve y FLOTA!, Micrófono incorporado, Verdadero emparejamiento inalámbrico</li></ul>",
      "name": "Parlante Altec Baby Boom Speak (Elije tu Color)",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/imw269_gg_10888.jpg",
      "urlSlug": "https://www.deal.cl/product/parlante-altec-baby-boom-speak-elije-tu-color",
      "variants": [
        {
          "variantId": 2748,
          "sku": "IMW269-ORP",
          "price": 15393,
          "stock": 10
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0521ed5c08683249ee5193"
      },
      "productId": 1756,
      "collections": [
        {
          "collectionId": 88,
          "name": "Ofertas Cyber DEAL"
        },
        {
          "collectionId": 47,
          "name": "Parlantes"
        }
      ],
      "description": "<p>Parlante bluetooth de alta calidad de sonido Super bass Stéreo y con una batería potente que permite su traslado a cualquier parte.</p>",
      "name": "VISMOV PARLANTE BLUETOOTH (BAZUCA) DEAL",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/bazoca-rojo8314.jpg",
      "urlSlug": "https://www.deal.cl/product/vismov-parlante-bluetooth-bazuca-deal",
      "variants": [
        {
          "variantId": 631,
          "sku": "7804661170057",
          "price": 19995,
          "stock": 102
        },
        {
          "variantId": 631,
          "sku": "7804661170057",
          "price": 19995,
          "stock": 101
        }
      ]
    },
    {
      "_id": {
        "$oid": "5f0521f25c08683249ee519d"
      },
      "productId": 1929,
      "collections": [
        {
          "collectionId": 47,
          "name": "Parlantes"
        }
      ],
      "description": "<p>&iexcl;Amplifique su sonido con el altavoz Bluetooth Altec Lansing Jacket H2O 3! Con un dise&ntilde;o exclusivo y compacto, la chaqueta H2O 3 es IP67 a prueba de agua, a prueba de golpes y nieve, &iexcl;y FLOTA! &iexcl;as&iacute; que nunca hay una excusa para no tener buena m&uacute;sica donde quiera que te lleve tu viaje!&nbsp;</p>",
      "name": " Altec Parlante Bluetooth Jacket H2O 3",
      "state": 1,
      "urlImg": "https://dojiw2m9tvv09.cloudfront.net/4794/product/jacket-h20-ab6460.jpg",
      "urlSlug": "https://www.deal.cl/product/altec-parlante-bluetooth-jacket-h2o-3",
      "variants": [
        {
          "variantId": 2528,
          "sku": "IMW458-CB",
          "price": 31992,
          "stock": 0
        }
      ]
    }
  ]

  renderImg(e:TableItemRender):any{
    //console.log(e)
    return '<img src="'+e.value+'" width="50"/>'
  }
}
