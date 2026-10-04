/**
 * SMART MENÚ - Cafetería & Restaurante Escolar
 * Institución Educativa Celmira Bueno de Orejuela (CBO)
 * PROGRAMA DE ALIMENTACIÓN ESCOLAR (PAE CALI 2026)
 * Ciclo de Menús Oficial: Jornada Única (Almuerzo), Jornada A.M. y Jornada P.M.
 */

// Ciclo Completo de Menús PAE Cali 2026
const PAE_DATA = {
  // 1. JORNADA ÚNICA (ALMUERZO) - 20 MENÚS
  almuerzo: [
    // SEMANA 1
    {
      id: 'alm-1',
      semana: 1,
      menuNum: 1,
      dia: 'Lunes',
      titulo: 'Menú 1 — Fajitas de Cerdo Asada',
      bebida: 'Sorbete de Guayaba',
      proteina: 'Fajitas de cerdo asada',
      leguminosa: null,
      cereal: 'Arroz primavera',
      tuberculo: 'Papa criolla dorada',
      ensalada: 'Verduras en preparación',
      emoji: '🍛'
    },
    {
      id: 'alm-2',
      semana: 1,
      menuNum: 2,
      dia: 'Martes',
      titulo: 'Menú 2 — Pechuga con Lentejas Guisadas',
      bebida: 'Jugo de Lulo',
      proteina: 'Fajitas de pechuga de pollo',
      leguminosa: 'Lentejas guisadas',
      cereal: 'Arroz blanco',
      tuberculo: 'Papa chorreada',
      ensalada: 'Ensalada tomate, aguacate, lechuga',
      emoji: '🍗'
    },
    {
      id: 'alm-3',
      semana: 1,
      menuNum: 3,
      dia: 'Miércoles',
      titulo: 'Menú 3 — Estofado de Cerdo Campesino',
      bebida: 'Sorbete de Guanábana',
      proteina: 'Estofado de cerdo con papa',
      leguminosa: null,
      cereal: 'Arroz con fideos',
      tuberculo: 'Tajada de plátano maduro',
      ensalada: 'Verduras orientales',
      emoji: '🍲'
    },
    {
      id: 'alm-4',
      semana: 1,
      menuNum: 4,
      dia: 'Jueves',
      titulo: 'Menú 4 — Huevos Pericos & Arvejas',
      bebida: 'Jugo de Piña',
      proteina: 'Huevos pericos',
      leguminosa: 'Arvejas guisadas',
      cereal: 'Arroz blanco',
      tuberculo: 'Puré de papa común',
      ensalada: 'Ensalada tropical',
      emoji: '🍳'
    },
    {
      id: 'alm-5',
      semana: 1,
      menuNum: 5,
      dia: 'Viernes',
      titulo: 'Menú 5 — Pechuga con Plátano Melado',
      bebida: 'Sorbete de Mango',
      proteina: 'Fajitas de pechuga de pollo',
      leguminosa: null,
      cereal: 'Arroz verde',
      tuberculo: 'Plátano melado',
      ensalada: 'Verduras en preparación',
      emoji: '🥗'
    },

    // SEMANA 2
    {
      id: 'alm-6',
      semana: 2,
      menuNum: 6,
      dia: 'Lunes',
      titulo: 'Menú 6 — Chop Suey de Pollo & Plátano',
      bebida: 'Sorbete de Guanábana',
      proteina: 'Chop suey pechuga de pollo',
      leguminosa: null,
      cereal: 'Arroz blanco',
      tuberculo: 'Tajada plátano maduro',
      ensalada: 'Verduras en preparación',
      emoji: '🥢'
    },
    {
      id: 'alm-7',
      semana: 2,
      menuNum: 7,
      dia: 'Martes',
      titulo: 'Menú 7 — Huevos Revueltos & Lentejas',
      bebida: 'Jugo de Piña',
      proteina: 'Huevos revueltos',
      leguminosa: 'Lentejas guisadas',
      cereal: 'Arroz blanco',
      tuberculo: 'Papa chorreada',
      ensalada: 'Ensalada lechuga, tomate, pepino',
      emoji: '🥚'
    },
    {
      id: 'alm-8',
      semana: 2,
      menuNum: 8,
      dia: 'Miércoles',
      titulo: 'Menú 8 — Fajitas de Cerdo con Zapallo',
      bebida: 'Sorbete de Fresa',
      proteina: 'Fajitas de cerdo con zapallo',
      leguminosa: null,
      cereal: 'Arroz con fideos',
      tuberculo: 'Puré de papa criolla',
      ensalada: 'Verduras en preparación',
      emoji: '🥩'
    },
    {
      id: 'alm-9',
      semana: 2,
      menuNum: 9,
      dia: 'Jueves',
      titulo: 'Menú 9 — Carne de Res con Frijoles',
      bebida: 'Jugo de Guayaba',
      proteina: 'Fajitas de carne de res',
      leguminosa: 'Frijoles guisados',
      cereal: 'Arroz blanco',
      tuberculo: 'Moneditas de plátano',
      ensalada: 'Ensalada tomate, aguacate, lechuga',
      emoji: '🫘'
    },
    {
      id: 'alm-10',
      semana: 2,
      menuNum: 10,
      dia: 'Viernes',
      titulo: 'Menú 10 — Chuleta de Cerdo & Ensalada Fría',
      bebida: 'Sorbete de Mango',
      proteina: 'Chuleta de cerdo',
      leguminosa: null,
      cereal: 'Arroz verde',
      tuberculo: '(Incluido en ensalada)',
      ensalada: 'Ensalada fría de papa',
      emoji: '🍖'
    },

    // SEMANA 3
    {
      id: 'alm-11',
      semana: 3,
      menuNum: 11,
      dia: 'Lunes',
      titulo: 'Menú 11 — Trozos de Cerdo & Puré Maduro',
      bebida: 'Sorbete de Mango',
      proteina: 'Trozos de carne de cerdo',
      leguminosa: null,
      cereal: 'Arroz con cilantro',
      tuberculo: 'Puré de plátano maduro',
      ensalada: 'Verduras en preparación',
      emoji: '🍛'
    },
    {
      id: 'alm-12',
      semana: 3,
      menuNum: 12,
      dia: 'Martes',
      titulo: 'Menú 12 — Pollo en Criolla & Blanquillos',
      bebida: 'Jugo de Guayaba',
      proteina: 'Fajitas de pollo en criolla',
      leguminosa: 'Blanquillos guisados',
      cereal: 'Arroz blanco',
      tuberculo: 'Papa criolla dorada',
      ensalada: 'Ensalada tomate y lechuga',
      emoji: '🍗'
    },
    {
      id: 'alm-13',
      semana: 3,
      menuNum: 13,
      dia: 'Miércoles',
      titulo: 'Menú 13 — Cerdo en Salsa Blanca & Verduras',
      bebida: 'Sorbete de Fresa',
      proteina: 'Trozos de carne de cerdo',
      leguminosa: null,
      cereal: 'Arroz con fideos',
      tuberculo: 'Papa salsa blanca',
      ensalada: 'Verduras salteadas',
      emoji: '🥩'
    },
    {
      id: 'alm-14',
      semana: 3,
      menuNum: 14,
      dia: 'Jueves',
      titulo: 'Menú 14 — Huevos Revueltos & Arvejas',
      bebida: 'Jugo de Maracuyá',
      proteina: 'Huevos revueltos',
      leguminosa: 'Arvejas guisadas',
      cereal: 'Arroz blanco',
      tuberculo: 'Moneditas de plátano',
      ensalada: 'Ensalada tropical',
      emoji: '🍳'
    },
    {
      id: 'alm-15',
      semana: 3,
      menuNum: 15,
      dia: 'Viernes',
      titulo: 'Menú 15 — Pechuga con Puré Criollo',
      bebida: 'Sorbete de Guayaba',
      proteina: 'Fajitas de pechuga de pollo',
      leguminosa: null,
      cereal: 'Arroz blanco',
      tuberculo: 'Puré de papa criolla',
      ensalada: 'Verduras en preparación',
      emoji: '🥗'
    },

    // SEMANA 4
    {
      id: 'alm-16',
      semana: 4,
      menuNum: 16,
      dia: 'Lunes',
      titulo: 'Menú 16 — Cerdo con Papa Chorreada',
      bebida: 'Sorbete de Mango',
      proteina: 'Fajitas de carne de cerdo',
      leguminosa: null,
      cereal: 'Arroz verde',
      tuberculo: 'Papa chorreada',
      ensalada: 'Ensalada tropical',
      emoji: '🍖'
    },
    {
      id: 'alm-17',
      semana: 4,
      menuNum: 17,
      dia: 'Martes',
      titulo: 'Menú 17 — Huevos Pericos con Lentejas',
      bebida: 'Jugo de Piña',
      proteina: 'Huevos pericos',
      leguminosa: 'Lentejas guisadas',
      cereal: 'Arroz blanco',
      tuberculo: 'Papas a la francesa',
      ensalada: 'Ensalada lechuga, tomate, cilantro',
      emoji: '🥔'
    },
    {
      id: 'alm-18',
      semana: 4,
      menuNum: 18,
      dia: 'Miércoles',
      titulo: 'Menú 18 — Carne de Res con Arroz Primavera',
      bebida: 'Sorbete de Guayaba',
      proteina: 'Fajitas de carne de res',
      leguminosa: null,
      cereal: 'Arroz primavera',
      tuberculo: 'Puré de papa criolla',
      ensalada: 'Verduras en acompañante',
      emoji: '🥩'
    },
    {
      id: 'alm-19',
      semana: 4,
      menuNum: 19,
      dia: 'Jueves',
      titulo: 'Menú 19 — Cerdo Guisado & Frijoles',
      bebida: 'Jugo de Tomate de Árbol',
      proteina: 'Trozos de carne de cerdo',
      leguminosa: 'Frijoles guisados',
      cereal: 'Arroz blanco',
      tuberculo: 'Tajada plátano maduro',
      ensalada: 'Ensalada tomate, aguacate, lechuga',
      emoji: '🫘'
    },
    {
      id: 'alm-20',
      semana: 4,
      menuNum: 20,
      dia: 'Viernes',
      titulo: 'Menú 20 — Pechuga Desmechada & Espaguetis',
      bebida: 'Sorbete de Fresa',
      proteina: 'Pechuga desmechada en salsa',
      leguminosa: null,
      cereal: 'Espaguetis salteados / Arroz',
      tuberculo: null,
      ensalada: 'Ensalada lechuga, zanahoria, mango',
      emoji: '🍝'
    }
  ],

  // 2. JORNADA A.M. (COMPLEMENTO MAÑANA / DESAYUNO) - 20 MENÚS
  am: [
    // SEMANA 1
    {
      id: 'am-1',
      semana: 1,
      menuNum: 1,
      dia: 'Lunes',
      titulo: 'Menú 1 AM — Huevos con Tomate & Papa Chorreada',
      bebida: 'Sorbete de banano',
      proteina: 'Huevos revueltos con tomate',
      cereal: 'Arroz verde + Papa chorreada',
      fruta: null,
      emoji: '🍌'
    },
    {
      id: 'am-2',
      semana: 1,
      menuNum: 2,
      dia: 'Martes',
      titulo: 'Menú 2 AM — Pollo Criollo & Sandía Fresca',
      bebida: 'Agua de panela con leche',
      proteina: 'Fajitas de pollo en salsa criolla',
      cereal: 'Moneditas de plátano',
      fruta: 'Sandía',
      emoji: '🍉'
    },
    {
      id: 'am-3',
      semana: 1,
      menuNum: 3,
      dia: 'Miércoles',
      titulo: 'Menú 3 AM — Pechuga con Cilantro & Arepa con Queso',
      bebida: 'Jugo de maracuyá en agua',
      proteina: 'Pechuga en trozos con cilantro',
      cereal: 'Arepa con queso + Arroz/Papa',
      fruta: null,
      emoji: '🫓'
    },
    {
      id: 'am-4',
      semana: 1,
      menuNum: 4,
      dia: 'Jueves',
      titulo: 'Menú 4 AM — Chocolate con Leche & Dedo de Queso',
      bebida: 'Chocolate con leche',
      proteina: 'Queso cuajada',
      cereal: 'Dedo de queso',
      fruta: 'Mix mango y piña',
      emoji: '🍫'
    },
    {
      id: 'am-5',
      semana: 1,
      menuNum: 5,
      dia: 'Viernes',
      titulo: 'Menú 5 AM — Huevos Pericos & Manzana',
      bebida: 'Sorbete de guayaba y maracuyá',
      proteina: 'Huevos pericos',
      cereal: 'Arroz blanco + Tajada de plátano',
      fruta: 'Manzana',
      emoji: '🍎'
    },

    // SEMANA 2
    {
      id: 'am-6',
      semana: 2,
      menuNum: 6,
      dia: 'Lunes',
      titulo: 'Menú 6 AM — Huevos Pericos & Puré de Plátano',
      bebida: 'Jugo de piña en agua',
      proteina: 'Huevos pericos',
      cereal: 'Arroz blanco + Puré de plátano',
      fruta: null,
      emoji: '🍍'
    },
    {
      id: 'am-7',
      semana: 2,
      menuNum: 7,
      dia: 'Martes',
      titulo: 'Menú 7 AM — Queso Cuajada & Arepa de Choclo',
      bebida: 'Chocolate con leche',
      proteina: 'Queso cuajada',
      cereal: 'Arepa de choclo asada',
      fruta: 'Mix mango y papaya',
      emoji: '🌽'
    },
    {
      id: 'am-8',
      semana: 2,
      menuNum: 8,
      dia: 'Miércoles',
      titulo: 'Menú 8 AM — Huevos Pericos & Masitas de Trigo',
      bebida: 'Agua de panela con leche',
      proteina: 'Huevos pericos',
      cereal: 'Masitas de harina de trigo',
      fruta: 'Piña picada',
      emoji: '🥛'
    },
    {
      id: 'am-9',
      semana: 2,
      menuNum: 9,
      dia: 'Jueves',
      titulo: 'Menú 9 AM — Carne Guisada, Papa Aborrajada & Granadilla',
      bebida: 'Sorbete de guayaba',
      proteina: 'Carne de res en trozos con guiso',
      cereal: 'Arroz blanco + Papa aborrajada',
      fruta: 'Granadilla',
      emoji: '🍲'
    },
    {
      id: 'am-10',
      semana: 2,
      menuNum: 10,
      dia: 'Viernes',
      titulo: 'Menú 10 AM — Pollo Criollo con Fideos & Plátano',
      bebida: 'Sorbete de guanábana',
      proteina: 'Fajitas de pollo en salsa criolla',
      cereal: 'Arroz con fideos + Moneditas de plátano',
      fruta: null,
      emoji: '🍗'
    },

    // SEMANA 3
    {
      id: 'am-11',
      semana: 3,
      menuNum: 11,
      dia: 'Lunes',
      titulo: 'Menú 11 AM — Huevos Revueltos con Tomate & Chips',
      bebida: 'Agua de panela con leche',
      proteina: 'Huevos revueltos con tomate',
      cereal: 'Arroz blanco + Chips de papa',
      fruta: 'Piña picada',
      emoji: '🍳'
    },
    {
      id: 'am-12',
      semana: 3,
      menuNum: 12,
      dia: 'Martes',
      titulo: 'Menú 12 AM — Chuleta de Cerdo con Arroz Verde',
      bebida: 'Agua de panela con limón',
      proteina: 'Chuleta de cerdo',
      cereal: 'Arroz verde + Tajada de plátano',
      fruta: null,
      emoji: '🍋'
    },
    {
      id: 'am-13',
      semana: 3,
      menuNum: 13,
      dia: 'Miércoles',
      titulo: 'Menú 13 AM — Pollo Criollo con Puré de Papa',
      bebida: 'Sorbete de mango',
      proteina: 'Fajitas de pollo en salsa criolla',
      cereal: 'Puré de papa + Arroz blanco',
      fruta: null,
      emoji: '🥭'
    },
    {
      id: 'am-14',
      semana: 3,
      menuNum: 14,
      dia: 'Jueves',
      titulo: 'Menú 14 AM — Queso Cuajada con Arepa & Mango',
      bebida: 'Sorbete de banano',
      proteina: 'Queso cuajada',
      cereal: 'Arepa asada',
      fruta: 'Mango picado',
      emoji: '🧀'
    },
    {
      id: 'am-15',
      semana: 3,
      menuNum: 15,
      dia: 'Viernes',
      titulo: 'Menú 15 AM — Huevos con Tortas de Brócoli & Papaya',
      bebida: 'Chocolate con leche',
      proteina: 'Huevos pericos',
      cereal: 'Arroz blanco + Tortas de papa/brócoli',
      fruta: 'Papaya picada',
      emoji: '🥦'
    },

    // SEMANA 4
    {
      id: 'am-16',
      semana: 4,
      menuNum: 16,
      dia: 'Lunes',
      titulo: 'Menú 16 AM — Huevos con Arepa & Pera',
      bebida: 'Chocolate con leche',
      proteina: 'Huevos pericos',
      cereal: 'Arepa asada + Arroz con pimentón',
      fruta: 'Pera',
      emoji: '🍐'
    },
    {
      id: 'am-17',
      semana: 4,
      menuNum: 17,
      dia: 'Martes',
      titulo: 'Menú 17 AM — Frijoles Guisados con Zapallo',
      bebida: 'Jugo de lulo en agua',
      proteina: 'Frijoles guisados con zapallo',
      cereal: 'Tajada de plátano + Arroz blanco',
      fruta: null,
      emoji: '🫘'
    },
    {
      id: 'am-18',
      semana: 4,
      menuNum: 18,
      dia: 'Miércoles',
      titulo: 'Menú 18 AM — Huevos Revueltos, Masitas & Piña',
      bebida: 'Chocolate con leche',
      proteina: 'Huevos revueltos con tomate',
      cereal: 'Masitas de harina de trigo',
      fruta: 'Piña picada',
      emoji: '☕'
    },
    {
      id: 'am-19',
      semana: 4,
      menuNum: 19,
      dia: 'Jueves',
      titulo: 'Menú 19 AM — Cerdo Salteado, Papa Aborrajada & Mandarina',
      bebida: 'Sorbete de fresa',
      proteina: 'Trozos de carne de cerdo salteados',
      cereal: 'Papa aborrajada + Arroz blanco',
      fruta: 'Mandarina',
      emoji: '🍊'
    },
    {
      id: 'am-20',
      semana: 4,
      menuNum: 20,
      dia: 'Viernes',
      titulo: 'Menú 20 AM — Hamburguesa de Pollo con Papa Criolla',
      bebida: 'Sorbete de guanábana',
      proteina: 'Hamburguesa de pollo apanado',
      cereal: 'Pan de sándwich + Papa criolla',
      fruta: null,
      emoji: '🍔'
    }
  ],

  // 3. JORNADA P.M. (COMPLEMENTO TARDE / REFRIGERIO) - 20 MENÚS
  pm: [
    // SEMANA 1
    {
      id: 'pm-1',
      semana: 1,
      menuNum: 1,
      dia: 'Lunes',
      titulo: 'Menú 1 PM — Huevos Pericos con Puré & Arroz Zanahoria',
      bebida: 'Sorbete de guayaba con banano',
      proteina: 'Huevos pericos',
      cereal: 'Arroz con zanahoria + Puré de papa',
      fruta: null,
      emoji: '🥕'
    },
    {
      id: 'pm-2',
      semana: 1,
      menuNum: 2,
      dia: 'Martes',
      titulo: 'Menú 2 PM — Pollo Salteado con Espaguetis & Piña',
      bebida: 'Jugo de maracuyá',
      proteina: 'Fajitas de pollo salteadas',
      cereal: 'Espaguetis en salsa + Arroz blanco',
      fruta: 'Piña picada',
      emoji: '🍝'
    },
    {
      id: 'pm-3',
      semana: 1,
      menuNum: 3,
      dia: 'Miércoles',
      titulo: 'Menú 3 PM — Huevos con Frijoles & Mandarina',
      bebida: 'Jugo de lulo',
      proteina: 'Huevos pericos + Frijoles guisados',
      cereal: 'Arroz blanco + Tajada de plátano',
      fruta: 'Mandarina',
      emoji: '🍊'
    },
    {
      id: 'pm-4',
      semana: 1,
      menuNum: 4,
      dia: 'Jueves',
      titulo: 'Menú 4 PM — Cerdo Guisado, Chips & Mix Frutas',
      bebida: 'Sorbete de fresa',
      proteina: 'Carne de cerdo guisada',
      cereal: 'Arroz blanco + Chips de papa',
      fruta: 'Mix mango y papaya',
      emoji: '🍓'
    },
    {
      id: 'pm-5',
      semana: 1,
      menuNum: 5,
      dia: 'Viernes',
      titulo: 'Menú 5 PM — Lentejas Guisadas, Papas & Ensalada Criolla',
      bebida: 'Sorbete de mango',
      proteina: 'Lentejas guisadas',
      cereal: 'Arroz blanco + Papas a la francesa',
      fruta: 'Ensalada cebolla, tomate, cilantro',
      emoji: '🥔'
    },

    // SEMANA 2
    {
      id: 'pm-6',
      semana: 2,
      menuNum: 6,
      dia: 'Lunes',
      titulo: 'Menú 6 PM — Huevos Revueltos & Ensalada de Aguacate',
      bebida: 'Sorbete de mango',
      proteina: 'Huevos revueltos con tomate',
      cereal: 'Arroz blanco + Tajada de plátano',
      fruta: 'Ensalada lechuga, tomate, aguacate',
      emoji: '🥑'
    },
    {
      id: 'pm-7',
      semana: 2,
      menuNum: 7,
      dia: 'Martes',
      titulo: 'Menú 7 PM — Pollo Asado con Puré & Banano',
      bebida: 'Sorbete de guayaba',
      proteina: 'Fajitas de pollo asado',
      cereal: 'Arroz primavera + Puré de papa',
      fruta: 'Banano',
      emoji: '🍌'
    },
    {
      id: 'pm-8',
      semana: 2,
      menuNum: 8,
      dia: 'Miércoles',
      titulo: 'Menú 8 PM — Huevos Pericos, Papa Criolla & Papaya',
      bebida: 'Sorbete de guanábana',
      proteina: 'Huevos pericos',
      cereal: 'Arroz blanco + Papa criolla dorada',
      fruta: 'Papaya picada',
      emoji: '🍳'
    },
    {
      id: 'pm-9',
      semana: 2,
      menuNum: 9,
      dia: 'Jueves',
      titulo: 'Menú 9 PM — Sándwich de Pollo Apanado con Papas',
      bebida: 'Jugo de maracuyá',
      proteina: 'Sándwich de pollo apanado',
      cereal: 'Pan de sándwich + Papas a la francesa',
      fruta: 'Lechuga y tomate en sándwich',
      emoji: '🥪'
    },
    {
      id: 'pm-10',
      semana: 2,
      menuNum: 10,
      dia: 'Viernes',
      titulo: 'Menú 10 PM — Frijoles Guisados & Mandarina',
      bebida: 'Agua de panela con limón',
      proteina: 'Frijoles guisados',
      cereal: 'Arroz blanco + Tajada de plátano',
      fruta: 'Mandarina',
      emoji: '🫘'
    },

    // SEMANA 3
    {
      id: 'pm-11',
      semana: 3,
      menuNum: 11,
      dia: 'Lunes',
      titulo: 'Menú 11 PM — Huevos con Papa & Mango Picado',
      bebida: 'Sorbete de guayaba y maracuyá',
      proteina: 'Huevos revueltos con papa',
      cereal: 'Arroz aromatado',
      fruta: 'Mango picado',
      emoji: '🥭'
    },
    {
      id: 'pm-12',
      semana: 3,
      menuNum: 12,
      dia: 'Martes',
      titulo: 'Menú 12 PM — Pechuga con Arroz Verde & Piña',
      bebida: 'Sorbete de fresa',
      proteina: 'Pechuga de pollo salteada',
      cereal: 'Arroz verde',
      fruta: 'Papa chorreada / Piña picada',
      emoji: '🍍'
    },
    {
      id: 'pm-13',
      semana: 3,
      menuNum: 13,
      dia: 'Miércoles',
      titulo: 'Menú 13 PM — Carne Asada con Frijoles & Tajada',
      bebida: 'Jugo de maracuyá',
      proteina: 'Fajitas de carne asada + Frijoles',
      cereal: 'Arroz blanco + Tajada de plátano',
      fruta: null,
      emoji: '🥩'
    },
    {
      id: 'pm-14',
      semana: 3,
      menuNum: 14,
      dia: 'Jueves',
      titulo: 'Menú 14 PM — Hamburguesa de Carne con Queso & Papas',
      bebida: 'Agua de panela con limón',
      proteina: 'Hamburguesa de carne con queso',
      cereal: 'Pan de hamburguesa + Papas francesa',
      fruta: 'Lechuga y tomate en hamburguesa',
      emoji: '🍔'
    },
    {
      id: 'pm-15',
      semana: 3,
      menuNum: 15,
      dia: 'Viernes',
      titulo: 'Menú 15 PM — Lentejas con Moneditas & Ensalada Mango',
      bebida: 'Sorbete de guayaba',
      proteina: 'Lentejas guisadas',
      cereal: 'Arroz blanco + Moneditas de plátano',
      fruta: 'Ensalada lechuga, zanahoria, mango',
      emoji: '🥗'
    },

    // SEMANA 4
    {
      id: 'pm-16',
      semana: 4,
      menuNum: 16,
      dia: 'Lunes',
      titulo: 'Menú 16 PM — Huevos con Tortas de Brócoli & Manzana',
      bebida: 'Sorbete de banano',
      proteina: 'Huevos pericos',
      cereal: 'Arroz blanco + Tortas de papa/brócoli',
      fruta: 'Manzana',
      emoji: '🍎'
    },
    {
      id: 'pm-17',
      semana: 4,
      menuNum: 17,
      dia: 'Martes',
      titulo: 'Menú 17 PM — Fajitas de Pechuga & Piña Picada',
      bebida: 'Sorbete de maracuyá/mango',
      proteina: 'Fajitas de pechuga',
      cereal: 'Arroz blanco',
      fruta: 'Piña picada',
      emoji: '🍍'
    },
    {
      id: 'pm-18',
      semana: 4,
      menuNum: 18,
      dia: 'Miércoles',
      titulo: 'Menú 18 PM — Pechuga con Fideos & Ensalada de Mango',
      bebida: 'Sorbete de guanábana',
      proteina: 'Pechuga de pollo salteada',
      cereal: 'Arroz con fideos',
      fruta: 'Ensalada lechuga, zanahoria, mango',
      emoji: '🍲'
    },
    {
      id: 'pm-19',
      semana: 4,
      menuNum: 19,
      dia: 'Jueves',
      titulo: 'Menú 19 PM — Carne con Zapallo, Papa Criolla & Aguacate',
      bebida: 'Jugo de piña',
      proteina: 'Fajitas de carne con zapallo',
      cereal: 'Arroz blanco + Papa criolla',
      fruta: 'Ensalada tomate, aguacate, lechuga',
      emoji: '🥑'
    },
    {
      id: 'pm-20',
      semana: 4,
      menuNum: 20,
      dia: 'Viernes',
      titulo: 'Menú 20 PM — Espaguetis Criollos & Ensalada de Manzana',
      bebida: 'Sorbete de guayaba',
      proteina: 'Espaguetis en salsa criolla',
      cereal: 'Arroz blanco',
      fruta: 'Ensalada de aguacate, lechuga, manzana',
      emoji: '🍝'
    }
  ]
};

// -------------------------------------------------------------
// Inicialización
// -------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initPaeMenu();
  initDishModal();
  initScheduleWatcher();
  initContactForm();
  handleRouteFromHash();
});

// -------------------------------------------------------------
// Navegación
// -------------------------------------------------------------
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-route]');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mainNav = document.getElementById('mainNav');
  const dropdownContainers = document.querySelectorAll('.dropdown-container');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetRoute = link.getAttribute('data-route');
      navigateTo(targetRoute);

      if (mainNav && mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }

      dropdownContainers.forEach(d => d.classList.remove('open'));
    });
  });

  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  dropdownContainers.forEach(container => {
    const trigger = container.querySelector('.dropdown-trigger');
    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.classList.toggle('open');
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-container')) {
      dropdownContainers.forEach(d => d.classList.remove('open'));
    }
    if (mobileNavToggle && mainNav && !e.target.closest('#mainNav') && !e.target.closest('#mobileNavToggle')) {
      mainNav.classList.remove('active');
    }
  });

  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  window.addEventListener('hashchange', handleRouteFromHash);
}

function navigateTo(routeName) {
  const sections = document.querySelectorAll('.page-section');
  const navLinks = document.querySelectorAll('.nav-link[data-route]');
  const masBtn = document.getElementById('nav-mas');

  let activeSection = document.getElementById(`section-${routeName}`);
  if (!activeSection) {
    routeName = 'inicio';
    activeSection = document.getElementById('section-inicio');
  }

  sections.forEach(sec => sec.classList.remove('active'));
  if (activeSection) {
    activeSection.classList.add('active');
  }

  navLinks.forEach(link => {
    if (link.getAttribute('data-route') === routeName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  if (masBtn) {
    if (['horario', 'conocenos', 'contacto'].includes(routeName)) {
      masBtn.classList.add('active');
    } else {
      masBtn.classList.remove('active');
    }
  }

  if (window.location.hash !== `#${routeName}`) {
    history.pushState(null, '', `#${routeName}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRouteFromHash() {
  const hash = window.location.hash.replace('#', '').trim();
  if (hash) {
    navigateTo(hash);
  } else {
    navigateTo('inicio');
  }
}

// -------------------------------------------------------------
// Menú Oficial PAE Cali 2026
// -------------------------------------------------------------
function initPaeMenu() {
  const menuGrid = document.getElementById('menuItemsGrid');
  const searchInput = document.getElementById('menuSearchInput');
  const modalityTabs = document.querySelectorAll('.modality-tab');
  const weekFilters = document.querySelectorAll('.week-filter-pill');

  let currentModality = 'almuerzo'; // 'almuerzo', 'am', 'pm'
  let currentWeek = 0;              // 0 = todas, 1, 2, 3, 4
  let searchTerm = '';

  function renderPaeItems() {
    if (!menuGrid) return;

    const list = PAE_DATA[currentModality] || [];

    const filtered = list.filter(item => {
      const matchesWeek = (currentWeek === 0 || item.semana === currentWeek);
      
      const textToSearch = [
        item.titulo,
        item.bebida,
        item.proteina,
        item.cereal || '',
        item.leguminosa || '',
        item.tuberculo || '',
        item.ensalada || '',
        item.fruta || ''
      ].join(' ').toLowerCase();

      const matchesSearch = textToSearch.includes(searchTerm.toLowerCase());
      return matchesWeek && matchesSearch;
    });

    if (filtered.length === 0) {
      menuGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
          <p style="font-size: 2.5rem; margin-bottom: 10px;">🔍</p>
          <h4 style="font-family: var(--font-serif); font-size: 1.35rem; margin-bottom: 6px;">No se encontraron menús</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Prueba con otra palabra como "pollo", "cerdo", "lentejas", "mango", "frijoles" o selecciona otra semana.</p>
        </div>
      `;
      return;
    }

    menuGrid.innerHTML = filtered.map(item => {
      const isAlmuerzo = (currentModality === 'almuerzo');
      const dishImg = getDishImage(item, currentModality);
      
      return `
        <div class="pae-menu-card" data-menu-id="${item.id}">
          <!-- Previsualizador Interactivo del Plato (Hover/Click) -->
          <div class="dish-preview-container" onclick="openDishModal('${item.id}', '${currentModality}')" title="Haz clic para ver el plato servido en tamaño completo">
            <div class="dish-preview-image-box">
              <img src="${dishImg}" alt="${item.titulo}" class="dish-preview-img" loading="lazy">
              <div class="dish-preview-overlay">
                <span class="dish-preview-hint">
                  <span class="dish-preview-icon">🔍</span> Ver Plato Servido
                </span>
                <span style="color: #FFF; font-size: 0.72rem; opacity: 0.85; font-weight: 700;">PAE Cali</span>
              </div>
            </div>
            <div class="dish-badge-interactive">
              <span class="pulse-dot"></span>
              <span>Visualizar Plato</span>
            </div>
          </div>

          <div class="pae-card-header">
            <div class="pae-emoji-box">${item.emoji}</div>
            <div class="pae-meta-badges">
              <span class="pae-badge-official">PAE Cali 2026</span>
              <span class="pae-badge-week">Semana ${item.semana} · ${item.dia}</span>
            </div>
          </div>

          <h4 class="pae-menu-title">${item.titulo}</h4>

          <div class="pae-components-list">
            <div class="pae-comp-row">
              <span class="pae-comp-icon">🥤</span>
              <div class="pae-comp-info">
                <strong>Bebida:</strong>
                <span>${item.bebida}</span>
              </div>
            </div>

            <div class="pae-comp-row">
              <span class="pae-comp-icon">🍗</span>
              <div class="pae-comp-info">
                <strong>Alimento Proteico:</strong>
                <span>${item.proteina}</span>
              </div>
            </div>

            ${isAlmuerzo ? `
              ${item.leguminosa ? `
                <div class="pae-comp-row">
                  <span class="pae-comp-icon">🫘</span>
                  <div class="pae-comp-info">
                    <strong>Leguminosa:</strong>
                    <span>${item.leguminosa}</span>
                  </div>
                </div>
              ` : ''}

              <div class="pae-comp-row">
                <span class="pae-comp-icon">🍚</span>
                <div class="pae-comp-info">
                  <strong>Cereal Acompañante:</strong>
                  <span>${item.cereal}</span>
                </div>
              </div>

              ${item.tuberculo ? `
                <div class="pae-comp-row">
                  <span class="pae-comp-icon">🥔</span>
                  <div class="pae-comp-info">
                    <strong>Tubérculo / Plátano:</strong>
                    <span>${item.tuberculo}</span>
                  </div>
                </div>
              ` : ''}

              <div class="pae-comp-row">
                <span class="pae-comp-icon">🥗</span>
                <div class="pae-comp-info">
                  <strong>Ensalada / Verdura:</strong>
                  <span>${item.ensalada}</span>
                </div>
              </div>
            ` : `
              <div class="pae-comp-row">
                <span class="pae-comp-icon">🌾</span>
                <div class="pae-comp-info">
                  <strong>Cereal Acompañante:</strong>
                  <span>${item.cereal}</span>
                </div>
              </div>

              ${item.fruta ? `
                <div class="pae-comp-row">
                  <span class="pae-comp-icon">🍎</span>
                  <div class="pae-comp-info">
                    <strong>Fruta / Acompañante:</strong>
                    <span>${item.fruta}</span>
                  </div>
                </div>
              ` : ''}
            `}
          </div>

          <div class="pae-card-footer">
            <div class="pae-portion-tag">
              <span class="portion-bullet">●</span>
              <span>Ración Nutricional Completa</span>
            </div>
            <button class="btn-dish-view-trigger" onclick="openDishModal('${item.id}', '${currentModality}')" title="Abrir fotografía y desglose del plato">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>Ver Plato</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Cambio de modalidad (Almuerzo / AM / PM)
  modalityTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modalityTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentModality = tab.getAttribute('data-modality');
      renderPaeItems();
    });
  });

  // Filtro por semanas (1, 2, 3, 4 o Todas)
  weekFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      weekFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentWeek = parseInt(btn.getAttribute('data-week'), 10);
      renderPaeItems();
    });
  });

  // Búsqueda en tiempo real
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim();
      renderPaeItems();
    });
  }

  renderPaeItems();
}

// -------------------------------------------------------------
// Asignación de Fotografía Realista según Componentes del Plato
// -------------------------------------------------------------
function getDishImage(item, modality) {
  if (item.imagen) return item.imagen;
  
  const text = `${item.titulo} ${item.proteina} ${item.cereal} ${item.leguminosa || ''} ${item.tuberculo || ''} ${item.ensalada || ''} ${item.fruta || ''} ${item.bebida}`.toLowerCase();

  // 1. Jornada Mañana (AM)
  if (modality === 'am') {
    if (text.includes('masitas') || text.includes('trigo') || (text.includes('huevos') && (text.includes('chocolate') || text.includes('mandarina')))) {
      return 'assets/images/dishes/plato_base_desayuno.jpg'; // Foto base real del usuario
    }
    if (text.includes('choclo')) {
      return 'assets/images/dishes/desayuno_arepa_choclo.jpg';
    }
    if (text.includes('arepa') || text.includes('queso') || text.includes('cuajada')) {
      return 'assets/images/dishes/desayuno_arepa_queso.jpg';
    }
    if (text.includes('sándwich') || text.includes('sanduche') || text.includes('pan') || text.includes('galleta')) {
      return 'assets/images/dishes/refrigerio_sanduche_pollo.jpg';
    }
    if (text.includes('huevos')) {
      return 'assets/images/dishes/plato_base_desayuno.jpg';
    }
    return 'assets/images/dishes/desayuno_arepa_queso.jpg';
  }

  // 2. Jornada Tarde (PM)
  if (modality === 'pm') {
    if (text.includes('sándwich') || text.includes('sanduche') || text.includes('pan') || text.includes('galleta')) {
      return 'assets/images/dishes/refrigerio_sanduche_pollo.jpg';
    }
    if (text.includes('frijol') || text.includes('carne') || text.includes('albóndiga')) {
      return 'assets/images/dishes/almuerzo_carne_frijoles.jpg';
    }
    if (text.includes('cerdo') || text.includes('papa criolla')) {
      return 'assets/images/dishes/almuerzo_cerdo_papa.jpg';
    }
    if (text.includes('pescado') || text.includes('atún')) {
      return 'assets/images/dishes/almuerzo_pescado_patacon.jpg';
    }
    if (text.includes('pollo')) {
      return 'assets/images/dishes/almuerzo_pollo_criolla.jpg';
    }
    if (text.includes('huevos')) {
      return 'assets/images/dishes/plato_base_desayuno.jpg';
    }
    return 'assets/images/dishes/refrigerio_sanduche_pollo.jpg';
  }

  // 3. Almuerzo (Jornada Única)
  if (text.includes('pescado') || text.includes('atún')) {
    return 'assets/images/dishes/almuerzo_pescado_patacon.jpg';
  }
  if (text.includes('cerdo') || text.includes('papa criolla')) {
    return 'assets/images/dishes/almuerzo_cerdo_papa.jpg';
  }
  if (text.includes('lenteja') || (text.includes('pechuga') && !text.includes('frijol'))) {
    return 'assets/images/dishes/almuerzo_pollo_lentejas.jpg';
  }
  if (text.includes('frijol') || text.includes('carne molida') || text.includes('albóndiga') || text.includes('res') || text.includes('bistec')) {
    return 'assets/images/dishes/almuerzo_carne_frijoles.jpg';
  }
  if (text.includes('pollo') || text.includes('estofado') || text.includes('arveja')) {
    return 'assets/images/dishes/almuerzo_pollo_criolla.jpg';
  }

  return 'assets/images/dishes/almuerzo_pollo_lentejas.jpg';
}

// -------------------------------------------------------------
// Visualizador Interactivo de Plato (Modal Lightbox)
// -------------------------------------------------------------
function initDishModal() {
  const backdrop = document.getElementById('dishModalBackdrop');
  const closeBtn = document.getElementById('closeDishModalBtn');

  if (closeBtn && backdrop) {
    closeBtn.addEventListener('click', closeDishModal);
  }

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeDishModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop && backdrop.classList.contains('active')) {
      closeDishModal();
    }
  });
}

function closeDishModal() {
  const backdrop = document.getElementById('dishModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('active');
  }
}

window.openDishModal = function(menuId, modality) {
  const backdrop = document.getElementById('dishModalBackdrop');
  const badge = document.getElementById('dishModalBadge');
  const title = document.getElementById('dishModalTitle');
  const body = document.getElementById('dishModalBody');

  if (!backdrop || !body) return;

  const list = PAE_DATA[modality] || [];
  const item = list.find(m => m.id === menuId);
  if (!item) return;

  const isAlmuerzo = (modality === 'almuerzo');
  const modalityLabel = isAlmuerzo ? 'Almuerzo (Jornada Única)' : (modality === 'am' ? 'Jornada Mañana (Desayuno)' : 'Jornada Tarde (Refrigerio)');
  const dishImg = getDishImage(item, modality);

  if (badge) badge.textContent = `PAE Cali 2026 · ${modalityLabel}`;
  if (title) title.textContent = item.titulo;

  body.innerHTML = `
    <div class="dish-modal-grid">
      <div class="dish-modal-photo-box">
        <img src="${dishImg}" alt="${item.titulo}" class="dish-modal-photo">
      </div>
      <div class="dish-modal-meta">
        <div style="background: var(--primary-green-light); border-radius: var(--radius-md); padding: 12px 16px; border-left: 4px solid var(--primary-green);">
          <span style="font-size: 0.76rem; font-weight: 800; text-transform: uppercase; color: var(--primary-green-dark); letter-spacing: 0.04em;">Presentación del Plato Servido</span>
          <p style="font-size: 0.84rem; color: var(--text-dark); margin: 3px 0 0; font-weight: 600;">Semana ${item.semana} · Programación escolar del día ${item.dia}</p>
        </div>

        <div class="dish-component-legend">
          <div class="legend-row">
            <span class="legend-icon">🥤</span>
            <div class="legend-info">
              <strong>Bebida</strong>
              <span>${item.bebida}</span>
            </div>
          </div>

          <div class="legend-row">
            <span class="legend-icon">🍗</span>
            <div class="legend-info">
              <strong>Aporte Proteico</strong>
              <span>${item.proteina}</span>
            </div>
          </div>

          ${isAlmuerzo && item.leguminosa ? `
            <div class="legend-row">
              <span class="legend-icon">🫘</span>
              <div class="legend-info">
                <strong>Leguminosa</strong>
                <span>${item.leguminosa}</span>
              </div>
            </div>
          ` : ''}

          <div class="legend-row">
            <span class="legend-icon">🌾</span>
            <div class="legend-info">
              <strong>Cereal / Carbohidrato</strong>
              <span>${item.cereal}</span>
            </div>
          </div>

          ${isAlmuerzo && item.tuberculo ? `
            <div class="legend-row">
              <span class="legend-icon">🥔</span>
              <div class="legend-info">
                <strong>Tubérculo / Acompañante</strong>
                <span>${item.tuberculo}</span>
              </div>
            </div>
          ` : ''}

          ${isAlmuerzo && item.ensalada ? `
            <div class="legend-row">
              <span class="legend-icon">🥗</span>
              <div class="legend-info">
                <strong>Ensalada / Verdura</strong>
                <span>${item.ensalada}</span>
              </div>
            </div>
          ` : ''}

          ${!isAlmuerzo && item.fruta ? `
            <div class="legend-row">
              <span class="legend-icon">🍎</span>
              <div class="legend-info">
                <strong>Fruta Fresca</strong>
                <span>${item.fruta}</span>
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('active');
};

// -------------------------------------------------------------
// Reloj & Monitoreo del Horario Escolar en Tiempo Real
// -------------------------------------------------------------
function initScheduleWatcher() {
  const clockElement = document.getElementById('liveClockDisplay');
  const statusBadge = document.getElementById('currentServiceBadge');
  const statusDescription = document.getElementById('currentServiceDescription');

  function updateClockAndStatus() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeFormatted = now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    if (clockElement) {
      clockElement.textContent = timeFormatted;
    }

    const day = now.getDay();
    const currentMins = hours * 60 + minutes;

    let serviceName = 'Cerrado por Jornada Escolar';
    let serviceDesc = 'La cafetería abrirá en su próximo horario habitual (7:00 A.M.).';

    if (day >= 1 && day <= 5) {
      // Jornada de la Mañana: 7:00 AM a 11:00 AM
      if (currentMins >= 7 * 60 && currentMins <= 11 * 60) {
        serviceName = 'Abierto: Jornada de la Mañana';
        serviceDesc = 'Servicio activo de atención escolar de 7:00 A.M. a 11:00 A.M.';
      } 
      // Jornada de la Tarde: 1:20 PM a 3:00 PM
      else if (currentMins >= 13 * 60 + 20 && currentMins <= 15 * 60) {
        serviceName = 'Abierto: Jornada de la Tarde';
        serviceDesc = 'Servicio activo de atención escolar de 1:20 P.M. a 3:00 P.M.';
      } 
      // Antes de las 7:00 AM
      else if (currentMins < 7 * 60) {
        serviceName = 'Próximo Servicio: Jornada de la Mañana';
        serviceDesc = 'Iniciamos atención a las 7:00 A.M.';
      } 
      // Entre las 11:00 AM y la 1:20 PM
      else if (currentMins > 11 * 60 && currentMins < 13 * 60 + 20) {
        serviceName = 'Pausa Intermedia / En Preparación';
        serviceDesc = 'Acondicionando el comedor para la Jornada de la Tarde (apertura 1:20 P.M.).';
      } 
      // Después de las 3:00 PM
      else if (currentMins > 15 * 60) {
        serviceName = 'Servicio Finalizado por Hoy';
        serviceDesc = 'Atención regular mañana a partir de las 7:00 A.M.';
      }
    } else {
      serviceName = 'Cerrado (Fin de Semana)';
      serviceDesc = 'Atención regular de lunes a viernes en el plantel educativo.';
    }

    if (statusBadge) statusBadge.textContent = serviceName;
    if (statusDescription) statusDescription.textContent = serviceDesc;
  }

  updateClockAndStatus();
  setInterval(updateClockAndStatus, 1000);
}

// -------------------------------------------------------------
// Formulario de Contacto & Comentarios
// -------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contactForm');
  const ratingButtons = document.querySelectorAll('.star-rate-btn');
  let selectedRating = 5;

  ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedRating = parseInt(btn.getAttribute('data-value'), 10);
      ratingButtons.forEach(b => {
        const val = parseInt(b.getAttribute('data-value'), 10);
        if (val <= selectedRating) {
          b.classList.add('selected');
        } else {
          b.classList.remove('selected');
        }
      });
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showToast('Por favor completa todos los campos requeridos.', 'info');
        return;
      }

      showToast('¡Gracias por tus comentarios! Tu mensaje ha sido recibido por el equipo de Smart Menú y el Comité PAE CBO.', 'success');
      form.reset();

      ratingButtons.forEach(b => b.classList.add('selected'));
      selectedRating = 5;
    });
  }
}

// -------------------------------------------------------------
// Notificaciones Toast
// -------------------------------------------------------------
function showToast(message, type = 'info') {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.className = `toast-notice ${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✅' : 'ℹ️'}</span>
    <div>${message}</div>
  `;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
