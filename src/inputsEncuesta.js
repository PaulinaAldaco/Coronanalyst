const preguntas = [
    [
        {id: 1, value: "1 a 5 veces al mes.", isChecked: false},
      {id: 2, value: "6 a 10 veces al mes.", isChecked: false},
      {id: 3, value: "Más de 10 veces por mes.", isChecked: false},
      {id: 4, value: "1 vez cada varios meses.", isChecked: false},
      {id: 5, value: "No realizaba compras en línea", isChecked: false}
    ],
      
      [
        {id: 1, value: "Mercado Libre", isChecked: false},
      {id: 2, value: "Amazon", isChecked: false},
      {id: 3, value: "Facebook Marketplace", isChecked: false},
      {id: 4, value: "Alibaba / Aliexpress", isChecked: false},
      {id: 5, value: "eBay", isChecked: false},
      {id: 6, value: "E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)", isChecked: false},
      ],

    [
        {id: 1, value: "Tarjeta de crédito", isChecked: false},
      {id: 2, value: "Tarjeta de débito", isChecked: false},
      {id: 3, value: "Paypal", isChecked: false},
      {id: 4, value: "Mercado Pago", isChecked: false},
      {id: 5, value: "Efectivo", isChecked: false},
      {id: 6, value: "Transferencia electrónica", isChecked: false},
      {id: 7, value: "Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)", isChecked: false},
      {id: 8, value: "Otro", isChecked: false},
      {id: 9, value: "No realizaba compras en internet", isChecked: false},
      ],
      
      [
        {id: 1, value: "Ropa", isChecked: false},
        {id: 2, value: "Comida a domicilio (Rappi, UberEats, etc)", isChecked: false},
        {id: 3, value: "Super a domicilio (víveres)", isChecked: false},
        {id: 4, value: "Muebles y/o electrodomésticos", isChecked: false},
        {id: 5, value: "Coleccionables", isChecked: false},
        {id: 6, value: "Libros (físicos o electrónicos)", isChecked: false},
        {id: 7, value: "Computadoras y/o electrónicos", isChecked: false},
        {id: 8, value: "Herramientas y ferretería", isChecked: false},
        {id: 9, value: "Entretenimiento (música, tv, videojuegos, juguetes, etc.)", isChecked: false},
        {id: 10, value: "Programas o aplicaciones", isChecked: false},
        {id: 11, value: "Reservaciones y boletos", isChecked: false},
        {id: 12, value: "Artículos de higiene", isChecked: false},
        {id: 13, value: "Artículos deportivos", isChecked: false},
        {id: 14, value: "No realizaba compras en línea", isChecked: false},
        {id: 15, value: "Otros", isChecked: false}
        ],
      
     [
          {id: 1, value: "7 horas o más al día", isChecked: false},
          {id: 2, value: "6 a 2 horas al día", isChecked: false},
          {id: 3, value: "6 a 2 horas a la semana", isChecked: false},
          {id: 4, value: "Menos de 2 horas a la semana", isChecked: false}
        ],
    [
          {id: 1, value: "Más de 10 veces por mes.", isChecked: false},
          {id: 2, value: "10 a 6 veces al mes.", isChecked: false},
          {id: 3, value: "5 a 1 vez al mes.", isChecked: false},
          {id: 4, value: "1 vez cada varios meses.", isChecked: false},
          {id: 5, value: "No realizo compras en línea", isChecked: false}
          ],
        
          [
          {id: 1, value: "Mercado Libre", isChecked: false},
          {id: 2, value: "Amazon", isChecked: false},
          {id: 3, value: "Facebook Marketplace", isChecked: false},
          {id: 4, value: "Alibaba / Aliexpress", isChecked: false},
          {id: 5, value: "eBay", isChecked: false},
          {id: 6, value: "E-shop propia de cada marca (Nike, Supreme, Walmart, Liverpool, etc)", isChecked: false},
          {id: 7, value: "Otros", isChecked: false},
          {id: 8, value: "No realizo compras en línea", isChecked: false}
          ],
        
          [
          {id: 1, value: "Tarjeta de crédito", isChecked: false},
          {id: 2, value: "Tarjeta de débito", isChecked: false},
          {id: 3, value: "Paypal", isChecked: false},
          {id: 4, value: "Mercado Pago", isChecked: false},
          {id: 5, value: "Efectivo", isChecked: false},
          {id: 6, value: "Transferencia electrónica", isChecked: false},
          {id: 7, value: "Depósito en tiendas de conveniencia (Oxxo, 7Eleven, etc.)", isChecked: false},
          {id: 8, value: "Otro", isChecked: false},
          {id: 9, value: "No realizo compras en línea", isChecked: false}
          ],
          
           [
          {id: 1, value: "Ropa", isChecked: false},
          {id: 2, value: "Comida a domicilio (Rappi, UberEats, etc)", isChecked: false},
          {id: 3, value: "Super a domicilio (víveres)", isChecked: false},
          {id: 4, value: "Muebles y/o electrodomésticos", isChecked: false},
          {id: 5, value: "Coleccionables", isChecked: false},
          {id: 6, value: "Libros (físicos o electrónicos)", isChecked: false},
          {id: 7, value: "Computadoras y/o electrónicos", isChecked: false},
          {id: 8, value: "Herramientas y ferretería", isChecked: false},
          {id: 9, value: "Entretenimiento (música, tv, videojuegos, juguetes, etc.)", isChecked: false},
          {id: 10, value: "Programas o aplicaciones", isChecked: false},
          {id: 11, value: "Reservaciones y boletos", isChecked: false},
          {id: 12, value: "Artículos de higiene", isChecked: false},
          {id: 13, value: "Artículos deportivos", isChecked: false},
          {id: 14, value: "Otros", isChecked: false},
          {id: 15, value: "Sigo sin realizar compras en línea", isChecked: false}
          ],

          [
          {id: 1, value: "7 horas o más al día", isChecked: false},
          {id: 2, value: "6 a 2 horas al día", isChecked: false},
          {id: 3, value: "6 a 2 horas a la semana", isChecked: false},
          {id: 4, value: "Menos de 2 horas a la semana", isChecked: false}
          ],

         [
          {id: 1, value: "Menos de 1,000", isChecked: false},
          {id: 2, value: "1,000 - 2,500", isChecked: false},
          {id: 3, value: "2,500 - 5,000", isChecked: false},
          {id: 4, value: "5,000 - 7,500", isChecked: false},
          {id: 5, value: "7,500 - 10,000", isChecked: false},
          {id: 6, value: "Más de 10,000", isChecked: false}
          ],

          [
          {id: 1, value: "Fisico", isChecked: false},
          {id: 2, value: "Línea", isChecked: false}
          ],
      
          [
          {id: 1, value: "Sí", isChecked: false},
          {id: 2, value: "No", isChecked: false}
          ],

          [
          {id: 1, value: "Diabetes", isChecked: false},
          {id: 2, value: "Hipertensión", isChecked: false},
          {id: 3, value: "Obesidad", isChecked: false},
          {id: 4, value: "Asma", isChecked: false},
          {id: 5, value: "Condiciones cardíacas", isChecked: false},
          {id: 6, value: "Inmunodeficiencia", isChecked: false},
          {id: 7, value: "Hepatitis", isChecked: false},
          {id: 8, value: "Otros no listados", isChecked: false},
          {id: 9, value: "Ninguna", isChecked: false}
          ],

          [
          {id: 1, value: "Ansiedad", isChecked: false},
          {id: 2, value: "Estrés", isChecked: false},
          {id: 3, value: "Depresión", isChecked: false},
          {id: 4, value: "Déficit de atención", isChecked: false},
          {id: 5, value: "Baja de rendimiento laboral/académico", isChecked: false},
          {id: 6, value: "Baja autoestima", isChecked: false},
          {id: 7, value: "Otros no enlistados", isChecked: false},
          {id: 8, value: "No me he sentido afectado", isChecked: false}
          ],

          [
          {id: 1, value: "Aumentó", isChecked: false},
          {id: 2, value: "Permaneció igual que antes", isChecked: false},
          {id: 3, value: "Disminuyó", isChecked: false}
          ]
];

export default preguntas;

